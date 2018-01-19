const app = "I don't do much."
var kittens = ["Milo", "Otis","Garfield"]

function destructivelyAppendKitten(string, array){
  var newKittens = kittens
  return newKittens.push(string)
}

function destructivelyPrependKitten(string, array){
  var newKitten = kittens
  return newKitten.unshift(string)
}

function destructivelyRemoveLastKitten(string, array){
  var newKitty = kittens
  return newKitty.pop(string)
}

function destructivelyRemoveFirstKitten(string, array){
  var newKit = kittens
  return newKit.shift(string)
}

function appendKitten(string, array){
  var newArray = kittens
  return [...newArray, string]
}

function prependKitten(string, array){
  return [string, ...array]
}

function removeLastKitten(array){
  return array.slice(0, array.length -1)
}

function removeFirstKitten(array){
  return array.slice(1)
}