export const bmiCalculator = {
    calculate(weight, height) {
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        
        return {
            bmi: parseFloat(bmi.toFixed(1)),
            category: this.getCategory(bmi)
        };
    },

    getCategory(bmi) {
        if (bmi < 18.5) return 'underweight';
        if (bmi < 25) return 'normal';
        if (bmi < 30) return 'overweight';
        return 'obese';
    }
};

export const loanCalculator = {
    calculate(principal, annualRate, years) {
        const monthlyRate = annualRate / 100 / 12;
        const numberOfPayments = years * 12;
        
        const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                               (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        
        const totalPayment = monthlyPayment * numberOfPayments;
        const totalInterest = totalPayment - principal;

        return {
            monthlyPayment: parseFloat(monthlyPayment.toFixed(2)),
            totalPayment: parseFloat(totalPayment.toFixed(2)),
            totalInterest: parseFloat(totalInterest.toFixed(2))
        };
    }
};

export const tipCalculator = {
    calculate(billAmount, tipPercent, splitPeople = 1) {
        const tipAmount = billAmount * (tipPercent / 100);
        const totalAmount = billAmount + tipAmount;
        const perPerson = totalAmount / splitPeople;

        return {
            tipAmount: parseFloat(tipAmount.toFixed(2)),
            totalAmount: parseFloat(totalAmount.toFixed(2)),
            perPerson: parseFloat(perPerson.toFixed(2))
        };
    }
};

export const discountCalculator = {
    calculate(originalPrice, discountPercent) {
        const discountAmount = originalPrice * (discountPercent / 100);
        const finalPrice = originalPrice - discountAmount;

        return {
            saved: parseFloat(discountAmount.toFixed(2)),
            finalPrice: parseFloat(finalPrice.toFixed(2))
        };
    }
};

export const salaryCalculator = {
    calculate(annualSalary, hoursPerWeek = 40) {
        const weeksPerYear = 52;
        const monthly = annualSalary / 12;
        const biWeekly = annualSalary / (weeksPerYear / 2);
        const weekly = annualSalary / weeksPerYear;
        const daily = weekly / 5;
        const hourly = annualSalary / (weeksPerYear * hoursPerWeek);

        return {
            hourly: parseFloat(hourly.toFixed(2)),
            daily: parseFloat(daily.toFixed(2)),
            weekly: parseFloat(weekly.toFixed(2)),
            biWeekly: parseFloat(biWeekly.toFixed(2)),
            monthly: parseFloat(monthly.toFixed(2)),
            annual: parseFloat(annualSalary.toFixed(2))
        };
    }
};

export const gpaCalculator = {
    calculate(courses) {
        let totalPoints = 0;
        let totalCredits = 0;

        courses.forEach(course => {
            const gradePoints = this.getGradePoints(course.grade);
            totalPoints += gradePoints * course.credits;
            totalCredits += course.credits;
        });

        const gpa = totalCredits > 0 ? totalPoints / totalCredits : 0;

        return {
            gpa: parseFloat(gpa.toFixed(2)),
            totalCredits
        };
    },

    getGradePoints(grade) {
        const gradeMap = {
            'A': 4.0, 'A-': 3.7,
            'B+': 3.3, 'B': 3.0, 'B-': 2.7,
            'C+': 2.3, 'C': 2.0, 'C-': 1.7,
            'D+': 1.3, 'D': 1.0,
            'F': 0.0
        };
        return gradeMap[grade.toUpperCase()] || 0;
    }
};
