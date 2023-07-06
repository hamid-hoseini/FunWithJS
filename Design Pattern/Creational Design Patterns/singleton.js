const president = (function(){
  const presidentsPrivateInformation = 'Super private'

  const name = 'Turd Sandwich'

  const getName = () => name

  return {
      getName
  }
}());

/** 
 * Here, presidentsPrivateInformation and name are kept private. However, 
 * name can be accessed with the exposed president.getName method.
 */ 

president.getName() // Outputs 'Turd Sandwich'
president.name // Outputs undefined
president.presidentsPrivateInformation // Outputs undefined