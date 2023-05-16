class Car {
    constructor(doors, brand, color) {
      this.doors = doors;
      this.brand = brand;
      this.color = color;
    }
  }
  
  class CarType {
    createCar(type) {
      switch(type) {
        case 'hatchback':
          return new Car(3, 'Audi', 'black');
        case 'sedan':
          return new Car(5, 'BMW', 'white');
      }
    }
  }
  
  const carType = new CarType();
  const sedan = carType.createCar('sedan');
  const hatchback = carType.createCar('hatchback');
  
  console.log(sedan); // Car { doors: 5, brand: 'BMW', color: 'white' }
  console.log(hatchback); // Car { doors: 3, brand: 'Audi', color: 'black' }