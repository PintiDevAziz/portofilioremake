import imageUrlBuilder from "@sanity/image-url";
import scleint from "../scleint";
const imgBuilder = imageUrlBuilder(scleint);
const imgUrl = (src) => {
  return imgBuilder.image(src);
};
export default imgUrl