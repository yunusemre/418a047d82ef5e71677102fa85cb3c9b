import Thumbs from '../Thumbs';

const ProductImages = ({ images, image, selectedImage, setSelectedImage }: any) => (
  <>
    <div className="text-center">
      {<img height="300" key={image.id} src={selectedImage} alt={image.alt} />}
    </div>
    <div className="detail-modal-body-slider__thumbs">
      <Thumbs change={(newImage: string) => setSelectedImage(newImage)} images={images} />
    </div>
  </>
);

export default ProductImages;
