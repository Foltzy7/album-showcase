import React from "react";
import Home from "./home";
import axios from "axios";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { waitFor } from "@babel/core/lib/gensync-utils/async";
import userEvent from "@testing-library/user-event";

jest.mock("axios");

describe("home", function () {
  it("should call for first album on load", async () => {
    const mockReturn = { data: [{ src: "google.com", width: 1, height: 1 }] };
    axios.get.mockResolvedValue(mockReturn);
    await act(async () => {
      render(<Home />);
    });

    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/photos?albumId=1"
    );
    await waitFor(() => {
      expect(screen.getByTestId("photoAlbum")).toBeInTheDocument();
    });
  });
  it("should fetch new album when selectedAlbum changed", async () => {
    const mockReturn = { data: [{ src: "google.com", width: 1, height: 1 }] };
    axios.get.mockResolvedValue(mockReturn);
    await act(async () => {
      render(<Home />);
    });

    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/photos?albumId=1"
    );

    await act(async () => {
      await userEvent.type(screen.getByTestId("selectedAlbumInput"), "5");
    });

    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/photos?albumId=5"
    );
    await waitFor(() => {
      expect(screen.getByTestId("photoAlbum")).toBeInTheDocument();
    });
  });
});
