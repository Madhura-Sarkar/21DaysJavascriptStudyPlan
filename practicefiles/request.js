// Use the Fetch API to make a GET request to this endpoint: https://cat-fact.herokuapp.com/facts 
fetch("https://cat-fact.herokuapp.com/facts")
.then(response => {
    return response.json();
})
.then(data => {
    console.log("Cat Facts:", data);
})
.catch(error => {
    console.error("Error:", error);
});



// Iterate through the response array and print the text to the console. 
fetch("https://cat-fact.herokuapp.com/facts")
  .then(response => response.json())
  .then(data => {
    data.forEach(fact => {
      console.log(fact.text);
    });
  })
  .catch(error => console.log("Error:", error));



// Repeat the above, but use XMLHttpRequest this time. 
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://cat-fact.herokuapp.com/facts");

xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);

    data.forEach(fact => {
      console.log(fact.text);
    });
  }
};

xhr.onerror = function () {
  console.log("Request failed");
};

xhr.send();



// Create a JSON object representing a person with the following properties: name, age, email, and address. Assign this object to a variable called person.
const person = JSON.stringify({
  name: "Alice",
  age: 28,
  email: "alice@example.com",
  address: "123 Park Street, Kolkata"
});

console.log(person);