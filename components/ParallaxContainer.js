import * as React from 'react'
import { Parallax } from 'react-parallax';

const ParallaxContainer = ({ children, image, imageAlt, strength = 200, blur = 10}) => {
    return (<Parallax className='h-auto' blur={blur} bgImage={image} bgImageAlt={imageAlt} strength={strength}>
        { children }
    </Parallax>)
}

export default ParallaxContainer