import React, { useRef } from 'react';
import { useRender } from 'react-zdog';
import ShapeExtrusion from './ShapeExtrusion';

const sideColor = (v) => `rgb(${v * 255}, ${Math.sin(v * Math.PI) * 200}, ${0})`;

const AnimatedShapeExtrusion = (props) => {
    const ref = useRef(undefined);
    useRender(() => {
        ref.current.shapeRefs.forEach((shape, i) => {
            let v = i / (ref.current.props.depth - 1);
            // let xOff = Math.sin((Date.now()) / 1000);
            // let yOff = Math.sin((Date.now()) / 1000 / 2);
            // shape.translate.x = Math.pow(xOff, 2) * Math.sign(xOff) * 100 * v;
            // shape.translate.y = Math.pow(yOff, 2) * Math.sign(yOff) * 100 * v;
            shape.translate.x = Math.sin(v * Math.PI + Date.now() / 300) * 50 * v;
        });
    });

    return (
        <ShapeExtrusion ref={ref} sideColor={sideColor} {...props} spacing={3} fillSides />
    )
}

export default AnimatedShapeExtrusion;