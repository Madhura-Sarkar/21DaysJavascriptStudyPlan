const body = document.body
const div = document.querySelector("div")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")

// console.log(spanHi.getAttribute("hi"))
console.log(spanHi.id)


// set id hi to hello 
spanHi.setAttribute("id", "hello")

// remove id bye from span Bye 
spanBye.removeAttribute('id')


// getting data set 
console.log(spanHi.dataset.test)
console.log(spanHi.dataset.longerName)
// add new data 
spanHi.dataset.newName = "Hi"


// class 
spanBye.classList.add('new-class')
// removeclass
spanBye.classList.remove('hi1')
// toggle 
spanBye.classList.toggle('hi3')


// style modifying
spanBye.style.color = "red" 
spanBye.style.backgroundColor = "yellow" 
spanBye.style.padding = "5px"