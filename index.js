function receivesAFunction(callbackFunction){
    callbackFunction();
}

function returnsANamedFunction(){
    return function namedFunction(){
        console.Log ('Hello world!');
    };
}

function returnsAnAnonymousFunction(){
    return function (){
        console.Log ('Oh ho ho.');
    };
}