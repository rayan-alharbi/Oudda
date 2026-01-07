export const timeCalculator = {
    addTime(startTime, durationMinutes) {
        const [hours, minutes] = startTime.split(':').map(Number);
        const date = new Date();
        date.setHours(hours, minutes + durationMinutes, 0);
        return {
            hours: date.getHours(),
            minutes: date.getMinutes(),
            formatted: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
    },

    subtractTime(endTime, durationMinutes) {
        const [hours, minutes] = endTime.split(':').map(Number);
        const date = new Date();
        date.setHours(hours, minutes - durationMinutes, 0);
        return {
            hours: date.getHours(),
            minutes: date.getMinutes(),
            formatted: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
    },

    calculateDifference(startTime, endTime) {
        const [startHours, startMinutes] = startTime.split(':').map(Number);
        const [endHours, endMinutes] = endTime.split(':').map(Number);

        let startTotal = startHours * 60 + startMinutes;
        let endTotal = endHours * 60 + endMinutes;

        let diffMinutes;
        if (endTotal >= startTotal) {
            diffMinutes = endTotal - startTotal;
        } else {
            diffMinutes = (24 * 60) - startTotal + endTotal;
        }

        const hours = Math.floor(diffMinutes / 60);
        const minutes = diffMinutes % 60;

        return {
            totalMinutes: diffMinutes,
            hours,
            minutes,
            formatted: `${hours}h ${minutes}m`
        };
    },

    formatDuration(minutes) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}h ${mins}m`;
    }
};
