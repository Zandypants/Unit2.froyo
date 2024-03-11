const flavors = ["vanilla", "strawberry", "coffee"];

const verifyPropertyNumber = (obj, key) => {
  return Object.hasOwn(obj, key) && typeof(obj[key]) === "number";
}

const parseInputs = (inputs, table) => {
  if (!Array.isArray(inputs)) return `Expected array input, got: ${inputs}`;
  if (typeof(table) !== "object") return `Expected object argument to record output, got: ${table}`;

  console.log(inputs);
  for(let i=0; i < inputs.length; i++) {
    if (!verifyPropertyNumber(table, inputs[i])) continue;

    table[inputs[i]]++;
  }
}

let orderInput = prompt(
  `List froyo orders by writing out the desired flavor for each order (separate orders with commas). 
  Available flavors are: ${flavors}`, `${flavors[0]},${flavors[0]},${flavors[1]}`
);
// make input case insensitive
orderInput = orderInput.toLowerCase();

// Initialize tallied orders with available flavors
const talliedOrders = {};
for(let i=0; i < flavors.length; i++) {
  talliedOrders[flavors[i]] = 0;
}
//tally orders from input
parseInputs(orderInput.split(','), talliedOrders);

// display
console.table(talliedOrders);