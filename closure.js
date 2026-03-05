function outerFunction(outerVariable){
    return function innFunction(innerVariable){
        console.log('outer variable: ' + outerVariable)
        console.log('inner variable: ' + innerVariable)
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');