function ajouterPanier( ) {
    alert("produit ajouté au panier!");
}

function filterProducts(category) {
  const allProducts=document.querySelectorAll('.product-card');
  allProducts.forEach(product => {
        if (product.classList.contains(category)){
            product.Style.display = "block";
        }   else{
            product.Style.display = "none";
        }
    });
}
window.onload = function(){
    filterProducts('offres spéciale');
};