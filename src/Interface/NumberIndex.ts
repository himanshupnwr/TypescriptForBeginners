interface StudentName{
    [index:number]:string;
}

interface StudentScore{
    [index:string]:number;
}

var studentNames:StudentName = ["John","Bob","Doug"];

var studentScores : StudentScore = {};

studentScores["John"] = 100;
studentScores["Bob"] = 90;

for(var item in studentScores){
    console.log(item);
    console.log(studentScores[item]);
}