Universal Converter & Calculator (المحول الشامل)

A robust, single-file web application designed for comprehensive date management and unit conversions. This tool is built entirely with vanilla HTML, CSS, and JavaScript, ensuring zero dependencies and high performance.

🔗 Live Demo

Try the application online here: uniconvert.pages.dev

🌟 Key Features

1. Date Converter (تحويل التاريخ)

Gregorian to Hijri: Convert standard Gregorian dates to the Islamic Hijri calendar.

Hijri to Gregorian: Convert Hijri dates (Day/Month/Year) back to Gregorian format using the Kuwaiti algorithm variant.

Localized Output: Displays dates in the appropriate language format (English or Arabic).

2. Age Calculator (حساب العمر)

Dual Age Calculation: Calculates your exact age in Years, Months, and Days for both Gregorian and Hijri calendars simultaneously.

Date Difference: Computes the exact time difference between any two dates.

Total Days: Displays the total number of days elapsed between the start and end dates.

3. Unit Converter (تحويل الوحدات)

Supports bidirectional conversion for the following categories:

Length: Millimeter, Centimeter, Meter, Kilometer, Inch, Foot, Yard, Mile.

Weight: Milligram, Gram, Kilogram, Ounce, Pound.

Volume: Milliliter, Liter, Gallon (US).

Temperature: Celsius, Fahrenheit, Kelvin.

4. User Experience

Bilingual Interface: Complete support for English and Arabic.

RTL Support: Automatically switches layout direction (Right-to-Left) when Arabic is selected.

Responsive Design: Fully adapted for mobile, tablet, and desktop screens.

Single-File Architecture: The entire app lives in one html file—no installation or external servers required.

🚀 How to Run

Download: Save the universal_converter.html file to your computer.

Open: Double-click the file to open it in any modern web browser (Chrome, Firefox, Safari, Edge).

Use: No internet connection is required for core functionality.

🛠️ Technical Details

HTML5: Semantic structure.

CSS3: Custom properties (variables), Flexbox, Grid, and logical properties for RTL support.

JavaScript (ES6+):

Intl.DateTimeFormat for native localization.

Custom algorithms for Hijri/Gregorian calculation.

DOM manipulation for dynamic updates.

📂 Project Structure

This project follows the "Single File Component" philosophy for maximum portability.

Styles: Embedded in the <head> section.

Markup: Semantic HTML in the <body>.

Logic: Scripts located at the bottom of the <body>.

📝 License

This project is open-source and free to use for personal or educational purposes.
