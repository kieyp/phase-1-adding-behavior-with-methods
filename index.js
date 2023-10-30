// Your code here
class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says meow!`;
  }
}

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says woof!`;
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    if (this.name === 'Mable') {
      return `${this.name} says squawk!`;
    }
    return `It's me! ${this.name}, the parrot!`;
  }
}



const whiskers = new Cat('Whiskers', 'male');
console.log(whiskers.speak());  

const buddy = new Dog('Buddy', 'male');
console.log(buddy.speak()); 

const pablo = new Bird('Pablo', 'male');
console.log(pablo.speak());  

const mable = new Bird('Mable', 'female');
console.log(mable.speak());  