function startEvent(callback) {
  console.log("Event Planning Started");
  setTimeout(() => {
    callback();
  }, 1000);
}

function writeContent(callback) {
  console.log("Content Writing Started");
  let content = "Some Content....";
  setTimeout(() => {
    callback(content);
  }, 1000);
}

function verifyContent(data, callback) {
  console.log("Verification Started");
  setTimeout(() => {
    let verified = true;
    if (verified) callback(data);
  }, 1000);
}

function printFlex(data, callback) {
  console.log("Printing Started");
  setTimeout(() => {
    callback(data);
  }, 1000);
}


//Callback hell
startEvent(() => {
  writeContent((content) => {
    verifyContent(content, (verifiedContent) => {
      printFlex(verifiedContent, (flex) => {
        console.log("Flex is Printed for : " + flex);
      });
    });
  });
});
/*
Promise
JSON
HTTP Req Methods
HTTP Status Codes
Call to Web APIs (Fetch/AXIOS)

Pre -> CW -> FC/FIC -> Print -> ModuB -> Flex
Problems of callback functions:-
 1>Inversion of Control
 2>Callback Hell
*/

/*
JS  Promises are a way to handle asynchronous operations in a more organized manner by using the Promise object and
Solution using Promises:
- A Promise represents the eventual completion or failure of an asynchronous operation and its resulting value.

Complied -> Success
         -> Failure
Promise is a object in JS that  represents the eventual completion or failure of an asynchronous operation and its resulting value. Promise also provides a
Succees -> Resolve
Failure -> Reject
Waiting -> Pending


*/