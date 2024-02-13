import image1 from "../images/01.jpg";
import image2 from "../images/02.jpg";
import image3 from "../images/03.png";
import image4 from "../images/04.jpg";

export const images = [image1, image2, image3, image4];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
