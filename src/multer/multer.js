import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), "uploads"));
  },
  filename: function (req, file, cb) {
    const imgName = Date.now() + file.originalname;
    cb(null, imgName);
  },
});

export const upload = multer({ storage });
