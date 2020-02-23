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
                <button onClick={() => reactSwipeEl.prev()}>Previous</button>
                <button onClick={() => reactSwipeEl.next()}>Next</button>
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