export const unitData = {
    length: {
        base: 'm',
        units: {
            nm: { factor: 0.000000001, en: 'Nanometer', ar: 'نانومتر' },
            um: { factor: 0.000001, en: 'Micrometer', ar: 'ميكرومتر' },
            mm: { factor: 0.001, en: 'Millimeter', ar: 'مليمتر' },
            cm: { factor: 0.01, en: 'Centimeter', ar: 'سنتيمتر' },
            dm: { factor: 0.1, en: 'Decimeter', ar: 'ديسيمتر' },
            m: { factor: 1, en: 'Meter', ar: 'متر' },
            dam: { factor: 10, en: 'Dekameter', ar: 'ديكامتر' },
            hm: { factor: 100, en: 'Hectometer', ar: 'هكتومتر' },
            km: { factor: 1000, en: 'Kilometer', ar: 'كيلومتر' },
            in: { factor: 0.0254, en: 'Inch', ar: 'بوصة' },
            ft: { factor: 0.3048, en: 'Foot', ar: 'قدم' },
            yd: { factor: 0.9144, en: 'Yard', ar: 'ياردة' },
            mi: { factor: 1609.344, en: 'Mile', ar: 'ميل' },
            nmi: { factor: 1852, en: 'Nautical Mile', ar: 'ميل بحري' },
            ly: { factor: 9.461e15, en: 'Light Year', ar: 'سنة ضوئية' }
        }
    },
    weight: {
        base: 'kg',
        units: {
            mcg: { factor: 0.000000001, en: 'Microgram', ar: 'ميكروجرام' },
            mg: { factor: 0.000001, en: 'Milligram', ar: 'مليجرام' },
            cg: { factor: 0.00001, en: 'Centigram', ar: 'سنتجرام' },
            dg: { factor: 0.0001, en: 'Decigram', ar: 'ديسجرام' },
            g: { factor: 0.001, en: 'Gram', ar: 'جرام' },
            dag: { factor: 0.01, en: 'Dekagram', ar: 'ديكاجرام' },
            hg: { factor: 0.1, en: 'Hectogram', ar: 'هكتوجرام' },
            kg: { factor: 1, en: 'Kilogram', ar: 'كيلوجرام' },
            t: { factor: 1000, en: 'Metric Ton', ar: 'طن متري' },
            oz: { factor: 0.0283495, en: 'Ounce', ar: 'أونصة' },
            lb: { factor: 0.453592, en: 'Pound', ar: 'باوند' },
            st: { factor: 6.35029, en: 'Stone', ar: 'ستون' },
            ton: { factor: 907.185, en: 'Short Ton (US)', ar: 'طن قصير' },
            lton: { factor: 1016.05, en: 'Long Ton (UK)', ar: 'طن طويل' }
        }
    },
    volume: {
        base: 'l',
        units: {
            ul: { factor: 0.000001, en: 'Microliter', ar: 'ميكروليتر' },
            ml: { factor: 0.001, en: 'Milliliter', ar: 'مليلتر' },
            cl: { factor: 0.01, en: 'Centiliter', ar: 'سنتيلتر' },
            dl: { factor: 0.1, en: 'Deciliter', ar: 'ديسيلتر' },
            l: { factor: 1, en: 'Liter', ar: 'لتر' },
            dal: { factor: 10, en: 'Dekaliter', ar: 'ديكالتر' },
            hl: { factor: 100, en: 'Hectoliter', ar: 'هكتولتر' },
            kl: { factor: 1000, en: 'Kiloliter', ar: 'كيلولتر' },
            tsp: { factor: 0.00492892, en: 'Teaspoon (US)', ar: 'ملعقة صغيرة' },
            tbsp: { factor: 0.0147868, en: 'Tablespoon (US)', ar: 'ملعقة كبيرة' },
            floz: { factor: 0.0295735, en: 'Fluid Ounce (US)', ar: 'أونصة سائلة' },
            cup: { factor: 0.236588, en: 'Cup (US)', ar: 'كوب' },
            pt: { factor: 0.473176, en: 'Pint (US)', ar: 'باينت' },
            qt: { factor: 0.946353, en: 'Quart (US)', ar: 'كوارت' },
            gal: { factor: 3.78541, en: 'Gallon (US)', ar: 'جالون أمريكي' },
            galuk: { factor: 4.54609, en: 'Gallon (UK)', ar: 'جالون بريطاني' },
            bbl: { factor: 158.987, en: 'Barrel (Oil)', ar: 'برميل نفط' }
        }
    },
    temperature: {
        type: 'special',
        units: {
            c: { en: 'Celsius', ar: 'مئوية' },
            f: { en: 'Fahrenheit', ar: 'فهرنهايت' },
            k: { en: 'Kelvin', ar: 'كلفن' },
            r: { en: 'Rankine', ar: 'رانكين' }
        }
    },
    area: {
        base: 'm2',
        units: {
            mm2: { factor: 0.000001, en: 'Square Millimeter', ar: 'ميليمتر مربع' },
            cm2: { factor: 0.0001, en: 'Square Centimeter', ar: 'سنتيمتر مربع' },
            dm2: { factor: 0.01, en: 'Square Decimeter', ar: 'ديسيمتر مربع' },
            m2: { factor: 1, en: 'Square Meter', ar: 'متر مربع' },
            a: { factor: 100, en: 'Are', ar: 'آر' },
            ha: { factor: 10000, en: 'Hectare', ar: 'هكتار' },
            km2: { factor: 1000000, en: 'Square Kilometer', ar: 'كيلومتر مربع' },
            in2: { factor: 0.00064516, en: 'Square Inch', ar: 'بوصة مربعة' },
            ft2: { factor: 0.092903, en: 'Square Foot', ar: 'قدم مربعة' },
            yd2: { factor: 0.836127, en: 'Square Yard', ar: 'ياردة مربعة' },
            ac: { factor: 4046.86, en: 'Acre', ar: 'فدان' },
            mi2: { factor: 2589988, en: 'Square Mile', ar: 'ميل مربع' }
        }
    },
    speed: {
        base: 'ms',
        units: {
            mms: { factor: 0.001, en: 'Millimeter/Second', ar: 'مليمتر/ثانية' },
            cms: { factor: 0.01, en: 'Centimeter/Second', ar: 'سنتيمتر/ثانية' },
            ms: { factor: 1, en: 'Meter/Second', ar: 'متر/ثانية' },
            kms: { factor: 1000, en: 'Kilometer/Second', ar: 'كيلومتر/ثانية' },
            kmh: { factor: 0.277778, en: 'Kilometer/Hour', ar: 'كيلومتر/ساعة' },
            mh: { factor: 0.44704, en: 'Mile/Hour', ar: 'ميل/ساعة' },
            kn: { factor: 0.514444, en: 'Knot', ar: 'عقدة' },
            mach: { factor: 343, en: 'Mach', ar: 'ماخ' }
        }
    },
    data: {
        base: 'b',
        units: {
            b: { factor: 1, en: 'Bit', ar: 'بت' },
            B: { factor: 8, en: 'Byte', ar: 'بايت' },
            KB: { factor: 8192, en: 'Kilobyte', ar: 'كيلوبايت' },
            MB: { factor: 8388608, en: 'Megabyte', ar: 'ميجابايت' },
            GB: { factor: 8589934592, en: 'Gigabyte', ar: 'جيجابايت' },
            TB: { factor: 8796093022208, en: 'Terabyte', ar: 'تيرابايت' },
            PB: { factor: 9007199254740992, en: 'Petabyte', ar: 'بيتابايت' },
            EB: { factor: 9.22e18, en: 'Exabyte', ar: 'إكسابايت' }
        }
    },
    fuel: {
        base: 'l100km',
        units: {
            l100km: { factor: 1, en: 'Liter/100km', ar: 'لتر/100كم' },
            kmL: { factor: 100, en: 'Kilometer/Liter', ar: 'كيلومتر/لتر' },
            mpg: { factor: 235.215, en: 'Mile/Gallon (US)', ar: 'ميل/جالون' },
            mpguk: { factor: 282.481, en: 'Mile/Gallon (UK)', ar: 'ميل/جالون بريطاني' }
        }
    },
    pressure: {
        base: 'pa',
        units: {
            pa: { factor: 1, en: 'Pascal', ar: 'باسكال' },
            kpa: { factor: 1000, en: 'Kilopascal', ar: 'كيلوباسكال' },
            bar: { factor: 100000, en: 'Bar', ar: 'بار' },
            mbar: { factor: 100, en: 'Millibar', ar: 'مليبار' },
            psi: { factor: 6894.76, en: 'Pound/Sq.Inch', ar: 'رطل/بوصة مربعة' },
            atm: { factor: 101325, en: 'Atmosphere', ar: 'ضغط جوي' },
            torr: { factor: 133.322, en: 'Torr', ar: 'تور' },
            mmHg: { factor: 133.322, en: 'mmHg', ar: 'مليمتر زئبق' }
        }
    },
    energy: {
        base: 'j',
        units: {
            mj: { factor: 0.000001, en: 'Millijoule', ar: 'ميليجول' },
            j: { factor: 1, en: 'Joule', ar: 'جول' },
            kj: { factor: 1000, en: 'Kilojoule', ar: 'كيلوجول' },
            mj2: { factor: 1000000, en: 'Megajoule', ar: 'ميجاجول' },
            gj: { factor: 1000000000, en: 'Gigajoule', ar: 'جيجاجول' },
            cal: { factor: 4.184, en: 'Calorie', ar: 'سعر حراري' },
            kcal: { factor: 4184, en: 'Kilocalorie', ar: 'كيلوكالوري' },
            btu: { factor: 1055.06, en: 'BTU', ar: 'وحدة حرارية بريطانية' },
            kwh: { factor: 3600000, en: 'Kilowatt Hour', ar: 'كيلوواط ساعة' },
            ev: { factor: 0.0000000000000000001602, en: 'Electronvolt', ar: 'إلكترون فولت' },
            th: { factor: 4184000000, en: 'Therm', ar: 'ثيرم' }
        }
    },
    power: {
        base: 'w',
        units: {
            mw: { factor: 0.001, en: 'Milliwatt', ar: 'مليواط' },
            w: { factor: 1, en: 'Watt', ar: 'واط' },
            kw: { factor: 1000, en: 'Kilowatt', ar: 'كيلوواط' },
            mw2: { factor: 1000000, en: 'Megawatt', ar: 'ميجاواط' },
            gw: { factor: 1000000000, en: 'Gigawatt', ar: 'جيجاواط' },
            hp: { factor: 745.7, en: 'Horsepower', ar: 'حصان' },
            ps: { factor: 735.5, en: 'Metric HP', ar: 'حصان متري' }
        }
    },
    angle: {
        type: 'special',
        units: {
            deg: { en: 'Degree', ar: 'درجة' },
            rad: { en: 'Radian', ar: 'راديان' },
            grad: { en: 'Grad', ar: 'جراد' },
            rev: { en: 'Revolution', ar: 'دورة' }
        }
    }
};

