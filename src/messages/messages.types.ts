export type MessagesRow = Database["public"]["Tables"]["messages"]["Row"];
type MessagesInsert = Database["public"]["Tables"]["messages"]["Insert"];
type MessagesUpdate = Database["public"]["Tables"]["messages"]["Update"];

export interface IMessages {
  id: MessagesRow["id"];
  content: MessagesRow["content"];
  created_at: MessagesRow["created_at"];
  media: MessagesRow["media"];
  room_id: MessagesRow["room_id"];
  user_id: MessagesRow["user_id"];
}

export type IMessagesInsert = MessagesInsert;
export type IMessagesUpdate = MessagesUpdate;
