function memoization() {

	let cache = {};

	function addElement(element) {
		cache[element.id] = element;
	}

	function retrieveElementById(elementId) {
		return cache[elementId];
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
	}
}

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

//element must have an id


