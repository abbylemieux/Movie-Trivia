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
 
 let score = 0;
 const questionCount = 10;
 let buttonParents = document.querySelectorAll('.buttonParent');
 let buttonsAdded = 0;
 let buttons = [];
 buttonParents.forEach((parent)=>{
     buttons.push(parent.querySelector('button'));
    
 })
 
 for (let i = 0; i < questionCount-1; i++) {
 
     let questionKey = `question${(i + 1)}`;
     console.log(answers[questionKey]);
     answers[questionKey].forEach((answer) => {
     console.log('answer', answer);
       buttons[buttonsAdded].innerHTML = answer;
       console.log('button', buttons[buttonsAdded]);
       buttons[buttonsAdded].addEventListener('click', () => {
         console.log('clicked', answer);
         //turn button blue when clicked
         
         if (answer === correctAnswers[questionKey]) {
             score++;
         }
       });
         buttonsAdded++;
     })
     };
 
 // buttonParents.forEach((parent,i)=>{
 //     console.log("loop");
 //     let questionKey = `question${i}`;
 //     const buttons = parent.querySelector("button");
 //     console.log(answers[questionKey]);
 //     answers[questionKey].forEach((answer) => {
 //       let button = document.createElement('button');
 //       button.innerHTML = answer;
 //       button.addEventListener('click', () => {
 //         console.log('clicked', answer);
 //       });
 //       buttonParents[i - 1].appendChild(button);
 //     })
 // }); 
 // if (answers === correctAnswers[questionKey]) {
 //     score++;
 // }