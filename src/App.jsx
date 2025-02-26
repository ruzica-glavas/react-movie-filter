import { useState, useEffect } from 'react'

const movies=  [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]


function App() {

  const [genres, setGenres] = useState (``);

  {/* Parametri che servono per il filtraggio */}
  const [filteredGenres, setFilteredGenres] = useState(movies);

  {/* Per far in modo che se non c'è nessun genere selezionato, ci sia la lista completa in stampa */}
  const newGenres = [``, ... movies.map ((movie => movie.genre))]
  

  useEffect(() => {
    if (genres === ``) {
      setFilteredGenres(movies);
    } else {
      setFilteredGenres(movies.filter((movie) => movie.genre === genres));
    }
    console.log(genres);
     }, [genres]);

  return (
    <>
      <h1>Seleziona il tuo film!</h1>

      <label>Scegli il tuo genere di film:</label>

          <select value={genres} 
            onChange={(e) => setGenres(e.target.value)}>
            {newGenres.map ((movie, index)=>
              <option key={index}>{(movie)}</option>
            )}
              
          </select>

          <ul>
            {filteredGenres.map ((movie, index) => (
              <li key={index}>{movie.title} {movie.genre}</li>
            ))

            }
          </ul>
      
    </>
  )
}

export default App
