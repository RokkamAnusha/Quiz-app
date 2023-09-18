const questions=[{
    question:"When was national congress formed",
    answers:[
        { text:"1856",correct: false},
        { text:"1855",correct: true},
        { text:"1858",correct: false},
        { text:"1955",correct: false},
    ]
},
{
    question:"Kathak is classical dance of which state?",
    answers:[
        { text:"Assam",correct: false},
        { text:"karnataka",correct: false},
        { text:"Up",correct: true},
        { text:"kerela",correct: false},
    ]
},{
    question:"Bihu is Related to?",
    answers:[
        { text:"Odissa",correct: false},
        { text:"Andhra pradesh",correct: false},
        { text:"Tamil Nadu",correct: false},
        { text:"Assam",correct: true},
    ]
},
{
    question:"shiv kumar is related to which catagery?",
    answers:[
        { text:"dance",correct: false},
        { text:"music",correct: true},
        { text:"History",correct: false},
        { text:"Geography",correct: false},
    ]
},
{
    question:"Lambadi dance is orginated in which state?",
    answers:[
        { text:"Odissa",correct: false},
        { text:"Andhra pradesh",correct: true},
        { text:"Tamil Nadu",correct: false},
        { text:"Assam",correct: false},
    ]
},{
    question:"Frist Hungry strike held by Gandhi ji in which year?",
    answers:[
        { text:"1890",correct: false},
        { text:"1919",correct: false},
        { text:"1918",correct: true},
        { text:"1920",correct: false},
    ]
}];

const questionElement = document.getElementById("question");
const answerbutton=document.getElementById("answerbu");
const nextbutton =document.getElementById("next");

let currentQuestionIndex= 0;
let score =0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextbutton.innerHTML ="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextbutton.style.display ="none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerbutton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextbutton.style.display ="block";
}


function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}`;
    nextbutton.innerHTML="play again";
    nextbutton.style.display ="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextbutton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();