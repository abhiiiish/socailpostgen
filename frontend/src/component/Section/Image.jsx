import React,{useState} from 'react';

export default function Image() {
const [imageSrc, setImageSrc] = useState('');

  const handleImageDownload = () => {
    
  };
  return (
    
        <div className="col-lg-3 col-md-6">
          <div className='text-center'><h4></h4></div>
          <section className="mb-4 text-center">
            <div>
            <img src="" alt="" className="img-fluid Genrate-img" />
              </div>
            <button className="btn btn-primary  mt-2" title='Download' onClick={handleImageDownload}>
              <i className="fa-solid fa-download"></i> <span>Downlaod</span>
            </button>
          </section>
        </div>
    
  )
}
