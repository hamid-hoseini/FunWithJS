/**
 * Deep Freeze
 * To make an object immutable, recursively freeze each non-primitive property (deep freeze)
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 */

function deepFreeze(object) {
    // Retrieve the property names defined on object
    const propNames = Reflect.ownKeys(object);
  
    // Freeze properties before freezing self
    for (const name of propNames) {
      const value = object[name];
  
      if ((value && typeof value === "object") || typeof value === "function") {
        deepFreeze(value);
      }
    }
  
    return Object.freeze(object);
  }
  
  const obj2 = {
    internal: {
      a: null,
    },
  };
  
  deepFreeze(obj2);
  
  obj2.internal.a = "anotherValue"; // fails silently in non-strict mode
  obj2.internal.a; // null