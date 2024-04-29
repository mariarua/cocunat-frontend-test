import image from "../assets/image.png";
import icon_low from "../assets/icon-3.png";
import icon_medium from "../assets/icon-2.png";
import icon_high from "../assets/icon-4.png";

const ImageCard = () => {
  return (
    <div className="flex bg-white flex-col max-w-80">
      <div className="relative w-full flex justify-items-center">
        <img src={image} className="w-full" />
        <p className="p-2 rounded-full font-bold text-md bg-white absolute w-[97%] text-center left-1/2 transform -translate-x-1/2 bottom-[-20px]">
          Combination of 3 hyaluronic acids
        </p>
      </div>
      <div className="bg-[#F8F6F6] rounded-lg p-4 pt-8 flex flex-col justify-items-center items-center">
        <div className="flex gap-2 justify-items-center items-center">
          <img src={icon_low} />
          <p className="text-sm text-left">
            <span className="font-bold">Low: </span>
            Diminishes wrinkles and improves skin texture
          </p>
        </div>
        <div className="flex gap-2 justify-items-center items-center">
          <img src={icon_medium} />
          <p className="text-sm text-left">
            <span className="font-bold">Medium: </span>
            Improves skin firmness and quality
          </p>
        </div>
        <div className="flex gap-2 justify-items-center items-center">
          <img src={icon_high} />
          <p className="text-sm text-left">
            <span className="font-bold">High: </span>
            Deeply moisturizes for protected, silky skin
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
