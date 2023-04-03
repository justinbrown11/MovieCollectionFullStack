import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';

/**
 *  The Movies component
 *
 * @returns The list of movies page
 */
const Movies = () => {
  // Set movies state var to movies data
  const [movies, setMovies] = useState<Movie[]>([]);
  const [resultMessage, setResultMessage] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    // Gets movies from backend api
    const getMovies = async () => {
      try {
        setResultMessage('Loading...'); // Set message to loading

        const result = await fetch('https://localhost:4000/movie'); // fetch the movies from endpoint
        const json = await result.json(); // convert result to json
        setResultMessage('Successfully grabbed movies'); // set success message
        setMovies(json); // set movies state var to the json returned
        setError(false); // turn off error
      } catch (err) {
        setResultMessage('Error: failed to grab movies'); // set error message
        setError(true); // turn on error
        setMovies([]); // set movies to none
      }
    };

    getMovies(); // call above function
  }, []);

  return (
    <>
      <div className="text-center">
        <h1 className="display-4">My Movies</h1>
        <br />
        {error ? (
          <p className="text-danger">{resultMessage}</p>
        ) : (
          <p className="text-success">{resultMessage}</p>
        )}
      </div>

      <div>
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <td>
                <b>Id</b>
              </td>
              <td>
                <b>Title</b>
              </td>
              <td>
                <b>Category</b>
              </td>
              <td>
                <b>Year</b>
              </td>
              <td>
                <b>Director</b>
              </td>
              <td>
                <b>Rating</b>
              </td>
              <td>
                <b>Edited</b>
              </td>
              <td>
                <b>Lent To</b>
              </td>
              <td>
                <b>Notes</b>
              </td>
            </tr>
          </thead>

          <tbody>
            {/* Map through each movie and create table rows */}
            {movies.map((m) => (
              <tr>
                <td>{m.movieId}</td>
                <td>{m.title}</td>
                <td>{m.category}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.edited ? m.edited : 'No'}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Movies;
