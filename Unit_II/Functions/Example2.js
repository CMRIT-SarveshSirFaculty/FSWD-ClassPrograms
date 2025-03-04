// program showing local scope of a variable
let a = "hello";

function greet() {
    let b = "World" //scope of local variable
    console.log(a + b);
}

greet();
console.log(a + b); // error