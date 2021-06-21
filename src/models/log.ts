export interface Log {
  appName: string;
  event: string;
  message: string;
  isError: boolean;
  timeStamp: Date;
}
