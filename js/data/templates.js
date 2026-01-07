export const toolTemplates = {
    'date-converter': `
        <h2 data-i18n="titleDateConv"></h2>
        <div class="form-group">
            <label data-i18n="lblConvType"></label>
            <select id="dateConvType">
                <option value="g2h" data-i18n="optG2H"></option>
                <option value="h2g" data-i18n="optH2G"></option>
            </select>
        </div>
        <div id="gregorianInputWrapper" class="form-group">
            <label data-i18n="lblGregorian"></label>
            <input type="date" id="gregorianDateInput">
        </div>
        <div id="hijriInputWrapper" class="form-group" style="display:none;">
            <label data-i18n="lblHijri"></label>
            <div class="date-inputs">
                <input type="number" id="hDay" placeholder="Day" min="1" max="30">
                <select id="hMonth"></select>
                <input type="number" id="hYear" placeholder="Year" min="1300" max="1500" value="1445">
            </div>
        </div>
        <button class="btn-action" id="btnConvertDate" data-i18n="btnConvert"></button>
        <div class="result-box" id="dateResultBox" style="display:none;">
            <div class="result-value-wrapper">
                <div class="result-value" id="dateResultValue"></div>
                <div class="copy-icon" onclick="copyResult('dateResultValue')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </div>
            </div>
            <div class="result-label" id="dateResultLabel"></div>
        </div>
    `,

    'age-calculator': `
        <h2 data-i18n="titleAgeCalc"></h2>
        <div class="row">
            <div class="form-group">
                <label data-i18n="lblStartDate"></label>
                <input type="date" id="ageStart">
            </div>
            <div class="form-group">
                <label data-i18n="lblEndDate"></label>
                <input type="date" id="ageEnd">
            </div>
        </div>
        <button class="btn-action" id="btnCalcAge" data-i18n="btnCalculate"></button>
        <div class="result-box" id="ageResultBox" style="display:none;">
            <div class="result-label" data-i18n="lblGregAge"></div>
            <div class="result-value-wrapper">
                <div class="result-value" id="ageResultValue"></div>
                <div class="copy-icon" onclick="copyResult('ageResultValue')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </div>
            </div>
            <div class="result-label" id="ageResultSummary" style="margin-bottom: 0.5rem; font-size: 0.8rem;"></div>
            <hr class="result-divider">
            <div class="result-label" data-i18n="lblHijriAge"></div>
            <div class="result-value-wrapper">
                <div class="result-value" id="ageHijriValue"></div>
                <div class="copy-icon" onclick="copyResult('ageHijriValue')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </div>
            </div>
        </div>
    `,

    'time-calculator': `
        <h2 data-i18n="titleTimeCalc"></h2>
        <div class="row">
            <div class="form-group">
                <label data-i18n="lblStartTime"></label>
                <input type="time" id="startTime">
            </div>
            <div class="form-group">
                <label data-i18n="lblEndTime"></label>
                <input type="time" id="endTime">
            </div>
        </div>
        <div class="form-group">
            <label data-i18n="lblDuration"></label>
            <input type="number" id="durationMinutes" value="60" min="1">
        </div>
        <div class="row">
            <button class="btn-action btn-secondary" id="btnAddTime" data-i18n="btnAddTime"></button>
            <button class="btn-action btn-secondary" id="btnSubtractTime" data-i18n="btnSubtractTime"></button>
        </div>
        <button class="btn-action" id="btnCalcTimeDiff" data-i18n="btnCalculate"></button>
        <div class="result-box" id="timeResultBox" style="display:none;">
            <div class="result-label" data-i18n="resTotalTime"></div>
            <div class="result-value-wrapper">
                <div class="result-value" id="timeResultValue"></div>
                <div class="copy-icon" onclick="copyResult('timeResultValue')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </div>
            </div>
        </div>
    `,

    'unit-converter': `
        <h2 data-i18n="titleUnitConv"></h2>
        <div class="form-group">
            <label data-i18n="lblCategory"></label>
            <select id="unitCategory"></select>
        </div>
        <div class="row">
            <div class="form-group">
                <label data-i18n="lblFrom"></label>
                <input type="number" id="unitInput" placeholder="0" step="any">
                <select id="unitFrom" style="margin-top: 0.5rem;"></select>
            </div>
            <div class="form-group">
                <label data-i18n="lblTo"></label>
                <div class="result-value-wrapper" style="padding: 0.75rem; background: #f3f4f6; border-radius: 8px; border: 1px solid var(--border); min-height: 45px; justify-content: space-between;">
                    <span id="unitOutputDisplay">0</span>
                    <div class="copy-icon" onclick="copyResult('unitOutputDisplay')" style="background: transparent; color: var(--text-muted);">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    </div>
                </div>
                <select id="unitTo" style="margin-top: 0.5rem;"></select>
            </div>
        </div>
    `,

    'currency-converter': `
        <h2 data-i18n="titleCurrency"></h2>
        <div class="form-group">
            <label data-i18n="lblAmount"></label>
            <input type="number" id="currencyAmount" placeholder="0" step="any">
        </div>
        <div class="row">
            <div class="form-group">
                <label data-i18n="lblFromCurrency"></label>
                <select id="currencyFrom"></select>
            </div>
            <div class="form-group">
                <label data-i18n="lblToCurrency"></label>
                <select id="currencyTo"></select>
            </div>
        </div>
        <div class="info-box">
            <span data-i18n="lblExchangeRate"></span>: <span id="exchangeRateDisplay">1</span>
        </div>
        <div class="result-box" id="currencyResultBox" style="display:none;">
            <div class="result-value-wrapper">
                <div class="result-value" id="currencyResultValue"></div>
                <div class="copy-icon" onclick="copyResult('currencyResultValue')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </div>
            </div>
        </div>
    `,

    'bmi-calculator': `
        <h2 data-i18n="titleBMI"></h2>
        <div class="row">
            <div class="form-group">
                <label data-i18n="lblWeight"></label>
                <input type="number" id="bmiWeight" placeholder="70" step="0.1">
            </div>
            <div class="form-group">
                <label data-i18n="lblHeight"></label>
                <input type="number" id="bmiHeight" placeholder="175">
            </div>
        </div>
        <button class="btn-action" id="btnCalculateBMI" data-i18n="btnCalculateBMI"></button>
        <div class="result-box" id="bmiResultBox" style="display:none;">
            <div class="result-label" data-i18n="resBMI"></div>
            <div class="result-value-wrapper">
                <div class="result-value" id="bmiResultValue"></div>
                <div class="copy-icon" onclick="copyResult('bmiResultValue')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </div>
            </div>
            <div class="result-label" id="bmiCategoryLabel" style="margin-top: 0.5rem;"></div>
        </div>
    `,

    'loan-calculator': `
        <h2 data-i18n="titleLoan"></h2>
        <div class="row">
            <div class="form-group">
                <label data-i18n="lblLoanAmount"></label>
                <input type="number" id="loanAmount" placeholder="100000" step="1000">
            </div>
            <div class="form-group">
                <label data-i18n="lblInterestRate"></label>
                <input type="number" id="loanRate" placeholder="5" step="0.1">
            </div>
        </div>
        <div class="form-group">
            <label data-i18n="lblLoanTerm"></label>
            <input type="number" id="loanTerm" placeholder="30" min="1">
        </div>
        <button class="btn-action" id="btnCalculateLoan" data-i18n="btnCalculateLoan"></button>
        <div class="result-box" id="loanResultBox" style="display:none;">
            <div class="result-label" data-i18n="resMonthlyPayment"></div>
            <div class="result-value-wrapper">
                <div class="result-value" id="loanMonthlyValue"></div>
                <div class="copy-icon" onclick="copyResult('loanMonthlyValue')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </div>
            </div>
            <div class="result-divider"></div>
            <div class="result-label" data-i18n="resTotalInterest"></div>
            <div class="result-label" id="loanInterestValue"></div>
            <div class="result-label" data-i18n="resTotalPayment" style="margin-top: 0.5rem;"></div>
            <div class="result-label" id="loanTotalValue"></div>
        </div>
    `,

    'tip-calculator': `
        <h2 data-i18n="titleTip"></h2>
        <div class="row">
            <div class="form-group">
                <label data-i18n="lblBillAmount"></label>
                <input type="number" id="tipBillAmount" placeholder="100" step="0.01">
            </div>
            <div class="form-group">
                <label data-i18n="lblTipPercent"></label>
                <input type="number" id="tipPercent" placeholder="15" min="0" max="100">
            </div>
        </div>
        <div class="form-group">
            <label data-i18n="lblSplit"></label>
            <input type="number" id="tipSplit" value="1" min="1">
        </div>
        <button class="btn-action" id="btnCalculateTip" data-i18n="btnCalculateTip"></button>
        <div class="result-box" id="tipResultBox" style="display:none;">
            <div class="result-label" data-i18n="resTip"></div>
            <div class="result-value-wrapper">
                <div class="result-value" id="tipAmountValue"></div>
                <div class="copy-icon" onclick="copyResult('tipAmountValue')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </div>
            </div>
            <div class="result-divider"></div>
            <div class="result-label" data-i18n="resTotal"></div>
            <div class="result-value-wrapper">
                <div class="result-value" id="tipTotalValue"></div>
                <div class="copy-icon" onclick="copyResult('tipTotalValue')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </div>
            </div>
            <div class="result-divider"></div>
            <div class="result-label" data-i18n="resPerPerson"></div>
            <div class="result-value-wrapper">
                <div class="result-value" id="tipPerPersonValue"></div>
                <div class="copy-icon" onclick="copyResult('tipPerPersonValue')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </div>
            </div>
        </div>
    `,

    'discount-calculator': `
        <h2 data-i18n="titleDiscount"></h2>
        <div class="row">
            <div class="form-group">
                <label data-i18n="lblOriginalPrice"></label>
                <input type="number" id="discountOriginal" placeholder="100" step="0.01">
            </div>
            <div class="form-group">
                <label data-i18n="lblDiscountPercent"></label>
                <input type="number" id="discountPercent" placeholder="20" min="0" max="100">
            </div>
        </div>
        <button class="btn-action" id="btnCalculateDiscount" data-i18n="btnCalculateDiscount"></button>
        <div class="result-box" id="discountResultBox" style="display:none;">
            <div class="result-label" data-i18n="resSaved"></div>
            <div class="result-value-wrapper">
                <div class="result-value" id="discountSavedValue"></div>
                <div class="copy-icon" onclick="copyResult('discountSavedValue')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </div>
            </div>
            <div class="result-divider"></div>
            <div class="result-label" data-i18n="resFinalPrice"></div>
            <div class="result-value-wrapper">
                <div class="result-value" id="discountFinalValue"></div>
                <div class="copy-icon" onclick="copyResult('discountFinalValue')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </div>
            </div>
        </div>
    `,

    'salary-calculator': `
        <h2 data-i18n="titleSalary"></h2>
        <div class="row">
            <div class="form-group">
                <label data-i18n="lblAnnualSalary"></label>
                <input type="number" id="salaryAnnual" placeholder="60000" step="1000">
            </div>
            <div class="form-group">
                <label data-i18n="lblHoursPerWeek"></label>
                <input type="number" id="salaryHours" placeholder="40" min="1" max="168">
            </div>
        </div>
        <button class="btn-action" id="btnCalculateSalary" data-i18n="btnCalculateSalary"></button>
        <div class="result-box" id="salaryResultBox" style="display:none;">
            <table class="conversion-table">
                <tr><td data-i18n="resHourly"></td><td><div class="result-value-wrapper" style="display: inline-flex;"><span id="salaryHourlyValue"></span><div class="copy-icon" onclick="copyResult('salaryHourlyValue')" style="margin-left: 0.5rem;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></div></div></td></tr>
                <tr><td data-i18n="resDaily"></td><td><div class="result-value-wrapper" style="display: inline-flex;"><span id="salaryDailyValue"></span><div class="copy-icon" onclick="copyResult('salaryDailyValue')" style="margin-left: 0.5rem;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></div></div></td></tr>
                <tr><td data-i18n="resWeekly"></td><td><div class="result-value-wrapper" style="display: inline-flex;"><span id="salaryWeeklyValue"></span><div class="copy-icon" onclick="copyResult('salaryWeeklyValue')" style="margin-left: 0.5rem;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></div></div></td></tr>
                <tr><td data-i18n="resBiWeekly"></td><td><div class="result-value-wrapper" style="display: inline-flex;"><span id="salaryBiWeeklyValue"></span><div class="copy-icon" onclick="copyResult('salaryBiWeeklyValue')" style="margin-left: 0.5rem;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></div></div></td></tr>
                <tr><td data-i18n="resMonthly"></td><td><div class="result-value-wrapper" style="display: inline-flex;"><span id="salaryMonthlyValue"></span><div class="copy-icon" onclick="copyResult('salaryMonthlyValue')" style="margin-left: 0.5rem;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></div></div></td></tr>
            </table>
        </div>
    `,

    'gpa-calculator': `
        <h2 data-i18n="titleGPA"></h2>
        <div class="row">
            <div class="form-group">
                <label data-i18n="lblCourseName"></label>
                <input type="text" id="gpaCourseName" placeholder="Math">
            </div>
            <div class="form-group">
                <label data-i18n="lblCredits"></label>
                <input type="number" id="gpaCredits" placeholder="3" min="0" max="10">
            </div>
            <div class="form-group">
                <label data-i18n="lblGrade"></label>
                <select id="gpaGrade">
                    <option value="A">A</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="B-">B-</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="C-">C-</option>
                    <option value="D+">D+</option>
                    <option value="D">D</option>
                    <option value="F">F</option>
                </select>
            </div>
        </div>
        <button class="btn-action btn-secondary" id="btnAddCourse" data-i18n="btnAddCourse"></button>
        <div id="gpaCourseList" style="margin-top: 1rem;"></div>
        <button class="btn-action" id="btnCalculateGPA" data-i18n="btnCalculateGPA"></button>
        <div class="result-box" id="gpaResultBox" style="display:none;">
            <div class="result-label" data-i18n="resGPA"></div>
            <div class="result-value-wrapper">
                <div class="result-value" id="gpaResultValue"></div>
                <div class="copy-icon" onclick="copyResult('gpaResultValue')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </div>
            </div>
            <div class="result-label" data-i18n="resTotalCredits" style="margin-top: 0.5rem;"></div>
            <div class="result-value-wrapper">
                <div class="result-value" id="gpaCreditsValue"></div>
                <div class="copy-icon" onclick="copyResult('gpaCreditsValue')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </div>
            </div>
        </div>
    `,

    'random-generator': `
        <h2 data-i18n="titleRandom"></h2>
        <div class="row">
            <div class="form-group">
                <label data-i18n="lblMin"></label>
                <input type="number" id="randomMin" placeholder="1">
            </div>
            <div class="form-group">
                <label data-i18n="lblMax"></label>
                <input type="number" id="randomMax" placeholder="100">
            </div>
        </div>
        <div class="form-group">
            <label data-i18n="lblCount"></label>
            <input type="number" id="randomCount" placeholder="10" min="1" max="1000">
        </div>
        <button class="btn-action" id="btnGenerateRandom" data-i18n="btnGenerateRandom"></button>
        <div class="result-box" id="randomResultBox" style="display:none;">
            <div class="result-label" data-i18n="resRandomNumbers"></div>
            <div class="result-value-wrapper">
                <div class="result-value" id="randomResultValue" style="word-wrap: break-word; font-size: 1rem;"></div>
                <div class="copy-icon" onclick="copyResult('randomResultValue')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </div>
            </div>
        </div>
    `,

    'password-generator': `
        <h2 data-i18n="titlePassword"></h2>
        <div class="form-group">
            <label data-i18n="lblPasswordLength"></label>
            <input type="number" id="passwordLength" value="16" min="4" max="128">
        </div>
        <div class="row">
            <label style="display: flex; align-items: center; gap: 0.5rem;">
                <input type="checkbox" id="passwordUppercase" checked> <span data-i18n="chkUppercase"></span>
            </label>
            <label style="display: flex; align-items: center; gap: 0.5rem;">
                <input type="checkbox" id="passwordLowercase" checked> <span data-i18n="chkLowercase"></span>
            </label>
        </div>
        <div class="row">
            <label style="display: flex; align-items: center; gap: 0.5rem;">
                <input type="checkbox" id="passwordNumbers" checked> <span data-i18n="chkNumbers"></span>
            </label>
            <label style="display: flex; align-items: center; gap: 0.5rem;">
                <input type="checkbox" id="passwordSymbols" checked> <span data-i18n="chkSymbols"></span>
            </label>
        </div>
        <button class="btn-action" id="btnGeneratePassword" data-i18n="btnGeneratePassword"></button>
        <div class="result-box" id="passwordResultBox" style="display:none;">
            <div class="result-label" data-i18n="lblGeneratedPassword"></div>
            <div class="result-value-wrapper">
                <div class="result-value" id="passwordResultValue" style="word-break: break-all; font-family: monospace; font-size: 1.25rem;"></div>
                <div class="copy-icon" onclick="copyResult('passwordResultValue')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </div>
            </div>
            <button class="btn-action btn-secondary" id="btnCopyPassword" style="margin-top: 1rem;" data-i18n="btnCopyPassword"></button>
        </div>
    `,

    'hash-generator': `
        <h2 data-i18n="titleHash"></h2>
        <div class="form-group">
            <label data-i18n="lblInputText"></label>
            <textarea id="hashInput" rows="4" placeholder="Enter text to hash..."></textarea>
        </div>
        <button class="btn-action" id="btnGenerateHash" data-i18n="btnGenerateHash"></button>
        <div class="result-box" id="hashResultBox" style="display:none;">
            <div style="margin-bottom: 1rem;">
                <div class="result-label" data-i18n="resMD5"></div>
                <div class="result-value-wrapper">
                    <div class="result-value" id="hashMD5Value" style="font-size: 0.9rem; font-family: monospace;"></div>
                    <div class="copy-icon" onclick="copyResult('hashMD5Value')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    </div>
                </div>
            </div>
            <div style="margin-bottom: 1rem;">
                <div class="result-label" data-i18n="resSHA1"></div>
                <div class="result-value-wrapper">
                    <div class="result-value" id="hashSHA1Value" style="font-size: 0.9rem; font-family: monospace;"></div>
                    <div class="copy-icon" onclick="copyResult('hashSHA1Value')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    </div>
                </div>
            </div>
            <div>
                <div class="result-label" data-i18n="resSHA256"></div>
                <div class="result-value-wrapper">
                    <div class="result-value" id="hashSHA256Value" style="font-size: 0.9rem; font-family: monospace; word-break: break-all;"></div>
                    <div class="copy-icon" onclick="copyResult('hashSHA256Value')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    `,

    'color-converter': `
        <h2 data-i18n="titleColor"></h2>
        <div class="form-group">
            <label data-i18n="lblColorInput"></label>
            <input type="color" id="colorInput" value="#2563eb" style="height: 50px; cursor: pointer;">
        </div>
        <div class="result-box" id="colorResultBox">
            <div style="margin-bottom: 0.75rem;">
                <div class="result-label" data-i18n="resHex"></div>
                <div class="result-value-wrapper">
                    <div class="result-value" id="colorHexValue" style="font-size: 1.25rem;"></div>
                    <div class="copy-icon" onclick="copyResult('colorHexValue')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    </div>
                </div>
            </div>
            <div style="margin-bottom: 0.75rem;">
                <div class="result-label" data-i18n="resRGB"></div>
                <div class="result-value-wrapper">
                    <div class="result-value" id="colorRGBValue"></div>
                    <div class="copy-icon" onclick="copyResult('colorRGBValue')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    </div>
                </div>
            </div>
            <div>
                <div class="result-label" data-i18n="resHSL"></div>
                <div class="result-value-wrapper">
                    <div class="result-value" id="colorHSLValue"></div>
                    <div class="copy-icon" onclick="copyResult('colorHSLValue')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    `,

    'countdown-timer': `
        <h2 data-i18n="titleCountdown"></h2>
        <div class="row-3">
            <div class="form-group">
                <label data-i18n="lblDays"></label>
                <input type="number" id="countdownDays" placeholder="0" min="0" max="365">
            </div>
            <div class="form-group">
                <label data-i18n="lblHours"></label>
                <input type="number" id="countdownHours" placeholder="0" min="0" max="23">
            </div>
            <div class="form-group">
                <label data-i18n="lblMinutes"></label>
                <input type="number" id="countdownMinutes" placeholder="0" min="0" max="59">
            </div>
        </div>
        <div class="form-group">
            <label data-i18n="lblSeconds"></label>
            <input type="number" id="countdownSeconds" placeholder="0" min="0" max="59">
        </div>
        <div class="row">
            <button class="btn-action" id="btnStartCountdown" data-i18n="btnStartCountdown"></button>
            <button class="btn-action btn-secondary" id="btnStopCountdown" data-i18n="btnStopCountdown"></button>
            <button class="btn-action btn-secondary" id="btnResetCountdown" data-i18n="btnResetCountdown"></button>
        </div>
        <div class="result-box" id="countdownDisplay" style="display:none;">
            <div class="result-value-wrapper" style="justify-content: center;">
                <span style="font-size: 2rem; font-family: monospace;" id="countdownText">00:00:00:00</span>
                <div class="copy-icon" onclick="copyResult('countdownText')" style="margin-left: 1rem;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </div>
            </div>
        </div>
    `,

    'stopwatch': `
        <h2 data-i18n="titleStopwatch"></h2>
        <div class="result-box" id="stopwatchDisplay" style="margin-bottom: 2rem;">
            <div class="result-value-wrapper" style="justify-content: center;">
                <span style="font-size: 3rem; font-family: monospace;" id="stopwatchText">00:00.00</span>
                <div class="copy-icon" onclick="copyResult('stopwatchText')" style="margin-left: 1rem;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </div>
            </div>
        </div>
        <div class="row">
            <button class="btn-action" id="btnStartStopwatch" data-i18n="btnStartStopwatch"></button>
            <button class="btn-action btn-secondary" id="btnStopStopwatch" data-i18n="btnStopStopwatch"></button>
            <button class="btn-action btn-secondary" id="btnResetStopwatch" data-i18n="btnResetStopwatch"></button>
            <button class="btn-action btn-secondary" id="btnLapStopwatch" data-i18n="btnLapStopwatch"></button>
        </div>
        <div id="lapTimes" style="margin-top: 1.5rem; max-height: 300px; overflow-y: auto;"></div>
    `,

    'compound-interest': `
        <h2 data-i18n="titleCompound"></h2>
        <div class="form-group">
            <label data-i18n="lblPrincipal"></label>
            <input type="number" id="compoundPrincipal" placeholder="10000" step="100">
        </div>
        <div class="row">
            <div class="form-group">
                <label data-i18n="lblRate"></label>
                <input type="number" id="compoundRate" placeholder="5" step="0.1">
            </div>
            <div class="form-group">
                <label data-i18n="lblTime"></label>
                <input type="number" id="compoundTime" placeholder="10" min="1">
            </div>
        </div>
        <div class="form-group">
            <label data-i18n="lblCompoundFrequency"></label>
            <select id="compoundFrequency">
                <option value="1" data-i18n="freqAnnually"></option>
                <option value="2" data-i18n="freqSemiAnnually"></option>
                <option value="4" data-i18n="freqQuarterly"></option>
                <option value="12" data-i18n="freqMonthly"></option>
            </select>
        </div>
        <button class="btn-action" id="btnCalculateCompound" data-i18n="btnCalculate"></button>
        <div class="result-box" id="compoundResultBox" style="display:none;">
            <div class="result-label" data-i18n="resFutureValue"></div>
            <div class="result-value-wrapper">
                <div class="result-value" id="compoundFutureValue"></div>
                <div class="copy-icon" onclick="copyResult('compoundFutureValue')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </div>
            </div>
            <div class="result-divider"></div>
            <div class="result-label" data-i18n="resTotalInterest"></div>
            <div class="result-value-wrapper">
                <div class="result-value" id="compoundInterest"></div>
                <div class="copy-icon" onclick="copyResult('compoundInterest')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </div>
            </div>
        </div>
    `,

    'word-counter': `
        <h2 data-i18n="titleWordCount"></h2>
        <div class="form-group">
            <label data-i18n="lblEnterText"></label>
            <textarea id="wordCountInput" rows="8" placeholder="Enter your text here..."></textarea>
        </div>
        <div class="result-box" id="wordCountResult">
            <div class="row-3">
                <div>
                    <div class="result-label" data-i18n="resWords"></div>
                    <div class="result-value-wrapper">
                        <div class="result-value" id="wordCountWords">0</div>
                        <div class="copy-icon" onclick="copyResult('wordCountWords')">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="result-label" data-i18n="resCharacters"></div>
                    <div class="result-value-wrapper">
                        <div class="result-value" id="wordCountChars">0</div>
                        <div class="copy-icon" onclick="copyResult('wordCountChars')">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="result-label" data-i18n="resCharactersNoSpaces"></div>
                    <div class="result-value-wrapper">
                        <div class="result-value" id="wordCountCharsNoSpaces">0</div>
                        <div class="copy-icon" onclick="copyResult('wordCountCharsNoSpaces')">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div>
                    <div class="result-label" data-i18n="resSentences"></div>
                    <div class="result-value-wrapper">
                        <div class="result-value" id="wordCountSentences">0</div>
                        <div class="copy-icon" onclick="copyResult('wordCountSentences')">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="result-label" data-i18n="resParagraphs"></div>
                    <div class="result-value-wrapper">
                        <div class="result-value" id="wordCountParagraphs">0</div>
                        <div class="copy-icon" onclick="copyResult('wordCountParagraphs')">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    'text-converter': `
        <h2 data-i18n="titleTextConvert"></h2>
        <div class="form-group">
            <label data-i18n="lblTextToConvert"></label>
            <textarea id="textConverterInput" rows="6" placeholder="Enter your text here..."></textarea>
        </div>
        <div class="row">
            <button class="btn-action btn-secondary" id="btnToUpperCase" data-i18n="btnToUpperCase"></button>
            <button class="btn-action btn-secondary" id="btnToLowerCase" data-i18n="btnToLowerCase"></button>
        </div>
        <div class="row">
            <button class="btn-action btn-secondary" id="btnToTitleCase" data-i18n="btnToTitleCase"></button>
            <button class="btn-action btn-secondary" id="btnToSentenceCase" data-i18n="btnToSentenceCase"></button>
        </div>
        <div class="row">
            <button class="btn-action btn-secondary" id="btnRemoveSpaces" data-i18n="btnRemoveSpaces"></button>
            <button class="btn-action btn-secondary" id="btnRemoveLineBreaks" data-i18n="btnRemoveLineBreaks"></button>
        </div>
        <div class="form-group" style="margin-top: 1.5rem;">
            <label>Result</label>
            <textarea id="textConverterOutput" rows="6" style="background: #f9fafb;"></textarea>
        </div>
    `,

    'percentage-calculator': `
        <h2 data-i18n="titlePercentCalc"></h2>
        <div class="form-group">
            <label data-i18n="lblWhatIsPercentOf"></label>
            <div class="row">
                <input type="number" id="percent1" placeholder="X" style="flex: 1;">
                <span style="padding: 0.75rem; text-align: center;">% of</span>
                <input type="number" id="percent2" placeholder="Y" style="flex: 1;">
            </div>
            <button class="btn-action" id="btnCalculatePercent" data-i18n="btnCalculatePercent"></button>
            <div class="result-box" style="margin-top: 1rem;">
                <div class="result-label" data-i18n="resResult"></div>
                <div class="result-value-wrapper">
                    <div class="result-value" id="percentResult1">---</div>
                    <div class="copy-icon" onclick="copyResult('percentResult1')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    </div>
                </div>
            </div>
        </div>
        <hr class="result-divider">
        <div class="form-group">
            <label data-i18n="lblWhatPercentIsOf"></label>
            <div class="row">
                <input type="number" id="whatPercent1" placeholder="X" style="flex: 1;">
                <span style="padding: 0.75rem; text-align: center;">of</span>
                <input type="number" id="whatPercent2" placeholder="Y" style="flex: 1;">
            </div>
            <button class="btn-action" id="btnCalculateWhatPercent" data-i18n="btnCalculateWhatPercent"></button>
            <div class="result-box" style="margin-top: 1rem;">
                <div class="result-label" data-i18n="resResult"></div>
                <div class="result-value-wrapper">
                    <div class="result-value" id="percentResult2">---</div>
                    <div class="copy-icon" onclick="copyResult('percentResult2')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    </div>
                </div>
            </div>
        </div>
        <hr class="result-divider">
        <div class="form-group">
            <label data-i18n="lblIncreaseByPercent"></label>
            <div class="row">
                <input type="number" id="increaseValue" placeholder="Value" style="flex: 1;">
                <span style="padding: 0.75rem; text-align: center;">by</span>
                <input type="number" id="increasePercent" placeholder="%" style="flex: 1;">
            </div>
            <button class="btn-action" id="btnCalculateIncrease" data-i18n="btnCalculateIncrease"></button>
            <div class="result-box" style="margin-top: 1rem;">
                <div class="result-label" data-i18n="resResult"></div>
                <div class="result-value-wrapper">
                    <div class="result-value" id="percentResult3">---</div>
                    <div class="copy-icon" onclick="copyResult('percentResult3')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    </div>
                </div>
            </div>
        </div>
        <hr class="result-divider">
        <div class="form-group">
            <label data-i18n="lblDecreaseByPercent"></label>
            <div class="row">
                <input type="number" id="decreaseValue" placeholder="Value" style="flex: 1;">
                <span style="padding: 0.75rem; text-align: center;">by</span>
                <input type="number" id="decreasePercent" placeholder="%" style="flex: 1;">
            </div>
            <button class="btn-action" id="btnCalculateDecrease" data-i18n="btnCalculateDecrease"></button>
            <div class="result-box" style="margin-top: 1rem;">
                <div class="result-label" data-i18n="resResult"></div>
                <div class="result-value-wrapper">
                    <div class="result-value" id="percentResult4">---</div>
                    <div class="copy-icon" onclick="copyResult('percentResult4')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    `
};
