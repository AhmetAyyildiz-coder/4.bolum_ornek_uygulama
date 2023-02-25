
// bu componentin amacı resimlerimizi listelemek. Gelen pros'a göre.

import React from 'react'

function imageComponent(props) {
    const {myImageArray} = props
  return (
    
      <div className='row'>
         {myImageArray.map((x)=> 
         <div className='col-md-4'> <img src= {x.urls.small} /> </div>
         )}   
     
    </div>
  )
}

export default imageComponent
