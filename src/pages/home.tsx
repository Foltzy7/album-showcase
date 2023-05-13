import React from "react";
import "../components/page/page.scss";
import "./home.scss";
import EventForm from "../components/events/event-form";
import EventsDislpay from "../components/events/events-display";
import MinistriesDisplay from "../components/ministries/ministries-display";
import Slide from "../components/animations/slide";
import { useRecoilState } from "recoil";
import { VIPState } from "../store/recoilStore";

export default function Home() {
  const [VIP, setVIP] = useRecoilState(VIPState);
  return (
    <>
      <Slide inProp={true} durationOverride={1000} vertical={true}>
        <MinistriesDisplay />
      </Slide>
      <div style={{ background: "white" }}>
        <button
          onClick={() => {
            setVIP(!VIP);
          }}
        >VIP!</button>
        <div>
          <p>Hello</p>
          {VIP && <p>wat</p>}
        </div>
      </div>
      <EventsDislpay />
      <div style={{ height: "150px" }} />
      <EventForm />
    </>
  );
}
