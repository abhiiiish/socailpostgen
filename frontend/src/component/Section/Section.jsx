import React, { useState } from 'react';
import './Section.css';
import Image from './Image';
import Article from './Article';
import Hashtag from './Hashtag';
import Caption from './Caption';
import Carousel from './Carousel';

function Section() {
  const [activeTab, setActiveTab] = useState('images'); // Default active tab

  const toggleTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
    <div className='section-con'>
      <div className='py-5 px-3 section-main'>
        <div className='container text-center section-in'>
          <div className='row justify-content-center mb-5'>
            <div
              className={`col-md-2 p-3 toggle ${activeTab === 'images' ? 'active' : ''}`}
              onClick={() => toggleTab('images')}
            >
              <i className="fa-regular fa-image"></i>
              <span className='mx-1'>Images</span>
            </div>
            <div
              className={`col-md-2 p-3 toggle ${activeTab === 'hashtags' ? 'active' : ''}`}
              onClick={() => toggleTab('hashtags')}
            >
              <i className="fa-solid fa-hashtag"></i>
              <span className='mx-1'>Hashtags</span>
            </div>
            <div
              className={`col-md-2 p-3 toggle ${activeTab === 'caption' ? 'active' : ''}`}
              onClick={() => toggleTab('caption')}
            >
              <i className="fa-regular fa-closed-captioning"></i>
              <span className='mx-1'>Caption</span>
            </div>
            <div
              className={`col-md-2 p-3 toggle ${activeTab === 'article' ? 'active' : ''}`}
              onClick={() => toggleTab('article')}
            >
              <i className="fa-regular fa-newspaper"></i>
              <span className='mx-1'>Article</span>
            </div>
            {/* ---------------------------------------------------------------------- */}
            <div
              className={`col-md-2 p-3 toggle ${activeTab === 'carousel' ? 'active' : ''}`}
              onClick={() => toggleTab('carousel')}
            >
              <i className="fa-regular fa-newspaper"></i>
              <span className='mx-1'>Carousel</span>
            </div>
          </div>
        </div>

        <div className="container section">
          {activeTab === 'images' && (
            <div className="row">
              <Image />
              <Image />
              <Image />
              <Image />
            </div>
          )}

          {activeTab === 'hashtags' && (
            <div className="row">
              <Hashtag />
              
            </div>
          )}

          {activeTab === 'caption' && (
            <div className="row">
              <Caption />
            </div>
          )}

          {activeTab === 'article' && (
            <div className="row">
              <Article />
            </div>
          )}

          {activeTab === 'carousel' && (
            <div className="row">
              <Carousel/>
            </div>
          )}
        </div>
      </div>
      </div>
    </>
  );
}

export default Section;
