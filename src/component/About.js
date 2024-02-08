import '../About.css';
import React from 'react'
import { useRef } from 'react';
import ReactPlayer from 'react-player';
const VIDEO_PATH = 'https://www.youtube.com/watch?v=5gWsmYFQE7w'
const About = () => {
  const playerRef = useRef(null);
  return (
    <div className='main'>
<p><span> NOTE-</span>For Better View please use PC</p>
    <div className='text'>
    <h2>About Potato Diseases</h2>
      <p>
        Potato diseases, such as Early Blight and Late Blight, are common afflictions that can significantly impact the yield and quality of potato crops. These diseases are caused by different pathogens and can result in various symptoms and consequences for potato plants.
      </p>

      <h3>Early Blight</h3>
      <p>
        Early Blight is a fungal disease caused by <i>Alternaria solani</i>. It typically appears as small, dark brown to black spots with concentric rings on potato leaves. If left untreated, it can lead to defoliation, reducing the plant's ability to produce potatoes.
      </p>

      <h3>Late Blight</h3>
      <p>
        Late Blight, on the other hand, is caused by the water mold <i>Phytophthora infestans</i>. It presents as dark, irregularly shaped lesions on leaves, and it can quickly spread in wet conditions, leading to a rapid and devastating potato crop loss.
      </p>

      <p>
        Understanding these diseases is crucial for potato growers to implement effective prevention and control strategies. Integrated pest management, proper crop rotation, and timely fungicide applications are essential in managing these diseases and protecting potato crops.
      </p>
<h1>"Understanding Potato Diseases: <span>Early Blight and Late Blight - Watch our Video Guide</span>"</h1>
    </div>
      <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} className="N"/>
    </div>
  )
}

export default About;