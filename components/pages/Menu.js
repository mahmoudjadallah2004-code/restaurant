import menuData from "../data/menuData";
import FoodCard from "../components/FoodCard";

function Menu({addToCart}){

return(

<div className="container">

<h1>Menu</h1>

<div className="grid">

{menuData.map((food)=>(

<FoodCard
key={food.id}
food={food}
addToCart={addToCart}
/>

))}

</div>

</div>

);

}

export default Menu;