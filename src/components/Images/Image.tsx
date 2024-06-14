

import React from 'react';

interface ImageProps {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
}

const Image: React.FC<Required<ImageProps>> = ({ src, alt,  width = '100%', height = 'auto', borderRadius = '0px' }) => {
  return <img src={src} alt={alt}  style={{
    width: width,
    height: height,
    borderRadius: borderRadius,
  }} />;
};

export default Image;
