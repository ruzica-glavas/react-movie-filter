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

  const [selectedGenres, setSelectedGenres] = useState (``);
  const [filteredGenres, setFilteredGenres] = useState(movies);


  

  useEffect(() => {
    if (selectedGenres === "" || selectedGenres === "Tutti") {
      setFilteredGenres(movies);
    } else {
      setFilteredGenres(movies.filter((movie) => movie.genre === selectedGenres));
    }
    console.log(selectedGenres);
     }, [selectedGenres]);

  return (
    <>
      <h1>Seleziona il tuo film!</h1>

      <label>Scegli il tuo genere di film:</label>

          <select value={selectedGenres} 
            onChange={(e) => setSelectedGenres(e.target.value)}>
            {movies.map ((movie, index)=>
              <option key={index}>{(movie.genre)}</option>
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
