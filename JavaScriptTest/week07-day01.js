num = 3;
const numberString = '3';
const rain = true;

console.log(num, numberString, rain);
console.log(typeof num, typeof numberString, typeof rain);
console.log(num + numberString);
console.log(typeof num);

if (rain === true) {
    console.log('Go to the gym.');
} else {
    console.log('Go for a walk.');
}

num = 5;
console.log('MODULUS TEST FOR EVEN:', num % 2);
console.log('MODULUS TEST FOR EVEN:', num % 2 === 0);

function evenOrOdd(value) {
    if((value%2) === 0){
        console.log('The number ' + value + 'is even');
    } else {
        console.log('The number ' + value + 'is odd');
    }
}

var app = {

    isEven: function(input) {
        if (input % 2 === 0) {
            console.log('Your input of ' + input + ' is even');
        } else {
            console.log('Your input of ' + input + ' is odd');
        }
    }
};

app.isEven(2);
app.isEven(3);
app.isEven(4);
app.isEven(5);