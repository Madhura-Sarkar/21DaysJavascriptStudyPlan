// Create an array of 6 course objects. Each course should contain title, duration (in hours), and isFree (three true and three false randomly). First use filter() to get only paid courses (isFree === false) that have a duration greater than 10 hours. Then print only the title of those courses. Avoid printing the whole object.

const courses = [
    {title: "JavaScript Basics", duration: 12, isFree: false},
    {title: "HTML Fundamentals", duration: 8, isFree: true},
    {title: "CSS Mastery", duration: 15, isFree: false},
    {title: "React Introduction", duration: 20, isFree: true},
    {title: "Node.js Backend", duration: 25, isFree: false},
    {title: "Python for Beginners", duration: 18, isFree: true}
]

const paidContents = courses.filter((course) => course.isFree === false && course.duration > 10).map((course) => course.title);
console.log(paidContents);