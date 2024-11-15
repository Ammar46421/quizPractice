// Arrays Practice starts

// var cities = [];
// cities.push('karachi', 'islamabad', 'lahore');
// cities.pop();
// cities.shift();
// cities.unshift('kk')
// console.log(cities);
// var enterCity = prompt('Enter city').toLowerCase();

// if (cities.includes(enterCity) ) {
//     alert('Right Answer')
// }else{
//     alert('Wrong Answer')
// };

// Arrays Practice End

// for loop practice start

var direction = ['south', 'west', 'north'];
var rightDirection = prompt('Enter Direction').toLowerCase();

var isCorrect = false; 

for (var i = 0; i < direction.length; i++) {
    if (rightDirection === direction[i]) {
        isCorrect = true; 
        break; 
    }
}

if (isCorrect) {
    alert('You are correct');
} else {
    alert('You are wrong');
}

// for loop practice ends
