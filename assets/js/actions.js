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




    function changeImage(thisElement){
        thisElement.previousElementSibling.style.display = "none"; //Elimina textul
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
    }//Adauga Imagine




    function deleteParent(thisElement){
        thisElement.parentElement.style.display = "none";
    };//Sterge Imaginea / X pt Imagini




    function changePageBg(thisElement){
        thisElement.previousElementSibling.style.display = "none"; //Elimina textul
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
    }



  //  let albumPageInput = $$('.album-page input');
   //     for(let j=0;j<albumPageInput.length;j++){
  //          albumPageInput[j].addEventListener("change", changePageBg(albumPageInput[j]));
  //  }//Upload Backgrounds to Album's Pages








    _('.gallery-add-photo').addEventListener("change", function changeImage(){
        var files = !!this.files ? this.files : [];
        if ( !files.length || !window.FileReader ) return;
        if ( /^image/.test( files[0].type ) ) {
            var reader = new FileReader();
            reader.readAsDataURL( files[0] );
            reader.onloadend = function(){
                let src = `${this.result}`;

                var image = document.createElement("IMG");
                image.setAttribute("src", src);
                _('.photo-gallery .gallery-container').appendChild(image);
            }
        }
    });//Adaugare Poze in galerie

    _('.gallery-add-bg').addEventListener("change", function changeImage(){
        var files = !!this.files ? this.files : [];
        if ( !files.length || !window.FileReader ) return;
        if ( /^image/.test( files[0].type ) ) {
            var reader = new FileReader();
            reader.readAsDataURL( files[0] );
            reader.onloadend = function(){
                let src = `${this.result}`;

                var image = document.createElement("IMG");
                image.setAttribute("src", src);
                _('.bg-gallery .gallery-container').appendChild(image);
            }
        }
    });//Adaugare fundal in galerie

    _('.gallery-add-elements').addEventListener("change", function changeImage(){
        var files = !!this.files ? this.files : [];
        if ( !files.length || !window.FileReader ) return;
        if ( /^image/.test( files[0].type ) ) {
            var reader = new FileReader();
            reader.readAsDataURL( files[0] );
            reader.onloadend = function(){
                let src = `${this.result}`;

                var image = document.createElement("IMG");
                image.setAttribute("src", src);
                _('.elements-gallery .gallery-container').appendChild(image);
            }
        }
    });//Adaugare elemente in galerie


