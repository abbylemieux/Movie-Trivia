//score
let score = 0;
const questionCount = 10;
let buttonParents = document.querySelectorAll('.buttonParent');
for (let i = 1; i <= buttonParents.length; i++) {
    let questionKey = `question${i}`;
    answers[questionKey].forEach((answer) => {
      let button = document.createElement('button');
      button.innerHTML = answer;
      button.addEventListener('click', () => {
        console.log('clicked', answer);
      });
      buttonParents[i - 1].appendChild(button);
    })
}
const answers = {
   question1:[
    "Red",
    "Blue",
    "Green",
   ],
   question2:[
    "Zamunda",
    "Wakanda",
    "Elbonia",
   ],
    question3:[
    "Vito Corleone",
    "Michael Corleone",
    "Fredo Corleone",
    ],
    question4:[
    "Tryceratops",
    "Velociraptor",
    "Chameleon Dinosaur",
    ],
    question5:[
    "Leonardo DiCaprio",
    "Tom Hardy",
    "Joseph Gordon-Levitt",
    ],
    question6:[
    "Johnny Depp",
    "Orlando Bloom",
    "Geoffrey Rush",
    ],
    question7:[
    "Dr. Emmett Brown",
    "Dr. Richard Gray",
    "Dr. Howard Stark",
    ],
    question8:[
    "Truman Burbank",
    "Peter Weir",
    "Chris Neilson",
    ],
    question9:[
    "Rocket",
    "Groot",
    "Drax",
    ],
    question10:[
    "Raifiki",
    "Scar",
    "Mufasa"
    ]
};
//correct answers
const correctAnswers = {
    question1: "Red",
    question2: "Zamunda",
    question3: "Vito Corleone",
    question4: "Velociraptor",
    question5: "Leonardo DiCaprio",
    question6: "Johnny Depp",
    question7: "Dr. Emmett Brown",
    question8: "Truman Burbank",
    question9: "Rocket",
    question10: "Mufasa"
};
if (answers === correctAnswers[questionKey]) {
    score++;
}
