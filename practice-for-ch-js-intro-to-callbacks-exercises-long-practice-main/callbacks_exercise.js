class Clock { 
    constructor() { 
        let date = new Date(); 

        this.seconds = date.getSeconds();
        this.minutes = date.getMinutes();
        this.hours = date.getHours();   

        this.printTime()

        // setInterval(() => {this._tick()}, 1000);
        setInterval(this._tick.bind(this),1000);
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
                hours = "0" + `${this.hours}`
            }
    
        else {
                hours = `${this.hours}`
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

// let clock = new Clock();
// clock.printTime();
// console.log(clock.printTime())



// const readline = require("readline");
// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


function addNumbers (sum, numsLeft, completionCallback ) { 
    if (numsLeft > 0) { 
        reader.question('input number', (answer) => {
            let int = parseInt(`${answer}`);
            sum += int; 
            console.log(sum)


            if (numsLeft === 1) { 
                completionCallback(sum)
            } else {

            addNumbers(sum, numsLeft - 1, completionCallback);
            };
            
        })
}}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


Function.prototype.myBind = function(context){

   return () => this.apply(context)
}

class Lamp {
    constructor() {
      this.name = "a lamp";
    }
  }
  
  const turnOn = function() {
    console.log("Turning on " + this.name);
  };
  
  const lamp = new Lamp();
  
  turnOn(); // should not work the way we want it to
  
  const boundTurnOn = turnOn.bind(lamp);
  const myBoundTurnOn = turnOn.myBind(lamp);
  
  boundTurnOn(); // should say "Turning on a lamp"
  myBoundTurnOn(); // should say "Turning on a lamp"
