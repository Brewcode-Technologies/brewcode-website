import Image from "next/image";
import React from "react";

function ImageIcon({ src, alt, className, width = 30, height = 30 }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}

export default ImageIcon;
