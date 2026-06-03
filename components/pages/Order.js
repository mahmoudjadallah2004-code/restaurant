function Order({cart}){

const total=cart.reduce(
(sum,item)=>sum+item.price,
0
);

return(

<div className="container">

<h1>Your Order</h1>

{cart.map((item,index)=>(

<p key={index}>
{item.name} - ${item.price}
</p>

))}

<h2>Total: ${total}</h2>

</div>

);

}

export default Order;