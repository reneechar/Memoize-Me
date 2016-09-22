const Chai = require('chai');
const expect = Chai.expect;
const memoization = require('../memoization');


describe('memoization file', () => {
	it('should exist', () => {
		expect(memoization).to.exist;
	});
	it('should be a function', () => {
		expect(memoization).to.be.a('function');
	});
	it('should return an object', () => {
		expect(memoization()).to.be.an('object');
	});
})
