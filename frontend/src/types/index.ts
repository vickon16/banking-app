export type AccountTypes =
  | "depository"
  | "credit"
  | "loan "
  | "investment"
  | "other";

export type CategoryCount = {
  name: string;
  count: number;
  totalCount: number;
};
