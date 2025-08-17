import { IMessages } from "./messages.types";

export interface IMessagesDTO {
  id: IMessages["id"];
  user_id: IMessages["user_id"];
  room_id: IMessages["room_id"];
  content: IMessages["content"];
  media: IMessages["media"];
  created_at: IMessages["created_at"];
}
