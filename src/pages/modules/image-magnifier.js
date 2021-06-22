import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

export default function Home() {
  return (
    <div style={{ height: 400, width: 400 }}>
      <InnerImageZoom
        src="https://static.eway.ca/images/products/PIM-693740-1.jpg/600x600"
        zoomSrc="https://static.eway.ca/images/products/PIM-693740-1.jpg/1200x1200"
        hideHint={true}
        zoomType={"hover"}
      />
    </div>
  );
}
