const app = "I don't do much."

var kittens = [
  "Milo",
  "Otis",
  "Garfield"
]

var name = "Alex"

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  newKittens = kittens.slice(-1)
  return newKittens
}

  function removeFirstKitten() {
    newKittens2 = kittens.slice(0)
    return newKittens2
  }
