import React,{useState} from 'react'

export default function Article() {
    const [article, setArticle] = useState('');
  const handleArticleCopy = () => {
   
  };
  return (
    
        <div className="col12 text-center">
            <div><h4></h4></div>
            <div className='section-txt'>
            <textarea
                value={article}
                className="form-control text-center text-pre"
                onChange={(e) => setArticle(e.target.value)}
                 placeholder='Article'
                 readOnly
              />
            </div>
              
              {/* <button className="btn btn-primary mt-2" title="Copy" onClick={handleArticleCopy}>
                <i className="fa-solid fa-copy"></i> <span>Copy</span>
              </button> */}
            </div>
   
  )
}
