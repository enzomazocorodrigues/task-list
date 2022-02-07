export interface ApiModelResponse<D> {
  code: number;
  message: string;
  timestamp: number;
  data: D;
}
