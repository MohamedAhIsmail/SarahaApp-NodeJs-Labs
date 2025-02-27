import { Router } from "express";
import * as userService from "./service/user.service.js";
import multer from "multer";
import authRoutes from "../auth/auth.controller.js";

const userRoutes = Router();

userRoutes.put('/', userService.updateUser)


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage });

userRoutes.post(
  "/upload-image",
  upload.single("image"),
  userService.uploadImage
);

export default userRoutes;