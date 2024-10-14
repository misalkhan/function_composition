**Explaination of Spread operator code.**
currentCart contains two items: a Laptop and a Phone, each with its name, quantity, and price.
newItems contains one new item: Headphones.
The line const updatedCart = { ...currentCart, ...newItems }; merges currentCart and newItems into a new object called updatedCart.
The spread operator takes all properties from currentCart and newItems and copies them into updatedCart.
Finally, console.log(updatedCart); outputs the combined cart, which now contains all three items.

**Explaination of Rest operator code.**
The function collectPhoneNumbers(...numbers) uses the rest parameter syntax (...numbers) to gather all arguments passed to the function into an array named numbers.
When collectPhoneNumbers is called with three phone numbers as arguments, it collects them into the numbers array.
The line const phoneNumbers = collectPhoneNumbers('+1234567890', '+0987654321', '+1122334455'); calls the function and assigns the resulting array to phoneNumbers.
Finally, console.log(phoneNumbers); outputs the array of collected phone numbers.

**Explaination of Function Composition code.**
boilWater(water) is a function that simulates boiling water and returns a string indicating that the water is boiled.
brewCoffee(water) takes the boiled water and simulates brewing coffee with it, returning a string that describes the brewed coffee.
addMilk(coffee) simulates adding milk to the brewed coffee and returns a description of the final product.
The function makeCoffee(water) composes the three functions: it first boils the water, then brews the coffee, and finally adds milk to it. The result is a final description of the complete process.
The line console.log(makeCoffee('Water')); calls the makeCoffee function with 'Water' as an argument and outputs the final description of the coffee-making process.
