import React from "react";
import { OrgEvent } from "../../models/orgEvent";
import EventCard from "./eventCard";
import EventCardHeader from "./event-card-header";
import EventCardContent from "./event-card-content";

type Props = {
  orgEvent: OrgEvent;
};

export default function OrgEventDisplay(props: Props) {
  const { orgEvent } = props;
  return (
    <div>
      {orgEvent.startDate && <p>Event date: {orgEvent.startDate}</p>}
      <EventCard fillHeight>
        <EventCardHeader>{orgEvent.name}</EventCardHeader>
        <EventCardContent>
          <p>
            <strong>Location:</strong> {orgEvent.location}
          </p>
          <p>
            <strong>Description:</strong> {orgEvent.description}
          </p>
        </EventCardContent>
      </EventCard>
    </div>
  );
}
