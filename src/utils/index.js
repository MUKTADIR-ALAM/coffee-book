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
    toast.success('Successfully Removed');
}

//remove coffee from local stroage
const removeFavorite = id => {
    const favorites = getAllFavorites();
    const remaining = favorites.filter((coffee)=> coffee.id !== id)
    localStorage.setItem('favorites',JSON.stringify(remaining));
    toast.success('Successfully Removed');
}


export {addFavorite,getAllFavorites,removeFavorite}