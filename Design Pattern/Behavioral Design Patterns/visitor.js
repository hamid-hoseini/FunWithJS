class Monkey {
  shout() {
      console.log('Ooh oo aa aa!')
  }

  accept(operation) {
      operation.visitMonkey(this)
  }
}

class Lion {
  roar() {
      console.log('Roaaar!')
  }
  
  accept(operation) {
      operation.visitLion(this)
  }
}

class Dolphin {
  speak() {
      console.log('Tuut tuttu tuutt!')
  }
  
  accept(operation) {
      operation.visitDolphin(this)
  }
}

const speak = {
  visitMonkey(monkey){
      monkey.shout()
  },
  visitLion(lion){
      lion.roar()
  },
  visitDolphin(dolphin){
      dolphin.speak()
  }
}

//  it can be used as

const monkey = new Monkey()
const lion = new Lion()
const dolphin = new Dolphin()

monkey.accept(speak)    // Ooh oo aa aa!    
lion.accept(speak)      // Roaaar!
dolphin.accept(speak)   // Tuut tutt tuutt!