/**
 * Before currying
 * An add function requires two paramters a and b
 */
function add(a, b) {
    return a + b;
}

/**
 * After currying
 * The the first paramter is required and return a function that requires the second paramter
 */
function add(a) {
    return function (b) {
        return a + b;
    };
}

/**
 * Currying expression with arrow function
 */
const add = (a) => (b) => a + b;
