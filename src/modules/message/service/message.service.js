
import messageModel from "../../../DB/models/message.model.js";


export const createMessage = async (req, res) => {
  try {
    const { text, receiverId } = req.body;


    if (!text || !receiverId) {
      return res.status(400).json({ error: "Text and receiverId are required" });
    }

    
    const message = await messageModel.create({ text, receiverId });
    res.status(201).json({ message: "Message created successfully", data: message });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



export const getMessages = async (req, res) => {
  try {
    const { receiverId } = req.params;

  
    if (!receiverId) {
      return res.status(400).json({ error: "ReceiverId is required" });
    }

    const messages = await messageModel.find({ receiverId });
    res.status(200).json({ data: messages });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const deleteMessage = async (req, res) => {
  try {
    const { messageId } = req.params;

    if (!messageId) {
      return res.status(400).json({ error: "MessageId are required" });
    }

    
    const message = await messageModel.findByIdAndDelete(messageId);

    if (!message) {
      return res.status(404).json({ error: "Message not found or not authorized to delete" });
    }

    res.status(200).json({ message: "Message deleted successfully"});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
