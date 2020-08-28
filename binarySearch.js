function binarySearch(arr, value) {
    var left = 0;
    var right = arr.length - 1
    var middle = Math.floor(left + right) / 2;

    while(left < right) {
        if(middle === value) {
            return middle
        } else if( middle > value) {
            right = middle
        } else if ( middle < value) {
            left = middle
        }

    }
}