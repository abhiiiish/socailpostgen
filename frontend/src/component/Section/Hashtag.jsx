import React,{useState} from 'react'

export default function Hashtag() {
    const [hashtags, setHashtags] = useState('');
    const handleHashtagsCopy = () => {
    
    };
  return (
        <div className="col12 mb-4 text-center">
            <div><h4 className=' mx-auto'></h4></div>
            <div className='section-txt'>
            <textarea
                value={hashtags}
                className="form-control text-center text-pre"
                onChange={(e) => setHashtags(e.target.value)}
                placeholder='Hashtag'
                readOnly
              />
            </div>
              
              {/* <button className="btn btn-primary mt-2" title="Copy" onClick={handleHashtagsCopy}>
                <i className="fa-solid fa-copy"></i> <span>Copy</span>
              </button> */}
            </div>
  )
}
