const logNumbers: (i: number) => void = (i: number) => console.log(i)



const add = (a: number, b: number): number => a + b
const sum: (a: number, b: number) => number = (a: number, b: number): number => a + b

// void and never

const logger = (message: string): void => { console.log(message) } // can return null, undefined also
const throwError = (message: string): never => { throw new Error(message) } // it never returns anythingd


//destructuring

const todaysWeather = {
  date: new Date(),
  weather: 'rainy'
}


const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date)
  console.log(forecast.weather)
}

//ES 2015
const logWeatherES6 = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date)
  console.log(weather)
}



logWeather(todaysWeather)