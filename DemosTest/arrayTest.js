function lexicogComparison() {

    var arr1 = [];
    var arr2 = [];
    var isEqual = true;
    var result = true;
    arr1[0] = 'a';
    arr1[1] = 'b';
    arr1[2] = 'c';

    arr2[0] = 'a';
    arr2[1] = 'b';
    arr2[5] = 'c';

    arr1.sort();
    arr2.sort();


    console.log(arr1.join(', '));
    console.log(arr2.join(', '));
    console.log("arr1.lenght:" + arr1.length);
    console.log("arr2.lenght:" + arr2.length);

    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            result = false;
        }
    }

    for (var prop in arr1) {
        if (arr1[prop] !== arr2[prop])
            isEqual = false;
    }
    for (var prop in arr2) {
        if (arr1[prop] !== arr2[prop])
            isEqual = false;
    }


    console.log("Equal ?:" + isEqual);
    console.log("Equal ?:" + result);
    console.log(arr1[2]==arr2[2]);
    console.log(arr1[2]==arr2[5]);
    console.log(arr2[2]);
    console.log(arr2[5]);
}