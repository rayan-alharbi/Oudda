import { translations } from './data/translations.js';
import { unitData, currencyData } from './data/units.js';
import { toolTemplates } from './data/templates.js';
import { dateConverter } from './modules/date.js';
import { ageCalculator } from './modules/age.js';
import { unitConverter } from './modules/units.js';
import { timeCalculator } from './modules/time.js';
import { currencyConverter } from './modules/currency.js';
import { bmiCalculator, loanCalculator, tipCalculator, discountCalculator, salaryCalculator, gpaCalculator } from './modules/calculators.js';
import { randomGenerator, passwordGenerator, hashGenerator, colorConverter } from './modules/utilities.js';
import { CountdownTimer, Stopwatch } from './modules/timers.js';

let currentLang = 'en';
let activeTab = 'date-converter';
let gpaCourses = [];
let countdownTimer = null;
let stopwatch = null;

const tabConfig = [
    { id: 'date-converter', label: 'tabDate', template: 'date-converter' },
    { id: 'age-calculator', label: 'tabAge', template: 'age-calculator' },
    { id: 'time-calculator', label: 'tabTime', template: 'time-calculator' },
    { id: 'unit-converter', label: 'tabUnits', template: 'unit-converter' },
    { id: 'currency-converter', label: 'tabCurrency', template: 'currency-converter' },
    { id: 'bmi-calculator', label: 'tabBMI', template: 'bmi-calculator' },
    { id: 'loan-calculator', label: 'tabLoan', template: 'loan-calculator' },
    { id: 'tip-calculator', label: 'tabTip', template: 'tip-calculator' },
    { id: 'discount-calculator', label: 'tabDiscount', template: 'discount-calculator' },
    { id: 'salary-calculator', label: 'tabSalary', template: 'salary-calculator' },
    { id: 'gpa-calculator', label: 'tabGPA', template: 'gpa-calculator' },
    { id: 'compound-interest', label: 'tabCompound', template: 'compound-interest' },
    { id: 'word-counter', label: 'tabWordCount', template: 'word-counter' },
    { id: 'text-converter', label: 'tabTextConvert', template: 'text-converter' },
    { id: 'percentage-calculator', label: 'tabPercentCalc', template: 'percentage-calculator' },
    { id: 'number-base-converter', label: 'tabNumberBase', template: 'number-base-converter' },
    { id: 'speed-distance-time', label: 'tabSpeedCalc', template: 'speed-distance-time' },
    { id: 'prime-checker', label: 'tabPrimeCheck', template: 'prime-checker' },
    { id: 'roman-numeral', label: 'tabRomanNum', template: 'roman-numeral' },
    { id: 'calorie-calculator', label: 'tabCalorieCalc', template: 'calorie-calculator' },
    { id: 'random-generator', label: 'tabRandom', template: 'random-generator' },
    { id: 'password-generator', label: 'tabPassword', template: 'password-generator' },
    { id: 'hash-generator', label: 'tabHash', template: 'hash-generator' },
    { id: 'color-converter', label: 'tabColor', template: 'color-converter' },
    { id: 'countdown-timer', label: 'tabCountdown', template: 'countdown-timer' },
    { id: 'stopwatch', label: 'tabStopwatch', template: 'stopwatch' }
];

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    populateHijriMonths();
    populateUnitCategories();
    populateCurrencyDropdowns();
    populateUnitDropdowns();
    convertUnit();
    convertCurrency();
}

function populateHijriMonths() {
    const hMonthSelect = document.getElementById('hMonth');
    if (!hMonthSelect) return;

    const selectedVal = hMonthSelect.value;
    hMonthSelect.innerHTML = '';
    translations[currentLang].hMonths.forEach((month, index) => {
        const opt = document.createElement('option');
        opt.value = index;
        opt.textContent = `${index + 1} - ${month}`;
        hMonthSelect.appendChild(opt);
    });
    if (selectedVal) hMonthSelect.value = selectedVal;
}

function createTabs() {
    const tabContainer = document.getElementById('tabContainer');
    tabContainer.innerHTML = '';

    tabConfig.forEach(tab => {
        const btn = document.createElement('button');
        btn.className = 'tab-btn' + (tab.id === activeTab ? ' active' : '');
        btn.setAttribute('data-tab', tab.id);
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-selected', tab.id === activeTab ? 'true' : 'false');
        btn.setAttribute('data-i18n', tab.label);
        btn.textContent = translations[currentLang][tab.label];
        tabContainer.appendChild(btn);
    });

    tabContainer.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.getAttribute('data-tab')));
    });
}

