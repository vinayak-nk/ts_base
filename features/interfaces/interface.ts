interface Vehicle {
  name: string;
  model: number;
  insured: boolean;
  summary(): string;
}

const oldVenue = {
  name: 'venue',
  model: 2023,
  insured: true,
  summary(): string { return `Name: ${this.name}` }
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.model}`);
  console.log(`Insured: ${vehicle.insured}`);
};

const logVehicle = (vehicle: Vehicle): void => {
  const { model, insured } = vehicle
  console.log(vehicle.summary());  // Call summary() on the vehicle object
  console.log(`Year: ${model}`);
  console.log(`Insured: ${insured}`);
};

printVehicle(oldVenue)
logVehicle(oldVenue);
