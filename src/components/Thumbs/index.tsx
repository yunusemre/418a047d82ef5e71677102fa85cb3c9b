import { Image } from '../../models';

const Thumbs = ({ images, change }: { images: Image[]; change: any }) => {
  return (
    <>
      {images.map((img: Image) => (
        <img
          className="c-pointer"
          onClick={() => change(img.src)}
          key={img.id}
          src={img.src}
          alt={img.alt}
        />
      ))}
    </>
  );
};

export default Thumbs;
