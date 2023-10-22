(function (params) {
   
    const titleQuestions= [...document.querySelectorAll('.questions_title')];

    console.log(titleQuestions);

    titleQuestions.forEach(questions => {

        questions.addEventListener('click', () => {
            
        let heigh = 0;
        let answer = questions.nextElementSibling;
        let addPadding = questions.parentElement.parentElement;

        addPadding.classList.toggle('questions_padding-add');

        questions.children[0].classList.toggle('questions_arrow-rotate')

        // si clientHeight es igual a 0, quiere decir que tiene el valor en 0
        console.log(answer.clientHeight);
        if (answer.clientHeight === 0) {
            
            // Tomará el alto mínimo para que se muestre el parrafo de las preguntas
             heigh = answer.scrollHeight;

        }

        answer.style.height = `${heigh}px`;
        });
        
    })
})()