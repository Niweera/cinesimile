import React from "react";
import "./index.scss";

import {
  Tile
} from '../Tile';

export default {
  title: 'Title',
  decorators: [withKnobs],
}

export const Default = () => {
  const regularProps = props.regular();
  return <Tile {...regularProps}>Movie one</Tile>;
};

Default.parameters = {
  info: {
    text: `
        Movie title
      `,
  },
};


