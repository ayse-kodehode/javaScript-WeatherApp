const url = 'https://api.openweathermap.org/data/2.5/'
const key = '06dd58adb0807b84b9a0e9931c2905ac'

const setQuery = (e)=>{
    getResult(searchBar.value)
}

const getResult = (CityName) => {

    let query = `${url}weather?q=${CityName}&appid=${key}&units=metric&lang=eng`

    fetch(query)
    .then(weather => {
        return weather.json()
  })
  .then (displayResult)
}

const displayResult = (result) =>{

    let city = document.querySelector('.City')
    city.innerText = `${result.name},${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)} C`
     
    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)}C`/
    $Math.round(result.main.temp_max) 

}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keydown',setQuery)