function createToolCards() {
    const toolContainer = document.getElementById('toolContainer');
    toolContainer.innerHTML = '';

    tabConfig.forEach(tab => {
        const section = document.createElement('section');
        section.id = tab.id;
        section.className = 'tool-card' + (tab.id === activeTab ? ' active' : '');
        section.setAttribute('role', 'tabpanel');
        section.innerHTML = toolTemplates[tab.template];
        toolContainer.appendChild(section);
    });

    setLanguage(currentLang);
}

function switchTab(tabId) {
    activeTab = tabId;
    document.querySelectorAll('.tool-card').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => {
        el.classList.remove('active');
        el.setAttribute('aria-selected', 'false');
    });

    document.getElementById(tabId).classList.add('active');
    const btn = document.querySelector(`button[data-tab="${tabId}"]`);
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
}

function initializeDateConverter() {
    const dateConvType = document.getElementById('dateConvType');
    const gregWrap = document.getElementById('gregorianInputWrapper');
    const hijWrap = document.getElementById('hijriInputWrapper');

    dateConvType.addEventListener('change', (e) => {
        if (e.target.value === 'g2h') {
            gregWrap.style.display = 'block';
            hijWrap.style.display = 'none';
        } else {
            gregWrap.style.display = 'none';
            hijWrap.style.display = 'block';
        }
        document.getElementById('dateResultBox').style.display = 'none';
    });

    document.getElementById('btnConvertDate').addEventListener('click', () => {
        const mode = dateConvType.value;
        const resBox = document.getElementById('dateResultBox');
        const resVal = document.getElementById('dateResultValue');
        const resLbl = document.getElementById('dateResultLabel');

        if (mode === 'g2h') {
            const input = document.getElementById('gregorianDateInput').value;
            if (!input) return;
            const d = new Date(input);
            resVal.textContent = dateConverter.g2h(d, currentLang);
            resLbl.textContent = currentLang === 'en' ? "Hijri Date" : "التاريخ الهجري";
        } else {
            const d = parseInt(document.getElementById('hDay').value);
            const m = parseInt(document.getElementById('hMonth').value);
            const y = parseInt(document.getElementById('hYear').value);
            if (!d || !y) return;
            
            const gDate = dateConverter.h2g(d, m, y);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            resVal.textContent = gDate.toLocaleDateString(currentLang, options);
            resLbl.textContent = currentLang === 'en' ? "Gregorian Date" : "التاريخ الميلادي";
        }
        resBox.style.display = 'block';
    });
}

function initializeAgeCalculator() {
    document.getElementById('ageEnd').valueAsDate = new Date();

    document.getElementById('btnCalcAge').addEventListener('click', () => {
        const startStr = document.getElementById('ageStart').value;
        const endStr = document.getElementById('ageEnd').value;

        if (!startStr || !endStr) return;

        const start = new Date(startStr);
        const end = new Date(endStr);

        try {
            const result = ageCalculator.calculateAge(start, end, dateConverter.toHijriParts);
            const t = translations[currentLang];
            const resBox = document.getElementById('ageResultBox');

            document.getElementById('ageResultValue').textContent = 
                `${result.gregorian.years} ${t.resYears}, ${result.gregorian.months} ${t.resMonths}, ${result.gregorian.days} ${t.resDays}`;
            
            document.getElementById('ageHijriValue').textContent = 
                `${result.hijri.years} ${t.resYears}, ${result.hijri.months} ${t.resMonths}, ${result.hijri.days} ${t.resDays}`;

            document.getElementById('ageResultSummary').textContent = 
                (currentLang === 'en' ? `Total Days: ${result.totalDays}` : `مجموع الأيام: ${result.totalDays}`);

            resBox.style.display = 'block';
        } catch (error) {
            alert(currentLang === 'en' ? error.message : "تاريخ البداية يجب أن يكون قبل تاريخ النهاية");
        }
    });
}

