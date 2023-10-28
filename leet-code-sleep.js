// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

// JS CODE GOES HERE

function sleep(millis) {
    return new Promise(resolve => {
      setTimeout(resolve, millis);
    });
  }
  
  
  async function exampleUsage() {
    console.log("Sleeping for 2000 milliseconds...");
    await sleep(2000); 
    console.log("Done sleeping!");
  }
  
  exampleUsage();
 