
var _ = function (selector) {
    return document.querySelector(selector);
}; // querySelectorAll

var $$ = function (selector) {
    return document.querySelectorAll(selector);
}; // querySelectorAll


let galleryClose = $$('.gallery-close');
for(let i=0;i<galleryClose.length;i++){
    galleryClose[i].addEventListener("click", function(){
        hideGallery();
    });
} // X button at gallery

function hideGallery(){
    let gallery = $$(".gallery");
    for(i=0;i<gallery.length;i++){
        gallery[i].style.display = "none";
    }
    _(".dark-layer").style.display = "none";
}

_(".theme-gallery-btn").addEventListener("click", function(){
    hideGallery();
    _(".theme-gallery").style.display = "block";
    _(".dark-layer").style.display = "block";
}); //Afisare Galerie Teme

_('.photo-gallery-btn').addEventListener("click", function(){
    hideGallery();
    _('.photo-gallery').style.display = "block";
    _(".dark-layer").style.display = "block";
    
}); //Afisare Galerie Foto

_('.bg-gallery-btn').addEventListener("click", function(){
    hideGallery();
    _('.bg-gallery').style.display = "block";
    _(".dark-layer").style.display = "block";
}); //Afisare Galerie Fundal

_('.elements-gallery-btn').addEventListener("click", function(){
    hideGallery();
    _('.elements-gallery').style.display = "block";
    _(".dark-layer").style.display = "block";
}); //Afisare Galerie Elemente Grafice

_('.layout-btn').addEventListener("click", function(){
    hideGallery();
    _('.layout-gallery').style.display = "block";
    _(".dark-layer").style.display = "block";
}); //Afisare Galerie Layout

_('.vizualizare').addEventListener("click", function(){
    _('#vizualizare').style.display = "block";
}); //Afisare Galerie Layout

_('.vizualizare-close-btn').addEventListener("click", function(){
    _('#vizualizare').style.display = "none";
}); //Afisare Galerie Layout

    /*********************************************
        Schimbare imagine din container de poza
    *********************************************/

    function changeImage(thisElement){
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
               // _('#photo-gallery-container').appendChild(image);
               // image.addEventListener("click", addPhotoToPage);
                //Adauga pozele si in galerie
            }
        }
    }//Schimba imaginea pe pagina ( butonul de upload )

    function deleteParent(thisElement){
        thisElement.parentElement.style.display = "none";
    };//Sterge imagine de pe Pagina ( cosul de gunoi )








  







    