function initializeTimeCalculator() {
    document.getElementById('btnAddTime').addEventListener('click', () => {
        const startTime = document.getElementById('startTime').value;
        const duration = parseInt(document.getElementById('durationMinutes').value);
        if (!startTime) return;
        
        const result = timeCalculator.addTime(startTime, duration);
        document.getElementById('timeResultValue').textContent = result.formatted;
        document.getElementById('timeResultBox').style.display = 'block';
    });

    document.getElementById('btnSubtractTime').addEventListener('click', () => {
        const endTime = document.getElementById('endTime').value;
        const duration = parseInt(document.getElementById('durationMinutes').value);
        if (!endTime) return;
        
        const result = timeCalculator.subtractTime(endTime, duration);
        document.getElementById('timeResultValue').textContent = result.formatted;
        document.getElementById('timeResultBox').style.display = 'block';
    });

    document.getElementById('btnCalcTimeDiff').addEventListener('click', () => {
        const startTime = document.getElementById('startTime').value;
        const endTime = document.getElementById('endTime').value;
        if (!startTime || !endTime) return;
        
        const result = timeCalculator.calculateDifference(startTime, endTime);
        document.getElementById('timeResultValue').textContent = result.formatted;
        document.getElementById('timeResultBox').style.display = 'block';
    });
}

function populateUnitCategories() {
    const catSelect = document.getElementById('unitCategory');
    if (!catSelect) return;
    
    catSelect.innerHTML = '';
    Object.keys(unitData).forEach(key => {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = translations[currentLang]['cat' + key.charAt(0).toUpperCase() + key.slice(1)];
        catSelect.appendChild(opt);
    });
}

function populateUnitDropdowns() {
    const cat = document.getElementById('unitCategory').value;
    const fromSel = document.getElementById('unitFrom');
    const toSel = document.getElementById('unitTo');
    
    if (!fromSel || !toSel) return;

    const oldFrom = fromSel.value;
    const oldTo = toSel.value;

    fromSel.innerHTML = '';
    toSel.innerHTML = '';

    const data = unitData[cat].units;
    Object.keys(data).forEach(key => {
        const name = data[key][currentLang];
        
        const opt1 = document.createElement('option');
        opt1.value = key;
        opt1.textContent = name + ` (${key})`;
        fromSel.appendChild(opt1);

        const opt2 = document.createElement('option');
        opt2.value = key;
        opt2.textContent = name + ` (${key})`;
        toSel.appendChild(opt2);
    });

    if (data[oldFrom]) fromSel.value = oldFrom;
    if (data[oldTo]) toSel.value = oldTo;
}

function convertUnit() {
    const cat = document.getElementById('unitCategory').value;
    const val = parseFloat(document.getElementById('unitInput').value);
    const from = document.getElementById('unitFrom').value;
    const to = document.getElementById('unitTo').value;
    const display = document.getElementById('unitOutputDisplay');

    if (!display || isNaN(val)) {
        if (display) display.textContent = "---";
        return;
    }

    const result = unitConverter.convert(cat, val, from, to, unitData);
    display.textContent = result;
}

function initializeUnitConverter() {
    document.getElementById('unitCategory').addEventListener('change', () => {
        populateUnitDropdowns();
        convertUnit();
    });
    document.getElementById('unitInput').addEventListener('input', convertUnit);
    document.getElementById('unitFrom').addEventListener('change', convertUnit);
    document.getElementById('unitTo').addEventListener('change', convertUnit);
}

function populateCurrencyDropdowns() {
    const fromSel = document.getElementById('currencyFrom');
    const toSel = document.getElementById('currencyTo');
    
    if (!fromSel || !toSel) return;

    fromSel.innerHTML = '';
    toSel.innerHTML = '';

    Object.keys(currencyData).forEach(key => {
        const currency = currencyData[key];
        
        const opt1 = document.createElement('option');
        opt1.value = key;
        opt1.textContent = `${key} - ${currency.name}`;
        fromSel.appendChild(opt1);

        const opt2 = document.createElement('option');
        opt2.value = key;
        opt2.textContent = `${key} - ${currency.name}`;
        toSel.appendChild(opt2);
    });

    if (currencyData['USD']) fromSel.value = 'USD';
    if (currencyData['EUR']) toSel.value = 'EUR';
}

function convertCurrency() {
    const amount = parseFloat(document.getElementById('currencyAmount').value);
    const from = document.getElementById('currencyFrom').value;
    const to = document.getElementById('currencyTo').value;
    const display = document.getElementById('currencyResultBox');
    const resultDisplay = document.getElementById('currencyResultValue');

    if (!display || isNaN(amount)) {
        if (display) display.style.display = 'none';
        return;
    }

    const result = currencyConverter.convert(amount, from, to, currencyData);
    const rate = currencyConverter.getExchangeRate(from, to, currencyData);

    document.getElementById('exchangeRateDisplay').textContent = rate;
    resultDisplay.textContent = result.formatted;
    display.style.display = 'block';
}

