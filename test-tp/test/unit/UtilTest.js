describe("Factoriel",function(){
    var testcases= [
      { n:0,
        factorial : 1
      },

      { n:1,
        factorial : 1
      },

      { n:2,
        factorial : 2
      },

      { n:3,
        factorial : 6
      },

      { n:4,
        factorial : 24
      },
    ];

      testcases.forEach(function(c){
        it("should return"+ c.factorial+" when n = " + c.n, function(){
              var result = Util.factorial(c.n);
              expect(result).toEqual(c.factorial)
        });
      });
    });
