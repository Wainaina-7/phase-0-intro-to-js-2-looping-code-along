function writeCards(names, event) {
  // Step 1: Create a new empty array to hold the messages
  let messages = [];

  // Step 2: Use a for loop to iterate through the input array
  for (let i = 0; i < names.length; i++) {
    // Step 3: Build the thank-you message using string interpolation
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;

    // Step 4: Add the message to the new array
    messages.push(message);
  }

  // Step 5: Return the array after the loop finishes
  return messages;
}

function countDown(n) {
  while (n >= 0) {
    console.log(n);
    n--;
  }
}
