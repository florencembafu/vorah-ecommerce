console.log("javascript chargé !");
function ajouterPanier( ) {
    alert("produit ajouté au panier!");
}

    
function filterProducts(categorie) {
  const produits = document.querySelectorAll('.product-card');
  produits.forEach((produit) => {
    const categorieProduit = produit.getAttribute('data-categorie');
    if (categorie === 'tous' || categorieProduit === categorie) {
      produit.style.display = 'block';
    } else {
      produit.style.display = 'none';
    }
  });
}

function genererBoutonsCategories() {
  const categories = new Set();
  document.querySelectorAll('.product-card').forEach((produit) => {
    categories.add(produit.getAttribute('data-categorie'));
  });
  const container = document.getElementById('categories-btns');
  container.innerHTML = '<button onclick="filterProducts(\'tous\')">Tous</button>';
  categories.forEach((cat) => {
    container.innerHTML += `<button onclick="filterProducts('${cat}')">${cat}</button>`;
  });
}


window.onload = function(){
    filterProducts('offres spéciale');
};
const panierItems =[
    {nom: "sac en cuir",prix:10,image:"images_vorah/sac (2).jpg",quantite:1 },
    {nom:"chaussures femme",prix:25,image:"images_vorah/chaussure.jpg",quantite: 2},
];
function afficherPanier() {
  const container= document.getElementById("panier-items");
  const totalElement=document.getElementById("total");
  let total=0;
  container.innerHTML="";
  panierItems.forEach((item,index) => {
    const itemHTML =`
    <div class="panier-item">
        <img src="images_vorah/sac (2).jpg"alt="${item.nom}">
        <h4>${item.nom}</h4>
        <p>prix:${item.prix} Fc</p>
        <p>quantité:${item.quantite}</p>
        <button onclick="supprimerItem(${index}")supprimer</button>
        </div>
        </div>
        `;
        container.innerHTML += itemHTML;
        total +=item.prix * item.quantite;
  });
  totalElement.textContent=`${total} Fc`;

}
function supprimerItem(index) {
    
    panierItems.splice(index,1);
    afficherPanier();
}
function validerCommande() {
    alert("Commande validée avec succès!");
    
}
window.onload =afficherPanier;
