//async/await method to handle Promise
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

async function main() {
  try {
    await startEvent();
    let content = await writeContent();
    let vc = await verifyContent(content);
    let flex = await printFlex(vc);
    console.log(flex);
  } catch (error) {
     console.log(error);
  }
}

main()