class Burger {
  constructor(builder) {
      this.size = builder.size
      this.cheeze = builder.cheeze || false
      this.pepperoni = builder.pepperoni || false
      this.lettuce = builder.lettuce || false
      this.tomato = builder.tomato || false
  }
}

class BurgerBuilder {

  constructor(size) {
      this.size = size
  }

  addPepperoni() {
      this.pepperoni = true
      return this
  }

  addLettuce() {
      this.lettuce = true
      return this
  }

  addCheeze() {
      this.cheeze = true
      return this
  }

  addTomato() {
      this.tomato = true
      return this
  }

  build() {
      return new Burger(this)
  }
}

// it can be used as:

const burger = (new BurgerBuilder(14))
    .addPepperoni()
    .addLettuce()
    .addTomato()
    .build()

/**
 * It makes your code look less cluttered, since there is only one argument.
 * You don't have to worry about the order of arguments since arguments are now passed as named properties of the object.
 * For example :
 */

// const burger = new Burger({
//   size : 14,
//   pepperoni : true,
//   cheeze : false,
//   lettuce : true,
//   tomato : true
// })

// instead of :
// const burger = new Burger(14, true, false, true, true)
