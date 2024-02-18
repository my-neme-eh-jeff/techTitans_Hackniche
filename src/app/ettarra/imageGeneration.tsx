"use client";
import React, { useState } from "react";
import { Upload } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";
import ImgCrop from "antd-img-crop";
import toast from "react-hot-toast";
//these are the real images generated from collab, just no api call
import { Image } from "antd";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
var outputImage: any;
export default function ImageGeneration() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [outputImageSrc, setOutputImageSrc] = useState("");

  const simulateAPICall = async () => {
    const id = toast.loading("Uploading...");
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      toast.success("Upload successfully");
      await new Promise((resolve) => {
        setTimeout(resolve, 20000);
      });
      toast.dismiss(id);
      setOutputImageSrc(outputImage as any);
      toast.success("Image generated successfully");
    } catch (err) {
      console.log(err);
    } finally {
      toast.dismiss(id);
    }
  };

  const onChange: UploadProps["onChange"] = async ({
    fileList: newFileList,
  }) => {
    console.log("asdasdasd");
    setFileList(newFileList);
    await simulateAPICall();
  };

  return (
    <div className="flex justify-center flex-col">
      <ImgCrop rotationSlider fillColor="white">
        <Upload
          listType="picture-card"
          fileList={fileList}
          onChange={simulateAPICall}
        >
          {fileList.length < 5 ? "+ Upload" : "You have exceeded the limit (4)"}
        </Upload>
      </ImgCrop>
      <div className="flex justify-center">
        {outputImageSrc && (
          <Image alt="output image" width={200} src={"/outputImages1"} />
        )}
      </div>
    </div>
  );
}
