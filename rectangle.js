module.exports = (x,y,callback) => {
    if (x <= 0 || y <= 0)
        setTimeout(() => 
            // callback takes two value: error and return value  
            // error       
            callback(new Error("Rectangle dimensions should be greater than zero: L = "
                + x + ", and B = " + y), 
            null),
            2000);
    else
        setTimeout(() => 
            // this callback returing the value; not error that's why its null       
            callback(null, {
                perimeter: () => (2*(x+y)),
                area:() => (x*y)
            }), 
            2000);
}

