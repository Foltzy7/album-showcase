import React from "react";
import PhotoAlbum, { RenderPhoto } from "react-photo-album";
import { useRecoilValue } from "recoil";
import { photosState } from "../../store/recoilStore";

export default function PhotoAlbumDisplay() {
  const photos = useRecoilValue(photosState);
  const renderPhoto: RenderPhoto = ({
    layoutOptions,
    imageProps: { alt, style, ...restImageProps },
  }) => (
    <div
      style={{
        border: "2px solid #eee",
        borderRadius: "4px",
        boxSizing: "content-box",
        alignItems: "center",
        width: style?.width,
        padding: `${layoutOptions.padding - 2}px`,
        paddingBottom: 0,
      }}
    >
      <img
        alt={alt}
        style={{ ...style, width: "100%", padding: 0 }}
        {...restImageProps}
      />
      <div
        style={{
          paddingTop: "8px",
          paddingBottom: "8px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textAlign: "center",
        }}
      >
        ID: {alt}
        <br />
        Title: {restImageProps.title?.substring(0, 8) + "..."}
      </div>
    </div>
  );

  return (
    <div data-testid="photoAlbum">
      <PhotoAlbum
        photos={photos}
        layout={"masonry"}
        renderPhoto={renderPhoto}
      />
    </div>
  );
}
