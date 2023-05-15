import { atom } from "recoil";
import { Photo } from "react-photo-album";

export const photosState = atom({
  key: "photos",
  default: [] as Photo[],
});
