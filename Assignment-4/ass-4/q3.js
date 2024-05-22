let baseurl = `https://fakestoreapi.com/products`;

(async function getProducts() {
  try {
    let res = await axios(baseurl);
    let div = `<div class="products">`;

    res.data.forEach((product) => {
      div += `<div class="product">
                        <img src="${product.image}" alt="image">
                        <h4>${product.title}</h3>
                        <p>$${product.price}</p>
                    </div>`;
    });

    div += `</div>`;
    document.getElementById("container").innerHTML = div;
  } catch (error) {
    console.log(error);
  }
})();
