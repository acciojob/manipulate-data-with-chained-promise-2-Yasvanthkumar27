//your JS code here. If required.
// script.js

var output = document.getElementById("output");

var numbers = [1, 2, 3, 4];

function showArray(arr) {
  output.textContent = "[" + arr.join(", ") + "]";
}

// Initial promise resolving with array
function startPromise() {
  return new Promise(function (resolve) {
    resolve(numbers);
  });
}

// Chain promises
startPromise()
  .then(function (arr) {
    // Step 1 - filter even numbers after 1 second
    return new Promise(function (resolve) {
      var filtered = arr.filter(function (num) {
        return num % 2 === 0;
      });

      setTimeout(function () {
        showArray(filtered);   // Displays [2, 4]
        resolve(filtered);
      }, 1000);
    });
  })
  .then(function (evenNumbers) {
    // Step 2 - multiply numbers by 2 after another 2 seconds
    return new Promise(function (resolve) {
      var multiplied = evenNumbers.map(function (num) {
        return num * 2;
      });

      setTimeout(function () {
        showArray(multiplied); // Displays [4, 8]
        resolve(multiplied);
      }, 2000);
    });
  });

