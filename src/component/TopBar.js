import React from 'react'
import { Link } from 'react-router-dom'
import { imagePath } from '../utils/helpers'

export default function TopBar(props) {
  return (
    <div>
     <div class="jamesss-spacer"></div>
     <div class= "d-flex justify-content-end">
      <Link to= "/"><img alt ='this is the title' id='title1' src ={`${imagePath}/title1.png`}/></Link>
    </div>
     <div class="d-flex justify-content-between mx-4">
        <div class="d-flex justify-content-start">
          <ul class="list-group list-group-horizontal">
             <Link to="illustration" class = "btn btn-primary mx-1">Illustration</Link>

             <button type="button" class="btn btn-primary mx-1">Background Design</button>

              <Link to="about" class="btn btn-primary mx-1">About / Contact</Link>
          </ul>
        </div>
        <div class="d-flex align-self-end align-items-center">
          <p class="m-0"><span class="align-middle">Illustration  &  Background Design</span></p>
        </div>
     </div>
     <div class="jamesss-spacer"></div>
    </div>
  )
}
