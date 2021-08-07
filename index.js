const refs = {
    divTimer: document.querySelector('#timer-1'),
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
};


class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    }

    setInterval = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = this.targetDate - currentTime;
        this.updateClockface(deltaTime);
        this.stopInterval(deltaTime);
    }, 1000);
    
    updateClockface(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        refs.days.textContent = days;
        refs.hours.textContent = hours;
        refs.mins.textContent = mins;
        refs.secs.textContent = secs;
    };

    stopInterval(time) {
        if (time < 0) {
            clearInterval(this.setInterval);
            refs.divTimer.textContent = `День "Х" настал!`;
        }
    };

    pad(value) {
        return String(value).padStart(2, "0");
    };
   
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
});
