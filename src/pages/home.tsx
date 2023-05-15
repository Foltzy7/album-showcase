import React, { useEffect, useState } from "react";
import "../components/page/page.scss";
import "./home.scss";
import axios from "axios";
import PageContent from "components/layout/pagecontent";
import PhotoAlbumDisplay from "../components/photo-album/photo-album-display";
import { useRecoilState } from "recoil";
import { photosState, thumbnailState } from "../store/recoilStore";
import { Photo } from "react-photo-album";

export interface LeanPhotoObject {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export default function Home() {
  const [selectedAlbum, setSelectedAlbum] = useState(1);
  const [photos, setPhotos] = useRecoilState(photosState);
  const [thumbnails, setThumbnails] = useRecoilState(thumbnailState);
  const [fetched, setFetched] = useState(false);

  const noPhotos = !fetched || photos?.length === 0;

  useEffect(() => {
    const fetchData = async () => {
      let photosResponse: any = { data: [] };
      try {
        photosResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/photos?albumId=${selectedAlbum}`
        );
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn("error retrieving photos");
      }
      const photoArray = photosResponse.data;
      setPhotos(
        photoArray.map((item: LeanPhotoObject) => {
          return {
            src: thumbnails ? item.thumbnailUrl : item.url,
            width: 1,
            height: 1,
            title: `${item.title}`,
            alt: `${item.id}`,
          } as Photo;
        })
      );
      setFetched(true);
    };
    fetchData();
  }, [selectedAlbum, setSelectedAlbum, setPhotos]);


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
              min="1"
              max="100"
              id="selectedAlbumInput"
              data-testid="selectedAlbumInput"
              defaultValue={"1"}
              onChange={(e) => setSelectedAlbum(+e.target.value)}
            />
          </div>
        </div>
        {!noPhotos && <PhotoAlbumDisplay />}
        {noPhotos && (
          <div className={"alert alert-danger"} role={"alert"}>
            No photos could be retrieved for the selected album
          </div>
        )}
      </div>
    </PageContent>
  );
}
