
const cats = ["Milo","Otis" ,"Garfield"]

//appends a cat at the end of the cats array
function destructivelyAppendCat(name){
    cats.push(name);
}

//prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name){
    cats.unshift(name);
}

//removes the last cat from the cats array
function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

//removes the first cat from the cats array
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

//appends a cat to the cats array and returns a new array
function appendCat(name){
    return [...cats,name,]
}

//prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name){
    return [ name, ...cats, ]
}

//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged'
function removeLastCat(){
    return cats.slice(0,2)
}

//removes the first cat in the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat(){
    return cats.slice(1)
}