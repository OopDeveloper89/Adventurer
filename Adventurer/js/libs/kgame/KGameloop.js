/**
 * Class for the game loop.
 * 
 * @author oopdeveloper89
 */
var KGameloop = function() {

	/**
	 * @var KMap
	 */
	var kMap = null;

	/**
	 * @var KScreen
	 */
	var kScreen = null;

	/**
	 * Initialize the game loop.
	 * 
	 * @author oopdeveloper89
	 */
	this.init = function() {
		var kScreen = new KScreen();
		kScreen.init();
		kScreen.setKMap(this.getKMap());
		this.setKScreen(kScreen);

	};

	/**
	 * Start the gameloop.
	 * 
	 * @author oopdeveloper89
	 */
	this.start = function() {
		this.init();
		
		this.doFrameLoop();
	};

	/**
	 * This method do the job for one frame loop.
	 * 
	 * @author oopdeveloper89
	 */
	this.doFrameLoop = function() {
		this.getKScreen().update();
		
		this.requestAnimationFrame(this.doFrameLoop);
	};
	
	/**
	 * Returns an animation frame.
	 * 
	 * @author oopdeveloper89
	 * @return animation frame
	 */
	this.requestAnimationFrame = function() {
		return window.requestAnimationFrame
				|| window.webkitRequestAnimationFrame
				|| window.mozRequestAnimationFrame || function(callback) {
					window.setTimeout(callback, 1000 / 60);
				};
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
			throw Error('Object of KMap expected. ' + newKMap + ' given.');			
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
	 * Setter for kScreen value.
	 * 
	 * @author oopdeveloper89
	 * @param KScreen newKScreen
	 */
	this.setKScreen = function(newKScreen) {
		if (newKScreen instanceof KScreen) {
			kScreen = newKScreen;
		}
		else {
			throw Exception('Object of KScreen expected. ' + newKScreen + ' given.');			
		}
	};
	
	/**
	 * Getter for kScreen value.
	 * 
	 * @author oopdeveloper89
	 * @return KScreen 
	 */
	this.getKScreen = function() {
		return kScreen;
	};

};