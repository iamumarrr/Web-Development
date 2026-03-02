const users = [
    { name: "Alice", courses: ["Math", "Science", "English"] },
    { name: "Bob", courses: ["Math", "Art"] },
    { name: "Charlie", courses: ["Science", "Math", "History"] },
    { name: "David", courses: ["Math", "English"] },
    { name: "Eve", courses: ["Art", "Science"] }
];
const courseCount = {};

for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].courses.length; j++) {
        let course = users[i].courses[j];

        if (courseCount[course]) {
            courseCount[course]++;
        } else {
            courseCount[course] = 1;
        }
    }
}

let mostPopularCourse = "";
let highestCount = 0;

for (let course in courseCount) {
    console.log(course + ": " + courseCount[course] + " students");

    if (courseCount[course] > highestCount) {
        highestCount = courseCount[course];
        mostPopularCourse = course;
    }
}

console.log("Most popular course: " + mostPopularCourse + " with " + highestCount + " students");