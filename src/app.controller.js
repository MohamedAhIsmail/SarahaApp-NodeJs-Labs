import connection from "./DB/connection.js";
import authRoutes from "./modules/auth/auth.controller.js";
import messageRoutes from "./modules/message/message.controller.js";
import userRoutes from "./modules/user/user.controller.js";

const bootStrap = (app, express) => {
  
  app.use(express.json());

  
  app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to Saraha APP!" });
  });
  
  
  app.use('/auth', authRoutes)
  app.use('/user', userRoutes)
  app.use('/message', messageRoutes)
  app.use("/uploads", express.static("uploads"));
  
  connection()

  app.all("*", (req, res) => {
    return res.status(404).json({ message: "API not Found" });
  });

};

export default bootStrap;
