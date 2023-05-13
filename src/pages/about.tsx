import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchMinistries } from "../reducers/ministries";
import { useDispatch } from "react-redux";
import PageContent from "../components/layout/pagecontent";

function About() {
  const dispatch = useDispatch();
  const date = "01-01-2020";

  useEffect(() => {
    dispatch(fetchMinistries({ date }));
  }, [dispatch, date]);
  return (
    <PageContent>
      <div>
        <h1 className="m-auto">About this site</h1>
        <div>
          <h2 id={"section-purpose"}>Purpose</h2>
          <p>
            This site was designed to appease the interview overlords! May their
            reviews be merciful!
          </p>
          <h2>Requirements</h2>
          <p>
            Create an application that displays photo ids and titles in an album
          </p>
          <ul>
            <li>Any language/framework</li>
            <li>Any open source libraries</li>
            <li>Automated tests encouraged</li>
            <li>Post solution in free repository (GitHub)</li>
            <li>Provide a README with info on building/running app</li>
          </ul>
          <h2>Design choices</h2>
          <p>
            <strong>React:</strong> I chose React as my JS framework because it
            is my preferred JS framework and I enjoy working with it. I have
            over 4 years of experience with Angular, and more recently Vue. I
            like different things about those but ultimately prefer a functional
            React style best.
          </p>
          <p>
            <strong>Web layout:</strong> This site design was chosen because I
            already had a shell of a site built from one of my personal
            projects. I thought it would give me a decent starting point without
            too much extra "kruft" to remove. I considered a new react app with
            the latest versions of React and it's dependencies, but opted to
            reuse this project as it isn't too far out-of-date. This also give
            one the additional nostalgia of maintaining an existing codebase
            within an established product <FontAwesomeIcon icon="gem" className="mr-sm-1" />.
          </p>
          <p>
            <strong>Architecture features:</strong>
            <ul>
              <li>
                State management - The starter project comes equipped with basic
                <em> Redux</em> AND <em>Recoil</em> support for state
                management.
              </li>
              <li>
                API integration - A local <em>express</em> server is also
                included to provide easy testing with mock data using real
                API's. I find this useful when don't have access to the real
                API's or for experimentation.
              </li>
            </ul>
          </p>
        </div>
        <a
          className="btn btn-link"
          href={"https://www.scooterscoffee.com/"}
          rel={"noopener noreferrer"}
          target={"_blank"}
        >
          <FontAwesomeIcon icon="coffee" spin={true} className="mr-sm-1" />
          Coffee
        </a>
      </div>
    </PageContent>
  );
}

export default About;
