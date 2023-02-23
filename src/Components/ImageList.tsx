import { ImageShow } from "./ImageShow";
import "./ImageList.css";

//@ts-ignore
export const ImageList = ({ list }) => {
  return (
    <div className="image-container">
      {list.map((item: any) => (
        <div key={item.id}>
          <ImageShow item={item} />
        </div>
      ))}
    </div>
  );
};
