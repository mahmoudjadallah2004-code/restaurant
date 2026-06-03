function FoodCard({food,addToCart}){

return(

<div className="card">

<img src={food.image} alt="" />

<h3>{food.name}</h3>

<p>${food.price}</p>

<button onClick={()=>addToCart(food)}>
Add To Cart
</button>

</div>

);

}

export default FoodCard;