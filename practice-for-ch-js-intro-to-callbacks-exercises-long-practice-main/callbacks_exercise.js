class Clock { 
    constructor() { 
        let date = new Date(); 

        this.seconds = date.getSeconds();
        this.minutes = date.getMinutes();
        this.hours = date.getHours();

        this.printTime()

        setTimeout(() => {this._tick}, 1000);

    };

    printTime() { 
        let seconds = ``;
        let minutes = ``;
        let hours = ``;

        if (this.seconds < 10) {
            seconds = "0" + `${this.seconds}`
        }

        else {
            seconds = `${this.seconds}`
        };

        if (this.minutes < 10) {
            minutes = "0" + `${this.minutes}`
        }

        else {
            minutes = `${this.minutes}`
        };
        

        if (this.hours < 10) {
                hours = "0" + `${this.seconds}`
            }
    
        else {
                seconds = `${this.seconds}`
        };

        let dateTime = `${hours}:${minutes}:${seconds}`;
        console.log(dateTime);    
    };

    _tick() {
        this.seconds += 1;

        if (this.seconds === 60){
            this.seconds = 0;
            this.minutes += 1;
        

        if (this.minutes === 60){
            this.minutes = 0;
            this.hours += 1;
        

        if (this.hours === 25){
            this.hours = 0;
            this.minutes = 0;
            this.seconds = 0;
        };
    }
}

        this.printTime()
    };
}

let clock = new Clock();
// clock.printTime();
// console.log(clock.printTime())




