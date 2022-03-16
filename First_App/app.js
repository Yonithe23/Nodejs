const Events = require('events');// load event modeule and return Class or we get class 
const eventEmit = new Event(); // now creat instance of class or object. object is used in our application

//register a listeners
eventEmit.on('SecondEvent', function(a, b) {
    console.log(a, b, this);
}); // call back function is recived  an argument
     // on method two parameter 1, name of event emit and 2 is callback function or actual funtion. the main purpouse is when the name of event is
// event is match the function is event is Rasied

// Rasied an event 
eventEmit.emit('SecondEvent','a', 'b'); // on emit we pass argument is the name of event is
// when event is apper and send some data  about that event onthis case event argument

