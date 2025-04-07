
$('#btn1').click(function(){
  $('#slideToggle').slideToggle(500);
});
// Fromulaire
// Bonton creation 
$('#btn2').click(function(){
  $('#créationMembre').slideToggle(500);
});
// création d'un membre
document.querySelector("form").addEventListener("submit", function(event) {
  const memberName = document.getElementById("memberName").value;
  const memberFirstName = document.getElementById("memberFirstName").value;
  const classSelect = document.getElementById("classSelect").value;

  if (!memberName || !memberFirstName || classSelect === "disabled") {
    alert("Veuillez remplir tous les champs.");
    // Empêcher la soumission du formulaire en cas d'échec de la validation
    event.preventDefault(); 

  }
});
$('#rechercheMembre').on('input', function() {
  const rechercheMembre = $(this).val().trim();

  // Si le champ n'est pas vide, afficher la div #modifMembre
  if (rechercheMembre != "") {
    $('#modifMembre').show();
  } else {
    $('#modifMembre').hide();
  }
});

// modification d'un membre
document.querySelector("#modification").addEventListener("click", function() {
  // Handle modification logic here
  alert("Modification Clické");
});
// suppression d'un membre
document.querySelector("#suppression").addEventListener("click", function() {
  // Handle deletion logic here
  alert("Suppression clické");
});