export const currencyData = {
    USD: { symbol: '$', name: 'US Dollar', rate: 1 },
    EUR: { symbol: '€', name: 'Euro', rate: 0.92 },
    GBP: { symbol: '£', name: 'British Pound', rate: 0.79 },
    JPY: { symbol: '¥', name: 'Japanese Yen', rate: 149.50 },
    SAR: { symbol: '﷼', name: 'Saudi Riyal', rate: 3.75 },
    AED: { symbol: 'د.إ', name: 'UAE Dirham', rate: 3.67 },
    KWD: { symbol: 'د.ك', name: 'Kuwaiti Dinar', rate: 0.31 },
    QAR: { symbol: '﷼', name: 'Qatari Riyal', rate: 3.64 },
    BHD: { symbol: 'BD', name: 'Bahraini Dinar', rate: 0.38 },
    OMR: { symbol: '﷼', name: 'Omani Rial', rate: 0.38 },
    EGP: { symbol: 'E£', name: 'Egyptian Pound', rate: 30.90 },
    CAD: { symbol: 'C$', name: 'Canadian Dollar', rate: 1.35 },
    AUD: { symbol: 'A$', name: 'Australian Dollar', rate: 1.53 },
    CHF: { symbol: 'Fr', name: 'Swiss Franc', rate: 0.88 },
    CNY: { symbol: '¥', name: 'Chinese Yuan', rate: 7.19 },
    INR: { symbol: '₹', name: 'Indian Rupee', rate: 83.12 },
    PKR: { symbol: '₨', name: 'Pakistani Rupee', rate: 278.50 },
    TRY: { symbol: '₺', name: 'Turkish Lira', rate: 32.15 },
    RUB: { symbol: '₽', name: 'Russian Ruble', rate: 92.80 },
    BRL: { symbol: 'R$', name: 'Brazilian Real', rate: 4.97 },
    MXN: { symbol: '$', name: 'Mexican Peso', rate: 17.05 },
    KRW: { symbol: '₩', name: 'South Korean Won', rate: 1320.50 },
    IDR: { symbol: 'Rp', name: 'Indonesian Rupiah', rate: 15650 },
    SGD: { symbol: 'S$', name: 'Singapore Dollar', rate: 1.34 },
    HKD: { symbol: 'HK$', name: 'Hong Kong Dollar', rate: 7.82 },
    NZD: { symbol: 'NZ$', name: 'New Zealand Dollar', rate: 1.63 },
    ZAR: { symbol: 'R', name: 'South African Rand', rate: 18.95 },
    THB: { symbol: '฿', name: 'Thai Baht', rate: 35.80 }
};
