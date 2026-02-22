// type 1 
const sayHello = (name) => {
    return `Hey there, ${name}!`;
}
console.log(sayHello('Tina'));

// type 2 
const sayHello2 = name => `Hey there, ${name}!`;
console.log(sayHello2('Madhura'));

// example 3
const todos = [{
    title: 'Buy Bread',
    isDone : true
},{
    title: 'Learn Code',
    isDone : true
},{
    title: 'Watch Youtube',
    isDone : false
}]
// const thingsDone = todos.filter((todo) => 
// {
//     return todo.isDone === true;
// })
const thingsDone = todos.filter((todo) => todo.isDone === true)
console.log(thingsDone);