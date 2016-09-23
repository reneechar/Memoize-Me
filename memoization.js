function memoization() {

	let cache = {};
	let classCache = {};

	function addElement(element) {
		cache[element.id] = element;
	}

	function retrieveElementById(elementId) {
		return cache[elementId];
	}

	function addElementByClass(element) {
		classCache[element.className] = element;
	}

	function retrieveElementByClass(elementClass) {
		return classCache[elementClass];
	}

	return {
		returnElementById: function (elementId) {
			if(cache.hasOwnProperty(elementId)) {
				retrieveElementById(elementId);
			} else {
				addElement(document.getElementById(elementId));
				return retrieveElementById(elementId);
			}
		},

		queryGetter: function(queryString) {
			let queryArray = queryString.split(' ');
			var i = 0;
			let returnElement;
			if(queryArray.length === 1){
				for (var i = 0; i < queryArray.length; i++) {
					if(queryArray[i].charAt(0) === '#') {
						returnElement = this.returnElementById(queryArray[i].substring(1));
					} else if(queryArray[i].charAt(0) === '.') {
						if(classCache.hasOwnProperty(queryArray[i].substring(1))) {
							returnElement = retrieveElementByClass(queryArray[i].substring(1));
						} else {
							addElementByClass(document.querySelector(queryArray[i]));
							returnElement = retrieveElementByClass(queryArray[i].substring(1));
						}
					} else {
						throw new Error('Can only pass in className or Id into this function');
					}
				}
			}
			return returnElement;
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

//query selector

let bigBranch = document.createElement('div');
bigBranch.className = 'sizedBranch';
bigBranch.id = 'bigBranch';
theRoot.appendChild(bigBranch);

let smallBranch = document.createElement('div');
smallBranch.className = 'sizedBranch';
smallBranch.id = 'smallBranch';
theRoot.appendChild(smallBranch);

console.log('bigBranch element by Id', newCache.queryGetter('#bigBranch'));
console.log('bigBranch element by className', newCache.queryGetter('.sizedBranch'));


