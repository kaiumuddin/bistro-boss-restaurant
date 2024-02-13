import EmblaCarousel from "./EmblaCarousel";

const OPTIONS = { align: "start", loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
import "./embla.css";

const Carousal = () => {
    return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
};

export default Carousal;
