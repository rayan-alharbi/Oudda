# UniConvert Pro - Ultimate Converter Suite

A powerful, feature-rich web application with 20+ converters and calculators. Built with vanilla JavaScript - no dependencies required!

## 🚀 Features

### 📅 Date & Time Tools
- **Date Converter** - Convert between Gregorian and Hijri calendars bidirectionally
- **Age Calculator** - Calculate exact age in both Gregorian and Hijri calendars
- **Time Calculator** - Add, subtract, and calculate time differences

### 📏 Unit Converters
- **Length** - nm, μm, mm, cm, dm, m, dam, hm, km, in, ft, yd, mi, nmi, ly
- **Weight** - μg, mg, cg, dg, g, dag, hg, kg, t, oz, lb, st, short ton, long ton
- **Volume** - μL, mL, cL, dL, L, daL, hL, kL, tsp, tbsp, fl oz, cup, pt, qt, gal (US/UK), bbl
- **Temperature** - Celsius, Fahrenheit, Kelvin, Rankine
- **Area** - mm², cm², dm², m², are, hectare, km², in², ft², yd², acre, mi²
- **Speed** - mm/s, cm/s, m/s, km/s, km/h, mph, knots, mach
- **Data Storage** - bit, byte, KB, MB, GB, TB, PB, EB
- **Fuel Efficiency** - L/100km, km/L, mpg (US/UK)
- **Pressure** - Pa, kPa, bar, mbar, psi, atm, torr, mmHg
- **Energy** - mJ, J, kJ, MJ, GJ, cal, kcal, BTU, kWh, eV, therm
- **Power** - mW, W, kW, MW, GW, hp, metric hp
- **Angle** - degrees, radians, grad, revolutions

### 💰 Financial Tools
- **Currency Converter** - Convert between 25+ world currencies
- **Loan Calculator** - Calculate monthly payments, total interest, and total payment
- **Tip Calculator** - Calculate tips and split bills between people
- **Discount Calculator** - Calculate discounts and savings
- **Salary Calculator** - Convert between hourly, daily, weekly, bi-weekly, monthly, and annual

### 🏥 Health & Fitness
- **BMI Calculator** - Calculate Body Mass Index with category classification

### 📚 Education
- **GPA Calculator** - Calculate Grade Point Average from multiple courses

### 🔧 Utilities
- **Random Number Generator** - Generate multiple random numbers within a range
- **Password Generator** - Create secure passwords with customizable options
- **Hash Generator** - Generate MD5, SHA-1, and SHA-256 hashes
- **Color Converter** - Convert between HEX, RGB, and HSL color formats

### ⏱️ Timers
- **Countdown Timer** - Set countdowns with days, hours, minutes, and seconds
- **Stopwatch** - Measure elapsed time with lap functionality

## 🌍 Bilingual Support
- Full support for **English** and **Arabic**
- Automatic RTL/LTR layout switching
- All 25+ tools fully localized

## 🛠️ Technical Details

### Architecture
- **Modular Design**: Split into multiple small, focused files
- **Vanilla JavaScript**: No external dependencies or frameworks
- **Single Page Application**: Fast, responsive, no page reloads
- **ES6+ Modules**: Modern JavaScript with import/export

### File Structure
```
UniConvert/
├── index.html              # Main HTML entry point
├── css/
│   └── style.css          # All styles and responsive design
├── js/
│   ├── app.js             # Main application logic
│   ├── data/
│   │   ├── translations.js # English/Arabic translations
│   │   ├── units.js       # Unit and currency data
│   │   └── templates.js  # HTML templates for all tools
│   └── modules/
│       ├── date.js        # Date conversion logic
│       ├── age.js         # Age calculation logic
│       ├── units.js       # Unit conversion engine
│       ├── time.js        # Time calculator
│       ├── currency.js    # Currency converter
│       ├── calculators.js # All calculator modules
│       ├── utilities.js   # Utility generators
│       └── timers.js      # Countdown and stopwatch classes
├── AGENTS.md             # Developer guidelines
└── README.md             # This file
```

## 🚀 Getting Started

### Option 1: Direct File Opening
1. Clone or download the repository
2. Open `index.html` in any modern browser
3. That's it! No server required.

### Option 2: Local Server (Recommended for development)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📱 Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## ✨ Key Features

### Performance
- Zero dependencies - loads instantly
- Minimal network requests
- Optimized for mobile devices
- Smooth animations and transitions

### User Experience
- Clean, modern UI design
- Responsive layout for all screen sizes
- Dark/light theme ready
- Intuitive navigation with tabs
- Real-time calculations where applicable
- Copy to clipboard functionality

### Accessibility
- Full ARIA attributes
- Keyboard navigation support
- Screen reader compatible
- High contrast colors
- Semantic HTML

### Security
- No data sent to servers - all calculations done locally
- Input validation on all forms
- No cookies or local storage used for tracking
- Secure password generation

## 🌐 Currency Rates

Currency exchange rates are hardcoded as reference values. For production use, integrate with a real-time currency API like:
- ExchangeRate-API
- Fixer.io
- CurrencyLayer
- Open Exchange Rates

Current rates in `js/data/units.js` serve as examples and should be updated regularly.

## 🔧 Customization

### Adding a New Converter
1. Create logic in `js/modules/yourtool.js`
2. Add translations in `js/data/translations.js`
3. Add template in `js/data/templates.js`
4. Add to `tabConfig` in `js/app.js`

### Changing Theme
Modify CSS variables in `css/style.css`:
```css
:root {
    --primary: #2563eb;
    --bg-body: #f3f4f6;
    --bg-card: #ffffff;
    /* ... more variables */
}
```

### Adding Languages
1. Add new language keys to `js/data/translations.js`
2. Add language toggle option in `js/app.js`

## 📝 Development

### Code Style
- 4-space indentation
- camelCase for variables/functions
- UPPER_SNAKE_CASE for constants
- ES6+ syntax (const/let, arrow functions, template literals)

### Running Tests
No automated tests yet. Manual testing checklist:
- [ ] All converters work correctly
- [ ] Both English and Arabic function properly
- [ ] RTL/LTR layouts switch correctly
- [ ] Mobile responsive on different screen sizes
- [ ] Input validation prevents errors
- [ ] Edge cases handled (empty inputs, zero values, etc.)

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open-source and free for personal or educational use.

## 👨‍💻 Author

Created by [Your Name]

## 🙏 Acknowledgments

- Date conversion algorithms using Intl API
- Mathematical calculations for all conversions
- Modern CSS features for responsive design
- Browser native APIs for security

---

**Note**: This is a single-file application that can be deployed anywhere - static hosting, GitHub Pages, Netlify, Vercel, or even opened directly from the file system!
