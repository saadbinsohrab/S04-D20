// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function conditionalF(numbers){
    if(numbers % 2 === 1){
       return numbers * 2; 
    }
    return numbers / 2;
}
const task2 = conditionalF(12);   //cl= 6
const task2 = conditionalF(13);   //cl= 26
console.log(task2);
