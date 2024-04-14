import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './Dashboard';
import axios from 'axios';
import Game from './Game';

function Example() {
    return (
        <>
            <Dashboard/>
            {/* <Game/> */}
        </>
    );
}

export default Example;

if (document.getElementById('example')) {
    const Index = ReactDOM.createRoot(document.getElementById("example"));

    const options = {
        method: 'GET',
        url: 'https://opencritic-api.p.rapidapi.com/game',
        headers: {
          'X-RapidAPI-Key': '3fc0565120msh9d35b9d73ece4cdp141856jsn25819190e465',
          'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }

    Index.render(
        <React.StrictMode>
            <Example/>
        </React.StrictMode>
    )
}
