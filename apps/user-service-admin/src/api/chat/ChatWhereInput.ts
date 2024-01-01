import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatWhereInput = {
  id?: StringFilter;
  initiator?: UserWhereUniqueInput;
  responder?: UserWhereUniqueInput;
};
