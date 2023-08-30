function enviar(){
  let Nombre = document.getElementById("nombre").value;
  let Apellido = document.getElementById("apellido").value;
  let Grupo = document.getElementById("grupo").value;
  let Sala = document.getElementById("sala").value;

  
  fetch('https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265', {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: 'POST',
    body: JSON.stringify({
      nombre: Nombre,
      apellido: Apellido,
      grupo: Grupo,
      sala: Sala,
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))
}
