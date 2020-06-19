import React,{useState} from 'react';
import './App.css';

function App() {

  const [image,setImage]=useState('');
  const [loading ,setLoading] = useState(false);
  

  const uploadImage = async e =>{
    const files= e.target.files;
    const data = new FormData()
    data.append('file',files[0]);
    data.append('upload_preset','darwin');

    setLoading(true)

    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/sahil032/image/upload',
      {
        method:'POST',
        body:data
      });

    const file = await  res.json();

    setImage(file.secure_url);
    setLoading(false);
  }
  return (
    <div className="container py-5"> 
        <header class="text-white text-center">
          <img src="https://res.cloudinary.com/mhmd/image/upload/v1564991372/image_pxlho1.svg" alt="" width="150" class="mb-4"/>

        </header>

<div className="row py-4">
    <div className="col-lg-6 mx-auto">

        <div className="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
            <input id="upload" type="file" onChange={uploadImage} name="file"
             className="form-control border-0"/>
            <label id="upload-label" htmlFor="upload" 
            className="font-weight-light text-muted">Upload Your Image Here</label>
            <div className="input-group-append">
                <label htmlFor="upload" className="btn btn-light m-0 rounded-pill px-4"> 
                <i className="fa fa-cloud-upload mr-2 text-muted"></i>
                <small className="text-uppercase font-weight-bold text-muted">Choose file</small></label>
            </div>
        </div>


     
        <p className="font-italic text-white text-center">The image uploaded will be rendered inside the box below.</p>
        {/* <div className="image-area mt-4">
        {loading ? 
      (<h3>Loading.....</h3>):(
        <img src={image}   className="img-fluid rounded shadow-sm mx-auto d-block" />
      )}
       
        </div> */}


      <div>
        {
          loading  ? (
          <h3 className="text-center">Loading.....</h3>)
         :
          (
          <div className="image-area mt-4">
          <img src={image}   
          className="img-fluid rounded shadow-sm mx-auto d-block" />
          </div>)
        }
      </div>

    </div>
</div>
</div>
  );
}

export default App;


