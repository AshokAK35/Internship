fetch('https://fakestoreapi.com/carts')

.then(res=>{
    return(res.json());
})
.then(data=>{
   
    const newdata = data;
    console.log(newdata)

    let rows="";
    newdata.forEach(cart =>{
        
        rows+= `<tr>
        <td>${cart.id}</td>
        <td>${cart.userId}</td>
        <td>${cart.date}</td>
        
        <td>${cart.products.map(product => product.quantity )}</td>
        </tr>`;
       
});
document.getElementById("databody").innerHTML = rows;
}

)
.catch(err=>{
    console.log(err);
})