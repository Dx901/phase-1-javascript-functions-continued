const array = (function(thingToadd) {
    const base = 3;
    return [
        function() {
            return base + thingToadd
        },
        function() {
            return base 
        }
    ]
})(2)
//console.log(array)