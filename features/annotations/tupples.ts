const drink = {
  color: 'brown',
  corbonated: true,
  sugar: 40
}

// or 

// order of elements
const pepsi = ['brown', true, 40]

type Drink = [string, boolean, number]

const coke: [string, boolean, number] = ['brown', true, 40]
const soda: Drink = ['grey', false, 20]
const tea: Drink = ['brown', false, 0]

// coke[0] = 20 // error

