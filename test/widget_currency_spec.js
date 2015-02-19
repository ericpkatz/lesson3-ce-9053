/* global describe it expect */

var WidgetCurrency = function(){
    this.base = "foo";
    this.amount = 0;
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
});