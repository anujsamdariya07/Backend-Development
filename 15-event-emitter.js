// on - listen for an event
// emit - emit an event

const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data recieved with user: '${name}' and id: '${id}'`);
});
customEmitter.on("response", () => {
  console.log(`some other event`);
});

customEmitter.emit("response", "john", 34);

// We can make as many callback functions for a single event as we want
// We first listen to an event and then listen to it
// We can pass the parameters to the events using emit method
