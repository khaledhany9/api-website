import React, {useState} from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [image, setImage] = useState('')
  const [Loading, setLoading] = useState('')
  
  const handleChange = () => {
    setLoading(true)
    axios.get('https://api.generated.photos/api/v1/faces?api_key=-H73Axf9Ke22ZUUbW5NFRA&order_by=random')
  .then(res => {
    const uri = res.data.faces[0].urls[4][512]
    uri && setImage(uri);
    uri && setLoading(false)
  })
  .catch(err => {
    console.log(err.message)

  })


  }

  return (
    <div className="App">
      <h1>AI Photo Generator</h1>
      {Loading && <p>Loading</p>}
      {image && <img src={image} alt="AI Face" />}
      <button type='button' onClick={handleChange}>
        New Image
      </button>
    </div>
  );
}

export default App;
