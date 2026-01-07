export const randomGenerator = {
    generate(min, max, count) {
        const results = [];
        for (let i = 0; i < count; i++) {
            const random = Math.floor(Math.random() * (max - min + 1)) + min;
            results.push(random);
        }
        return results;
    },

    generateFloat(min, max, decimals = 2) {
        const random = Math.random() * (max - min) + min;
        return parseFloat(random.toFixed(decimals));
    },

    generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
};

export const passwordGenerator = {
    generate(length, options = { uppercase: true, lowercase: true, numbers: true, symbols: true }) {
        let chars = '';
        if (options.lowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
        if (options.uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (options.numbers) chars += '0123456789';
        if (options.symbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

        if (!chars) return '';

        let password = '';
        for (let i = 0; i < length; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return password;
    },

    checkStrength(password) {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (password.length >= 12) strength++;
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
        if (/\d/.test(password)) strength++;
        if (/[^a-zA-Z0-9]/.test(password)) strength++;

        const levels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong', 'Very Strong'];
        return levels[Math.min(strength, 5)];
    }
};

export const hashGenerator = {
    async md5(text) {
        return this.simpleHash(text);
    },

    async sha1(text) {
        const encoder = new TextEncoder();
        const data = encoder.encode(text);
        const hash = await crypto.subtle.digest('SHA-1', data);
        return this.bufferToHex(hash);
    },

    async sha256(text) {
        const encoder = new TextEncoder();
        const data = encoder.encode(text);
        const hash = await crypto.subtle.digest('SHA-256', data);
        return this.bufferToHex(hash);
    },

    bufferToHex(buffer) {
        return Array.from(new Uint8Array(buffer))
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');
    },

    simpleHash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash).toString(16);
    }
};

export const colorConverter = {
    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    },

    rgbToHex(r, g, b) {
        return "#" + [r, g, b].map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('');
    },

    rgbToHsl(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

            switch (max) {
                case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
                case g: h = ((b - r) / d + 2) / 6; break;
                case b: h = ((r - g) / d + 4) / 6; break;
            }
        }

        return {
            h: Math.round(h * 360),
            s: Math.round(s * 100),
            l: Math.round(l * 100)
        };
    },

    hslToHex(h, s, l) {
        s /= 100;
        l /= 100;

        const a = s * Math.min(l, 1 - l);
        const f = n => {
            const k = (n + h / 30) % 12;
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return Math.round(255 * color).toString(16).padStart(2, '0');
        };

        return `#${f(0)}${f(8)}${f(4)}`;
    }
};
