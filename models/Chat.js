import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    message: [
      {
        role: { type: String, required: true },
        content: { type: String, required: true },
        timestamp: { type: String, required: true },
      },
    ],
    user_id: { type: String, required: true },
  },
  { timestamps: true }
);

const Chat = mongoose.models.Chat || mongoose.model("Chat", ChatSchema);

export default Chat;
