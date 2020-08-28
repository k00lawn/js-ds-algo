function countUniqueValues (arr) {

    let aPointer = 0;
    let bPointer = 1;
    
    var counter = 1;

    while ( bPointer < arr.length) {
        if((arr[bPointer] - arr[aPointer]) !== 0) {
            counter++
            aPointer++
            bPointer++
        } else {
            aPointer++
            bPointer++
        }
    }

    console.log(counter)
}

var arr = [0,1,1,1,2,3,4,5,5,6,6,6,7,8,9,10]

countUniqueValues(arr)