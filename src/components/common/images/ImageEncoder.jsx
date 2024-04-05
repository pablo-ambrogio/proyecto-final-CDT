import { useState } from 'react';

const ImageEncoder = () => {
    const [selectedImage, setSelectedImage] = useState();

    const handleImageUpload = event => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div>
            <input type='file' onChange={handleImageUpload} />
            {selectedImage && <p>{selectedImage}</p>}
        </div>
    );
};

export default ImageEncoder;
