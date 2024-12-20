import React, { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";
import { RxCross2 } from "react-icons/rx";

const Image = ({ dataFunction }) => {
  const [images, setImages] = useState([]);
  const [selectImage, setSelectImage] = useState("");
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setSelectImage(imageList[0].data_url  ? imageList[0].data_url : "")
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  useEffect(() => {
    dataFunction(images);
  }, [images]);
  return (
    <>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="flex flex-col gap-1 w-fit">
            <>
              <button
                style={isDragging ? { color: "red" } : null}
                onClick={onImageUpload}
                {...dragProps}
                className="  h-72  w-full   p-2 text-xl rounded-lg border border-black"
              >
                { !selectImage && <p> Click or Drop Image here</p> }
                {selectImage && (
                  <img
                    src={selectImage}
                    alt=""
                    srcset=""
                    className=" w-full h-full object-cover rounded-lg border-red-800"
                  />
                )}
              </button>
              &nbsp;
              {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            </>

            <div className={`flex gap-1 w-[500px] flex-wrap h-48  ${imageList.length >6?"overflow-y-scroll":"" }`}>
              {imageList.map((image, index) => (
                <div key={index} className=" imagebutton image-item relative">
                  <img
                    src={image.data_url}
                    alt=""
                    className="  h-24 w-40 object-cover rounded"
                    onClick={() => setSelectImage(image.data_url)}/>
                  <button
                    onClick={() => onImageRemove(index)}
                    className=" absolute top-2 right-3">
                    <RxCross2 className=" cancelButton hidden bg-red-500 text-white rounded-full text-base p-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </>
  );
};

export default Image;
