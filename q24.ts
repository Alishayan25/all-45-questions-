
// Tests for Equality and Inequality with Strings
let string1 = "hello";
let string2 = "world";
let string3 = "hello";

// Equality test
if (string1 === string3) {
    console.log("string1 and string3 are equal"); // This will be printed
} else {
    console.log("string1 and string3 are not equal");
}

// Inequality test
if (string1 !== string2) 
{console.log("string1 and string2 are not equal"); // This will be printed
} else {
    console.log("string1 and string2 are equal");
}



// Tests Using the Lower Case Function

let text2 = "HELLO WORLD";
let lowerCaseText = text2.toLowerCase();

if (lowerCaseText === "hello world") {
    console.log("The text is now in lower case"); // This will be printed
} else {
    console.log("The text is not in lower case");
}



// Numerical Tests Involving Equality and Inequality, Greater Than and Less Than, 
// Greater Than or Equal To, and Less Than or Equal To

let num1 =  10;
let num2 =  20;

// Equality test
if (num1 === num2) {
    console.log("num1 and num2 are equal");
} else {
    console.log("num1 and num2 are not equal"); // This will be printed
}

// Inequality test
if (num1 !== num2) {
    console.log("num1 and num2 are not equal"); // This will be printed
} else {
    console.log("num1 and num2 are equal");
}

// Greater than test
if (num2 > num1) {
    console.log("num2 is greater than num1"); // This will be printed
} else {
    console.log("num2 is not greater than num1");
}

// Less than test
if (num1 < num2) {
    console.log("num1 is less than num2"); // This will be printed
} else {
    console.log("num1 is not less than num2");
}

// Greater than or equal to test
if (num2 >= num1) {
    console.log("num2 is greater than or equal to num1"); // This will be printed
} else {
    console.log("num2 is not greater than or equal to num1");
}

// Less than or equal to test
if (num1 <= num2) {
    console.log("num1 is less than or equal to num2"); // This will be printed
} else {
    console.log("The ite is in the array");}
 