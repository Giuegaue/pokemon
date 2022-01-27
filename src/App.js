import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [pokemons, setPokemon] = useState([])

  // useEffect(() => {

  //   axiosPokemon();

  //     axios.get("https://pokeapi.co/api/v2/pokemon")
  //       .then(res => {console.log(res.data)
  //       setPokemon(res.data)
  //       })
  //       .catch(err => console.log(err))

  // },[])


  const axiosPokemon = () =>{ 
  
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then(res => {console.log(res.data)
      setPokemon(res.data.results)
      })
      .catch(err => console.log(err))
  }


  return (
    <div className="App">
      <button onClick={axiosPokemon}>Axios Pokemon</button>
      {
      pokemons.map((pokemon) => {
        return(
          <div key = {pokemon.id}>
            <div>{pokemon.name}</div>
          </div>
        )
      })

      }
    </div>
  );
}

export default App;
