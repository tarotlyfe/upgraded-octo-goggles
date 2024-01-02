import { User } from "../user/User";

export type Profile = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User;
};
