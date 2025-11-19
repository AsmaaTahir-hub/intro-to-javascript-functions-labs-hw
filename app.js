// Exercise #1
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

// Exercise #2
  function isAdult(age){
    if (age >= 18){
      return 'Adult';
    } 
    else{
      return 'Minor';
    }
  }
console.log('Exercise 3 Result:', isAdult(21));

// Exercise #3
function isCharAVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u']; 
    return vowels.includes(char.toLowerCase());
  }
console.log('Exercise 3 Result:', isCharAVowel("a"));

// Exercise #4
function generateEmail(name, domain){
    return name + "@" + domain;
}

console.log('Exercise 4 Result:', generateEmail('Asmaa1997', 'example.com'));

// Exercise #5
function greetUser(name, time) {
  return "Good " + time + ", " + name + "!";
}

console.log("Exercise 5 Result:", greetUser("Asma", "morning"));

// Exercise #6
function maxOfThree(num1, num2, num3){
  return Math.max(num1, num2, num3);
}

console.log('Exercise 6 Result:', maxOfThree(17, 4, 9));

// Exercise #7
function calculateTip(bill, percentage) {
  return (bill * percentage) / 100;
}

console.log('Exercise 7 Result:', calculateTip(50, 20));