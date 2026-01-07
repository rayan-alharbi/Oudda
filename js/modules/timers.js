export class CountdownTimer {
    constructor(onTick, onComplete) {
        this.onTick = onTick;
        this.onComplete = onComplete;
        this.interval = null;
        this.remainingSeconds = 0;
    }

    start(days, hours, minutes, seconds) {
        this.stop();
        this.remainingSeconds = days * 86400 + hours * 3600 + minutes * 60 + seconds;
        this.updateDisplay();

        this.interval = setInterval(() => {
            this.remainingSeconds--;
            this.updateDisplay();

            if (this.remainingSeconds <= 0) {
                this.stop();
                if (this.onComplete) this.onComplete();
            }
        }, 1000);
    }

    stop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    reset() {
        this.stop();
        this.remainingSeconds = 0;
        this.updateDisplay();
    }

    updateDisplay() {
        if (this.onTick) {
            const days = Math.floor(this.remainingSeconds / 86400);
            const hours = Math.floor((this.remainingSeconds % 86400) / 3600);
            const minutes = Math.floor((this.remainingSeconds % 3600) / 60);
            const seconds = this.remainingSeconds % 60;

            this.onTick({ days, hours, minutes, seconds });
        }
    }
}

export class Stopwatch {
    constructor(onTick) {
        this.onTick = onTick;
        this.interval = null;
        this.startTime = 0;
        this.elapsedTime = 0;
        this.laps = [];
        this.isRunning = false;
    }

    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.startTime = Date.now() - this.elapsedTime;

        this.interval = setInterval(() => {
            this.elapsedTime = Date.now() - this.startTime;
            this.updateDisplay();
        }, 10);
    }

    stop() {
        if (!this.isRunning) return;
        this.isRunning = false;
        clearInterval(this.interval);
        this.interval = null;
    }

    reset() {
        this.stop();
        this.elapsedTime = 0;
        this.laps = [];
        this.updateDisplay();
    }

    lap() {
        this.laps.push(this.elapsedTime);
        return [...this.laps];
    }

    updateDisplay() {
        if (this.onTick) {
            const time = this.formatTime(this.elapsedTime);
            this.onTick(time, this.elapsedTime);
        }
    }

    formatTime(ms) {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const centiseconds = Math.floor((ms % 1000) / 10);

        return {
            minutes: minutes.toString().padStart(2, '0'),
            seconds: seconds.toString().padStart(2, '0'),
            centiseconds: centiseconds.toString().padStart(2, '0'),
            formatted: `${minutes}:${seconds}.${centiseconds}`
        };
    }
}
