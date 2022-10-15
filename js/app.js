let check = document.querySelector(".check");
check.addEventListener('click', (e)=>{
    // if(check.checked) location.href='/es/index.html';
    // else location.href='/index.html';
    let idFondoElegir = document.getElementById('idFondoElegir');
    let idCirculoElegir = document.getElementById('idCirculoElegir');
    let en = document.getElementById('en');
    let es = document.getElementById('es');
    if(check.checked){
        idFondoElegir.style.background= "var(--colorEs)";
        idCirculoElegir.style.left = "-20px";
        idCirculoElegir.style.border = "2px solid var(--colorEs)";
        en.innerHTML="Inglés";
        es.innerHTML="Español";
    }
    else{
        idFondoElegir.style.background= "var(--colorEn)";
        idCirculoElegir.style.left = "-45px";
        idCirculoElegir.style.border = "2px solid var(--colorEn)";
        en.innerHTML="English";
        es.innerHTML="Spanish";
    }
});