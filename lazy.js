/**
 * LazyJS
 * 
 * Allows you to write and include JS files inline, but have them included in the DOM at the page end.
 * Great if you don't have full tree control.
 *
 * By Greg Tyler (@gregtyler)
 */
(function(){
    var list = document.querySelectorAll('script[type="text/javascript+lazy"]'), l = list.length;
    // If there's something to load, off you go
    if( l ) loadJS( 0 );

    // Load a JS element into flow
    function loadJS( id ) {
        if( id >= l ) return false;
        
        // Create a new script element
        var old = list[id],
            script = document.createElement('script');
        script.type = 'text/javascript';
        
        // When we've loaded the script, set the next one up
        script.onload = function(){ loadJS( ++id ); }
        
        // Either load the source or the HTML of the script
        if( old.src )
            script.src = old.src;
        else
            script.innerHTML = old.innerHTML;
            
        // Remove the old script and put the new one in
        old.parentNode.removeChild( old );
        document.body.appendChild( script );
    }
})();