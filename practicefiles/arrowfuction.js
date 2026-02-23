// Create a Todo list with six elements, three of them should be true and three of them should be false, all randomly assigned.
// Use filter method and print all the things that are not done and you should not print all the object only the tile should be printed
const todos=[{
    title: 'Wake Up Early',
    isDone: true
},{
    title: 'Go to Office',
    isDone: true
},{
    title: 'Read a Book',
    isDone: false
},{
    title: 'Write Code',
    isDone: true
},{
    title: 'Take a Break',
    isDone: false
},{
    title: 'learn JS',
    isDone: false
}]

// method 1
const thingsNotDone = todos.filter((todo) => todo.isDone === false).map((todo) => todo.title)
console.log(thingsNotDone);

// method 2
const thingsNotDone2 = todos.filter((todo) => {
    return todo.isDone === false
}).map((todo) => {
    return todo.title
})
console.log(thingsNotDone2);

// method 3
const thingsNotDone3 = todos.filter(todo => !todo.isDone).map(todo => todo.title)
console.log(thingsNotDone3);