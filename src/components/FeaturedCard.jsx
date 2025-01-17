import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faChartLine, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";

export default function FeaturedCard() {
  const history = useHistory();
  return (
    <div>
      <div className="w-[328px] h-[606px] border-1 border-gray-150 shadow relative">
        <button className="absolute top-[20px] left-[20px] bg-[#E74040] w-[52px] h-[24px] font-container text-[14px] leading-6 font-bold text-white rounded">
          NEW
        </button>
        <img
          src="/e2textlogo.png"
          className="w-[348px] h-[300px] object-contain "
        />
        <div className="flex flex-col gap-3 m-3 ">
          <div className="flex justify-start gap-3 text-xs flex-wrap">
            <div className="text-[#8EC2F2]">Google</div>
            <div>Trending</div>
            <div>New</div>
          </div>
          <h4 className="text-xl leading-7">
            Loudest à la Madison #1 (L'integral)
          </h4>
          <p>
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <div className="flex justify-between">
            <h6 className="text-xs font-container leading-4 secondary-text ">
              <FontAwesomeIcon icon={faClock} style={{ color: "#8EC2F2" }} /> 22
              April 2021
            </h6>
            <h6 className="text-xs font-container leading-4 secondary-text ">
              <FontAwesomeIcon
                icon={faChartLine}
                style={{ color: "#23856D" }}
              />{" "}
              10 comments
            </h6>
          </div>
          <button
            className="product-card-more "
            onClick={() => {
              history.push("/");
              closeCart();
            }}
          >
            Learn More <FontAwesomeIcon icon={faChevronRight} />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
