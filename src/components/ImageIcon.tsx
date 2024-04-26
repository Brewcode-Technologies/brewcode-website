import Image from "next/image";
import React from "react";

function ImageIcon({
  src,
  alt,
  className,
  width = 30,
  height = 30,
  loading = "eager",
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
    />
  );
}

export default ImageIcon;
