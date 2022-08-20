function findMatching(arr, string) {
    return arr.filter(function(item){
        return item.toLowerCase()  === string.toLowerCase()
    })
}

function fuzzyMatch(arr, string) {
    return arr.filter(function(item){
        return item[0,1] === string[0,1];
    })
}

function matchName(arr, string) {
    return arr.filter(function(item){
        return item.name === string
    })
}