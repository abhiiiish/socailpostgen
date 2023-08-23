import React,{useState} from 'react'

export default function Caption() {
  const [caption, setCaption] = useState('');

  const handleCaptionCopy = () => {
    
  };

  return (
        <div className="col-12 mb-4 text-center">
              <div><h4></h4></div>
              <div className='section-txt'>
              <textarea
                value={caption}
                className="form-control text-center text-pre"
                onChange={(e) => setCaption(e.target.value)}
                placeholder='Caption'
                readOnly
              />
              </div>
              
              {/* <button className="btn btn-primary mt-2" title="Copy" onClick={handleCaptionCopy}>
                <i className="fa-solid fa-copy"></i> <span>Copy</span>
              </button> */}
            </div>
  )
}
