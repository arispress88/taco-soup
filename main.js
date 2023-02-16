var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];
var i = 0;

while(i < harryPotterTitles.length){
    console.log("Harry Potter " + harryPotterTitles[i] );
    i++;
}


var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

for(var i = 0; i < grades.length; i++){
    console.log(grades[i])
    if(grades[i] >=0 && grades[i] <= 69){
        console.log("You got an F")
    }
    if(grades[i] >=70 && grades[i] <=76){
        console.log("You got a D")
    }
    if(grades[i] >=77 && grades[i] <=84){
        console.log("You got a C")
    }
    if(grades[i] >=85 && grades[i] <=92){
        console.log("You got a B")
    }
    if(grades[i] >=93 && grades[i] <=100){
        console.log("You got an A")
    }
}
let totalOfA = 2
let totalOfB = 7

console.log(`${totalOfA} students received an A.`)
console.log(`${totalOfB} students received a B.`)

let numberOfStudentAs=0
let numberOfStudentBs=0
let numberOfStudentCs=0
let numberOfStudentDs=0
let numberOfStudentFs=0

for(let i = 0; i < grades.length; i++){
    if(grades[i] >=0 && grades[i] <= 69){
        numberOfStudentFs += 1
        
    } else if(grades[i] >=70 && grades[i] <= 76){
        numberOfStudentDs += 1
        
    } else if(grades[i] >=77 && grades[i] <=84){
        numberOfStudentCs += 1
       
    } else if(grades[i] >=85 && grades[i] <= 92){
        numberOfStudentBs += 1
       
    } else if(grades[i] >=93 && grades[i] <= 100){
        numberOfStudentAs += 1
        
    }  
}

let totalGradePoints = 92 + 91 + 75 + 66 + 52 + 90 + 83 + 85 + 64 + 90 + 72 + 88 + 77 + 98 + 100 + 73 + 92 

let findAverage = (array) => {
    let average = 0;
    for (let i = 0; i <grades.length; i++){
        let gradeAverage = grades[i]
        average += gradeAverage; 
    }
    average = average /array.length
    return average;
}



console.log(`The most common grade is B with ${numberOfStudentBs} students.`)
console.log(Math.ceil(findAverage([92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92])))



for (let counter = 2; counter < 10; counter += 2){
    console.log(counter);
}
console.log("Who do we appreciate?!");

var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let cowSentence = ""

for(let i = 0; i < sentenceArray.length; i++){
     if((i + 1) % 3 === 0 ){
        cowSentence = cowSentence + ` ${sentenceArray[i]} MOOOOOOOO`
    }
        
    
    else{
        cowSentence = cowSentence + ` ${sentenceArray[i]}`
    }
    
}
console.log(cowSentence)
   
    



const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[0]} Album. `)

console.log(`${beatles.members[0].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[0].birth}. He contributed heavily to the ${beatles.albums[1]} Album. `)

console.log(`${beatles.members[2].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[2].birth}. He contributed heavily to the ${beatles.albums[3]} Album. `)

console.log(`${beatles.members[3].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[3].birth}. He contributed heavily to the ${beatles.albums[2]} Album. `)
