import ImagesContext from './imgsContext'
import { useState, useContext } from 'react';

// Image Reducer uses useContext to change the image index.
// ImageReducer is a pure js function.

function ImageReducer(state, action) {
    // action is an object which contains the properties obj supplied.
    // In this case only type property is supplied.
    let imgs = useContext(ImagesContext)
    let [index, setIndex] = useState(0)
    switch (action.type) {
        // In case when action.type is "NEXT"
        case 'NEXT':
            if (index === 0) {
                setIndex(imgs.length - 1)
            } else {
                setIndex(--index)
                return imgs[index]
            }
            break;
        case 'PREV':
            if (index === imgs.length - 1) {
                setIndex(0)
            } else {
                setIndex(++index)
                return imgs[index]
            }
            break;
        default:
            return imgs[0]
    }
}

export default ImageReducer;