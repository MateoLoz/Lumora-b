import { IMessages } from "./messages.types";
import { IMessagesDTO } from "./messages.dto";

export function toMessagesDTO(message: IMessages): IMessagesDTO {
  return {
    id: message.id,
    room_id: message.room_id,
    user_id: message.user_id,
    content: message.content,
    media: message.media,
    created_at: message.created_at,
  };
}

export function toMessagesDTOs(message: IMessages[]): IMessagesDTO[] {
  return message.map(toMessagesDTO);
}
