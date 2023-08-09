import React from 'react'

export default function ImageCom({userid,name,open}) {
    const src=`http://localhost:4000/image/${userid}/${name}`
  return (
    <>
        <img src={src} alt="Uploaded Image" className='m-3 rounded-md object-cover' />
    </>
  )
}
