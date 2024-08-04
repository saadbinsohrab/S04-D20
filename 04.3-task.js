// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
const arraaay = [3, 67, 21, 48, 50, 27];
function average(numbers){
    let sum = 0;
    for(const number of numbers){
        sum = sum + number;
    }
    console.log(sum);             //cl= 216
    return sum / numbers.length;
}

const task3 = average(arraaay);
console.log(task3);               //cl= 36