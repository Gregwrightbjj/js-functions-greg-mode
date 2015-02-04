/*
  This function should accept a string as a parameter.
  It should return a string with the parameter's contents, reversed.
  Note: No using string.reverse() or array.reverse(), that's cheating :)
*/
var reverseWord = function(word) {
	var reversed = [];
	for(x =0; x < word.length; x++){
		reversed.unshift(word[x]);

	}
return reversed.join("")
}


/*
  This function should accept a string as a parameter.
  It should..
  - Break up the string into words (words are separated by spaces)
  - Reverse the contents of each word
  - Return a string that contains each reversed word, in order
*/
var reverseSentence = function(sentence) {
	var words = sentence.split(" ");
	
for (i = 0; i < words.length; i++){
	words[i] = reverseWord(words[i]);



}
	return words.join(" ")


}