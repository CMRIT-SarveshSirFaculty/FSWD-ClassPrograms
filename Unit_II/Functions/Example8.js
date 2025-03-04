/* function Car(color) {
  this.color = color;
}

const redCar = new Car('red');
redCar instanceof Car; // => true

console.log(redCar instanceof Car); */

const Car = (color) => {
  this.color = color;
};

const redCar = new Car('red'); // TypeError: Car is not a constructor