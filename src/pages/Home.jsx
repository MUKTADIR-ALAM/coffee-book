import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Heading from "../components/Heading";

export default function Home() {
    const categories = useLoaderData();
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
      <Categories categories={categories} />
      {/* dynamic nested components */}
      <Outlet />
    </div>
  );
}
