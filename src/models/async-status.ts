export enum AsyncStatus {
  notFetched = "Not Fetched",
  loading = "Loading",
  error = "error",
  done = "Fetched",
}

export function isLoadingStatus(status: AsyncStatus) {
  return status === AsyncStatus.notFetched || status === AsyncStatus.loading;
}
