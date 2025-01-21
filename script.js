function calculateNameSum(name) {
  let sum = 0;
  name = name.toUpperCase();

  for (let i = 0; i < name.length; i++) {
    let charCode = name.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      sum += charCode - 65 + 1;
    }
  }
  return sum;
}

function getUserInputAndCalculateSum() {
  let name = prompt('Please enter a name:');
  let sum = calculateNameSum(name);

  alert(`The sum of the name "${name}" is: ${sum}`);

  //   other possible option to display the sum
  //   console.log(`The sum of the name "${name}" is: ${sum}`);
}

getUserInputAndCalculateSum();
