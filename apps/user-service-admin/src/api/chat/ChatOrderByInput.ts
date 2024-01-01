import { SortOrder } from "../../util/SortOrder";

export type ChatOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  initiator?: SortOrder;
  responder?: SortOrder;
  updatedAt?: SortOrder;
};
