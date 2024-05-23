import Image from "next/image";

export interface ImageIconProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageIcon: React.FC<ImageIconProps> = ({ src, alt, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={className || ""}
      width={40}
      height={40}
      priority
    />
  );
};

export default ImageIcon;
