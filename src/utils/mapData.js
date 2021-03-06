import { roundTemperature } from './index'

export const mapCity = (city) => {
  return { id: city.Key, city: city.LocalizedName, country: city.Country.LocalizedName }
}

export const mapCitiesAC = (cities) =>
  cities.map(mapCity);


const mapCurrentConditions = (currentWeather) => {
  return {
    date: currentWeather.LocalObservationDateTime,
    isDayTime: currentWeather.IsDayTime,
    temperature: roundTemperature(currentWeather.Temperature.Metric.Value),
    icon: currentWeather.WeatherIcon,
    text: currentWeather.WeatherText
  }
}

const mapForecast = (forecast) => {
  return forecast.map(f => {
    return {
      date: f.Date,
      temperature: {
        min: roundTemperature(f.Temperature.Minimum.Value),
        max: roundTemperature(f.Temperature.Maximum.Value),
      },
      dayIcon: f.Day.Icon,
      dayText: f.Day.IconPhrase
  }})
}

export const mapCityWeather = (currentConditions, forecast) => {
  return {
    currentConditions: mapCurrentConditions(currentConditions),
    forecast: mapForecast(forecast.DailyForecasts)
  }
}
