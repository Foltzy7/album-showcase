import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageContent from "../components/layout/pagecontent";

function Aspirations() {
  return (
    <PageContent>
      <div>
        <h1 className="m-auto">Aspirations</h1>
        <p>
          This page has a list of things I would do if I were to continue
          working on this project.
        </p>
        <div>
          <h2>UI/UX</h2>
          <ul>
            <li>Get min/max albums dynamically</li>
            <li>Pagination of images to reduce page load</li>
            <li>Utilize thumbnails to display more items on the page</li>
            <li>
              Handle non-square photos and ensure they displayed in proper
              proportions
            </li>
            <li>Added more testing around photo modal logic</li>
          </ul>
          <h2>CI/CD</h2>
          <ul>
            <li>Enable Dependabot automatic dependency updates</li>
            <li>Update out of date dependencies</li>
            <li>Run cypress tests on a cron</li>
            <li>Require passing unit tests for PRs</li>
          </ul>
        </div>
        <a
          className="btn btn-link"
          href={"https://www.scooterscoffee.com/"}
          rel={"noopener noreferrer"}
          target={"_blank"}
        >
          <FontAwesomeIcon icon="coffee" spin={true} className="mr-sm-1" />
          Aspire to drink more coffee
        </a>
      </div>
    </PageContent>
  );
}

export default Aspirations;
