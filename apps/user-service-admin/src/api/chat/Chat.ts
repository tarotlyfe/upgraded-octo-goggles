import { User } from "../user/User";

export type Chat = {
  createdAt: Date;
  id: string;
  initiator?: User | null;
  responder?: User | null;
  updatedAt: Date;
};
