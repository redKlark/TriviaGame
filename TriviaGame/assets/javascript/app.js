var magic = $('enter');

//Couldn't figure out how to do inline italics or quotations for a variable script so did some tomfoolery. Resolve later.//

//Also got too caught up in trying different things that I made a mess of syntax and routes, will save this to fix for later//

//Mixed up a lot of javascript and jquery resulting in functions not working and calls not responding. Forgot to add countdown variable loop around the questions.

var revenant = 'The Revenant';
var inlineRevenant = revenant;
var ask = '?';

var myTriviaQuestions = [
	{
		question: 'Who is the leading star of the Academy Award Winning movie' + inlineRevenant + ask,
		answers: {
			1: 'Why does this matter?',
			2: 'This is a waste of time',
			3: 'huh?',
			4: 'Leonardo Dicaprio'
		},
		correctAnswer: 4
	},
	{
		question: 'What is Trivia?',
		answers: {
			1: 'Why does this still matter?',
			2: 'This is fun fun fun fun',
			3: 'huh?',
			4: 'Leonardo Dicaprio'
		},
		correctAnswer: 4
	},

	{
		question: 'Am I learning javascript while coding this?',
		answers: {
			1: 'Why do I care?',
			2: 'Javascript is overrated, learn a real language',
			3: 'huh, I thought you were creating this to practice Jquery?',
			4: 'Yes'
		},
		correctAnswer: 4
	}
];

var triviaContainer = $('#trivia');
var resultsContainer = $('#results');
var submitButton = $('#submit');

generateTrivia(triviaContainer, resultsContainer, submitButton);

function generateTrivia(triviaContainer, _resultsContainer, submitButton) {
	function showQuestions(questions, triviaContainer) {
		var output = [];
		var answers;

		for (var i = 0; i < questions.length; i++) {
			answers = [ 4, 4, 4 ];

			for (integer in questions[i].answers) {
				answers.push(
					'<label>' +
						'<input type="radio" name="question' +
						i +
						'" value="' +
						integer +
						'">' +
						integer +
						': ' +
						questions[i].answers[integer] +
						'</label>'
				);
			}

			output.push(
				'<div class="question">' +
					questions[i].question +
					'</div>' +
					'<div class="answers">' +
					answers.join('') +
					'</div>'
			);
		}

		console.log(output);

		triviaContainer.html(output.join(''));
	}

	function showResults(questions, resultsContainer) {
		var userAnswer = '';
		var numCorrect = 0;
		for (var i = 0; i < questions.length; i++) {
			userAnswer = $('input[name=question' + i + ']:checked').val();
			console.log(userAnswer);
			if (userAnswer == questions[i].correctAnswer) {
				numCorrect++;
				$('input[name=question' + i + ']:checked').parent().css('color', 'green');
			} else {
				$('input[name=question' + i + ']:checked').parent().css('color', 'red');
			}
		}

		resultsContainer.html(numCorrect + ' out of ' + questions.length);
	}

	showQuestions(myTriviaQuestions, triviaContainer);

	submitButton.on('click', function() {
		showResults(myTriviaQuestions, resultsContainer);
	});
}

$(document).on('click', '#enter', function() {
	generateTrivia(triviaContainer, resultsContainer, submitButton);
});

$(document).on('click', '#done', function() {
	game.done();
});
