
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push("Ralph")
}

function destructivelyPrependCat() {
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat(name){
    return [...cats, name];
}

function prependCat(name) {
    return [name, ...cats];
}

function removeFirstCat(name) {
    return cats.slice(1)
}

function removeLastCat(name) {
    return cats.slice(0, -1)
}