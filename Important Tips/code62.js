// Call method in Javascript

// With the call() method, you can write a method that can be used on different objects

// Sample:

const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

// This will return "John Doe":
person.fullName(); 

// With call(), an object can use a method belonging to another object.

const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1);


// The call() Method with Arguments
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.call(person1, "Oslo", "Norway");

// Let's see another usage of Call() method
const obj = {
  disable: () => {
    console.log("this is disabled");
    
  },
  enable: () => {
    console.log("this is enabled");
  }
}

// This will return "this is enabled":
obj.enable();  

// This will return "this is enabled":
const enb = obj.enable;
enb.call(obj);
