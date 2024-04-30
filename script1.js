 const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 // IIFE with an anonymous function 
 (() => {
    const printOddNumbers = (arr) => {
        for (let i = 0; i < arr.length; i++) {
           if (arr[i] % 2 !== 0) {
                 console.log(arr[i]);
            }
         }
     
        }

     printOddNumbers(numbers);
 })();


// IIFE for title case conversion
 var strings = ["hello world", "how are you", "goodbye"];

 (function(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase().replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
     }
 })(strings);

 console.log(strings); 

//IIFE for sum calculation
 var numbers = [1, 2, 3, 4, 5]; 
 var sum = (function(arr) {
     var total = 0;
     for (var i = 0; i < arr.length; i++) {
         total += arr[i];
    }
     return total;
 })(numbers);

 console.log(sum);




// IIFE for prime number filtering

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var primeNumbers = (function(arr) {
    function isPrime(num) {
        if (num <= 1) return false;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    var primes = [];
    for (var i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primes.push(arr[i]);
        }
    }
    return primes;
})(numbers);

console.log(primeNumbers);

// IIFE for palindrome 

var words = ["level",  "racecar",  "madam"];


var palindromes = (function(arr) {
    function isPalindrome(word) {
        return word === word.split('').reverse().join('');
    }

    var palindromesArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            palindromesArray.push(arr[i]);
        }
    }
    return palindromesArray;
})(words);
console.log(palindromes); 

// IIFE for median calculation

var arr1 = [1, 3, 5, 7, 9];
var arr2 = [2, 4, 6, 8, 10];

var median = (function(arr1, arr2) {
    var merged = arr1.concat(arr2).sort(function(a, b) {
        return a - b;
    });

    var length = merged.length;
    var mid = Math.floor(length / 2);

    if (length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
})(arr1, arr2);

console.log(median);


// IIFE for removing duplicates

var arr = [1, 2, 3, 4, 2, 3, 5, 6, 1];

var uniqueArray = (function(arr) {
    var unique = [];
    arr.forEach(function(item) {
        if (unique.indexOf(item) === -1) {
            unique.push(item);
        }
    });
    return unique;
})(arr);

console.log(uniqueArray); 

// Number of times to rotate

// IIFE for array rotation

var arr = [1, 2, 3, 4, 5];

var k = 2;


var rotatedArray = (function(arr, k) {
    var len = arr.length;
    //  k is greater than array length, adjust k
    k = k % len;

    // Slice the array and concatenate the rotated parts
    return arr.slice(k).concat(arr.slice(0, k));
})(arr, k);

console.log(rotatedArray);