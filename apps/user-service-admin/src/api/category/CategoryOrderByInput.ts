import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
