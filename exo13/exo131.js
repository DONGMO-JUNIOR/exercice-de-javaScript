class Clock {
    constructor() {
      this.date = new Date();
      this.hours = this.date.getHours();
      this.minutes = this.date.getMinutes();
      this.seconds = this.date.getSeconds();
    }
  
    updateTime() {
      this.seconds++;
      if (this.seconds >= 60) {
        this.minutes++;
        this.seconds = 0;
      }
      if (this.minutes >= 60) {
        this.hours++;
        this.minutes = 0;
      }
      if (this.hours >= 24) {
        this.hours = 0;
      }
    }
  
    start() {
      setInterval(() => {
        this.updateTime();
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
      }, 1000);
    }
  }
  
  const clock = new Clock();
  clock.start();
  