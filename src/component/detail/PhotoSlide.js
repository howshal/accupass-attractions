import React from "react";
import PropTypes from 'prop-types';
import ReactSwipe from 'react-swipe';

const PhotoSlide = ({images}) => {
    if (images.length > 0) {
        let reactSwipeEl;

        return (
            <div>
                <ReactSwipe
                    className="carousel"
                    swipeOptions={{ continuous: false }}
                    ref={el => (reactSwipeEl = el)}
                >
                    {images.map((image, index) => (
                        <div key={index} className="slide-image">
                            <img src={image.src} alt={image.sub}/>
                        </div>
                    ))}
                </ReactSwipe>
                <div style={{textAlign: 'center'}}>
                    <button onClick={() => reactSwipeEl.prev()}>前一張照片</button>&nbsp;
                    <button onClick={() => reactSwipeEl.next()}>下一張照片</button>
                </div>
            </div>
        );
    } else {
        return (
            <div>No images found.</div>
        );
    }
};

PhotoSlide.propTypes = {
    images: PropTypes.array.isRequired,
};

export default PhotoSlide;