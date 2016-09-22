function memoization() {

	let cache = {};

	function addElement(element) {
		cache[element.id] = element;
	}

	function retrieveElementById(elementId) {
		return cache[elementId];
	}

	function queryStringToArray(queryString) {
		return queryString.split(' ');
	}

	return {
		returnElementById: function (elementId) {
			if(cache.hasOwnProperty(elementId)) {
				retrieveElementById(elementId);
			} else {
				addElement(document.getElementById(elementId));
				return retrieveElementById(elementId);
			}
		}

		queryGetter: function(queryString) {
			let queryArray = queryStringToArray(queryString);
			var i = 0;
			while(queryArray[i]) {

				i++
			}

		}
	}
}

//element must have an id

let theRoot = document.getElementById('root');
let redBranch = document.createElement('div');
redBranch.id = 'redBranch';

theRoot.appendChild(redBranch);

newCache = memoization();

console.log('redBranch element',newCache.returnElementById('redBranch'));


let blueBranch = document.createElement('div');
blueBranch.id = 'blueBranch';
theRoot.appendChild(blueBranch);

console.log('blueBranch element',newCache.returnElementById('blueBranch'));

//querySelector

let bigBranch = document.createElement('div');
bigBranch.className = 'sizedBranch';
bigBranch.id = 'bigBranch';
theRoot.appendChild(bigBranch);

let smallBranch = document.createElement('div');
smallBranch.className = 'sizedBranch';
smallBranch.id = 'smallBranch';
theRoot.appendChild(smallBranch);

console.log('bigBranch element', newCache.queryGetter('#bigBranch'))



