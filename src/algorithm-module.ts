//Check for Prime number

export let checkForPrime = (n) => {
    var divisor = 2;

    while (n > divisor) {
        if (n % divisor == 0) {
            return false;
        }
        else
            divisor++;
    }
    return true;
}

//Find all prime factors of a number

export let primeFactors = (n) => {
    var factors = [],
        divisor = 2;

    while (n > 2) {
        if (n % divisor == 0) {
            factors.push(divisor);
            console.log(`n: ${n}, divisor: ${divisor}`)
            n = n / divisor;
        }
        else {
            divisor++;
        }
    }
    return factors;
}

//get nth Fibonacci number

export let nThfibonacci = (n) => {
    var fibo = [0, 1];

    if (n <= 2) return 1;

    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    return fibo[n];
}

// Recursivly get Fibinacci

export let getfibonacciRec = (n) => {
    if (n <= 1)
        return n;
    else
        return getfibonacciRec(n - 1) + getfibonacciRec(n - 2);
}

//find the greatest common divisor of two numbers

export let greatestCommonDivisor = (a, b) => {
    let divisor = 2,
        greatestDivisor = 1;

    //if u pass a -ve number this will not work. fix it dude!!
    if (a < 2 || b < 2)
        return 1;

    while (a >= divisor && b >= divisor) {
        if (a % divisor == 0 && b % divisor == 0) {
            greatestDivisor = divisor;
        }
        divisor++;
    }
    return greatestDivisor;
}

//More Fancy algorithm

export let greatestCommonDivisorSof = (a, b) => {
    if (b == 0)
        return a;
    else
        return greatestCommonDivisor(b, a % b);
}

//merge two sorted array

export let mergeSortedArray = (a, b) => {
    let merged = [],
        aElm = a[0],
        bElm = b[0],
        i = 1,
        j = 1;

    if (a.length == 0)
        return b;
    if (b.length == 0)
        return a;
    /* 
    if aElm or bElm exists we will insert to merged array
    (will go inside while loop)
     to insert: aElm exists and bElm doesn't exists
               or both exists and aElm < bElm
      this is the critical part of the example            
    */
    while (aElm || bElm) {
        if ((aElm && !bElm) || aElm < bElm) {
            merged.push(aElm);
            aElm = a[i++];
        }
        else {
            merged.push(bElm);
            bElm = b[j++];
        }
    }
    return merged;
}

//swap two numbers without using a temporary variable

export let swapNumb = (a, b) => {
    console.log('before swap: ', 'a: ', a, 'b: ', b);  //a: 25, b: 10
    b = b - a;                                        // b: -15
    a = a + b;                                        // a: 10
    b = a - b;                                        // b: 25 
    console.log('after swap: ', 'a: ', a, 'b: ', b);
}

// Using bit manpulation
export let swapNumbbit = (a, b) => {
    console.log("a: " + a + " and b: " + b);
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    console.log("a: " + a + " and b: " + b);
}

//reverse a string  

export let reverse = (str) => {
    var rtnStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        rtnStr += str[i];
    }
    return rtnStr;
}

export let reverse2 = (str) => {
    var rtnStr = [];
    if (!str || typeof str != 'string' || str.length < 2) return str;

    for (var i = str.length - 1; i >= 0; i--) {
        rtnStr.push(str[i]);
    }
    return rtnStr.join('');
}

//Little better 
export let reverse3 = (str) => {
    str = str.split('');
    var len = str.length,
        halfIndex = Math.floor(len / 2) - 1,
        revStr;
    for (var i = 0; i <= halfIndex; i++) {
        revStr = str[len - i - 1];
        str[len - i - 1] = str[i];
        str[i] = revStr;
    }
    return str.join('');
}

//recursive 

export let reverse4 = (str) => {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

//cleaner algorithm with recusive
export let reverse5 = (str) => {
    if (!str || str.length < 2) return str;

    return str.split('').reverse().join('');
}


//As string extention

/* String.prototype.reverse = function () {
    if (!this || this.length < 2) return this;

    return this.split('').reverse().join('');
} */


//Reverse in Place

export let reverseInPlace = (str) => {
    return str.split(' ').reverse().join(' ').split('').reverse().join('');
}

//find the first non repeating char in a string

export let firstNonRepeatChar = (str) => {
    var len = str.length,
        char,
        charCount = {};
    for (var i = 0; i < len; i++) {
        char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        }
        else
            charCount[char] = 1;
    }
    for (var j in charCount) {
        if (charCount[j] == 1)
            return j;
    }
}  

export let getUnique=(ar)=> {
    var j = {};

    ar.forEach(function (v) {
        j[v + '::' + typeof v] = v;
        //console.log('in foreach',j);
    });
    //console.log('after foreach',j);
    return Object.keys(j).map(function (v) {
        //console.log('Inside object key',v);
        return j[v];
    });
}

export let uniqueArray0=(array)=> {
    var result = Array.from(new Set(array));
    return result
}

export let uniqueArray2=(arr)=> {
    var a = [];
    for (var i = 0, l = arr.length; i < l; i++)
        if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
            a.push(arr[i]);
    return a;
}

export let uniqueArray3=(a)=> {
    // usage
    var unique = a.filter((v,i,a)=>{return a.indexOf(v) === i;}) // returns ['a', 1, 2, '1']

    return unique;
}

//[2,4,6,2,6,8]

//Count duplicates

export let getDupCounts = (arr) => {
    let counts = {};
    arr.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    return counts
}

export let getDupCounts1 = (arr) => {
    let countsObj = {}, count = 0
    arr.forEach(function (x) { countsObj[x] = (countsObj[x] || 0) + 1; });
    Object.keys(countsObj).forEach(v => {
        if (countsObj[v] > 1)
            count++
    })
    return count
}