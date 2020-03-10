function scopeTest() {
    var x2 = 5
    var x2 = '500'
    console.log(x2)
    let x3 = 3.14
    //let x3 = 'pi'
    console.log(x3)
}

function scopeTest2() {
    var j = 0;
    for (let i=j; i<10; i++){
    //for (var i=j; i<10; i++){
        console.log(i);
    }
    //console.log(i,j);
}

scopeTest()
scopeTest2()