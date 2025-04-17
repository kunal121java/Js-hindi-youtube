const name = "Kunal"
const repoCount = 50
//console.log(name + repocount+"Value");
console.log('Hello my name is ${name} and my repo count is ${repoCount}'
);

const gamename = new String('kunal')
// console.log(gamename[0]);
// console.log(gamename.__proto__);
// console.log(gamename.length);
 console.log(gamename.toUpperCase());
 const newString = gamename.substring(0,4)
 console.log(newString);

 const anotherString = gamename.slice(-8,4)
 console.log(anotherString);
 
 const newStringOne= "  kunal  "
 console.log(newStringOne);
 console.log(newStringOne.trim());/*trim method is used to remove blank space before and after the string*/

 const url = "http://hitesh.com/hitesh%20choudhary"

 console.log(url.replace('%20','-'));
 
 
 

/* console.log(gamename.charAt(2));  its is use to determine at specific  index which 
 element present */
/* console.log(gamename.indexOf(2));*/

//String Methods
/*
->at()	Returns an indexed character from a string
->charAt()	Returns the character at a specified index (position)
->charCodeAt()	Returns the Unicode of the character at a specified index
->codePointAt()	Returns the Unicode value at an index (position) in a string
->concat()	Returns two or more joined strings
->constructor	Returns the string's constructor function
->endsWith()	Returns if a string ends with a specified value
->fromCharCode()	Returns Unicode values as characters
->includes()	Returns if a string contains a specified value
->indexOf()	Returns the index (position) of the first occurrence of a value in a string
->lastIndexOf()	Returns the index (position) of the last occurrence of a value in a string
->length	Returns the length of a string
->localeCompare()	Compares two strings in the current locale
->match()	Searches a string for a value, or a regular expression, and returns the matches
->padEnd()	Pads a string at the end
->padStart()	Pads a string from the start
->prototype	Allows you to add properties and methods to an object
->repeat()	Returns a new string with a number of copies of a string
->replace()	Searches a string for a pattern, and returns a string where the first match is replaced
->replaceAll()	Searches a string for a pattern and returns a new string where all matches are replaced
->search()	Searches a string for a value, or regular expression, and returns the index (position) of the match
slice()	Extracts a part of a string and returns a new string
split()	Splits a string into an array of substrings
startsWith()	Checks whether a string begins with specified characters
substr()	Deprecated. Use substring() or slice() instead.
substring()	Extracts characters from a string, between two specified indices (positions)
toLocaleLowerCase()	Returns a string converted to lowercase letters, using the host's locale
toLocaleUpperCase()	Returns a string converted to uppercase letters, using the host's locale
toLowerCase()	Returns a string converted to lowercase letters
toString()	Returns a string or a string object as a string
toUpperCase()	Returns a string converted to uppercase letters
->trim()	Returns a string with removed whitespaces
->trimEnd()	Returns a string with removed whitespaces from the end
->trimStart()	Returns a string with removed whitespaces from the start
->valueOf()	Returns the primitive value of a string or a string object 
*/