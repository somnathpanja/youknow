/**
 * @fileOverview <explain about this file>
 * @author       somnath
 */

(function (module) {

    function doheavyWork() {

        this.elementsLength = 1000; // Amount of operations
        this.currentPosition = 0; // Current position

        // Initializer to start the iterator
        this.startCalculation = function() {
            // Reset current position to zero
            this.currentPosition = 0;
            // Start looping
            setTimeout(
                this.calculate.bind(this),
                0
            );
        };

        this.calculate = function(){
            // Check that we still have iterations left, otherwise, return
            // out of function without calling a new one.
            if( this.currentPosition > this.elementsLength ) return;
            // Do computation
            doheavyWork( element[ this.currentPosition ] );

            // Add to counter
            this.currentPosition++;
        }
    }

    // Initalize the object and start iterating
    var computationIterator = new doheavyWork();
    computationIterator.startCalculation();

})(module);
