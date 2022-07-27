/**
 * Draggable main routine
 *
 * 		- Make our things draggable
 * 		- Append a draggable indicator to each draggable 'thing'
 */
 $('.thing').draggable();
 $('.thing').append( '<div class="draggable-indicator">' + getDraggableIndicator() + '</div>' );
 
 /**
  * Subroutines
  *
  * 		- getDraggableIndicator()
  */
 
 /**
  * Return the SVG element for the draggable indicator
  *
  * @param 	object 	args 	Arguments for the svg element
  *
  * 		int 	sideLength 		The length of one side of the outer square (default: 32)
  *		int 	dotWidth		The height/width of a single dot (default: 4)
  * 		int	initialX		The initial x value for the first dot (default: 4)
  *		int 	initialY		The initial y value for the first dot (default: 4)
  * 		int 	offset 			The distance between dots (default: 8)
  *
  * @return string
  */
 function getDraggableIndicator( args ) {
 
     args = args || {};
 
     // get the default values
     var 	sideLength 	= args.sideLength || 32,
         dotWidth 	= args.dotWidth || 4,
         offset		= args.offset || 8,
 
         // zero is a legit value for the initial X and Y values, so allow for this
         initialX	= ( undefined === args.initialX ) ? 4 : args.initialX,
         initialY 	= ( undefined === args.initialY ) ? 4 : args.initialY;
 
     // build the HTML element string
     var svg = '<svg viewBox="0 0 ' + sideLength + ' ' + sideLength + '">';
 
         // do a 4x4 loop and create the <rect /> elements
         for ( var i = 0; i < 4; i++ ) {
 
             for( var j = 0; j < 4; j++ ) {
 
                 svg += '<rect x="' + ( initialX + i*offset ) + '" ' +
                     'y="' + ( initialY + j*offset ) + '"' +
                     ' width="' + dotWidth + '" height="' + dotWidth + '" ' + 
                 ' />';
             }
         }
 
     svg += '</svg>';
 
     return svg;
 
 } // end: getDraggableIndicator()