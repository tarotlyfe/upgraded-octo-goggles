import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatUpdateInput = {
  initiator?: UserWhereUniqueInput | null;
  responder?: UserWhereUniqueInput | null;
};
