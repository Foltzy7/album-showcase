import { RootState } from "../store/store";
import { AsyncStatus, isLoadingStatus } from "../models/async-status";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

type StatusSelector = (state: RootState) => AsyncStatus;
export const ministryStatus: StatusSelector = (state) =>
  state.ministries.status;

export function useStatuses(dependencySelectors: StatusSelector[] = []) {
  const loadingSelector = createSelector(dependencySelectors, isAnyLoading);
  const isLoading = useSelector(loadingSelector);

  return { isLoading };
}

function isAnyLoading(...statuses: AsyncStatus[]): boolean {
  return statuses.some((status: AsyncStatus) => isLoadingStatus(status));
}
