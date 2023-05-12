import * as React from "react";
import { useDispatch } from "react-redux";
import { setImageSrc } from '../features/imageSlice';

const ImageUploader: React.FC = () => {
  const dispatch = useDispatch();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(setImageSrc(reader.result as string));
      };
      reader.readAsDataURL(file);
    }
  };

  return <input type="file" accept="image/*" onChange={handleImageUpload} />;
};

export default ImageUploader;
