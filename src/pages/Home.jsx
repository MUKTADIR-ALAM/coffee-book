import Banner from "../components/Banner";
import Heading from "../components/Heading";

export default function Home() {
  return (
    <div>
      {/* banner */}
      <Banner />
      {/* heading */}
      <Heading
        tittle="Browse Coffees by Category"
        subtittle="Choose your desired coffee category to browse through specific coffees that fit in your taste."
      />
      {/* categories tab section */}
      <div role="tablist" className="tabs tabs-lifted">
        <a role="tab" className="tab">
          Tab 1
        </a>
        <a role="tab" className="tab tab-active">
          Tab 2
        </a>
        <a role="tab" className="tab">
          Tab 3
        </a>
      </div>
      {/* dynamic nested components */}
    </div>
  );
}
