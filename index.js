const currentCart = {
    item1: { name: 'Laptop', quantity: 1, price: 1000 },
    item2: { name: 'Phone', quantity: 2, price: 500 }
  };
  
  const newItems = {
    item3: { name: 'Headphones', quantity: 1, price: 100 }
  };
  
  const updatedCart = { ...currentCart, ...newItems };
  
  console.log(updatedCart);
 

  function collectPhoneNumbers(...numbers) {
    return numbers;
}

const phoneNumbers = collectPhoneNumbers('+1234567890', '+0987654321', '+1122334455');
console.log(phoneNumbers);


// Boiling water function
const boilWater = (water) => `${water} is boiled`;

// Brewing coffee function
const brewCoffee = (water) => `Coffee brewed with ${water}`;

// Adding milk function
const addMilk = (coffee) => `Milk added to ${coffee}`;

const makeCoffee = (water) => addMilk(brewCoffee(boilWater(water)));

// Using the composed function
console.log(makeCoffee('Water'));
  