#Map Marker Shapes
-----------------
##About
====================
Map Marker Shapes is a HTML5 canvas JavaScript component that provides an easy way for creating customized map (i.e. Google Maps) marker shapes with or without text.
The component is usefull for generating dynamic map markers of various shapes, colors, and sizes with text embedded at the center.
The component is meant to be used with Google Maps type of applications that need to display differnt types of markers that differ in shape
and text properties depending on application state and data.

The tool currently only supports drawing the following shapes:

* Circle

The tool allows a maps developer to define various properties of the marker shape, such as a cirlce's radius and fill color. 
It also provides options for defining text that should be embedded and centered within the body of the marker shape. 

Options for customizing the shape and text of the produced marker must be compatiable with those values accepted by the HTML5 Canvas API.


##Example Markers
![alt text](http://ecs.fullerton.edu/~raveash/projects/maps-marker-shapes/resources/examples/Example5.png "Medium circle marker  with stroke and with two character letters")
![alt text](http://ecs.fullerton.edu/~raveash/projects/maps-marker-shapes/resources/examples/Example4.png "Medium circle marker with stroke and with one character number")
![alt text](http://ecs.fullerton.edu/~raveash/projects/maps-marker-shapes/resources/examples/Example6.png "Large circle marker with stroke and with no characters")
![alt text](http://ecs.fullerton.edu/~raveash/projects/maps-marker-shapes/resources/examples/Example1.png "Medium circle marker without stroke and with two character numbers")
![alt text](http://ecs.fullerton.edu/~raveash/projects/maps-marker-shapes/resources/examples/Example2.png "Small circle marker without stroke and with two chracter letters")
![alt text](http://ecs.fullerton.edu/~raveash/projects/maps-marker-shapes/resources/examples/Example3.png "Extra small circle marker without stroke and characters")

##Example Usage

```javascript

              //The MapMarkerShapes.getMarker returns a marker object
              //containing the image data in Base64 format
var markerImage = MapMarkerShapes.getMarker({
  //accepts an object that defines the marker shape and/or text
  
    	shape: 'Circle', //currently only 'circle' is supported
      
			shapeParameters: { //sets the options for drawing the shape
      
        //Special circle paramater, the radius of the circle that should be drawn
        //Must be an integer >= 0
				radius: 50, 
        
        //Color the shape should be filled with
        //Also accepts Hex color codes like #e93390
        //Must be a string
				fillColor: 'blue', 
        
        //Defines a stroke around the shape                 
				stroke: {
        
          //The color of the stroke
          //Also accepts Hex color codes like #e93390
          //Mustbe a string
					color: 'black', 
                          
					width: 2 //Width of the stroke in pixles
                   //Should be >= 0 
				}
			},
      
      //Sets the text that should be displayed at the center of the shape.
      //Value must be a string.
			markerText: 'Hi', 
      
      //Sets options for drawing the text on the marker shape.
      //If not provided defaults text values will be used.                 
			textParameters: {  
        
        //Set the color of the text.
        //Also accepts Hex color codes like #e93390.
				textColor: 'Yellow', 
        
        //Set the size of the text at the center of the marker shape.                    
				textSize: '20pt', 
        
        //Set the font family of the text at the center of the marker shape.
        //Value must be a string
				fontFamily: 'Museo slab', 
        
				fontStyle: 'bold' 
			}
		});
    
    markerImage.data; //holds the Base64 image data of the marker
                 //set the 'src' attribute of an image element to the marker.data value
    
    
```


##Licence
 
The MIT License (MIT)
Copyright (c) 2013 Carlos E. Reynosa-Nunez

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/carlos-reynosa/map-marker-shapes/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

