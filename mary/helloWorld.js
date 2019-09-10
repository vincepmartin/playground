let hello = (name) => {
  console.log(`Hi ${name}`)
}

function hello2(name) {
  console.log('Hi ' + name)
}


hello("Mary")
hello("Gadget")
hello2("vince")

let names = ["mary", "gadget", "vince"]
names.forEach(name => { hello(name) })


