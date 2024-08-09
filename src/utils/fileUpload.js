import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_AP_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

//upload image
const uploadOnCloudinary = async (localfilePath) => {
    try {
      if(!localfilePath) return null
      //upload default on cloudinary
      const uploadResult = await cloudinary.uploader.upload(localfilePath,
        {
           resource_type:"auto"
        })
        //file upload successfully
        console.log("upload",uploadResult.url)
        return uploadResult
    } catch (error) {
      fs.unlinkSync(localfilePath) //remove locally saved temporay file
      return null
    }
}