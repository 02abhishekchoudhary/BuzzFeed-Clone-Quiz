const questionDisplay = document.querySelector('#questions');
const answerDisplay = document.querySelector('#answer');

const questions = [
    {
        id: 0,
        text: 'Pick a vacation destination:',
        answers: [
            {
                text: 'New York',
                image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                alt: 'Photo of the Empire State building during daytime',
                credit: 'Olivier Niblett'
            },
            {
                text: 'Austin',
                image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXVzdGlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                alt: 'Time-lapse photography car lights on bridge',
                credit: 'Carlos Alfonso'
            },
            {
                text: 'Portland',
                image: 'https://images.unsplash.com/photo-1541457523724-95f54f7740cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydGxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                alt: 'High-rise buildings',
                credit: 'Elena Kuchko'
            },
            {
                text: 'New Orleans',
                image: 'https://images.unsplash.com/photo-1616463539061-adcd0d7664de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5ldyUyMG9ybGVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                alt: 'Road with people and house',
                credit: 'Joao Francisco'
            }
        ]
    },
    {
        id: 1,
        text: 'Pick some food:',
        answers: [
            {
                text: 'Pizza',
                image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVwcGVyb25pJTIwcGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                alt: 'Pepperoni Pizza',
                credit: 'Alan Hardman'
            },
            {
                text: 'Sandwich',
                image: 'https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHNhbmR3aWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                alt: 'Chicken sandwich on white surface',
                credit: 'Eaters Collective'
            },
            {
                text: 'Pasta',
                image: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBhc3RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                alt: 'Pasta in tomato sauce',
                credit: 'Mgg Vitvhakorn'
            },
            {
                text: 'Hamburger',
                image: 'https://images.unsplash.com/photo-1576843776838-032ac46fbb93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGhhbWJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                alt: 'hamburger',
                credit: 'sk'
            }
        ]

    },
    {
        id: 2,
        text: 'Pick a home:',
        answers: [
            {
                text: 'Traditional',
                image: 'https://images.unsplash.com/photo-1502745241548-8b38f964ed2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHRyYWRpdGlvbmFsJTIwaG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                alt: 'focus photography of building windows',
                credit: 'Burgess Milner'
            },
            {
                text: 'Modern',
                image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                alt: 'low angle view of building',
                credit: 'Brandon Giggs'
            },
            {
                text: 'House',
                image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                alt: 'trees beside white house',
                credit: 'Phil Hearing'
            },
            {
                text: 'Mountains',
                image: 'https://images.unsplash.com/photo-1485464665716-8014744ceccc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW91bnRhaW5zJTIwaG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                alt: 'brown wooden cabin infront of forest',
                credit: 'eulauretta'
            }
        ]
    }
]

const answers = [
    {
        combination: ['New York','Traditional', 'Pizza'],
        text: 'Blue Cheese',
        image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMGNoZWVzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'Blue cheese'
    },
    {
        combination: ['Austin','Modern', 'Pasta'],
        text: 'Cheddar',
        image: 'https://images.unsplash.com/photo-1625085576040-898520ce9e0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZGRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'Cheddar cheese'
    },
    {
        combination: ['Portland','House', 'Sandwich'],
        text: 'Feta',
        image: 'https://images.unsplash.com/photo-1626957341926-98752fc2ba90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmV0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'Feta cheese'
    },
    {
        combination: ['New Orleans','Mountains', 'Hamburger'],
        text: 'Halloumi',
        image: 'https://images.unsplash.com/photo-1519411792752-25c2468cccb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGFsbG91bWklMjBjaGVlc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        alt: 'Halloumi cheese'
    }
]
// need to have a default answer to compensate for lack of combination data.

const unAnsweredQuestions = [];
const chosenAnswers = [];

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div');
        titleBlock.id = question.id;
        titleBlock.classList.add('title-block');
        const titleHeading = document.createElement('h2');
        titleHeading.textContent = question.text;
        titleBlock.append(titleHeading);
        questionDisplay.append(titleBlock);

        const answersBlock = document.createElement('div');
        answersBlock.id = question.id + '-questions';
        answersBlock.classList.add('answer-options');

        unAnsweredQuestions.push(question.id);

        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div');
            answerBlock.classList.add('answer-block');
            answerBlock.addEventListener('click', () => handleClick(question.id, answer.text));
            const answerImage = document.createElement('img');
            answerImage.setAttribute('src', answer.image);
            answerImage.setAttribute('alt', answer.alt);

            const answerTitle = document.createElement('h3');
            answerTitle.textContent = answer.text;

            const answerInfo = document.createElement('p');
            const imageLink = document.createElement('a');
            imageLink.setAttribute('href', answer.image);
            imageLink.text = answer.credit;
            const sourceLink = document.createElement('a');
            sourceLink.textContent = 'Unsplash';
            sourceLink.setAttribute('src', 'https://www.unsplash.com');
            answerInfo.append(imageLink, ' to ', sourceLink);

            answerBlock.append(answerImage, answerTitle, answerInfo);

            answersBlock.append(answerBlock);
        });
        questionDisplay.append(answersBlock);
    });
}

populateQuestions();

const handleClick = (questionId, chosenAnswer) => {
    // console.log(questionId, chosenAnswer);
    if(unAnsweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer);
    const itemToRemove = unAnsweredQuestions.indexOf(questionId);

    if(itemToRemove > -1){
        unAnsweredQuestions.splice(itemToRemove, 1);
    }
    console.log(chosenAnswers);
    console.log(unAnsweredQuestions);

    disableQuestionBlock(questionId, chosenAnswer);
    const lowestQuestionId = Math.min(...unAnsweredQuestions);
    location.href = '#' + lowestQuestionId;

    if(!unAnsweredQuestions.length){
        // scroll to answer div
        location.href = '#answer';
        showAnswer();
    }
}

const showAnswer = () => {
    let result;
    answers.forEach(answer => {
        if(
            chosenAnswers.includes(answer.combination[0]) +
            chosenAnswers.includes(answer.combination[1]) +
            chosenAnswers.includes(answer.combination[2])
        ){
            result = answer;
        }else if(!result){
            // first answer object is default
            result = answers[0];
        }
    });
    // console.log(result);
    const answerBlock = document.createElement('div');
    answerBlock.classList.add('result-block');
    const anwerTitle = document.createElement('h3');
    anwerTitle.textContent = result.text;
    const answerImage = document.createElement('img');
    answerImage.setAttribute('src', result.image);
    answerImage.setAttribute('alt', result.alt);

    answerBlock.append(anwerTitle, answerImage);

    answerDisplay.append(answerBlock);

    const allAnswerBlocks = document.querySelectorAll('.answer-block');
    Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)));
}

const disableQuestionBlock = (questionId, chosenAnswer) => {
    const currentQuestionBlock = document.getElementById(questionId + '-questions');
    
    Array.from(currentQuestionBlock.children).forEach(block => {
        if(block.children.item(1).innerText !== chosenAnswer){
            block.style.opacity = '50%';
        }
    });
}