function initializeCurrencyConverter() {
    document.getElementById('currencyAmount').addEventListener('input', convertCurrency);
    document.getElementById('currencyFrom').addEventListener('change', convertCurrency);
    document.getElementById('currencyTo').addEventListener('change', convertCurrency);
}

function initializeCalculators() {
    document.getElementById('btnCalculateBMI').addEventListener('click', () => {
        const weight = parseFloat(document.getElementById('bmiWeight').value);
        const height = parseFloat(document.getElementById('bmiHeight').value);
        
        if (!weight || !height) return;

        const result = bmiCalculator.calculate(weight, height);
        const categoryKeys = {
            underweight: 'bmiUnderweight',
            normal: 'bmiNormal',
            overweight: 'bmiOverweight',
            obese: 'bmiObese'
        };

        document.getElementById('bmiResultValue').textContent = result.bmi;
        document.getElementById('bmiCategoryLabel').textContent = translations[currentLang][categoryKeys[result.category]];
        document.getElementById('bmiResultBox').style.display = 'block';
    });

    document.getElementById('btnCalculateLoan').addEventListener('click', () => {
        const principal = parseFloat(document.getElementById('loanAmount').value);
        const rate = parseFloat(document.getElementById('loanRate').value);
        const years = parseFloat(document.getElementById('loanTerm').value);
        
        if (!principal || !rate || !years) return;

        const result = loanCalculator.calculate(principal, rate, years);

        document.getElementById('loanMonthlyValue').textContent = `$${result.monthlyPayment}`;
        document.getElementById('loanInterestValue').textContent = `$${result.totalInterest}`;
        document.getElementById('loanTotalValue').textContent = `$${result.totalPayment}`;
        document.getElementById('loanResultBox').style.display = 'block';
    });

    document.getElementById('btnCalculateTip').addEventListener('click', () => {
        const bill = parseFloat(document.getElementById('tipBillAmount').value);
        const tipPercent = parseFloat(document.getElementById('tipPercent').value);
        const split = parseInt(document.getElementById('tipSplit').value) || 1;
        
        if (!bill) return;

        const result = tipCalculator.calculate(bill, tipPercent, split);

        document.getElementById('tipAmountValue').textContent = `$${result.tipAmount}`;
        document.getElementById('tipTotalValue').textContent = `$${result.totalAmount}`;
        document.getElementById('tipPerPersonValue').textContent = `$${result.perPerson}`;
        document.getElementById('tipResultBox').style.display = 'block';
    });

    document.getElementById('btnCalculateDiscount').addEventListener('click', () => {
        const price = parseFloat(document.getElementById('discountOriginal').value);
        const discount = parseFloat(document.getElementById('discountPercent').value);
        
        if (!price) return;

        const result = discountCalculator.calculate(price, discount);

        document.getElementById('discountSavedValue').textContent = `$${result.saved}`;
        document.getElementById('discountFinalValue').textContent = `$${result.finalPrice}`;
        document.getElementById('discountResultBox').style.display = 'block';
    });

    document.getElementById('btnCalculateSalary').addEventListener('click', () => {
        const annual = parseFloat(document.getElementById('salaryAnnual').value);
        const hours = parseFloat(document.getElementById('salaryHours').value) || 40;
        
        if (!annual) return;

        const result = salaryCalculator.calculate(annual, hours);

        document.getElementById('salaryHourlyValue').textContent = `$${result.hourly}/hr`;
        document.getElementById('salaryDailyValue').textContent = `$${result.daily}/day`;
        document.getElementById('salaryWeeklyValue').textContent = `$${result.weekly}`;
        document.getElementById('salaryBiWeeklyValue').textContent = `$${result.biWeekly}`;
        document.getElementById('salaryMonthlyValue').textContent = `$${result.monthly}`;
        document.getElementById('salaryResultBox').style.display = 'block';
    });
}

function initializeGPACalculator() {
    document.getElementById('btnAddCourse').addEventListener('click', () => {
        const name = document.getElementById('gpaCourseName').value;
        const credits = parseFloat(document.getElementById('gpaCredits').value);
        const grade = document.getElementById('gpaGrade').value;

        if (!name || !credits) return;

        gpaCourses.push({ name, credits, grade });
        renderGPACourses();
        
        document.getElementById('gpaCourseName').value = '';
        document.getElementById('gpaCredits').value = '';
    });

    document.getElementById('btnCalculateGPA').addEventListener('click', () => {
        if (gpaCourses.length === 0) return;

        const result = gpaCalculator.calculate(gpaCourses);

        document.getElementById('gpaResultValue').textContent = result.gpa;
        document.getElementById('gpaCreditsValue').textContent = result.totalCredits;
        document.getElementById('gpaResultBox').style.display = 'block';
    });
}

