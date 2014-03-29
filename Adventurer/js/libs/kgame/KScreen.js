/**
 * Class responsible to render the screen.
 * 
 * @author oopdeveloper89
 */
var KScreen = function() {
	
	/**
	 * @typedef {KMap}
	 */
	var kMap = null;
	
	/**
	 * Initializes the screen.
	 * 
	 * @author oopdeveloper89
	 */
	this.init = function() {
		var canvas = document.createElement('canvas');
		canvas.setAttribute('id', 'gameCanvas');
		canvas.setAttribute('width', 320);
		canvas.setAttribute('height', 240);
		document.body.appendChild(canvas);
	};
	
	/**
	 * Setter for kMap value.
	 * 
	 * @author oopdeveloper89
	 * @param KMap newKMap
	 */
	this.setKMap = function(newKMap) {
		if (newKMap instanceof KMap) {
			kMap = newKMap;
		}
		else {
			throw new Error('Object of KMap expected. ' + newKMap + ' given.');			
		}
	};
	
	/**
	 * Getter for kMap value.
	 * 
	 * @author oopdeveloper89
	 * @return KMap
	 */
	this.getKMap = function() {
		return kMap;
	};
	
	/**
	 * Updates the screen by drawing tiles, characters,...
	 * 
	 * @author oopdeveloper89
	 */
	this.update = function() {
		var kMapLayers = kMap.
		console.log(kMap);
	};
};