const app = "I don't do much."
var kittens = ["Milo", "Otis","Garfield"]

function destructivelyAppendKitten (string, array){
  var newKittens = kittens
  return newKittens.push(string)
}

function destructivelyPrependKittens(string, array){
  var newKitten = kittens
  return newKitten.shift(string)
}