export const unitConverter = {
    convert(category, value, from, to, unitData) {
        if (isNaN(value)) return null;

        let result;

        if (category === 'temperature') {
            result = this.convertTemperature(value, from, to);
        } else if (category === 'angle') {
            result = this.convertAngle(value, from, to);
        } else {
            const baseFactorFrom = unitData[category].units[from].factor;
            const baseFactorTo = unitData[category].units[to].factor;
            const baseVal = value * baseFactorFrom;
            result = baseVal / baseFactorTo;
        }

        return parseFloat(result.toFixed(6));
    },

    convertTemperature(value, from, to) {
        let cVal;

        if (from === 'c') cVal = value;
        else if (from === 'f') cVal = (value - 32) * 5/9;
        else if (from === 'k') cVal = value - 273.15;
        else if (from === 'r') cVal = (value - 491.67) * 5/9;

        if (to === 'c') return cVal;
        if (to === 'f') return (cVal * 9/5) + 32;
        if (to === 'k') return cVal + 273.15;
        if (to === 'r') return (cVal * 9/5) + 491.67;
        return cVal;
    },

    convertAngle(value, from, to) {
        let radVal;

        if (from === 'deg') radVal = value * Math.PI / 180;
        else if (from === 'rad') radVal = value;
        else if (from === 'grad') radVal = value * Math.PI / 200;
        else if (from === 'rev') radVal = value * 2 * Math.PI;

        if (to === 'deg') return radVal * 180 / Math.PI;
        if (to === 'rad') return radVal;
        if (to === 'grad') return radVal * 200 / Math.PI;
        if (to === 'rev') return radVal / (2 * Math.PI);
        return radVal;
    }
};
