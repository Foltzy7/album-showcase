import CardGrid from "../layout/card-grid";
import OrgEventDisplay from "./org-event-display";
import PageContent from "../layout/pagecontent";
import React, {useEffect} from "react";
import {useEvents} from "../../selectors";
import {fetchOrgEvents} from "../../reducers/org-events";
import {useDispatch} from "react-redux";
import "./events-display.scss";
import GrowIn from "../animations/grow-in";

export default function EventsDislpay() {
  const dispatch = useDispatch();
  const { orgEvents } = useEvents();
  const date = "01-01-2020";

  useEffect(() => {
    dispatch(fetchOrgEvents({ date }));
  }, [dispatch, date]);

  return (
    <PageContent className={"content-primary"}>
      <div id="event-content" className={"event-content"}>
        <h2>Events</h2>
        <CardGrid>
          {orgEvents.map((orgEvent, index) => (
            <GrowIn inProp={true}>
              <OrgEventDisplay orgEvent={orgEvent} key={`event-${index}`} />
            </GrowIn>
          ))}
        </CardGrid>
      </div>
    </PageContent>
  );
}
