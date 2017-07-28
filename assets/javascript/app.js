// 1 - generate questions to have user answer *intial*
// var gameQuestions = ["A flock of crows is known as a murder. (T)", "About 100 people per year are killed by falling coconuts. (F- 150)", "During your lifetime, you will produce enough saliva to fill two swimming pools. (T)", "The chance of you dying on the way to get lottery tickets is actually greater than your chance of winning. [T]", "The average person walks the equivalent of four times around the world in their lifetime. (F - 3 times)"]

// 2 - create set amount of time for user to finish the questions (timer)

// 4 - alert "game over" when the time runs out on user 

// 5 - have page display number of questions that player answered correctly 

// 6 - disallow user from being able to pick multiple answers simultaneously.

/


	<script>
	


	//60 second timer to begin the game - user alerted if 60 sec are up.
	var count = 60, timer = setInterval(function() {
    $("#counter").html(count--);
    if(count == 1) clearInterval(timer);
    alert("Time is Up!")
	}, 1000);

	//function created to submit the quiz and have it console logged.
	function submitQuiz() {
		console.log('submitted');

	//for loop for array?
	for (var i = question.length - 1; i >= 0; i--) {
		question[i]
	};

	//create if/else statements for conditions based on user picks

	//create a score counter/display once user hits submit

	//if user clicks incorrect answer tally as no and convert to useable date to print

	//print answers
	function correctAnswer (correctStringNo, qNumber)
	
	//show score correct out of possible amount correct
	var yourScore = "Your Score: " + tallyScore + "/" totalQuestions


</script>