# **Universal Converter & Calculator (المحول الشامل)**

A robust, single-file web application designed for comprehensive date management and unit conversions. Built entirely with vanilla **HTML, CSS, and JavaScript**, ensuring zero dependencies and high performance.

---

## 🔗 **Live Demo**

You can try the application online here:
**[https://uniconvert.pages.dev](https://uniconvert.pages.dev)**

---

## 🌟 **Key Features**

### **1. Date Converter (تحويل التاريخ)**

* **Gregorian → Hijri:** Convert standard Gregorian dates to the Islamic Hijri calendar.
* **Hijri → Gregorian:** Convert Hijri dates (Day/Month/Year) back to Gregorian format using a Kuwaiti-algorithm variant.
* **Localized Output:** Displays dates in Arabic or English depending on selected language.

---

### **2. Age Calculator (حساب العمر)**

* **Dual Age Calculation:** Compute exact age in *Years, Months, Days* for both Gregorian and Hijri simultaneously.
* **Date Difference:** Calculate the precise difference between any two dates.
* **Total Days:** Display the total number of days between the start and end dates.

---

### **3. Unit Converter (تحويل الوحدات)**

Supports bidirectional conversion in the following categories:

* **Length:** Millimeter, Centimeter, Meter, Kilometer, Inch, Foot, Yard, Mile.
* **Weight:** Milligram, Gram, Kilogram, Ounce, Pound.
* **Volume:** Milliliter, Liter, Gallon (US).
* **Temperature:** Celsius, Fahrenheit, Kelvin.

---

### **4. User Experience**

* **Bilingual Interface:** Fully supports English and Arabic.
* **RTL Support:** Automatically adjusts layout direction when Arabic is selected.
* **Responsive Design:** Optimized for mobile, tablet, and desktop.
* **Single-File Architecture:** Entire application in one HTML file—no installations, no external libraries.

---

## 🚀 **How to Run**

1. **Download:** Save the `universal_converter.html` file.
2. **Open:** Double-click the file to open it in any modern browser (Chrome, Firefox, Safari, Edge).
3. **Use:** No internet connection required for core functionality.

---

## 🛠️ **Technical Details**

* **HTML5:** Semantic structure.
* **CSS3:** Custom properties, Flexbox, Grid, and RTL logical properties.
* **JavaScript (ES6+):**

  * `Intl.DateTimeFormat` for native localization
  * Custom Hijri/Gregorian algorithms
  * DOM manipulation for dynamic UI updates

---

## 📂 **Project Structure**

Designed with a “Single File Component” philosophy:

* **Styles:** Embedded in the `<head>`
* **Markup:** Clean semantic HTML in the `<body>`
* **Logic:** Scripts placed at the bottom of the `<body>`

---

## 📝 **License**

This project is open-source and free for personal or educational use.
