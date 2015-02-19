/* global describe it expect beforeEach */

var WidgetCurrency = function(base, amount){
    this.base = base || 'foo';
    this.amount = amount || 0;
};
WidgetCurrency.prototype.display = function(){
    return [this.base, "|", this.amount].join(" ");
};
WidgetCurrency.prototype.convert = function(toBase,exchangeRates){
    var ratio = exchangeRates[this.base]/exchangeRates[toBase]; 
    this.amount = this.amount*ratio;
    this.base = toBase;
};

describe("WidgetCurrency", function(){
    it("is defined", function(){
        expect(WidgetCurrency).toBeDefined();
    });
    
    describe("defaults", function(){
        var currency;
        
        beforeEach(function(){
            currency = new WidgetCurrency();
            console.log(currency);
        });
        
        it("base is foo", function(){
            expect(currency.base).toEqual("foo");
            currency.amount = 100;
        });
        it("amount is 0", function(){
            expect(currency.amount).toEqual(0);
        });
    });
    describe("setting values with constructor", function(){
        var currency;
        beforeEach(function(){
            currency = new WidgetCurrency("bar", 18);
        });
        describe("setting base to bar", function(){
            it("base returns bar", function(){
                expect(currency.base).toEqual("bar");
            });
        });
        describe("setting amount to 18", function(){
            it("amount is 18", function(){
                expect(currency.amount).toEqual(18);
            });
        });
    });
    describe("display", function(){
       describe("when base is buzz and amount 10", function(){
           it("is 'buzz | 10", function(){
               var currency = new WidgetCurrency("buzz", 10);
               expect(currency.display()).toEqual('buzz | 10');
           });
       }); 
    });
    
    describe("convert", function(){
        var currency;
        beforeEach(function(){
            var exchangeRates = {
                foo: 5,
                bar: 10,
                buzz: 100
            };
            currency = new WidgetCurrency("foo", 20);
            currency.convert("bar", exchangeRates)
        });
       describe("converting 20 foo to bar", function(){
           it("base should be bar", function(){
               expect(currency.base).toEqual("bar");
           });
           it("amount should be 10", function(){
               expect(currency.amount).toEqual(10);
           });
       }); 
    });
    
});


