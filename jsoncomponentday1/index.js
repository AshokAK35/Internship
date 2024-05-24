fetch('https://dummyjson.com/products')
.then(res =>{
    return(res.json());
})
.then(data=>{
    console.log(data.products);
    const newdata = data.products;
    let rows="";
    newdata.forEach(product =>{
        rows+=`<tr>
        <td>${product.id}</td>
        <td>${product.title}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td>${product.discountPercentage}</td>
        <td>${product.rating}</td>
        <td> <img src="${product.thumbnail}" alt=""> </td>
        <td> <img src="${product.images[1]}" alt=""></td>
        </tr>`;
});

document.getElementById("databody").innerHTML = rows;
}).catch(err=>{
    console.log(err);
})