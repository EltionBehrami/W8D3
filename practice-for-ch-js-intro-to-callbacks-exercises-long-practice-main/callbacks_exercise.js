// class Clock { 
//     constructor() { 
//         let date = new Date(); 

//         this.seconds = date.getSeconds();
//         this.minutes = date.getMinutes();
//         this.hours = date.getHours();   

//         this.printTime()

//         // setInterval(() => {this._tick()}, 1000);
//         setInterval(this._tick.bind(this),1000);
//     };

//     printTime() { 
//         let seconds = ``;
//         let minutes = ``;
//         let hours = ``;

//         if (this.seconds < 10) {
//             seconds = "0" + `${this.seconds}`
//         }

//         else {
//             seconds = `${this.seconds}`
//         };

//         if (this.minutes < 10) {
//             minutes = "0" + `${this.minutes}`
//         }

//         else {
//             minutes = `${this.minutes}`
//         };
        

//         if (this.hours < 10) {
//                 hours = "0" + `${this.hours}`
//             }
    
//         else {
//                 hours = `${this.hours}`
//         };

        

//         let dateTime = `${hours}:${minutes}:${seconds}`;
//         console.log(dateTime);    
//     };

//     _tick() {
//         this.seconds += 1;

//         if (this.seconds === 60){
//             this.seconds = 0;
//             this.minutes += 1;
        

//         if (this.minutes === 60){
//             this.minutes = 0;
//             this.hours += 1;
        

//         if (this.hours === 25){
//             this.hours = 0;
//             this.minutes = 0;
//             this.seconds = 0;
//         };
//     }
// }

//         this.printTime()
//     };
// }

// let clock = new Clock();
// clock.printTime();
// console.log(clock.printTime())



const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// function addNumbers (sum, numsLeft, completionCallback ) { 
//     if (numsLeft > 0) { 
//         reader.question('input number', (answer) => {
//             let int = parseInt(`${answer}`);
//             sum += int; 
//             console.log(sum)


//             if (numsLeft === 1) { 
//                 completionCallback(sum)
//             } else {

//             addNumbers(sum, numsLeft - 1, completionCallback);
//             };
            
//         })
// }}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


// Function.prototype.myBind = function(context){

//    return () => this.apply(context)
// }

// class Lamp {
//     constructor() {
//       this.name = "a lamp";
//     }
//   }
  
//   const turnOn = function() {
//     console.log("Turning on " + this.name);
//   };
  
//   const lamp = new Lamp();
  
//   turnOn(); // should not work the way we want it to
  
//   const boundTurnOn = turnOn.bind(lamp);
//   const myBoundTurnOn = turnOn.myBind(lamp);
  
//   boundTurnOn(); // should say "Turning on a lamp"
//   myBoundTurnOn(); // should say "Turning on a lamp"


  Array.prototype.absurdBubblesort = function() {
    // let i = 0;
    // let length = this.length; 
    // let sorted = false;
    // arr = this;



    // while (!sorted) { 
    //     sorted = true;  

    //     for (let i = 0; i < this.length -1; i++) { 
    //         if ( this[i] > this[i+1]) {
    //             [this[i], this[i+1]] = [this[i+1], this[i]];
    //             sorted = false 
    //         };
    //     };
    //     if ((arr[i] > arr[i+1]) && (i < length-1)) {
    //         let holder1 = arr[i];
    //         let holder2 = arr[i+1];
    //         arr[i] = holder2;
    //         arr[i+1] = holder1;
    //         sorted = false};
            
    //         i += 1;
    // };
    //      return arr;
  }

  function askIfGreaterthan(ele1, ele2, callback) {
    reader.question(`is ${ele1} greater than ${ele2}`, (answer) => {
        if (answer === 'yes') {
            callback(true) 
        } else {
            callback(false)
        };
    }
)
  }

//   console.log([1,7,2,5,4].absurdBubblesort())
// console.log(askIfGreaterthan(2,4,()=>console.log()))