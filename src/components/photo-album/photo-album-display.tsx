import React, { useState } from "react";
import PhotoAlbum, { LayoutType, RenderPhoto } from "react-photo-album";
import { useRecoilValue } from "recoil";
import { photosState, thumbnailState } from "../../store/recoilStore";
import PhotoViewerModal from "./photo-viewer-modal";

export default function PhotoAlbumDisplay() {
  const photos = useRecoilValue(photosState);
  const thumbnails = useRecoilValue(thumbnailState);
  const [show, setShow] = useState(0);
  const layout: LayoutType = "masonry";

  const handleShow = (id: number) => setShow(id);

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
        marginBottom: "5px",
      }}
    >
      <div data-testid={"www" + alt}></div>
      <PhotoViewerModal
        alt={alt}
        key={restImageProps.id}
        show={+alt === show}
        src={restImageProps.src}
        setShow={setShow}
      >
        <img
          alt={alt}
          style={{ ...style, width: "600px", padding: 0, marginBottom: 0 }}
          {...restImageProps}
        />
      </PhotoViewerModal>
      <div onClick={() => handleShow(+alt)} style={{ cursor: "pointer" }}>
        <img
          alt={alt}
          style={{ ...style, width: "100%", padding: 0, marginBottom: 0 }}
          {...restImageProps}
        />
      </div>
      {!thumbnails && (
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
      )}
    </div>
  );

  return (
    <div data-testid="photoAlbum">
      <PhotoAlbum photos={photos} layout={layout} renderPhoto={renderPhoto} />
    </div>
  );
}
