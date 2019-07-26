import React, { useRef } from 'react';
import { Anchor, useRender } from 'react-zdog';

const RotatingAnchor = ({ children }) => {
    const ref = useRef(undefined);
    useRender(() => {
        ref.current.rotate.y = Math.sin((Date.now() - window.performance.timing.navigationStart) / 2000) * Math.PI / 2 * 0.3;
        ref.current.rotate.x = Math.cos((Date.now() - window.performance.timing.navigationStart) / 2000) * Math.PI / 2 * 0.3;
        // ref.current.rotate.y = (Date.now() - window.performance.timing.navigationStart) / 2000;
        // ref.current.rotate.x = (Date.now() - window.performance.timing.navigationStart) / 2000;
    });

    return (
        <Anchor ref={ref} rotate={{x: -Math.PI / 8, y: 0}}>{ children }</Anchor>
    );
}

export default RotatingAnchor;