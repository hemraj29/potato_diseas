// import { useState, useRef } from "react";
// import axios from "axios";
// import videoBg from '../assest/b.mp4';




// const DragDropFiles = () => {
//   const [files, setFiles] = useState(null);
//   const [result , setResult] = useState({data:""})
//   const[outputClass,setoutputClass] = useState("")
//   const[outputconfi,setoutputConfi] = useState("");
//   const [imageSrc,setImageSrc] = useState("");
//   const inputRef = useRef();

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     setFiles(event.dataTransfer.files)
    
//     // Read the image and convert it to a data URL
   
//   };
  
//   // send files to the server // learn from my other video
//   const handleUpload = async () => {
//     let formData = new FormData();
  
//     // Append the image with the key "file" to match your FastAPI endpoint
//     formData.append("file", files[0]); // Assuming you're sending a single image
//   console.log(formData);
//     try {
//       const res = await axios.post("http://localhost:8001/predict", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data", // Ensure the correct Content-Type header
//         },
//       });
  
//       if (res.status === 200) {
//         setResult(1);
     
//         console.log(res.data.class);
//         console.log("hi");
//        console.log(res.data);
//        setoutputClass(res.data.class);
//        setoutputConfi(res.data.confidence)
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
 

//   if (files && result === 1) {
//     return (
//       <div>
//         <div className="image-container">
//           {/* Check if imageSrc is correctly set and if it contains a valid data URL */}
//           <img src={URL.createObjectURL(imageSrc)} alt="Uploaded Image"  />
      
//         </div>
//         <h2>Predicted Output: {outputClass} </h2>
//         <h3>Confidence: {outputconfi}</h3>
//       </div>
//     );
//   }
  
//   if (files) return (
//     <div className="uploads">
//         <ul>
//             {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li> )}
//         </ul>
//         <div className="actions">
//             <button onClick={() => setFiles(null)}>Cancel</button>
//             <button onClick={handleUpload}>Upload</button>
         
//         </div>
       
//     </div>
//   )

//   return (
    
//     <div className="main-container"> 
// <div id="overlay">
//   <h1> <span className="welcome-line">Welcome To DiseasePredictor.com </span></h1>
//   <h3><span className="welcome-des">your reliable source for predicting and preventing plant diseases. Our advanced algorithms and data analysis help you identify and take proactive measures against common plant diseases such as Early Blight, Late Blight, and more. Protect your 
//   crops with data-driven insights."</span></h3>
// </div>
//   <video src={videoBg} autoPlay loop muted/>

//         <div 
//             className="dropzone"
//             onDragOver={handleDragOver}
//             onDrop={handleDrop}
//         >
//           <h1>Drag and Drop Files to Upload</h1>
//           <h1>Or</h1>
//           <input 
//             type="file"
//             multiple
//             onChange={(event) =>{ setFiles(event.target.files)
//             setImageSrc(event.target.files[0])
//             }}
//             hidden
//             accept="image/png, image/jpeg"
//             ref={inputRef}
//           />
//           <button onClick={() => inputRef.current.click()}>Select Files</button>
//         </div>
//     </div>
//   );
// };

// export default DragDropFiles;













import { useState, useRef } from "react";
import axios from "axios";
import videoBg from '../assest/b.mp4';

const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const [result, setResult] = useState({ data: "" });
  const [outputClass, setOutputClass] = useState("");
  const [outputConfidence, setOutputConfidence] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState("");
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
    setUploadedFileName(event.dataTransfer.files[0].name);
  };

  const handleUpload = async () => {
    let formData = new FormData();
    formData.append("file", files[0]);

    try {
      const res = await axios.post("https://ssdf.onrender.com/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 200) {
        setResult(1);
        setOutputClass(res.data.class);
        setOutputConfidence(res.data.confidence);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (files && result === 1) {
    return (
      <div>
        <div className="image-container">
          <img src={URL.createObjectURL(files[0])} alt="Uploaded Image" />
        </div>
        <h2>Predicted Output: {outputClass}</h2>
        <h3>Confidence: {outputConfidence}</h3>
        <h3>Uploaded File Name: {uploadedFileName}</h3>
      </div>
    );
  }

  if (files) {
    return (
      <div className="uploads">
        <ul>
          {Array.from(files).map((file, idx) => (
            <li key={idx}>{file.name}</li>
          ))}
        </ul>
        <div className="actions">
          <button onClick={() => setFiles(null)}>Cancel</button>
          <button onClick={handleUpload}>Upload</button>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container">
      <div id="overlay">
        <h1>
          {" "}
          <span className="welcome-line">Welcome To DiseasePredictor.com </span>
        </h1>
        <h3>
          <span className="welcome-des">
            your reliable source for predicting and preventing plant diseases.
            Our advanced algorithms and data analysis help you identify and
            take proactive measures against common plant diseases such as Early
            Blight, Late Blight, and more. Protect your crops with data-driven
            insights."
          </span>
        </h3>
      </div>
      <video src={videoBg} autoPlay loop muted />
      <div
        className="dropzone"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <h1>Drag and Drop Files to Upload</h1>
        <h1>Or</h1>
        <input
          type="file"
          multiple
          onChange={(event) => {
            setFiles(event.target.files);
            setUploadedFileName(event.target.files[0].name);
          }}
          hidden
          accept="image/png, image/jpeg"
          ref={inputRef}
        />
        <button onClick={() => inputRef.current.click()}>Select Files</button>
      </div>
    </div>
  );
};

export default DragDropFiles;
