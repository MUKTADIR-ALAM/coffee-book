import { useLoaderData, useNavigate, useParams } from "react-router-dom"
import Card from "./Card";
import { useEffect, useState } from "react";


export default function CoffeeCards() {
    const navigate = useNavigate();
    const {category} = useParams();
    const allCoffees = useLoaderData();
    const [coffees,setCoffees] = useState([]);

    useEffect(()=>{
      if(category){
        const filterdCoffees = allCoffees.filter((coffee)=> coffee.category===category);
      setCoffees(filterdCoffees);
      }else{
        setCoffees(allCoffees.slice(0,6));
      }
    },[category,allCoffees]);

    // console.log(allCoffees);
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {
            coffees.map(coffee => <Card key={coffee.id} coffee={coffee} />)
        }
    </div>
    <button className="btn btn-warning" onClick={()=>navigate('/coffees')}>View All</button>
    </>
  )
}
