// Create custom HTML element

/**
 * To create a custom HTML element, you can use the JavaScript Web Components API. 
 * Here's an example of creating a custom element called "custom-button": 
 * */ 

// Example:

class CustomButton extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    this.attachShadow({ mode: 'open' });

    // Create a button element inside the shadow root
    const button = document.createElement('button');
    button.textContent = 'Click me';

    // Style the button (optional)
    button.style.padding = '10px';
    button.style.backgroundColor = 'lightblue';

    // Attach a click event listener
    button.addEventListener('click', () => {
      console.log('Button clicked!');
    });

    // Append the button to the shadow root
    this.shadowRoot.appendChild(button);
  }
}

// Register the custom element with the browser
customElements.define('custom-button', CustomButton);


/**
 * In this example, we create a custom element `CustomButton` by extending the `HTMLElement` class. 
 * Inside the constructor, we create a shadow root using `attachShadow()` to encapsulate the element's 
 * internal structure and styling. Then, we create a button element, customize its appearance, 
 * and attach a click event listener. 
 * Finally, we append the button to the shadow root using `this.shadowRoot.appendChild()`. 
 * To use the custom element in your HTML, simply use the `<custom-button></custom-button>` tag:
 */

/**
 * In this example, we create a custom element `CustomButton` by extending the `HTMLElement` class. 
 * Inside the constructor, we create a shadow root using `attachShadow()` to encapsulate the element's 
 * internal structure and styling. Then, we create a button element, customize its appearance, 
 * and attach a click event listener.Finally, we append the button to the shadow root using `
 * this.shadowRoot.appendChild()`. To use the custom element in your HTML, simply use 
 * the `<custom-button></custom-button>` tag:
 */


```html
<!DOCTYPE html>
<html>
<head>
  <title>Custom Button Example</title>
</head>
<body>
  <custom-button></custom-button>

  <script src="path-to-your-js-file.js"></script>
</body>
</html>
```

/**
 * When the page loads, the custom button will be rendered, and clicking on it will log a message to the console. 
 * Note that for older browsers or non-supportive environments, you may need to include a polyfill, 
 * such as the Web Components polyfill, to ensure compatibility with the Custom Elements API.
 */
