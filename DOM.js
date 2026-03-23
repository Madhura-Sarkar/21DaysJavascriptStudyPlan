const body =  document.body
// body.append("Hello world!")

// add element using DOM 
const div = document.createElement("div")
// div.innerText = "Hello world"
div.textContent = "Hello world 2"
body.append(div)