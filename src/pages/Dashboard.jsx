import Card from "../components/Card";
import Heading from "../components/Heading";
import { getAllFavorites } from "../utils";


export default function Dashboard() {
  const  coffees = getAllFavorites();

  return (
    <>
      <Heading tittle={'Welcome to Dashboard'} subtittle={'Manage coffees that you have previously added as favorite. You can view or remove them from here.'} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {
            coffees.map(coffee => <Card key={coffee.id} coffee={coffee} />)
        }
    </div>
    </>
  )
}
