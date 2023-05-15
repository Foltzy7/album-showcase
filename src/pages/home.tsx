import React, { useEffect, useState } from "react";
import "../components/page/page.scss";
import "./home.scss";
import axios from "axios";
import PhotoAlbum from "react-photo-album";
import PageContent from "components/layout/pagecontent";

export interface photoObject {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  src?: string;
  width?: number;
  height?: number;
}

export default function Home() {
  const [selectedAlbum, setSelectedAlbum] = useState(1);
  const [photos, setPhotos] = useState([]);
  let fetched = false;

  const noPhotos = () => {
    return fetched && photos?.length === 0;
  };
  useEffect(() => {
    const fetchData = async () => {
      let photosResponse: any = { data: [] };
      try {
        photosResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/photos?albumId=${selectedAlbum}`
        );
      } catch (e) {
        console.warn("error retrieveing photos");
      }
      const photoArray = photosResponse.data;
      setPhotos(
        photoArray.map((item: photoObject) => {
          return { src: item.url, width: 1, height: 1 };
        })
      );
      fetched = true;
    };

    fetchData();
  }, [selectedAlbum, setSelectedAlbum]);
  return (
    <PageContent className={"content-primary"}>
      <div>
        <div className="flex" style={{ width: "20%" }}>
          <div style={{ flexBasis: "20%" }}>
            <label htmlFor="selectedAlbumInput" className="form-label">
              Selected Album
            </label>
            <input
              aria-label="Selected Album"
              type="number"
              className="form-control mb-3"
              min="0"
              max="100"
              id="selectedAlbumInput"
              data-testid="selectedAlbumInput"
              value={selectedAlbum}
              onChange={(e) => setSelectedAlbum(+e.target.value)}
            />
          </div>
        </div>
        {!noPhotos && (
          <div data-testid="photoAlbum">
            <PhotoAlbum photos={photos} layout={"masonry"} />
          </div>
        )}
        {noPhotos && (
          <div className={"alert alert-danger"} role={"alert"}>
            No photos could be retrieved for the selected album
          </div>
        )}
      </div>
    </PageContent>
  );
}
