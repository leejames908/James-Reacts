import React from 'react'

export default function TopBar(props) {
  return (
    <div>
     <div class="jamesss-spacer"></div>


     <div class= "d-flex justify-content-end">
          <img alt ='this is the title' id='title1' src ={'./images/title1.png'}/>
    </div>


     <div class="d-flex justify-content-between mx-4">
        <div class="d-flex justify-content-start">
          <ul class="list-group list-group-horizontal">
             <button type="button" class="btn btn-primary mx-1">Illustration</button>

             <button type="button" class="btn btn-primary mx-1">Background Design</button>

              <button type="button" class="btn btn-primary mx-1">About / Contact</button>
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
