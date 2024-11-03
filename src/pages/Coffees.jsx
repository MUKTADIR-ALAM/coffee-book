import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";

export default function Coffees() {
  const coffees = useLoaderData();

  const [sortCoffees, setSortCoffees] = useState(coffees);
  const handleSort = (sortBy) => {
    if (sortBy === "popularity") {
      const sorted = [...coffees].sort((a,b)=> b.popularity-a.popularity);
      setSortCoffees(sorted);
    } else if (sortBy === "rating") {
      const sorted = [...coffees].sort((a,b)=> b.rating-a.rating);
      setSortCoffees(sorted);
    }
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-thin">
            Sort Coffee&apos;s by Popularity & Rating-&gt;
          </h1>
        </div>
        <div className="space-x-4">
          <button
            onClick={() => handleSort("popularity")}
            className="btn btn-warning"
          >
            Sort By Popularity (DSC)
          </button>
          <button
            onClick={() => handleSort("rating")}
            className="btn btn-warning"
          >
            Sort By Rating (ASC)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {sortCoffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </>
  );
}
