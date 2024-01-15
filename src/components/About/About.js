import React from 'react'
import './About.css'
import profilePhoto from '../../Assets/Profile photo.jpg'

export default function About() {
  return (
    <div className='container d-flex'>
      <div className='row'>
        <div className='col-lg-6'>
            <div className='profile-photo mx-5 d-flex justify-content-center'>
                <img src={profilePhoto} alt="My profile photo" />
            </div>
        </div>
        <div className='col-lg-6 d-flex align-items-center'>
            <div className='mx-5'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis perspiciatis, deleniti ad nobis, ipsum laudantium veritatis ea quibusdam officia repellat nam doloribus mollitia aut magnam natus. Facilis quos dolorem dicta!</p>
            </div>
        </div>
      </div>
    </div>
  )
}
