import { RootState } from "../store/store";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const ministriesSelector = (state: RootState) => state.ministries.ministries;
const ministrySelector = createSelector(
  [ministriesSelector],
  (ministries) => ministries
);

const orgEventsSelector = (state: RootState) => state.orgEvents.orgEvent;
const eventSelector = createSelector(
  [orgEventsSelector],
  (orgEvents) => orgEvents
);

export function useMinistries() {
  const ministries = useSelector(ministrySelector);
  return { ministries };
}

export function useEvents() {
  const orgEvents = useSelector(eventSelector);
  return { orgEvents };
}
