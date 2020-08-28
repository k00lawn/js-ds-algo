function linearSearch (arr, value) {
    for(i in arr) {
        if(arr[i] === value) {
            return console.log(i);
        }
        
    }
    return console.log('Number not found')
}

linearSearch([1,2,3,4,5,6], 0)