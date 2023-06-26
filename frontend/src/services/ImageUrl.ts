import noImagePlaceholder from "../assets/no-image-placeholder.svg";

const getCroppedImageUrl = (url: String) => {
  if (!url) return noImagePlaceholder;

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
