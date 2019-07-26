import React, { Component } from 'react';
import { Anchor, Ellipse, Cylinder, Box, Hemisphere, Rect, RoundedRect, Group, Shape, Polygon } from 'react-zdog';

import { AmpShape } from '../shapes/letters';

const DARK_AQUA = "#84DCC6";
const LIGHT_AQUA = "#A5FFD6";
const LIGHT_RED = "#FFA69E";
const DARK_RED = "#FF686B";
const YELLOW = "#FFCE49";

export default class ShapeExtrusion extends Component {
    constructor(props) {
        super(props);

        this.shapeRefs = new Map();
    }

    render() {
        let { fill=true, fillSides=false, color="#333", sideColor="#BBB", depth=30, spacing=1, stroke=1, sideStroke, rotate, ...props } = this.props;

        let sc = sideColor;
        if (typeof sc !== "function") {
            sc = (v) => sideColor;
        }

        let sp = spacing;
        if (typeof sp !== "function") {
            sp = (i, v) => ({ x: 0, y: 0, z: i * spacing });
        }

        return (
            <Anchor>
                <Group rotate={rotate}>
                    {[...Array(depth)].map((n, i) => (
                        <AmpShape ref={ref => this.shapeRefs.set(i, ref)}
                            color={ i === (depth - 1)? color : sc(i / (depth - 1)) }
                            translate={sp(i, i / (depth - 1))}
                            fill={ (i === 0 || i === (depth - 1))? fill : fillSides }
                            stroke={ i === (depth - 1)? stroke : (sideStroke? sideStroke : stroke) }
                            {...props} />
                    ))}
                </Group>
            </Anchor>
        );
    }
}
