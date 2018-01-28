describe("Factorial", function(){
    var testCases = [
        {
            n : 0,
            factorial : 1
        },
        {
            n : 1,
            factorial : 1
        },
        {
            n : 2,
            factorial : 2
        },
        {
            n : 3,
            factorial : 6
        },
        {
            n : 4,
            factorial : 24
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.factorial + " when n = " + testCase.n, function(){
            var result = Util.factorial(testCase.n);
            expect(result).toEqual(testCase.factorial);
        })
    });
});


describe("Arrangement", function(){
    var testCases = [
        {
            n : 3,
            r:2,
            arrangement : 6
        },
        {
            n : 4,
            r:3,
            arrangement : 24
        },
        {
            n : 5,
            r:4,
            arrangement : 120
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.arrangement + " when n = " + testCase.n + " when r = " + testCase.r, function(){
            var result = Util.arrangement(testCase.n, testCase.r );
            expect(result).toEqual(testCase.arrangement);
        })
    });
});


describe("combination", function(){
    var testCases = [
        {
            n : 3,
            r:2,
            combination: 3
        },
        {
            n : 4,
            r:3,
            combination : 4
        },
        {
            n : 5,
            r:4,
            combination : 5
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.combination + " when n = " + testCase.n + " when r = " + testCase.r, function(){
            var result = Util.combination(testCase.n, testCase.r );
            expect(result).toEqual(testCase.combination);
        })
    });
});


describe("isPrime", function(){
    var testCases = [
        {
            n : 2,
            return: true
        },
        {
            n : 4,
            return: false
        },
        {
            n : 13,
          return: true
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.return + " when n = " + testCase.n, function(){
            var result = Util.isPrime(testCase.n);
            expect(result).toEqual(testCase.return);
        })
    });
});


describe("sumPrime", function(){
    var testCases = [
        {
            n : 10,
            sumPrime: 26
        },
        {
            n : 8,
            sumPrime: 17
        },
        {
            n : 6,
          sumPrime: 10
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.sumPrime + " when n = " + testCase.n, function(){
            var result = Util.sumPrime(testCase.n);
            expect(result).toEqual(testCase.sumPrime);
        })
    });
});


describe("fizzBuzz", function(){
    var testCases = [

        {  n : 15,
          fizzbuz: "fizzbuzz"
        },
        {
            n : 7,
          fizzbuz: 7
        },

        {
            n : 3,
          fizzbuz: "fizz"
        },
        {
            n : 10,
          fizzbuz: "buzz"
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.fizzbuz + " when n = " + testCase.n, function(){
            var result = Util.fizzBuzz(testCase.n);
            expect(result).toEqual(testCase.fizzbuz);
        })
    });
});
