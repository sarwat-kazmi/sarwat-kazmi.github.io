
function callbackFnDemo(arg1, cb) {
    if(arg1 === 2){
        cb = arg1 * 2;
    }
} 

callbackFnDemo(2, (x) => {
    callbackFnDemo(x, (x) => {
        callbackFnDemo(3, () => {
            x
        })
    })
})