const btnLinks = document.querySelectorAll("a.btn");
const section = document.querySelector("h2.last")
const opcijaJabuka = document.getElementById('opcijaJabuka')
const opcijaKruska = document.getElementById('opcijaKruska')
const jabuka = document.getElementById('jabuka')
const kruska = document.getElementById('kruska')
const info = document.querySelector("p.popup__text");
const potvrda = document.getElementById('submit1')
const potvrda2 = document.getElementById('submit2')
const ime = document.getElementById('ime')
const adresa = document.getElementById('adresa')
const grad = document.getElementById('grad')
const email = document.getElementById('email')
const narudzbina = document.getElementById('narudzbina')
const saglasnost = document.getElementById('saglasnost')
const popup = document.getElementById('popup')

potvrda.addEventListener('click', function(){

    let voce = "";
    let sorta = "";
    let cena;

    if (opcijaJabuka.checked) {
        voce = 'Jabuka';
  
        switch (jabuka.value) {
          case 'Zlatni_Delises':
            sorta = 'Zlatni Delises';
            cena = 0.2;
            break;
          case 'Ajdared':
            sorta = 'Ajdared';
            cena = 0.25;
            break;
          case 'Greni_Smith':
            sorta = 'Greni Smith';
            cena = 0.3;
            break;
          default:
            sorta = 'Crveni Delises';
            cena = 0.2;
            break;

        }   
    }else{
        voce = 'Kruska';
        switch (kruska.value) {
            case 'Karmen':
              sorta = 'Karmen';
              cena = 1.25;
              break;
            case 'Viljamovka':
              sorta = 'Viljamovka';
              cena = 1.75;
              break;
            case 'Konferans':
              sorta = 'Konferans';
              cena = 1.5;
              break;
            default:
              sorta = 'Santa Maria';
              cena = 1.6;
              break;
          }   
    }

    let konacnaCena = cena * narudzbina.value;
    konacnaCena = Math.round(konacnaCena)

    info.innerHTML =  `
    <p>Vaše ime je: ${ime.value}<p><br>
    <p>Vaš email je: ${email.value}<p><br>
    <p>Vaš grad je: ${grad.value}<p><br>
    <p>Vaša adresa je: ${adresa.value}<p><br>
    <p>Naručena je: ${voce}<p><br>
    <p>Sorta: ${sorta}<p><br>
    <p>Naručena količina je: ${narudzbina.value}<p><br>
    <p>Cena: ${konacnaCena}€<p><br>
    `
   
    if(ime.value && adresa.value && grad.value && email.value && narudzbina.value && saglasnost.checked){
      popup.style.display = 'block';
    }else if(saglasnost.checked === false){
      alert('Oznacite saglasnost')
    }else{
      alert('Popunite sva polja');
    }


})


opcijaJabuka.addEventListener('click', function(){
    if(opcijaJabuka.checked === true){
        jabuka.removeAttribute("disabled")
        kruska.disabled = true;
    }
    
})

opcijaKruska.addEventListener('click', function(){
    if(opcijaKruska.checked === true){
        kruska.removeAttribute("disabled")
        jabuka.disabled = true;
    }
})




btnLinks.forEach(link => {
 
  link.addEventListener("click", function() {
    window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
      });
});
});