function renderGPACourses() {
    const list = document.getElementById('gpaCourseList');
    list.innerHTML = '';

    gpaCourses.forEach((course, index) => {
        const div = document.createElement('div');
        div.className = 'result-box';
        div.style.padding = '0.75rem';
        div.style.marginTop = '0.5rem';
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.style.alignItems = 'center';
        div.innerHTML = `
            <span>${course.name}</span>
            <span>${course.credits} credits - ${course.grade}</span>
            <button class="btn-action btn-secondary" style="width: auto; padding: 0.5rem 1rem; margin-top: 0;" onclick="removeGPACourse(${index})">Remove</button>
        `;
        list.appendChild(div);
    });
}

window.removeGPACourse = (index) => {
    gpaCourses.splice(index, 1);
    renderGPACourses();
};

function copyResult(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const text = element.textContent;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(currentLang === 'en' ? 'Copied!' : 'تم النسخ!');
        }).catch(() => {
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showToast(currentLang === 'en' ? 'Copied!' : 'تم النسخ!');
        }
    } catch (err) {
        showToast(currentLang === 'en' ? 'Failed to copy!' : 'فشل النسخ!');
    }

    document.body.removeChild(textArea);
}

function showToast(message) {
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--primary);
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        box-shadow: var(--shadow);
        z-index: 1000;
        animation: fadeInUp 0.3s ease-out;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'fadeOutDown 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

window.copyResult = copyResult;

function initializeUtilities() {
    document.getElementById('btnGenerateRandom').addEventListener('click', () => {
        const min = parseInt(document.getElementById('randomMin').value);
        const max = parseInt(document.getElementById('randomMax').value);
        const count = parseInt(document.getElementById('randomCount').value);

        if (isNaN(min) || isNaN(max) || isNaN(count)) return;

        const result = randomGenerator.generate(min, max, count);
        document.getElementById('randomResultValue').textContent = result.join(', ');
        document.getElementById('randomResultBox').style.display = 'block';
    });

    document.getElementById('btnGeneratePassword').addEventListener('click', () => {
        const length = parseInt(document.getElementById('passwordLength').value);
        const options = {
            uppercase: document.getElementById('passwordUppercase').checked,
            lowercase: document.getElementById('passwordLowercase').checked,
            numbers: document.getElementById('passwordNumbers').checked,
            symbols: document.getElementById('passwordSymbols').checked
        };

        const password = passwordGenerator.generate(length, options);
        document.getElementById('passwordResultValue').textContent = password;
        document.getElementById('passwordResultBox').style.display = 'block';
    });

    document.getElementById('btnCopyPassword').addEventListener('click', () => {
        const password = document.getElementById('passwordResultValue').textContent;

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(password).then(() => {
                alert(currentLang === 'en' ? 'Password copied!' : 'تم نسخ كلمة المرور!');
            }).catch(() => {
                fallbackCopyToClipboard(password);
            });
        } else {
            fallbackCopyToClipboard(password);
        }
    });

    document.getElementById('btnGenerateHash').addEventListener('click', async () => {
        const text = document.getElementById('hashInput').value;
        if (!text) return;

        const md5 = await hashGenerator.md5(text);
        const sha1 = await hashGenerator.sha1(text);
        const sha256 = await hashGenerator.sha256(text);

        document.getElementById('hashMD5Value').textContent = md5;
        document.getElementById('hashSHA1Value').textContent = sha1;
        document.getElementById('hashSHA256Value').textContent = sha256;
        document.getElementById('hashResultBox').style.display = 'block';
    });

    const colorInput = document.getElementById('colorInput');
    colorInput.addEventListener('input', () => {
        const hex = colorInput.value;
        const rgb = colorConverter.hexToRgb(hex);
        
        if (rgb) {
            const hsl = colorConverter.rgbToHsl(rgb.r, rgb.g, rgb.b);
            
            document.getElementById('colorHexValue').textContent = hex;
            document.getElementById('colorRGBValue').textContent = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
            document.getElementById('colorHSLValue').textContent = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
        }
    });

    colorInput.dispatchEvent(new Event('input'));
}

