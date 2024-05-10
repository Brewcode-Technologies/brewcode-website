import Image from "next/image";
import React from "react";

const ImageIcon = ({ src, alt, className }) => (
  <Image src={src} alt={alt} className={className} width={40} height={40} />
);

export default ImageIcon;
