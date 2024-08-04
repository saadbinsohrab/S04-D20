// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_evebn(number){
    if(number % 2 === 0){
        return 'even';
    }
    return 'odd';
}

const task5 = odd_evebn(9);         //cl= "odd"
console.log(task5);