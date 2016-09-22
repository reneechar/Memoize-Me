module.exports = function() {

	let cache = {};


	function addElementById(elementId) {
		cache[elementId] = elementId;
	}

	function retrieveElementById(elementId) {
		return cache[elementId];
	}

	return {
		findElementById: function (elementId) {
			if(cache.hasOwnProperty(elementId)) {
				retrieveElementById(elementId);
			} else {
				addElementById(elementId);
				return document.getElementById(elementId);
			}
		}
	}
}