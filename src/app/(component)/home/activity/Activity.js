 import React from 'react'
import "./Activity.scss"
import ActivitySlider from '../../swiper/ActivitySlider'

const Activity = () => {
  return (
    <div className="activities parent">
        <div className="container activities-container">
          <h2>
            Our Exciting <span>Adventures</span>
          </h2>

          <div className="swiper-box">
          <ActivitySlider/>
          </div>
        </div>
      </div>
  )
}

export default Activity
