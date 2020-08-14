function funcScope() {
    var v1 = 123;
    if (true) {
        var v2 = 123;
        let ll = 'abc';
        console.log ('let은 Block Scope, ll : ', ll);
    }
    //console.log('let은 Block Scope, ll : ', ll); 
    console.log('var은 function Scope1, v2 : ', v1);
}
funcScope();
//console.log('var은 function Scope2, v1 : ', v1);

//현재 let ll 은 if block 안에 있으므로 if문 밖에서는 error
//var v2