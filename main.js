/**
 * @param {string[]} inputs an array of strings
 * @returns {object} record of repeated strings in inputs, where key = input string : value = number of times key was repeated in array
 */
const tallyRepeatedInput = (inputs) => {
  // validate
  if (!Array.isArray(inputs)) return {};

  const results = {};
  for(let i=0; i < inputs.length; i++) {
    const key = inputs[i];
    // validate
    if (typeof(key) !== "string" || key.length <= 0) continue;

    // Tally
    if (Object.hasOwn(results, key)) {
      results[key]++;
    } else {
      results[key] = 1;
    }
  }

  return results;
}

let orderInput = prompt(
  `List froyo orders by writing out the desired flavor for each order (separate orders with commas). 
  Example: vanilla,vanilla,vanilla,strawberry,coffee,coffee`
);

if (orderInput) {
  const talliedOrders = tallyRepeatedInput(orderInput.split(','));
  console.table(talliedOrders);
} else console.log("Order was cancelled");