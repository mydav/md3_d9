initAllProducts = async() => {
    let allProducts = await getProducts();
    console.log("All products...", allProducts);
    let productsSection = H.$("#products-section");
    let productRowDiv = H.createNode("div");
    productRowDiv.className = "row";
    let productCard = productsSection.appendChild(productRowDiv);
    showAllProduct(allProducts, productCard);
    };

    showAllProduct = (allProducts, productCard) => {

    productCard.innerHTML= allProducts.map(
    product => `
    `
    ).join('');

    };

    initAllProducts();
/**
 <div class="col-md-4">
        <div class="card mb-4 text-white bg-dark">
            <img class="card-img-top" src="//placeimg.com/290/180/any" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                <a href="http://www.jquery2dotnet.com/" class="btn btn-outline-light btn-sm">Go somewhere</a>
            </div>
        </div>
    </div>
 */
