var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("Solving for rectangle with L = "
                + l + " and B = " + b);
    rect(l,b, (err,rectangle) => {// third parameter is a callback function
        if (err) {
	        console.log("ERROR: ", err.message);
	    }
        else {
            console.log("The area of the rectangle of dimensions L = "
                + l + " and B = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions L = "
                + l + " and B = " + b + " is " + rectangle.perimeter());
        }
    });
    console.log("This statement after the call to rect()");// This line will be printed before the setTimeout delay
};
console.log("----------\nL = Length, B = Breadth\n----------\n");
solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);