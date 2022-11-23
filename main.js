function tocaSom (seletorAudio) {
   const elemento = document.querySelector(seletorAudio);

  if(elemento != null && elemento.localName === 'audio'){
         elemento.play()
      } else {
         alert('Elemento ou seletor inválido não encontrado')
      }
   }

const listaDeTeclas = document.querySelectorAll('.tecla')

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

   const tecla = listaDeTeclas[contador];
   const instrumento = tecla.classList[1];
   const idAudito = `#som_${instrumento}`;

    tecla.onclick = function () {
      tocaSom(idAudito);
   }

   tecla.onkeydown = function (evento) {

      if(evento.code === 'Space' || evento.code === 'Enter' ) {
      tecla.classList.add('ativa');
      }
   }

   tecla.onkeyup = function () {
      tecla.classList.remove('ativa');
   }

}
