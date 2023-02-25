
// react imports
import './App.css';
import { useState } from 'react';



// component imports 
import SearchComponent from './components/searchComponent';
import ImageComponent from './components/imageComponent';


// 3.part library imports 
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  // states
  const [movies, setmovies] = useState([])



  // functions 
  const searchImages = async (searchText) => {
    const res = await  axios.get('https://api.unsplash.com/search/photos' , {
      headers:{  
         Authorization: 'Client-ID wME8Rw3aE_YlBVHb3xLcWbYJ7MMsMG0ipASZGQn2HYc'
       } , 
       params: {
          query : searchText
       }
    });
    return res.data.results;

  }


  const handleForm = (event) => {
    // Burada api'a istek atılıp dönen datayı setstate yapmamız gerekiyor. 
    searchImages(event.target.value)
    .then((x) =>
    {
      setmovies(x) ;
    });
  }

  return (
    <div className="App">
      <h3> hello</h3>
      <SearchComponent handleFunc={handleForm} />
      <ImageComponent myImageArray={movies}  />
    </div>
  );
}

export default App;
