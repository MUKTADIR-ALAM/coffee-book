import { useParams } from "react-router-dom"


export default function CoffeeCards() {
    const {category} = useParams();
  return (
    <div>
        {category}
    </div>
  )
}
