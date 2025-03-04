function myFunction() {
  console.log(this);
}

const myContext = { value: 'A' };

myFunction.call(myContext);  // logs { value: 'A' }
myFunction.apply(myContext); // logs { value: 'A' }

/* function MyFunction() {
  console.log(this);
}

new MyFunction(); // logs an instance of MyFunction */

