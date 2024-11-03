import toast from "react-hot-toast";

//get all coffees from local stroage
const getAllFavorites = () =>{
    const all = localStorage.getItem('favorites');
    if(all) {
        return JSON.parse(all);
    }else{
        return [];
    }
}


//add a coffee to local stroage
const addFavorite = coffee => {
    //get all previously saved coffee data
    const favorites = getAllFavorites();
    const isExist = favorites.find((favorite)=> favorite.id === coffee.id);
    if(isExist) return toast.error('Allready Exist!');; 
    favorites.push(coffee);
    localStorage.setItem('favorites',JSON.stringify(favorites));
    toast.success('Successfully Added');
}

//remove coffee from local stroage



export {addFavorite,getAllFavorites}