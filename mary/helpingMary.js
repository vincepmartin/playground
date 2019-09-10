var flavor = "vanilla"
var vessel = "cone"
var toppings = "walnuts"


if(flavor === "vanilla" || flavor === "chocolate") {
    if(vessel === "cone" || vessel === "bowl") {
        if(toppings === "sprinkles" || toppings === "peanuts") {
            console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`)
        }
    }
}