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
  return 
}