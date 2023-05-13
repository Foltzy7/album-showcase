import PageContent from "../layout/pagecontent";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useMinistries} from "../../selectors";
import {fetchMinistries} from "../../reducers/ministries";
import "./ministries-display.scss";
import {churchBuilding} from "../../images";
import Slide from "../animations/slide";
import {orgName} from "../../constants";

export default function MinistriesDisplay() {
  const dispatch = useDispatch();
  const { ministries } = useMinistries();
  const date = "01-01-2020";

  useEffect(() => {
    dispatch(fetchMinistries({ date }));
  }, [dispatch, date]);
  return (
    <PageContent className={"content-primary"}>
      <div id="ministries-content" className={"ministries-content"}>
        <div className="row">
          <h1 className="m-auto">Welcome to {orgName}!</h1>
        </div>
        {ministries && (
          <div>
            {ministries.map((ministry, index) => (
              <div key={`ministry-${index}`}>
                <p>{ministry.description}</p>
              </div>
            ))}
            <Slide inProp={true} durationOverride={1000}>
              <img
                src={churchBuilding}
                alt={"church building"}
                style={{ width: "100%" }}
              />
            </Slide>
          </div>
        )}
      </div>
    </PageContent>
  );
}
