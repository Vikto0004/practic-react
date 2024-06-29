import { PhotosGalleryItem } from '../PhotosGalleryItem/PhotosGalleryItem';
import { Grid } from '../Grid/Grid';

export const PhotosGallery = ({ images }) => {
  return (
    <Grid>
      {images.map((image, index) => {
        return <PhotosGalleryItem key={index} imageData={image} />;
      })}
    </Grid>
  );
};
