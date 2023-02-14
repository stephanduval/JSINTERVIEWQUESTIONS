// Question 1
// console.log(foo);
// foo = 1;

//undefined
// variable isnt defined before its called

// question 2
// console.log(foo);
// var foo = 2;

// hoisting delcaration of variable will bubble to the start of the file. (Var foo is declared)

// question 3
// This code works!  TRhe var declaration is hoisted to the top of the file
// foo = 3;
// console.log(foo);
// var foo;

// It works with functions too!  This code will run
foo();
function foo() {}

// const and let do NOT bubble that is why it's preferred to use.  It runs the same way we see it on the screen.
