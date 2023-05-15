import { atom } from "recoil";
import { Photo } from "react-photo-album";

export const photosState = atom({
  key: "photos",
  default: [] as Photo[],
});
export const thumbnailState = atom({
  key: "thumbnails",
  default: false,
});
