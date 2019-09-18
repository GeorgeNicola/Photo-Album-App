$( document ).ready(function() {
    var pagesCounter = 0;
    let currentPage = 0;    

    class page {
        constructor(counter, side) {
            this.counter = counter;
            this.side = side;
        }
        build(){
            const page = `  <div id="album-page-nr${this.counter}" class="album-page resize-container">
                            <p> Click aici pentru a adauga poza ta </p>
                            <input type="file" accept="image/*" onchange="changePageBg(this)">	
                            <img src="/assets/img/background.png">

                            <div class="image resize-drag image-pos1 center">
                                <div class="image-delete" onclick="deleteParent(this)"> </div>		
                                <p> Click aici pentru a adauga poza ta </p>
                                <input onchange="changeImage(this)" type="file" accept="image/*">
                                <img src="#">
                            </div>
                            <div class="image resize-drag image-pos2 center">
                                <div class="image-delete" onclick="deleteParent(this)"> </div>		
                                <p> Click aici pentru a adauga poza ta </p>
                                <input onchange="changeImage(this)" type="file" accept="image/*">
                                <img src="#">
                            </div>
                        </div>`;

            if(this.side == `right`) $(".page-right").append(page);   
            if(this.side == `left`) $(".page-left").append(page);               
        }

        show(){
            $(`#album-page-nr${this.counter}`).show();
        }

        hide(){
            $(`#album-page-nr${this.counter}`).hide();
        }

        standardImage(width = `39%`, height = `70%`, top = `50px`, left = `50px`, right = ` `, bottom = ` `){
            const image = `<div class="image resize-drag center"
                            style=" width:${width};
                                    height:${height};
                                    right:${right};
                                    left:${left};
                                    top:${top}; 
                                    bottom:${bottom};
                            ">	
                                <div class="image-delete" onclick="deleteParent(this)"> </div>	
                                <p> Click aici pentru a adauga poza ta </p>
                                <input type="file" onchange="changeImage(this)" accept="image/*">
                                <img src="#">
                            </div>`;
            $(`#album-page-nr${this.counter}`).append(image);            
        }
    }

    _(".add-photo-btn").addEventListener("click", function addImage(){
        albumPage[currentPage].standardImage();
    });//Btn Adaugare Imagine

    _(".add-photo-btn2").addEventListener("click", function addImage(){
        albumPage[currentPage+1].standardImage();
    });//Btn Adaugare Imagine



    let albumPage = new Array();
    function buildAlbum(){
        for(i=0;i<6;i++){
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
    for(i=0;i<6;i++){
        albumPage[i].hide();
    }
    console.log(currentPage);
    albumPage[currentPage].show();
    albumPage[currentPage+1].show();
    _(".pg-nr-left").innerHTML = `${currentPage+1}`;
    _(".pg-nr-right").innerHTML = `${currentPage+2}`;
    //Functiile de inceput




 
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
    });//Urmatoarea Pagina







    function newPages(){
        console.log(pagesCounter);
        albumPage.push(new page(pagesCounter,`left`));
        albumPage.push(new page(pagesCounter+1,`right`));
        albumPage[pagesCounter].build();
        albumPage[pagesCounter+1].build();

        albumPage[pagesCounter].show();
        albumPage[pagesCounter+1].show();

        currentPage = pagesCounter;
        pagesCounter = pagesCounter+2;
        _(".pagesCounter").innerHTML = pagesCounter;
        _(".pg-nr-left").innerHTML = `${currentPage+1}`;
        _(".pg-nr-right").innerHTML = `${currentPage+2}`;
        
    }//Construire Album ( cand porneste programul )
    _(".add-page-btn").addEventListener("click", newPages);//AdaugareImagine



});








