import React from 'react';
import { Illustration, Ellipse, Box } from 'react-zdog';
import { RotatingAnchor } from '../src';
import AnimatedShapeExtrusion from '../src/components/AnimatedShapeExtrusion';

const Index = () => (
  <div style={{width: '800px', height: '800px'}}>
    <Illustration>
        <RotatingAnchor>
            <Ellipse diameter={200} translate={{z: -10}} fill color="#AEA"/>
            <Box scale={40} translate={{x: 300, y: -150}} fill color="#AEA" leftFace="#EAA" rightFace="#AAE" topFace="#65F"/>
            <Box scale={40} translate={{x: -300, y: 150}} fill color="#AEA" leftFace="#EAA" rightFace="#AAE" topFace="#65F"/>
            <AnimatedShapeExtrusion depth={50} />
        </RotatingAnchor>
    </Illustration>
  </div>
);

export default Index;