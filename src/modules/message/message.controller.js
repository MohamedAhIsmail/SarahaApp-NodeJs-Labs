import { Router } from "express";
import * as messages from "./service/message.service.js";
import { validation } from "../../utilities/validation.js";
import { messageValidationSchema } from "./messages.validation.js";


const messageRoutes = Router()


messageRoutes.post('/create', validation(messageValidationSchema) ,messages.createMessage)
messageRoutes.get('/show/:receiverId', messages.getMessages)
messageRoutes.delete('/delete/:messageId', messages.deleteMessage)



export default messageRoutes  