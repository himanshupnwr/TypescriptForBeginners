let coursesSet = new Set();

coursesSet.add("Angular Crash Course");
coursesSet.add("React");
coursesSet.add("Node");
coursesSet.add("Serverless");
coursesSet.add("React");
console.log(coursesSet.size)
console.log(coursesSet.values())
coursesSet.forEach(function(course)
{console.log(course)});