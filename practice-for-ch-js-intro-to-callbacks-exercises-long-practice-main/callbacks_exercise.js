class Clock { 
    constructor() { 
        let date = new Date(); 

        this.seconds = date.getSeconds();
        this.minutes = date.getMinutes();
        this.hours = date.getHours();

        // let seconds = date.getSeconds();
        // let minutes = date.getMinutes();
        // let hours = date.getHours();
    }

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




}

let clock = new Clock();
clock.printTime();
console.log(clock.printTime())