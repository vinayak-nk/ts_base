const profile = {
  name: 'vk',
  age: 30,
  coordinates: {
    lat: 12, long: 77
  },
  setAge(age: number): void { this.age = age }
}



const { age }: { age: number } = profile

{
  const { age, name }: { age: number, name: string } = profile
}

const { coordinates: { lat, long } }: { coordinates: { long: number, lat: number } } = profile