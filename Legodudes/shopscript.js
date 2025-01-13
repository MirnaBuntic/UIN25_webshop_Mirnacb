console.log(products)

//Gå igenom alla produkter, generera HTML för varje produkt, skriva detta till index.html

//En variabel som kan hålla på HTML-en för produkterna
let productHTML = ""

products.map((product, index) => productHTML +=
            ` <article class="product-card">
                <img src="website_images/PROD_${product.imagefile}" alt="PRODUKTTITTEL" />
                <a href="#KATEGORISIDE">Ninjago</a>
                <h3>${product.title}</h3>
                <p>Kr. ${product.price},-</p>
                <button>Legg i handlekurv</button>
            </article>`)

//Hitta #productlist och fyll den med värdena i variabeln productHTML
document.getElementById("productlist").innerHTML = productHTML