/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    //return parseInt(Math.sqrt(x));    投机取巧的方法
    for(var i=0;i<=x;i++){
        if(i*i<=x && (i+1)*(i+1)>x ){
            return i;
        }
    }
    //二分法
    
};