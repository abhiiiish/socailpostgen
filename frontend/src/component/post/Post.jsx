import React from 'react';
import img from '../../assest/image.jpg' 
import './Post.css';

function Post() {
  return (
    
    <>
    
    <div className='container my-5'>
      <div className='row justify-content-between'>
        <div className='col-md-4 post-content d-flex justify-content-center align-items-center'>
          <div className=''>
            <h3 className='text-center'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</h3>
            <div className='text-center my-4'>
              <button className='social-btn'>Your Social Media Post!</button>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='post p-1'>
            <div className='profile d-flex'>
              {/* <img src="" alt="" className='profile-img' /> */}
              <p className='ms-1 ms-2'>Dummy</p>
            </div>
            <div className='Post-img'>
              <img src={img} alt="" className='img-thumbnail' />
            </div>
            <div className='social-icon ps-2'>
              <span className='me-2'>
                <i className='far fa-heart'></i>
              </span>
              <span className=''>
                <i className='far fa-share-square'></i>
              </span>
            </div>
            <div>
            <p className='ms-2'>Beautiful day at the beach! 🌞🏖</p>
            <p className='ms-2'>#beach #camera</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Post;
