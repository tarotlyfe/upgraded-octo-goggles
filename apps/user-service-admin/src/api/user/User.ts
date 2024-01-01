import { Chat } from "../chat/Chat";
import { JsonValue } from "type-fest";

export type User = {
  bio: string | null;
  chat?: Chat | null;
  chats?: Chat | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
