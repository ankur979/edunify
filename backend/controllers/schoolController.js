import cloudinary from "../config/cloudinaryConfig.js";
import multer from "multer";
import { insertSchool, getAllSchools } from "../models/schoolModel.js";

const storage = multer.memoryStorage();
const upload = multer({ storage }).single("image");

const createSchool = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: "Error uploading file" });
    }

    const { name, address, city, state, contact, email_id } = req.body;

    try {
      let imageUrl = null;

      if (req.file) {
        // Upload image to Cloudinary
        const result = await new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "school_images" },
            (error, result) => {
              if (error) {
                console.error("Cloudinary upload error:", error);
                reject({ error: "Failed to upload image" });
              }
              resolve(result);
            }
          );
          stream.end(req.file.buffer);
        });

        if (result.error) {
          return res.status(500).json({ error: result.error });
        }

        imageUrl = result.secure_url;
      }

      const schoolData = {
        name,
        address,
        city,
        state,
        contact,
        image: imageUrl,
        email_id,
      };

      insertSchool(schoolData, (dbErr, result) => {
        if (dbErr) {
          console.error("Database error:", dbErr);
          return res.status(500).json({ error: "Failed to submit data" });
        }
        res
          .status(201)
          .json({ message: "School data submitted successfully", schoolData });
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "An error occurred" });
    }
  });
};

const getSchools = (req, res) => {
  getAllSchools((err, results) => {
    if (err) {
      console.error("Error retrieving data:", err);
      return res.status(500).json({ error: "Failed to retrieve data" });
    }
    res.status(200).json(results);
  });
};

export { createSchool, getSchools };
