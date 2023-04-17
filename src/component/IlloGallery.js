import React from 'react'
import { Link } from 'react-router-dom'
import { imagePath } from '../utils/helpers'
import './gallery.css'


export default function Illustration() {

    let data = [];

    for ( let i = 1; i < 14; i++) {
        data.push({
            id: `${i}`,
            imgSrc: `${imagePath}/illustration${i}.JPG`,
        })
    }
/*
    let data =[
        {
            id: 1,
            imgSrc: `${imagePath}/illustration1.JPG`,
        },
        {
            id: 2,
            imgSrc: `${imagePath}/illustration2.JPG`,
        },
        {
            id: 3,
            imgSrc: `${imagePath}/illustration3.JPG`,
        },
        {
            id: 4,
            imgSrc: `${imagePath}/illustration4.JPG`,
        },
        {
            id: 5,
            imgSrc: `${imagePath}/illustration5.JPG`,
        },
        {
            id: 6,
            imgSrc: `${imagePath}/illustration6.JPG`,
        },
        {
            id: 7,
            imgSrc: `${imagePath}/illustration7.JPG`,
        },
        {
            id: 8,
            imgSrc: `${imagePath}/illustration8.jpg`,
        },
        {
            id: 9,
            imgSrc: `${imagePath}/illustration9.JPG`,
        },
        {
            id: 10,
            imgSrc: `${imagePath}/illustration10.JPG`,
        },
        {
            id: 11,
            imgSrc: `${imagePath}/illustration11.JPG`,
        },
        {
            id: 12,
            imgSrc: `${imagePath}/illustration12.JPG`,
        }
        
    ]
*/
  return (
    <>
    <div className = "illo-gallery">
        {data.map((item, index)=>{
            return(
                <div className = "pics" key = {index}>
                    <img src = {item.imgSrc} style = {{width: '100%'}}/>
                </div>
            )
        })}
    </div>
    </>
  )
}
