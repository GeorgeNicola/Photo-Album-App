var _ = function (selector) {
    return document.querySelector(selector);
}; // querySelectorAll

var $$ = function (selector) {
    return document.querySelectorAll(selector);
}; // querySelectorAll


let galleryClose = $$('.gallery-close');
for(let i=0;i<galleryClose.length;i++){
    galleryClose[i].addEventListener("click", function(){
        this.parentElement.style.display = "none";
    });
} // X button at gallery

_(".theme-gallery-btn").addEventListener("click", function(){
    _(".theme-gallery").style.display = "block";
}); //Afisare Galerie Teme

_('.photo-gallery-btn').addEventListener("click", function(){
    _('.photo-gallery').style.display = "block";
}); //Afisare Galerie Foto

_('.bg-gallery-btn').addEventListener("click", function(){
    _('.bg-gallery').style.display = "block";
}); //Afisare Galerie Fundal

_('.elements-gallery-btn').addEventListener("click", function(){
    _('.elements-gallery').style.display = "block";
}); //Afisare Galerie Elemente Grafice




/*********************************************
    Schimbare imagine din container de poza
*********************************************/

    function changeImage(thisElement){
    //    thisElement.previousElementSibling.style.display = "none"; //Elimina textul
        var files = !!thisElement.files ? thisElement.files : [];
        if ( !files.length || !window.FileReader ) return;
        let here = thisElement;
        if ( /^image/.test( files[0].type ) ) {
            var reader = new FileReader();
            reader.readAsDataURL( files[0] );
            reader.onloadend = function(){
                here.nextElementSibling.src = `${this.result}`;
                here.nextElementSibling.style.display = 'block';
                //Adauga fundalul

                var image = document.createElement("IMG");
                image.setAttribute("src",`${this.result}`);
                _('#photo-gallery-container').appendChild(image);
                //Adauga pozele si in galerie
            }
        }
    }//Schimba imaginea pe pagina ( poza de pe album )

    function deleteParent(thisElement){
        thisElement.parentElement.style.display = "none";
    };//Sterge imagine de pe Pagina ( cosul de gunoi )





    function changePageBg(thisElement){
        var files = !!thisElement.files ? thisElement.files : [];
        if ( !files.length || !window.FileReader ) return;
        let here = thisElement;
        if ( /^image/.test( files[0].type ) ) {
            var reader = new FileReader();
            reader.readAsDataURL( files[0] );
            reader.onloadend = function(){
                here.nextElementSibling.src = `${this.result}`;
                here.nextElementSibling.style.display = 'block';

                var image = document.createElement("IMG");
                image.setAttribute("src",`${this.result}`);
                _('.bg-gallery .gallery-container').appendChild(image);
                //Adauga pozele si in galerie
            }
        }
    }//Schimare Fundal pagina












    



