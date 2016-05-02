var fb = require('../fizzbuzz');

describe("A fizzbuzz program", function() {

	it("can count from 1 to 5 with fizzbuzz replacements", function() {
		expect(fb.count(1,5)).toBe("1 2 fizz 4 buzz");
	});


	it("can count from 1 to 10", function() {
		expect(fb.count(1,15)).toBe("1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 12 13 14 fizzbuzz");
	});


	it("it replaces mutliples of 3 with fizz", function() {
		expect(fb.replace(3).tobe('fizz');
		expect(fb.replace(6).tobe('fizz');
		expect(fb.replace(9).tobe('fizz');		
	    expect(fb.replace(999).tobe('fizz');

	});

	it("it replaces multiples of 5 with buzz", function() {
		expect(fb.replace(5).tobe('buzz');
		expect(fb.replace(10).tobe('buzz'));
		expect(fb.replace(15).tobe('buzz'));	
		expect(fb.replace(555).tobe('buzz');				
	});


	it("it replaces the multiples 3 and 5 with fizzbuzz", function() {
		expect(fb.replace(15).tobe('fizzbuzz');
		expect(fb.replace(30).tobe'fizzbuzz');
		expect(fb.replace(60).tobe('fizzbuzz');	
		expect(fb.replace(150).tobe('fizzbuzz';				
	});




});