// Create an array of 6 employee objects. Each employee should have a name, salary, and isActive property. Exactly three employees should have isActive set to true and the remaining three should be false (assign them randomly). Use the filter() method to get only inactive employees whose salary is greater than 25,000. Then print only their name using map(). Do not print the entire object.

const employees = [
    { name: "Tina", salary: 30000, isActive: true},
    { name: "Disha", salary: 20000, isActive: false},
    { name: "Sam", salary: 40000, isActive: true},
    { name: "Rohan", salary: 25000, isActive: false},
    { name: "Sayak", salary: 35000, isActive: false},
    { name: "Sraban", salary: 45000, isActive: true}
]

const inactiveEmployees = employees.filter(employees => employees.isActive === false && employees.salary > 25000).map((employees) => employees.name);
console.log(inactiveEmployees);