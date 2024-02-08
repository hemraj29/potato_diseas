import React from 'react'
import "./Mdescription.css"
const ModelDesciption = () => {
  return (
    <div className='main'>

    <h1>Welcome to Plant Disease Predictor</h1>
    <p>Your Trusted Source for Plant Disease Prediction</p>


  <section id="model-description">
    <h2>Model Description</h2>
    <p>This model has the capacity to predict three types of plant diseases: Late Blight, Early Blight, and Healthy plants. It is designed to analyze plant images and provide accurate disease predictions.</p>
  </section>

  <section id="dataset-info">
    <h2>Dataset</h2>
    <p>The dataset used in this model is publicly available on Kaggle and consists of over 80,000 sample images of plants. These images serve as the foundation for training the predictive algorithms.</p>
  </section>

  <section id="algorithm-used">
    <h2>Algorithm</h2>
    <p>The model employs a Convolutional Neural Network (CNN) to process and analyze the dataset. This deep learning algorithm is adept at recognizing patterns in images, making it well-suited for disease prediction.</p>
  </section>

  <section id="user-friendly-ui">
    <h2>User-Friendly UI</h2>
    <p>Our platform features a user-friendly interface built using React. This ensures an intuitive and seamless experience for users. You can easily upload plant images, receive predictions, and access insights for proactive disease management.</p>
  </section>

 

  
    <p>&copy; 2023 Plant Disease Predictor</p>

    </div>
  )
}

export default ModelDesciption;