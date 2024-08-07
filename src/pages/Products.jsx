import FeaturedCard from "../components/FeaturedCard";

export default function Products() {
  return (
    <div>
      <section className="featured-post pb-5 ">
        <div className="flex flex-col items-center flex-wrap gap-3 ">
          <h6 className="font-bold text-sm leading-6 primary-text">
            Personal Traning
          </h6>
          <h2 className="h2-home text-5xl">Products</h2>
          <p className="secondary-text  text-sm leading-5 w-[369px] text-center">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="featured-card flex flex-row  gap-2 mt-5 justify-center flex-wrap ">
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </div>
      </section>
    </div>
  );
}
