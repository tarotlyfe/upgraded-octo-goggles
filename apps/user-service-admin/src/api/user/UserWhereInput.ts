import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  bio?: StringNullableFilter;
  chat?: ChatWhereUniqueInput;
  chats?: ChatWhereUniqueInput;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
