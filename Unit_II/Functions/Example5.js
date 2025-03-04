function myFunction() {
  console.log(this);
}

// Simple invocation
myFunction(); // logs global object (window)

const myObject = {
  method() {
    console.log(this);
  }
};
// Method invocation
myObject.method(); // logs myObject