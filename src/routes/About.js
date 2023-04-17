import React from 'react'
import { imagePath } from '../utils/helpers'

export default function about() {
  return (
    <div>

      <div class="d-flex justify-content-center">
        {/*This is for profile image*/}
          <img src ={`${imagePath}/icon1.jpg`} alt = "icon" class = "m-3 w-10 h-auto rounded-4"/>

        {/*This will contain the description and contact details and social media buttons*/}
        <div class = "w-25 m-3 align-middle">
          <h2>ABOUT</h2>
          <p class = "my-1">James Lee is an illustrator based in Virginia</p>
          <p class = "my-1">He graduated from Virginia Commonwealth University School of the Arts with a major in Communication Arts in 2019</p>
          <p class = "my-1">James can often be found nerding out about food, having cat envy, and drawing planty things</p>
          <p class = "my-1">Email: <a href="hello.jamesdl@gmail.com">Hello.JamesDL@gmail.com</a></p>
        </div>

      </div>

    </div>
  )
}
