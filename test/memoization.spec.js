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

	describe('findElement()', () => {
		beforeEach(() => {
			let theRoot = document.getElementById('root');
			newCache = memoization();
			let brain = document.createElement('div');
			brain.Id = 'brain';
			theRoot.appendChild(brain);
		});

		it('should be a function', () => {
			expect(memoization.findElement).to.be.a('function');
		});
		it('should return the element if it is in the cache', ()=> {
			expect(memoization.findElement())
		});
		it.skip('should add the element to the cache if it is not in the cache', () => {
			expect()
		});
	})
})
