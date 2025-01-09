let arr = [61,52,37,46,65]


function* gnerate (collection){
    for (let i = 0; i <= collection.length; i++){
        yield collection[i]
    }
}

let it = gnerate(arr)
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());console.log(it.next());
console.log(it.next());