
import React, {useState} from 'react';

const api = {
  key: "502af55bf364766f3fc8c4378edc37db",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = event => {
    // only when user types enter whill trigger the fetch
    if(event.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metrix&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery(''); // refresh the query back to empty string
          console.log(result);
        })
    }
  }
  
  
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "Novenber", "December"];
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${year} ${month} ${date}`;
  }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        <div className="location-box">
          <div className="location">Taipei City, Taiwan</div>
          <div className="data">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            15
          </div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
