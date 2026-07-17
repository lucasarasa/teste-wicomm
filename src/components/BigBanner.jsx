import bigBanner from "../assets/img/big-banner.webp";

function BigBanner() {
  return (
    <section className="px-4 py-5">
      <div className="h-107.75 w-full overflow-hidden rounded-3xl">
        <img src={bigBanner} alt="" className="h-full w-full object-cover" />
      </div>
    </section>
  );
}

export default BigBanner;
