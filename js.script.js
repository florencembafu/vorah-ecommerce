console.log("javascript chargé !");
function ajouterPanier( ) {
    alert("produit ajouté au panier!");
}

    
const panierItems =[
    {nom: "sac en cuir",prix:30,image:"images_vorah/sac_1.jpg",quantite:1 },
    {nom:"sac en cuir",prix:30,image:"images_vorah/sac_1.jpg",quantite: 3},
];
function afficherPanier() {
  const container= document.getElementById("panier-items");
  const totalElement=document.getElementById("total");
  let total=0;
  container.innerHTML="";
  panierItems.forEach((item,index) => {
    const itemHTML =`
    <div class="panier-item">
        <img src="images_vorah/sac_1.jpg"alt="${item.nom}">
        <h4>${item.nom}</h4>
        <p>prix:${item.prix} </p>
        <p>quantité:${item.quantite}</p>
        <button onclick="supprimerItem(${index}")supprimer</button>
        </div>
        </div>
        `;
        
        container.innerHTML += itemHTML;
        total +=item.prix * item.quantite;
  });
  totalElement.textContent=`${total} $`;

}
function supprimerItem(index) {
    
    panierItems.splice(index,1);
    afficherPanier();
}
function validerCommande() {
    alert("Commande validée avec succès!");
    
}
window.onload =afficherPanier;


document.getElementById("compteForm").addEventListener("submit",function(e) {
    e.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const email=document.getElementById("email").value.trim();
    const telephone=document.getElementById("telephone").value.trim();
    const adresse=document.getElementById("adresse").value.trim();
    const message=document.getElementById("message");

    if (!nom ||!email ||!telephone||!adresse) {
        message.style.color="red";
        message.textContent="Veuillez remplir tous les champs.";
        return;
    }
    message.style.color ="green";
    message.textContent ="Formulaire enregistré avec succès !";
});