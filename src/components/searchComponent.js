// bu component'in amacı bir input'a sahip olucak ve bizim api'a isteğimizi atacak. 

import React from 'react'
import {Button, FormControl, FormLabel} from 'react-bootstrap'

function searchComponent(props) {

    const {handleFunc} = props
  return (
    <div>
        <FormLabel> Anahtar Kelime Giriniz</FormLabel>
        <FormControl onChange={handleFunc}></FormControl>
    </div>
  )
}


export default searchComponent;
