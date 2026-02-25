var user = {
    firstName: "Madhura",
    lastName: "Sarkar",
    roll: "admin",
    courseList: [],

    // creating method 
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in  total of ${this.courseList.length} courses`;
    },
};

var courseList = true;
console.log(user.getCourseCount());
user.buyCourse("Game Development");
user.buyCourse("UI/UX Design");
console.log(user.getCourseCount());