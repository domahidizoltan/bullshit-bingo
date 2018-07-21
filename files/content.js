var cells = 24;

function loadWords() {
	var bullshits = words.split("\n")
						 .filter(word => word.length > 0)
						 .map(word => word.trim());
	
	var randomizedWords = randomize(bullshits);
	var counter=0;
	while (counter<cells) {
		document.getElementById('cell' + counter++).innerHTML = randomizedWords.pop();
	}
}

function randomize(words) {
	var randomizedWords = [];
	var tempWords = words.slice();
	
	for (var i=0; i<cells; i++) {
		var wordCount = tempWords.length;
		var randomIndex = Math.floor(Math.random() * wordCount);
		var randomWord = tempWords[randomIndex];
		randomizedWords.push(randomWord);
		tempWords.splice(randomIndex,1);

		if (tempWords.length==0) {
			tempWords = words.slice();
		}

	}

	return randomizedWords;
}
