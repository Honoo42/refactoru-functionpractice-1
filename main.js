$(document).on('ready', function() {
  
});
// 1. tripleFive function that loops through and prints "Five!" three times in the console log
var tripleFive = function (str,num) {
	var rtn = "";
	for (var i = 0; i < num; i++) {
		 console.log(i,str);
		};
		return (i,str);
}

console.log(tripleFive('Five!',3))
// 2. takes a single string and returns the last character in the string
var lastLetter = function lastLetter(str) {
	for (var i = str.length -1; i >= 0; i--) {
		
		return str[i];
	};
}
console.log(lastLetter('lovers'));

// 3.square function
var square = function square(n) {
	return n * n;
}

console.log(square(4))


// 4.negate
var negate= function negate(n) {
	return -(n);
}
console.log (negate(7))


// 5.toArray
var toArray = function (){ 
	return [].slice.call(arguments).sort() 
};

console.log (toArray(1,2,3))



//6. starts with A
var startsWithA = function(str) {
	if('A' === str[0]) {
		return true;
	} else {
		return false;
	};
};
console.log (startsWithA('Afae'));

// 7.excite
var excite = function excite (str) {
	return str + "!!!";
}

console.log (excite('this is freaking bananas'))


//8.if value equals 0, substring of 'sun' is found in the string, if -1, no substring of 'sun' 
var sun= function sun(str) {
	return str.indexOf('sun');
}

console.log (sun('catapult'))


//9.If n is between 0 and 1, function returns true
var tiny = function tiny(n) {
	if (n >= 0 && n <= 1) {
		return true;
	}
	else {
		return false;
	} ;
};

console.log (tiny(0))