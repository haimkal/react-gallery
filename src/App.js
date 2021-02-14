import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => res.json())
      .then(res => setAlbums(res))
  }, []);

  function handleChange(e) {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${e.target.value}`)
      .then(res => res.json())
      .then(res => setPhotos(res))
  }

  return (
    <div className="App">
      <header className="select">
        <h1>Select an album:</h1>
      
        <select onChange={handleChange}> 
         <option selected hidden disabled>Choose here...</option>
        {albums.map((album, index) => {
          return <option key={index} value={album.id}>{album.title}</option>
        })}

      </select>
    </header>
      {photos.map((photo, i) => <img key={i} src={photo.thumbnailUrl} />)}
    </div>

  );
}



export default App;
