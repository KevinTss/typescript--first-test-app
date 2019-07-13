// Type assertion
var message;
message = 'abc';
var isEndsWithC = message.endsWith('c');
// the <string> allow us to tell TS that the following variable is a string
// Then you can have the intellisense with the methods `endsWith` who is aviable only on a string variable
// Other way to do it
var isEndsWithC_2 = message.endsWith('c');
// These both methods won't change the type of the variable. It's just a way to tell TS that this specific cariable is this type
