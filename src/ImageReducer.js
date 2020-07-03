import ImagesContext from './imgsContext'
import { useState, useContext } from 'react';

function ImageReducer(state, action) {
    let imgs = useContext(ImagesContext)
    let [index, setIndex] = useState(0)
    switch (action.type) {
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