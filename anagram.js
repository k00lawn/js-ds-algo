function anagram(str1, str2) {

    if(str1.length !== str2.length) {
         console.log("not an anagram");
    } 
        let str1Object = {}
        let str2Object = {}
        
        for(let val of str1) {
            str1Object[val] = (str1Object[val] || 0) + 1
        }

        for(let val of str2) {
            str2Object[val] = (str2Object[val] || 0) + 1
        }

        // console.log(str1Object)
        // console.log(str2Object)

        for(let key in str1Object) {
            if(str1Object[key] !== str2Object[key]) {
                return false
            } 

        }

    
}

anagram("coolsguy", "coolrguy")
