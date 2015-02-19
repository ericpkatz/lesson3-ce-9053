/* global describe it expect */

var WidgetCurrency = function(base, amount){
    this.base = base || 'foo';
    this.amount = amount || 0;
};

describe("WidgetCurrency", function(){
    it("is defined", function(){
        expect(WidgetCurrency).toBeDefined();
    });
    
    describe("defaults", function(){
        it("base is foo", function(){
            var currency = new WidgetCurrency();
            console.log(currency);
            expect(currency.base).toEqual("foo");
        });
        it("amount is 0", function(){
            var currency = new WidgetCurrency();
            expect(currency.amount).toEqual(0);
        });
    });
    describe("setting values with constructor", function(){
        describe("setting base to bar", function(){
            it("base returns bar", function(){
                var currency = new WidgetCurrency("bar");
                expect(currency.base).toEqual("bar");
            });
        });
        describe("setting amount to 18", function(){
            it("amount is 18", function(){
                var currency = new WidgetCurrency("bar", 18);
                expect(currency.amount).toEqual(18);
            });
        });
    });
    
    
    
    
});


