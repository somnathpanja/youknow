/**
 * @fileOverview <explain about this file>
 * @author       somnath
 */

(function (module) {

   var xx = 0;
   for(var i=0; i< 10000000000; i++){
        xx = (xx * (i %3 ) *12333333333333222222222292929292929292929292929292929293030303939239292929293939322).toString().indexOf('a');
   }

})(module);
