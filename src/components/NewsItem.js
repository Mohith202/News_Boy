import React from 'react'
import imag1 from "./image_not_found.jpg"
export default function NewsItem  (props){
  
    let {title,desc,img,url}=props
    return (
      <div>
           <div className="card my-4" >
            <img src={img} className="card-img-top" alt="IMAGE NOT FOUND"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <a href={url} target="_blank"className="btn btn-primary">Read More</a>
            </div>
            </div>
      </div>
    )
  }
