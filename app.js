const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            {text: "paris", correct: true},
            {text: "London", correct: false},
            {text: "Berlin", correct: false},
            {text: "Rome", correct: false},
        ]
    },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
        {text: "Earth", correct: false},
        {text: "Saturn", correct: false},
        {text: "Jupiter", correct: true},
        {text: "Uranus", correct: false},
    ]
  },
  {
    question: "What is the smallest country in the world?",
    answers: [
        {text: "Vatican City", correct: true},
        {text: "Monaco", correct: false},
        {text: "Nauru", correct: false},
        {text: "Tuvalu", correct: false},
    ]
  },

  {
    question: "What is the largest living species of lizard?",
    answers: [
        {text: "Komodo dragon", correct: true},
        {text: "Saltwater crocodile", correct: false},
        {text: "Black mamba", correct: false},
        {text: "Green anaconda", correct: false},
    ]
  },

  {
    question: "What is the chemical symbol for gold?",
    answers : [
        {text: "Ag", correct: false},
        {text: "Au", correct: true},
        {text: "Hg", correct: false},
        {text: "Pb", correct: false},
    ]
  },
  {
    question: "What is the largest mammal?",
    answers: [
        {text: "African elephant", correct: false},
        {text: "Blue whale", correct: true},
        {text: "Hippopotamus", correct: false},
        {text: "Giraffe", correct: false},
    ]
  },

  {
    question: "What is the highest mountain peak in the solar system?",
    answers: [
        {text: "Mount Everest", correct: false},
        {text: "Olympus Mons", correct: true},
        {text: "Mauna Kea", correct: false},
        {text: "Denali", correct: false},
    ]
  },
   {
    question: "What is the deepest part of the ocean?",
    answers: [
        {text: "Mariana Trench", correct: true},
        {text: "Challenger Deep", correct: false},
        {text: "Triabian Shear", correct: false},
        {text: "Trubin Daila", correct: false}    
    ]
   },

   {
    question: "What is the smallest planet in our solar system?",
    answers: [
        {text: "Earth", correct: false},
        {text: "Mercury", correct: true},
        {text: "Jupiter", correct: false},
        {text: "Uranus", correct: false},
    ]
   },

   {
     question: "What is furthest planet in our solar system",
     answers : [
        {text: "Neptune", correct: true},
        {text: "Uranus", correct: false},
        {text: "Saturn", correct: false},
        {text: "Pluto", correct: false},
     ]
   },
   {
    question : "What is the hottest planet in our solar system",
    answers : [
        {text: "Mercury", correct: false},
        {text: "Venus", correct: true},
        {text: "Mars", correct: false},
        {text: "Jupiter", correct: false},
    ]
   },

  {
    question : "What planet is referred to as the dwarf planet",
    answers : [
        {text: "Pluto", correct: true},
        {text: "Neptune", correct: false},
        {text: "Mars", correct: false},
        {text: "Jupiter", correct: false},
    ]
  }, 

  {
    question : "What planet is referred to as the earth twins",
    answers : [
        {text: "Venus", correct: true},
        {text: "Mars", correct: false},
        {text: "Jupiter", correct: false},
        {text: "Saturn", correct: false},

    ]

  },

  {
    question : "What are the three planet that may be able to support life",
    answers : [
        {text: "Mars, Venus, Jupiter", correct: false},
        {text: "Mars, Venus, Neptune", correct: false},
        {text: "Mars, Venus, Saturn", correct: false},
        {text: "Mars, Venus, Earth", correct: true},
    ]
  },

  {
    question: "What device is used to measure the speed of the wind",
    answers : [
        {text: "Anemometer", correct: true},
        {text: "Barometer", correct: false},
        {text: "Hygrometer", correct: false},
        {text: "Thermometer", correct: false},

    ]
  }
   
 
]



const questionElement = document.getElementById('question')
const answerButtons = document.getElementById("answers")
const nextButton = document.getElementById('next')


let currentQuestionIndex = 0
let score = 0


function startQuiz(){
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
    showQuestion()
}







function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`

    
    currentQuestion.answers.forEach((answer) =>{
        let button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button)

        if(answer.correct){
            button.dataset.correct = answer.correct
        }

        button.addEventListener("click", selectAnswer)
    })


}

function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

let selectAnswer = (e) => {
    
    let isCorrect = e.target.dataset.correct === "true"

    if(isCorrect){
        e.target.classList.toggle('checked')
        score++
    } else{
        e.target.classList.toggle("checked")
        
    }

    // Array.from(answerButtons.children).forEach(button =>{
    //     if(button.dataset.correct === "true"){
    //         button.classList.add("")
    //     }
    //     button.disabled = true
    // })

    nextButton.style.display = "block"
}

function showScore(){
    resetState()
    questionElement.innerHTML = `Your final score is ${score} out of ${questions.length}`
    nextButton.innerHTML = "Play again"
    nextButton.style.display = "block"
    
}

function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    } else
    showScore()
    

}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }else
    startQuiz()
    

})

startQuiz()




