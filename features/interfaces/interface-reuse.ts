interface Reportable {
  summary(): string;
}

const vehicle = {
  name: 'venue', model: 2023, insured: true,
  summary(): string { return `Name: ${this.name}, Model: ${this.model}, is insured: ${this.insured}` }
};

const drink = {
  color: 'brown', carbonated: true, sugar: 40,
  summary(): string { return `Drink with color ${this.color} is ${this.carbonated} has sugar ${this.sugar} grams` }
}


const logSummary = (item: Reportable): void => {
  console.log(item.summary());
};

logSummary(vehicle);
logSummary(drink);
