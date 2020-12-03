<html>
  <head>
    <title></title>
  </head>
  <body>
    <input id="runEvent" type="button" value="QUI CLIQUERA VERRA"><br>
  </body>
<script>
// lancement de l'événement sur clic du bouton "QUI CLIQUERA VERRA"
var runEvent = document.getElementById("runEvent");
runEvent.addEventListener("click", function() {
  //console.log("QUI CLIQUERA VERRA");
  alert("Félicitation votre action permettra de sauvegarder la forêt!");
});
</script>
</html>
