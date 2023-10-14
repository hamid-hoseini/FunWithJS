// capture browser back button


// The beforeunload event is triggered when the window, the document and its resources are about to be unloaded. 
// This event is helpful to warn users about losing the current data and detect back button event.

 window.addEventListener('beforeunload', () => {
   console.log('Clicked browser back button');
 });

// You can also use popstate event to detect the browser back button. Note: The history entry has been 
// activated using history.pushState method.

window.addEventListener('popstate', () => {
   console.log('Clicked browser back button');
   box.style.backgroundColor = 'white';
 });

const box = document.getElementById('div');

box.addEventListener('click', () => {
 box.style.backgroundColor = 'blue';
 window.history.pushState({}, null, null);
});