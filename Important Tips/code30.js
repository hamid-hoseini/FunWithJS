// Observable

/**
 * An Observable is basically a function that can return a stream of values either 
 * synchronously or asynchronously to an observer over time. The consumer can get the 
 * value by calling subscribe() method. Let's look at a simple example of an Observable
 */

import { Observable } from "rxjs";

const observable = new Observable((observer) => {
  setTimeout(() => {
    observer.next("Message from a Observable!");
  }, 3000);
});

observable.subscribe((value) => console.log(value));

// Note: Observables are not part of the JavaScript language yet but they are being proposed to be added to the language

