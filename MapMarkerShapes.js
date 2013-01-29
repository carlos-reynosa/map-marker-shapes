/*
   --------------------------------
  	Maps Markers Shapes
   --------------------------------
   + https://github.com/carlos-reynosa/
   + version 
   + Copyright 2013 Carlos E. Reynosa-Nunez
   + Licensed under the MIT license

   + Documentation:
*/
'use strict';
(function(name, definition, global) {
	//check if using AMD
	if (typeof define === 'function') {
		console.log('using define(def)');
		define(definition);
	} else if (typeof module !== 'undefined' && module.exports) {
		//check if using node
		console.log('using module.exports');
		module.exports = definition();
	} else {
		global[name] = definition();
	}
})('MapMarkerShapes', function() {

	var MapMarkerShapes;

	//constructor
	MapMarkerShapes = function() {

	};


	MapMarkerShapes.prototype.DEFAULTS = {

		TEXT: {
			COLOR: 'black',
			FONT_STYLE: 'bold',
			SIZE: '20pts',
			FONT_FAMILY: 'Calibri',
			BASELINE: 'middle',
			ALIGN: 'center'
		}
	};

	//returns a new marker object
	//Represents the image that is sent back to the user
	MapMarkerShapes.prototype._getNewMarkerType = function() {

		return {
			dataType: '',
			data: ''
		};
	};

	//sets the canvas depending on the type of shape and its parameters
	//returns the canvas object
	MapMarkerShapes.prototype._initializeCanvas = function(options) {


		var canvas = document.createElement('CANVAS');
		var radius = options.shapeParameters.radius;

		var strokeWidth = !! (options.shapeParameters.stroke) ? (options.shapeParameters.stroke.width || 0) : null;

		//calculate the correct stroke
		canvas.setAttribute('width', radius * 2 + strokeWidth);
		canvas.setAttribute('height', radius * 2 + strokeWidth);

		return canvas;

	};

	//Decides which shape drawing function to call
	MapMarkerShapes.prototype._drawShape = function(canvas, context, options) {

		if (options.shape.toLowerCase() == 'circle') {

			return this._drawCircle(canvas, context, options);
		}


	};

	//Draws the circle on the canvas
	MapMarkerShapes.prototype._drawCircle = function(canvas, context, options) {
		var centerX = canvas.width / 2;
		var centerY = canvas.height / 2;

		var radius = options.shapeParameters.radius;

		context.beginPath();

		//draw the circle
		context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);


		var fillColor = options.shapeParameters.fillColor || '';

		context.fillStyle = fillColor;

		context.fill();

		//draw stroke
		if (options.shapeParameters.stroke) {
			context.lineWidth = options.shapeParameters.stroke.width || null;
			context.strokeStyle = options.shapeParameters.stroke.color || null;
			context.stroke();
		}

		context.closePath();
		return context;

	};

	/*Draws text on top of the shape image
	 *The function attempts to draw the text in the middle of the shape
	 *currently this is highly dependent on the fact that the script currently
	 *only supports circles
	 */
	MapMarkerShapes.prototype._drawText = function(canvas, context, options) {

		//Needed in order to center the text within the shape
		var centerX = canvas.width / 2;
		var centerY = canvas.height / 2;

		//in case the text uses styles other than the defaults
		if (options.textParameters) {

			context.fillStyle = options.textParameters.textColor || this.DEFAULTS.TEXT.COLOR;

			context.font = (options.textParameters.fontStyle || this.DEFAULTS.TEXT.FONT_STYLE) + ' ' + (options.textParameters.textSize || this.DEFAULTS.TEXT.SIZE) + ' ' + (options.textParameters.fontFamily || this.DEFAULTS.TEXT.FONT_FAMILY);
		} else {

			//use the default text styles
			context.fillStyle = this.DEFAULTS.TEXT.COLOR;

			context.font = this.DEFAULTS.TEXT.FONT_STYLE + ' ' + this.DEFAULTS.TEXT.SIZE + ' ' + this.DEFAULTS.TEXT.FONT_FAMILY;
		}

		//Used for centering the text
		context.textBaseLine = this.DEFAULTS.TEXT.BASELINE;
		context.textAlign = this.DEFAULTS.TEXT.ALIGN;

		/*Will be used in the future for autoresizing text within the image
		 *The max height is the dimensions of a max area square that can
		 *fit within the shape, currently this is highly dependent on the fact that we only supprot circles
		 */
		//var maxTextHeight = options.shapeParameters.radius * Math.sqrt(2);
		var textHeight = options.textParameters ? (options.textParameters.textSize || this.DEFAULTS.TEXT.SIZE) : this.DEFAULTS.TEXT.SIZE;

		/* The text height is divided by 2 in order to try to adjust the text to the center of the shape
		 */
		context.fillText(options.markerText, centerX, centerY + parseInt(textHeight) / 2);

		return context;

	};

	//returns a canvas object with the fully drawn shape of the marker
	MapMarkerShapes.prototype._drawMarker = function(canvas, options) 
	{

		var context = canvas.getContext('2d');

		context = this._drawShape(canvas, context, options);

		context = options.markerText ? this._drawText(canvas, context, options) : context;

		return canvas;

	};

	//returns an object containing the image data in base 64 format that
	//represents the requested image
	MapMarkerShapes.prototype.getMarker = function(options) {

		//object that will be returned to the user
		var marker = this._getNewMarkerType();

		var canvas = this._initializeCanvas(options);

		//draw the marker on the canvas according to the options
		canvas = this._drawMarker(canvas, options);

		//get a base64 rep of the marker image
		marker.data = canvas.toDataURL();
		marker.dataType = 'image/png';

		return marker;

	};

	return new MapMarkerShapes();


}, this);
