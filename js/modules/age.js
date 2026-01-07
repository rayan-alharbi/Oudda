export const ageCalculator = {
    calculateAge(start, end, toHijriParts) {
        if (start > end) {
            throw new Error('Start date must be before end date');
        }

        const gregorianAge = this.calculateGregorianAge(start, end);
        const hijriAge = this.calculateHijriAge(start, end, toHijriParts);

        return {
            gregorian: gregorianAge,
            hijri: hijriAge,
            totalDays: Math.round(Math.abs((start - end) / (24 * 60 * 60 * 1000)))
        };
    },

    calculateGregorianAge(start, end) {
        let years = end.getFullYear() - start.getFullYear();
        let months = end.getMonth() - start.getMonth();
        let days = end.getDate() - start.getDate();

        if (days < 0) {
            months--;
            const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
            days += prevMonth.getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        return { years, months, days };
    },

    calculateHijriAge(start, end, toHijriParts) {
        const hStart = toHijriParts(start);
        const hEnd = toHijriParts(end);

        let years = hEnd.y - hStart.y;
        let months = hEnd.m - hStart.m;
        let days = hEnd.d - hStart.d;

        if (days < 0) {
            months--;
            days += 30;
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        return { years, months, days };
    }
};