function initializeTimers() {
    countdownTimer = new CountdownTimer(
        (time) => {
            document.getElementById('countdownText').textContent =
                `${String(time.days).padStart(2, '0')}:${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`;
            document.getElementById('countdownDisplay').style.display = 'block';
        },
        () => {
            alert(currentLang === 'en' ? 'Countdown finished!' : 'انتهى العد التنازلي!');
        }
    );

    document.getElementById('btnStartCountdown').addEventListener('click', () => {
        const days = parseInt(document.getElementById('countdownDays').value) || 0;
        const hours = parseInt(document.getElementById('countdownHours').value) || 0;
        const minutes = parseInt(document.getElementById('countdownMinutes').value) || 0;
        const seconds = parseInt(document.getElementById('countdownSeconds').value) || 0;

        countdownTimer.start(days, hours, minutes, seconds);
    });

    document.getElementById('btnStopCountdown').addEventListener('click', () => countdownTimer.stop());
    document.getElementById('btnResetCountdown').addEventListener('click', () => {
        countdownTimer.reset();
        document.getElementById('countdownDisplay').style.display = 'none';
    });

    stopwatch = new Stopwatch((time) => {
        document.getElementById('stopwatchText').textContent = time.formatted;
    });

    document.getElementById('btnStartStopwatch').addEventListener('click', () => stopwatch.start());
    document.getElementById('btnStopStopwatch').addEventListener('click', () => stopwatch.stop());
    document.getElementById('btnResetStopwatch').addEventListener('click', () => {
        stopwatch.reset();
        document.getElementById('lapTimes').innerHTML = '';
    });
    document.getElementById('btnLapStopwatch').addEventListener('click', () => {
        const laps = stopwatch.lap();
        const lapTimes = document.getElementById('lapTimes');

        const lapDiv = document.createElement('div');
        lapDiv.className = 'result-box';
        lapDiv.style.padding = '0.5rem';
        lapDiv.style.marginTop = '0.5rem';
        lapDiv.textContent = `Lap ${laps.length}: ${stopwatch.formatTime(laps[laps.length - 1]).formatted}`;
        lapTimes.appendChild(lapDiv);
    });
}

function initializeCompoundInterest() {
    document.getElementById('btnCalculateCompound').addEventListener('click', () => {
        const principal = parseFloat(document.getElementById('compoundPrincipal').value);
        const rate = parseFloat(document.getElementById('compoundRate').value) / 100;
        const time = parseFloat(document.getElementById('compoundTime').value);
        const frequency = parseInt(document.getElementById('compoundFrequency').value);

        if (!principal || !rate || !time) return;

        const amount = principal * Math.pow((1 + rate / frequency), frequency * time);
        const interest = amount - principal;

        document.getElementById('compoundFutureValue').textContent = amount.toFixed(2);
        document.getElementById('compoundInterest').textContent = interest.toFixed(2);
        document.getElementById('compoundResultBox').style.display = 'block';
    });
}

function initializeWordCounter() {
    const input = document.getElementById('wordCountInput');

    const updateCounts = () => {
        const text = input.value;

        const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
        const chars = text.length;
        const charsNoSpaces = text.replace(/\s/g, '').length;
        const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
        const paragraphs = text.split(/\n\n+/).filter(p => p.trim().length > 0).length;

        document.getElementById('wordCountWords').textContent = words;
        document.getElementById('wordCountChars').textContent = chars;
        document.getElementById('wordCountCharsNoSpaces').textContent = charsNoSpaces;
        document.getElementById('wordCountSentences').textContent = sentences;
        document.getElementById('wordCountParagraphs').textContent = paragraphs;
    };

    input.addEventListener('input', updateCounts);
}

