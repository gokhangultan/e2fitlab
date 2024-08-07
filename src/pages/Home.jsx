import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Home() {
  return (
    <div>
      <div className=" home-slider flex flex-col sm:flex-row justify-around  items-center my-10">
        {/*<Carousel className=" " />*/}
        <div className=" flex flex-col  items-center  md:basis-2/4 basis-3/4">
          <div>
            <h5 className="font-2xl:bold 2xl:text-[16px] xl:text-[16px] lg:text-sm md:text-xs sm:text-xs text-[16px]  leading-[24px]">
              Since 2024
            </h5>
          </div>
          <div>
            <h1 className="font-bold text-[40px] lg:text-[58px]  leading-[80px]">
              Welcome FITLAB
            </h1>
          </div>
          <div>
            <h4 className=" text-base leading-[30px] ">
              Lorem İpsum Dolar Upset, Lorem İpsum Dolar Upset,{" "}
            </h4>
          </div>
          <div>
            <Link to="/">
              <button className="">SHOP NOW</button>
            </Link>
          </div>
        </div>
        <div className="flex basis-2/4">
          <img src="slider6.png" />
        </div>
      </div>
      <div className="home-info flex flex-col items-center bg-[url('/info-bg.jpg')] my-10">
        <div className="flex flex-col gap-3 items-center mb-5">
          <h2 className="text-[#24d075] font-bold leading-5 uppercase text-xl tracking-widest">
            What We Offer
          </h2>
          <h1 className="font-bold leading-5 uppercase text-3xl tracking-widest">
            DEFINE YOUR GOAL
          </h1>
        </div>
        <div className="offers flex flex-col sm:flex-row justify-between gap-5 container">
          <div className="flex flex-col items-center text-center gap-4">
            <img src="/info1.png" className="object-contain w-[51px]" />
            <h5 className="header-nav text-lg tracking-widest ">crossfit</h5>
            <p className="font-sans text-base tracking-widest">
              Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
              lorem sollicitudin, auci elit nascetur.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <img src="/info2.png" className="object-contain w-[84px]" />
            <h5 className="header-nav text-lg tracking-widest ">
              healthy life
            </h5>
            <p className="font-sans text-base tracking-widest">
              Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
              lorem sollicitudin, auci elit nascetur.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <img src="/info3.png" className="object-contain w-[84px]" />
            <h5 className="header-nav text-lg tracking-widest ">strategies</h5>
            <p className="font-sans text-base tracking-widest">
              Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
              lorem sollicitudin, auci elit nascetur.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <img src="/info4.png" className="object-contain w-[51px]" />
            <h5 className="header-nav text-lg tracking-widest ">workout</h5>
            <p className="font-sans text-base tracking-widest">
              Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
              lorem sollicitudin, auci elit nascetur.
            </p>
          </div>
        </div>
      </div>
      <section className="home-programs container flex flex-col  ">
        <div className="flex flex-col items-center my-10 gap-4">
          <h2 className="text-[#24d075] font-bold leading-5 uppercase text-xl tracking-widest">
            train with experts
          </h2>
          <h1 className="font-bold leading-5 uppercase text-3xl tracking-widest">
            training programs
          </h1>
        </div>
        <div className="flex flex-col gap-2 text-white ">
          <div className="flex flex-col md:flex-row justify-between gap-2 ">
            <div class="basis-1/4 relative">
              <img src="/program1.jpg" class="relative" />
              <h3 class="absolute inset-x-0 md:bottom-20 bottom-10 text-center">
                test
              </h3>
              <h4 class="absolute inset-x-0 bottom-10 text-center mt-4">
                testkjhjh
              </h4>
            </div>

            <div className=" basis-1/4">
              <img src="/program2.jpg" />
            </div>
            <div className=" basis-2/4">
              <img src="/program3.jpg" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-2">
            <div className=" basis-1/4">
              <img src="/program4.jpg" />
            </div>
            <div className=" basis-1/4">
              <img src="/program6.jpg" />
            </div>
            <div className=" basis-1/4">
              <img src="/program7.jpg" />
            </div>
            <div className=" basis-1/4">
              <img src="/program5.jpg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
