import React, { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";
import { RxCross2 } from "react-icons/rx";
const Image = ({dataFunction}) => {




  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const [selectImage, setSelectImage] = useState("");

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setSelectImage(imageList[0].data_url);
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  useEffect(() => {
    console.log(images)
    if(images.length>0){
      dataFunction(images[0].data_url);
    }
  }, [selectImage]);
  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          onImageUpload,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper rounded-full">
            <button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
              className=" w-56 h-56   text-xl rounded-full border border-black "
            >
              {!selectImage && <p> Click or Drop</p>}
              {selectImage && (
                <>
                
                  <img
                    src={selectImage}
                    alt=""
                    onClick={() => setImages("")}
                    srcset=""
                    className=" w-56 h-56 object-cover rounded-full border-red-800"
                  />
                </>
              )}
            </button>
            &nbsp;
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default Image;
