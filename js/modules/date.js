export const dateConverter = {
    g2h(date, lang) {
        return new Intl.DateTimeFormat(lang + '-u-ca-islamic-umalqura', {
            day: 'numeric', month: 'long', year: 'numeric'
        }).format(date);
    },

    toHijriParts(date) {
        const parts = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura-nu-latn', {
            day: 'numeric', month: 'numeric', year: 'numeric'
        }).formatToParts(date);
        
        const getPart = (type) => {
            const part = parts.find(p => p.type === type);
            return part ? parseInt(part.value) : 0;
        };

        return { y: getPart('year'), m: getPart('month'), d: getPart('day') };
    },

    h2g(day, month, year) {
        const intPart = (n) => Math.floor(n);
        let z = year;
        let m = month + 1;
        let d = day;

        let jd = intPart((11 * z + 3) / 30) + 354 * z + 30 * m - intPart((m - 1) / 2) + d + 1948440 - 385;
        
        let l = jd + 68569;
        let n = intPart((4 * l) / 146097);
        l = l - intPart((146097 * n + 3) / 4);
        let i = intPart((4000 * (l + 1)) / 1461001);
        l = l - intPart((1461 * i) / 4) + 31;
        let j = intPart((80 * l) / 2447);
        d = l - intPart((2447 * j) / 80);
        l = intPart(j / 11);
        m = j + 2 - 12 * l;
        let y = 100 * (n - 49) + i + l;

        return new Date(y, m - 1, d);
    }
};
