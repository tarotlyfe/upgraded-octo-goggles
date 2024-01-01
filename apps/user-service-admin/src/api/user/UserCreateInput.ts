import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  bio?: string | null;
  chat?: ChatWhereUniqueInput | null;
  chats?: ChatWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
