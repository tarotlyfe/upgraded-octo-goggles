import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatCreateInput = {
  initiator?: UserWhereUniqueInput | null;
  responder?: UserWhereUniqueInput | null;
};
