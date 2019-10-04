$( document ).ready(function() {
    var pagesCounter = 0;
    let currentPage = 0;
    let currentBg = "assets/img/background.png"; 
    let selectedPage;

    class page {
        constructor(counter, side) {
            this.counter = counter;
            this.side = side;
        }
    /*    build(){
            const page = `  <div id="album-page-nr${this.counter}" class="album-page resize-container">
                                <p class="album-page-p"> Click aici pentru a schimba fundalul </p>
                                <input type="file" accept="image/*" onchange="changePageBg(this)">	
                                <img src=${currentBg}>
                            </div>`;
            if(this.side == `right`) $(".page-right").append(page);   
            if(this.side == `left`) $(".page-left").append(page);  
            this.standardImage();  
            this.show();         
        }
*/
        build(){
            const page = `  <div id="album-page-nr${this.counter}" class="album-page resize-container">	
                                <img src=${currentBg}>
                            </div>`;

            if(this.side == `right`){ $(".page-right").append(page);}   
            if(this.side == `left`){ $(".page-left").append(page);}


                _(`#album-page-nr${this.counter}`).addEventListener("click", selectPage);


            this.standardImage();  
            this.show();         
        }

        selectPage(){
            _(`#album-page-nr${this.counter}`).classList.add("album-page-selected");
        }

        pageList(){
            let page = _(`#album-page-nr${this.counter}`);
            page.style.display = "block";
            html2canvas(page).then(canvas => {  
                let imgData = canvas.toDataURL('image/png');
                let img = document.createElement("IMG");
                img.src = imgData;
                _(".page-menu-container").appendChild(img);
            }); 
        }

        show(){
            $(`#album-page-nr${this.counter}`).show();
        }

        hide(){
            $(`#album-page-nr${this.counter}`).hide();
        }

        delete(){
            $(`#album-page-nr${this.counter}`).remove();
        }

        addText(){
            let textBox = `<textarea class="resize-drag page-text"> Text </textarea>`;
            $(`#album-page-nr${this.counter}`).append(textBox);   
        }

        standardImage(width = `75%`, height = `70%`, top = `15%`, left = `12.5%`, right = ` `, bottom = ` `){
            const image = `<div class="image resize-drag center"
                            style=" width:${width};
                                    height:${height};
                                    right:${right};
                                    left:${left};
                                    top:${top}; 
                                    bottom:${bottom};
                            ">	
                                <div class="image-delete" onclick="deleteParent(this)"> </div>
                                <div class="image-upload"> </div>	
                                <input type="file" onchange="changeImage(this)" accept="image/*">
                                <img src="#">
                            </div>`;
            $(`#album-page-nr${this.counter}`).append(image);            
        }

        imageSrc(photo){
            const image = `<div class="image resize-drag center"
                            style=" width:75%;
                                    height:70%;
                                    left:12.5%;
                                    top:15%; 
                            ">	
                                <div class="image-delete" onclick="deleteParent(this)"> </div>
                                <div class="image-upload"> </div>	
                                <input type="file" onchange="changeImage(this)" accept="image/*">
                                <img src="${photo.src}" style="display:block;">
                            </div>`;
            $(`#album-page-nr${this.counter}`).append(image);
        }

        addElement(photo){
            const image = `<div class="image resize-drag center element">	
                                <div class="image-delete" onclick="deleteParent(this)"> </div>	
                                <div class="image-upload"> </div>	
                                <input type="file" onchange="changeImage(this)" accept="image/*">
                                <img src="${photo.src}" style="display:block;">
                            </div>`;
            $(`#album-page-nr${this.counter}`).append(image);
        }

        imagesLayout1(){
            let delPg =  document.querySelectorAll(`#album-page-nr${this.counter} .image`);
            for(i=0;i<delPg.length;i++)
                delPg[i].remove();

            this.standardImage(`75%`,`33%`,`15%`,`12.5%`);
            this.standardImage(`75%`,`33%`,` `,`12.5%`,` `,`15%`);
        }

        imagesLayout2(){
            let delPg =  document.querySelectorAll(`#album-page-nr${this.counter} .image`);
            for(i=0;i<delPg.length;i++)
                delPg[i].remove();

            this.standardImage(`36%`,`70%`,`15%`,`12.5%`);
            this.standardImage(`36%`,`70%`,` `,` `,`12.5%`,`15%`);
        }

        imagesLayout3(){
            let delPg =  document.querySelectorAll(`#album-page-nr${this.counter} .image`);
            for(i=0;i<delPg.length;i++)
                delPg[i].remove();

            this.standardImage(`75%`,`33%`,`15%`,`12.5%`);
            this.standardImage(`36%`,`33%`,` `,`12.5%`,` `,`15%`);
            this.standardImage(`36%`,`33%`,` `,` `,`12.5%`,`15%`);
        }

        imagesLayout4(){
            let delPg =  document.querySelectorAll(`#album-page-nr${this.counter} .image`);
            for(i=0;i<delPg.length;i++)
                delPg[i].remove();

            this.standardImage(`36%`,`33%`,`15%`,`12.5%`);
            this.standardImage(`36%`,`33%`,`15%`,` `,`12.5%`);
            this.standardImage(`75%`,`33%`,` `,`12.5%`,` `,`15%`);
        }

        imagesLayout5(){
            let delPg =  document.querySelectorAll(`#album-page-nr${this.counter} .image`);
            for(i=0;i<delPg.length;i++)
                delPg[i].remove();

            this.standardImage(`36%`,`70%`,`15%`,`12.5%`);
            this.standardImage(`36%`,`33%`,`15%`,` `,`12.5%`);
            this.standardImage(`36%`,`33%`,` `,` `,`12.5%`,`15%`);
        }

        imagesLayout6(){
            let delPg =  document.querySelectorAll(`#album-page-nr${this.counter} .image`);
            for(i=0;i<delPg.length;i++)
                delPg[i].remove();

            this.standardImage(`36%`,`33%`,`15%`,`12.5%`);
            this.standardImage(`36%`,`33%`,` `,`12.5%`,` `,`15%`);
            this.standardImage(`36%`,`70%`,`15%`,` `,`12.5%`);
        }

        imagesLayout7(){
            let delPg =  document.querySelectorAll(`#album-page-nr${this.counter} .image`);
            for(i=0;i<delPg.length;i++)
                delPg[i].remove();

            this.standardImage(`36%`,`33%`,`15%`,`12.5%`);
            this.standardImage(`36%`,`33%`,` `,`12.5%`,` `,`15%`);
            this.standardImage(`36%`,`33%`,`15%`,` `,`12.5%`);
            this.standardImage(`36%`,`33%`,` `,` `,`12.5%`,`15%`);
        }




        changeBg(image){
            $(`#album-page-nr${this.counter}`).children('img').attr('src', `${image}`);
            $(`#album-page-nr${this.counter}`).children('img').css({"object-fit":"cover",
                                                                    "min-height":"100%",
                                                                    "min-width":"100%",
                                                                    "width":"auto", 
                                                                    "position":"absolute",
                                                                    "top":"0",
                                                                    "left":"50%",
                                                                    "transform":"translateX(-50%)"})                                                        
        }


    }//Clasa Paginilor

    _(".add-photo-btn").addEventListener("click", function addImage(){
        albumPage[currentPage].standardImage();
    });//Btn Adaugare Imagine

    _(".add-photo-btn2").addEventListener("click", function addImage(){
        albumPage[currentPage+1].standardImage();
    });//Btn Adaugare Imagine



    function showPage(selectedPage){
        let page = document.querySelectorAll(".album-page");
        for(k=0;k<page.length;k++){
            albumPage[k].hide();
        }
       // page[selectedPage].style.display = 'block';
        albumPage[selectedPage].show();
    }//Show Album Pages






    /*******************************
        Functiile de la inceput
    *******************************/

    let albumPage = new Array();
    function buildAlbum(){
        currentPage=0;
        for(i=0;i<10;i++){
            let side;
            if(i%2==0) side=`left`;
            else side=`right`; 

            albumPage[i]=new page(i,side);
            albumPage[i].build();

            pagesCounter++;
            _(".pagesCounter").innerHTML = pagesCounter;
        }
    }//Construire Album ( cand porneste programul )
    buildAlbum();
    for(i=0;i<albumPage.length;i++){
        albumPage[i].hide();
    }
    albumPage[currentPage].show();
    albumPage[currentPage+1].show();
    _(".pg-nr-left").innerHTML = `${currentPage+1}`;
    _(".pg-nr-right").innerHTML = `${currentPage+2}`;

    albumPage[currentPage].imagesLayout5();
    albumPage[currentPage+1].imagesLayout6();
    albumPage[currentPage+2].imagesLayout3();
    albumPage[currentPage+3].imagesLayout4();
    albumPage[currentPage+4].imagesLayout1();
    albumPage[currentPage+5].imagesLayout2();
    albumPage[currentPage+6].imagesLayout7();
    //Functiile de inceput


    function showList(){
        for(i=0;i<pagesCounter;i++){
            albumPage[i].pageList();
        }
    }//Functie Afisare lista de pagini stanga

    let resBoxBtn = $$(".res-box-btn");
    for(i=0;i<resBoxBtn.length;i++){
        $$(".res-box-btn")[i].addEventListener("click", showList);
    }//Afisare lista stanga




























    function deSelectPage(){
        let pageTest = document.querySelectorAll(".album-page");
        for(i=0;i<pagesCounter;i++){
            pageTest[i].classList.remove("album-page-selected");
        }
    }

    function selectPage(){
        deSelectPage();
        this.classList.add("album-page-selected");
        if($(this).parent().hasClass("page-left")) selectedPage = currentPage;
        if($(this).parent().hasClass("page-right")) selectedPage = currentPage + 1;
        console.log(selectedPage);
    }
    document.querySelectorAll(".album-page")[0].classList.add("album-page-selected");


    function selectPageNav(){
        deSelectPage();
        selectedPage = currentPage;
        albumPage[selectedPage].selectPage();
    }








/*******************************
    Text Pagini
*******************************/
/*
    _(".add-text-btn").addEventListener("click", function addText(){
        albumPage[currentPage].addText();
    })
*/

_(".add-text-btn").addEventListener("click", function addText(){
    albumPage[selectedPage].addText();
})



















/*******************************
    Fundal Pagini
*******************************/

    function changeCurrPgBg(){
        var files = !!this.files ? this.files : [];
            if ( !files.length || !window.FileReader ) return;
            if ( /^image/.test( files[0].type ) ) {
                var reader = new FileReader();
                reader.readAsDataURL( files[0] );
                reader.onloadend = function(){
                    albumPage[currentPage].changeBg(this.result);


                    var image = document.createElement("IMG");
                    image.setAttribute("src",`${this.result}`);
                    _('#bg-gallery-container').appendChild(image);
                    //Adauga pozele si in galerie
                }
            }
    }//Schimba imaginea paginii curente cu "input"
    _(".bg-change-btn input").addEventListener("change", changeCurrPgBg);
    //Btn schimbare fundal Pagina Curenta



    function changeBgAll(){
        _(".bg-gallery").style.display = "none";
        currentBg = this.src;
        for(j=0;j<pagesCounter;j++){
            albumPage[j].changeBg(this.src);
        }
    }//Functie: schimba fundalul paginilor


    let bgGalleryImage = document.querySelectorAll("#bg-gallery-container img")
    for(i=0;i<bgGalleryImage.length;i++){
        bgGalleryImage[i].addEventListener("click", changeBgAll);
    }//Btn: click img Galerie poze --> se schimba toate fundalurile


    _('.gallery-add-bg').addEventListener("change", function addBgImage(){
        var files = !!this.files ? this.files : [];
        if ( !files.length || !window.FileReader ) return;
        if ( /^image/.test( files[0].type ) ) {
            var reader = new FileReader();
            reader.readAsDataURL( files[0] );
            reader.onloadend = function(){
                let src = `${this.result}`;

                var image = document.createElement("IMG");
                image.addEventListener("click", changeBgAll);
                image.setAttribute("src", src);
                _('.bg-gallery .gallery-container').appendChild(image);
            }
        }
    });//Galerie Fundaluri: Adaugare imagine Fundal












/*******************************
    Imagini Pagini
*******************************/
    function addPhotoToPage(){
        _(".photo-gallery").style.display = "none";
            albumPage[currentPage].imageSrc(this);
    }//Functie: adauga poza din galerie


    let photo = document.querySelectorAll("#photo-gallery-container img")
    for(i=0;i<photo.length;i++){
        photo[i].addEventListener("click", addPhotoToPage);
    }//Galerie Imagini: adaugare imagine pe pagina

    _('.gallery-add-photo').addEventListener("change", function changeImage(){
        var files = !!this.files ? this.files : [];
        if ( !files.length || !window.FileReader ) return;
        if ( /^image/.test( files[0].type ) ) {
            var reader = new FileReader();
            reader.readAsDataURL( files[0] );
            reader.onloadend = function(){
                let src = `${this.result}`;

                var image = document.createElement("IMG");
                image.addEventListener("click", addPhotoToPage);
                image.setAttribute("src", src);
                _('.photo-gallery .gallery-container').appendChild(image);
            }
        }
    });//Btn: adaugare img in Galerie











/*******************************
    Elemente Grafice
*******************************/

    function addElementToPage(){
        _(".elements-gallery").style.display = "none";
            albumPage[currentPage].addElement(this);
    }//Functie: adauga poza din galerie


    let element = document.querySelectorAll("#elements-gallery-container img")
    for(i=0;i<element.length;i++){
        element[i].addEventListener("click", addElementToPage);
    }//Galerie Imagini: adaugare imagine pe pagina

    _('.gallery-add-elements').addEventListener("change", function changeImage(){
        var files = !!this.files ? this.files : [];
        if ( !files.length || !window.FileReader ) return;
        if ( /^image/.test( files[0].type ) ) {
            var reader = new FileReader();
            reader.readAsDataURL( files[0] );
            reader.onloadend = function(){
                let src = `${this.result}`;
    
                var image = document.createElement("IMG");
                image.addEventListener("click", addElementToPage);
                image.setAttribute("src", src);
                _('.elements-gallery .gallery-container').appendChild(image);
            }
        }
    });//Adaugare elemente in galerie




























/*******************************
    Navigare intre Pagini
*******************************/

    _(".prev").addEventListener("click", function prevPage(){
        for(i=0;i<pagesCounter;i++){
            albumPage[i].hide();
        }
        currentPage = currentPage-2;
        if(currentPage < 0) currentPage=0;
        console.log(currentPage);
        albumPage[currentPage].show();
        albumPage[currentPage+1].show();

        _(".pg-nr-left").innerHTML = `${currentPage+1}`;
        _(".pg-nr-right").innerHTML = `${currentPage+2}`;

        selectPageNav();
    });//Pagina anterioara

    _(".next").addEventListener("click", function nextPage(){
        for(i=0;i<pagesCounter;i++){
            albumPage[i].hide();
        }
        currentPage = currentPage+2;
        if(currentPage >= pagesCounter) currentPage=pagesCounter-2;
        console.log(pagesCounter);
        albumPage[currentPage].show();
        albumPage[currentPage+1].show();

        _(".pg-nr-left").innerHTML = `${currentPage+1}`;
        _(".pg-nr-right").innerHTML = `${currentPage+2}`;

        selectPageNav();
    });//Urmatoarea Pagina


/*******************************
    Adaugare/Stergere Pagini
*******************************/

    function newPages(){
        albumPage.push(new page(pagesCounter,`left`));
        albumPage.push(new page(pagesCounter+1,`right`));
        albumPage[pagesCounter].build();
        albumPage[pagesCounter+1].build();

        currentPage = pagesCounter;
        pagesCounter = pagesCounter+2;
        _(".pagesCounter").innerHTML = pagesCounter;
        _(".pg-nr-left").innerHTML = `${currentPage+1}`;
        _(".pg-nr-right").innerHTML = `${currentPage+2}`;
        
    }//Functie adaugare 2 Pagini

    function delPages(){
        albumPage[currentPage].delete();
        albumPage[currentPage+1].delete();

        albumPage.splice(currentPage,2);

        if(currentPage == 0) currentPage = 0;
        else currentPage -= 2;

        pagesCounter -= 2;
        albumPage[currentPage].show();
        albumPage[currentPage+1].show();
        //TO DO: if's pentru fiecare situatie

        _(".pagesCounter").innerHTML = pagesCounter;
        _(".pg-nr-left").innerHTML = `${currentPage+1}`;
        _(".pg-nr-right").innerHTML = `${currentPage+2}`;
    }//Functie stergere 2 Pagini

    _(".add-page-btn").addEventListener("click", newPages);//Btn Adaugare 2 Pagini
    _(".del-page-btn").addEventListener("click", delPages);//Btn Stergere 2 Pagini





    
});