function initializeTextConverter() {
    const input = document.getElementById('textConverterInput');
    const output = document.getElementById('textConverterOutput');

    document.getElementById('btnToUpperCase').addEventListener('click', () => {
        output.value = input.value.toUpperCase();
    });

    document.getElementById('btnToLowerCase').addEventListener('click', () => {
        output.value = input.value.toLowerCase();
    });

    document.getElementById('btnToTitleCase').addEventListener('click', () => {
        output.value = input.value.replace(/\w\S*/g, txt =>
            txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        );
    });

    document.getElementById('btnToSentenceCase').addEventListener('click', () => {
        output.value = input.value.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
    });

    document.getElementById('btnRemoveSpaces').addEventListener('click', () => {
        output.value = input.value.replace(/\s+/g, ' ').trim();
    });

    document.getElementById('btnRemoveLineBreaks').addEventListener('click', () => {
        output.value = input.value.replace(/\n/g, ' ').trim();
    });
}

    function initializePercentageCalculator() {
        document.getElementById('btnCalculatePercent').addEventListener('click', () => {
            const x = parseFloat(document.getElementById('percent1').value);
            const y = parseFloat(document.getElementById('percent2').value);

            if (isNaN(x) || isNaN(y)) return;

            const result = (x / 100) * y;
            document.getElementById('percentResult1').textContent = result.toFixed(2);
        });

        document.getElementById('btnCalculateWhatPercent').addEventListener('click', () => {
            const x = parseFloat(document.getElementById('whatPercent1').value);
            const y = parseFloat(document.getElementById('whatPercent2').value);

            if (isNaN(x) || isNaN(y) || y === 0) return;

            const result = (x / y) * 100;
            document.getElementById('percentResult2').textContent = result.toFixed(2) + '%';
        });

        document.getElementById('btnCalculateIncrease').addEventListener('click', () => {
            const value = parseFloat(document.getElementById('increaseValue').value);
            const percent = parseFloat(document.getElementById('increasePercent').value);

            if (isNaN(value) || isNaN(percent)) return;

            const result = value + (value * percent / 100);
            document.getElementById('percentResult3').textContent = result.toFixed(2);
        });

        document.getElementById('btnCalculateDecrease').addEventListener('click', () => {
            const value = parseFloat(document.getElementById('decreaseValue').value);
            const percent = parseFloat(document.getElementById('decreasePercent').value);

            if (isNaN(value) || isNaN(percent)) return;

            const result = value - (value * percent / 100);
            document.getElementById('percentResult4').textContent = result.toFixed(2);
        });
    }

    function initializeNumberBaseConverter() {
        document.getElementById('btnConvertBase').addEventListener('click', () => {
            const input = document.getElementById('baseInput').value.trim();
            const inputBase = parseInt(document.getElementById('inputBase').value);
            const outputBase = parseInt(document.getElementById('outputBase').value);

            if (!input) return;

            try {
                const decimal = parseInt(input, inputBase);
                if (isNaN(decimal)) throw new Error('Invalid input');

                const converted = decimal.toString(outputBase).toUpperCase();
                document.getElementById('baseResult').textContent = converted;
                document.getElementById('baseResultBox').style.display = 'block';
            } catch (e) {
                alert(currentLang === 'en' ? 'Invalid input for the selected base!' : 'إدخال غير صحيح للنظام المختار!');
            }
        });
    }

    function initializeSpeedDistanceTime() {
        document.getElementById('btnCalculateSpeed').addEventListener('click', () => {
            const distance = parseFloat(document.getElementById('distanceValue').value);
            const time = parseFloat(document.getElementById('timeValue').value);

            if (isNaN(distance) || isNaN(time) || time === 0) return;

            const speed = distance / time;
            document.getElementById('speedResult').textContent = speed.toFixed(2) + ' km/h';
            document.getElementById('speedResultBox').style.display = 'block';
        });

        document.getElementById('btnCalculateDistance').addEventListener('click', () => {
            const speed = parseFloat(document.getElementById('speedValue').value);
            const time = parseFloat(document.getElementById('timeValue').value);

            if (isNaN(speed) || isNaN(time)) return;

            const distance = speed * time;
            document.getElementById('speedResult').textContent = distance.toFixed(2) + ' km';
            document.getElementById('speedResultBox').style.display = 'block';
        });

        document.getElementById('btnCalculateTime').addEventListener('click', () => {
            const speed = parseFloat(document.getElementById('speedValue').value);
            const distance = parseFloat(document.getElementById('distanceValue').value);

            if (isNaN(speed) || isNaN(distance) || speed === 0) return;

            const time = distance / speed;
            document.getElementById('speedResult').textContent = time.toFixed(2) + ' hours';
            document.getElementById('speedResultBox').style.display = 'block';
        });
    }

    function initializePrimeChecker() {
        const isPrime = (num) => {
            if (num < 2) return false;
            if (num === 2) return true;
            if (num % 2 === 0) return false;
            for (let i = 3; i <= Math.sqrt(num); i += 2) {
                if (num % i === 0) return false;
            }
            return true;
        };

        const getFactors = (num) => {
            const factors = [];
            for (let i = 1; i <= num; i++) {
                if (num % i === 0) factors.push(i);
            }
            return factors;
        };

        const getNextPrime = (num) => {
            let next = num + 1;
            while (!isPrime(next)) next++;
            return next;
        };

        const getPrevPrime = (num) => {
            let prev = num - 1;
            while (prev > 1 && !isPrime(prev)) prev--;
            return prev > 1 ? prev : null;
        };

        document.getElementById('btnCheckPrime').addEventListener('click', () => {
            const num = parseInt(document.getElementById('primeInput').value);

            if (isNaN(num) || num < 1) return;

            const prime = isPrime(num);
            const factors = getFactors(num);
            const nextPrime = getNextPrime(num);
            const prevPrime = getPrevPrime(num);

            document.getElementById('primeIsPrime').textContent =
                `${num} ${currentLang === 'en' ? (prime ? translations.en.resIsPrime : translations.en.resNotPrime) : (prime ? translations.ar.resIsPrime : translations.ar.resNotPrime)}`;

            document.getElementById('primeFactors').textContent = factors.join(', ');
            document.getElementById('primeNext').textContent = nextPrime;
            document.getElementById('primePrev').textContent = prevPrime || '---';

            document.getElementById('primeResultBox').style.display = 'block';
        });
    }

    function initializeRomanNumeral() {
        const toRoman = (num) => {
            const lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
            let roman = '';
            for (let i in lookup) {
                while (num >= lookup[i]) {
                    roman += i;
                    num -= lookup[i];
                }
            }
            return roman;
        };

        const fromRoman = (roman) => {
            const lookup = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
            roman = roman.toUpperCase();
            let num = 0;
            for (let i = 0; i < roman.length; i++) {
                if (!lookup[roman[i]]) return null;
                const curr = lookup[roman[i]];
                const next = lookup[roman[i + 1]];
                if (next && curr < next) {
                    num += next - curr;
                    i++;
                } else {
                    num += curr;
                }
            }
            return num;
        };

        document.getElementById('btnConvertToRoman').addEventListener('click', () => {
            const num = parseInt(document.getElementById('decimalInput').value);

            if (isNaN(num) || num < 1 || num > 3999) return;

            document.getElementById('romanResult').textContent = toRoman(num);
            document.getElementById('romanResultBox').style.display = 'block';
        });

        document.getElementById('btnConvertToDecimal').addEventListener('click', () => {
            const roman = document.getElementById('romanInput').value.trim();

            if (!roman) return;

            const num = fromRoman(roman);
            if (num === null) {
                alert(currentLang === 'en' ? 'Invalid Roman numeral!' : 'رقم روماني غير صحيح!');
                return;
            }

            document.getElementById('decimalResult').textContent = num;
            document.getElementById('decimalResultBox').style.display = 'block';
        });
    }

    function initializeCalorieCalculator() {
        document.getElementById('btnCalculateCalories').addEventListener('click', () => {
            const gender = document.getElementById('calorieGender').value;
            const age = parseFloat(document.getElementById('calorieAge').value);
            const weight = parseFloat(document.getElementById('calorieWeight').value);
            const height = parseFloat(document.getElementById('calorieHeight').value);
            const activity = parseFloat(document.getElementById('calorieActivity').value);

            if (!age || !weight || !height) return;

            let bmr;
            if (gender === 'male') {
                bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
            } else {
                bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
            }

            const tdee = bmr * activity;

            document.getElementById('calorieBMR').textContent = Math.round(bmr) + ' kcal';
            document.getElementById('calorieTDEE').textContent = Math.round(tdee) + ' kcal';
            document.getElementById('calorieMaintain').textContent = Math.round(tdee) + ' kcal';
            document.getElementById('calorieLose').textContent = Math.round(tdee - 500) + ' kcal';
            document.getElementById('calorieGain').textContent = Math.round(tdee + 500) + ' kcal';

            document.getElementById('calorieResultBox').style.display = 'block';
        });
    }

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('langToggle').addEventListener('click', () => {
        setLanguage(currentLang === 'en' ? 'ar' : 'en');
    });

    createTabs();
    createToolCards();

    initializeDateConverter();
    initializeAgeCalculator();
    initializeTimeCalculator();
    initializeUnitConverter();
    initializeCurrencyConverter();
    initializeCalculators();
    initializeGPACalculator();
    initializeUtilities();
    initializeTimers();
    initializeCompoundInterest();
    initializeWordCounter();
    initializeTextConverter();
    initializePercentageCalculator();
    initializeNumberBaseConverter();
    initializeSpeedDistanceTime();
    initializePrimeChecker();
    initializeRomanNumeral();
    initializeCalorieCalculator();
});
