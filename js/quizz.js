// Randomizer function
function selectRandomElements(array, n) {
    if (n > array.length) {
      console.log("Error: n is greater than the length of the array.");
      return;
    }
  
    const randomElements = [];
    const arrayCopy = array.slice();
  
    for (let i = 0; i < n; i++) {
      const randomIndex = Math.floor(Math.random() * arrayCopy.length);
      const randomElement = arrayCopy.splice(randomIndex, 1)[0];
      randomElements.push(randomElement);
    }
  
    return randomElements;
  }
  
  // Generate quiz
  function generateQuiz(questions) {
    const questionContainer = document.getElementById("question-container");
  
    for (let i = 0; i < questions.length; i++) {
      const [question, option1, option2, option3, option4, answer] = questions[i];
  
      CorrectAnswers.push(`que${i + 1}_option${answer + 1}`);
  
      const questionHTML = `
        <li class = "oneque">
  
            <h3>${question}</h3>
            <div class="optcont">
              <input type="radio" name="que${i + 1}" id="que${
        i + 1
      }_option1" class="que${i + 1}_option_1" value="0" />
              <label class="quiz-label" for="que${
                i + 1
              }_option1">${option1}</label>
              
              <input type="radio" name="que${i + 1}" id="que${
        i + 1
      }_option2" class="que${i + 1}_option_2" value="1" />
              <label class="quiz-label" for="que${
                i + 1
              }_option2">${option2}</label>
              
              <input type="radio" name="que${i + 1}" id="que${
        i + 1
      }_option3" class="que${i + 1}_option_3" value="2" />
              <label class="quiz-label" for="que${
                i + 1
              }_option3">${option3}</label>
              
              <input type="radio" name="que${i + 1}" id="que${
        i + 1
      }_option4" class="que${i + 1}_option_4" value="3" />
              <label class="quiz-label" for="que${
                i + 1
              }_option4">${option4}</label>
            </div>
        </li>
      `;
  
      questionContainer.insertAdjacentHTML("beforeend", questionHTML);
    }
  }
  