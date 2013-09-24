var word = prompt ("Enter any word:" );
alert("You entered: " + word + 
	"\nIt has this number of chars: " + word.length + 
	"\nThe third char is: " + word.charAt(2) + 
	"\nThe word in lowercase: " + word.toLowerCase() +
	"\nThe word in UPPERCASE: " + word.toUpperCase() +
	"\nExample: I have been thinking of a " + word + " since yesterday." +
	"\nSubword: " + word.substring(1,4))
