import React from 'react'
import imag1 from "./image_not_found.jpg"
export default function NewsItem  (props){
  
    let {title,desc,img,url}=props
    return (
      <div>
           <div className="card my-4" >
            {img?<img src={img} className="card-img-top" alt="IMAGE NOT FOUND" style={{height:"200px",width:"100%",objectFit:"cover"}}/>:<img src={imag1} className="card-img-top" alt="IMAGE NOT FOUND" style={{height:"200px",width:"100%",objectFit:"cover"}}/>}
            <div className="card-body" style={{maxHeight:"200px"}} >
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <a href={url} target="_blank"className="btn btn-primary">Read More</a>
            </div>
            </div>
      </div>
    )
  }
