$( document ).ready(function() {
    var pagesCounter = 0;
    let currentPage = 0;
    let currentBg = "assets/img/fundal/2.jpg"; 
    let selectedPage;
    var rotateId = 0;

    function getRotateId(){
        console.log(rotateId);
        rotateId++;
        return rotateId;
    }

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
            albumPage[selectedPage].previewRefresh();
            selectedPage = this.counter;
            _(`#album-page-nr${this.counter}`).classList.add("album-page-selected");
        }

        preview(){
            let counter = this.counter;

            let copy = $(`#album-page-nr${this.counter}`).clone();
            copy.attr('id', `album-page-preview${this.counter}`);
            copy.addClass("album-page-preview");
            //if(counter%2==0) copy.addClass("margin-left");
            copy.removeClass("album-page");
            copy.removeClass("resize-container");

            let previewBox = $(`<div class="preview-box" id="preview-box${this.counter}">`);
            previewBox.append(copy);
            previewBox.append("<p class='preview-pg'> 1 </p>")      

            if((this.counter)%2 == 0) copy.addClass("preview-margin-left");
            previewBox.appendTo(".page-menu-container");
            

            let pageCounter = this.counter;
            _(`#album-page-preview${this.counter}`).addEventListener("click", function previewAfisare() {
                console.log(`${pageCounter}`);
                    goToPage(pageCounter);
            });// Click pt Afisare pagina din preview

        }

        previewRefresh(){
            console.log(`previewRefresh ${this.counter}`);

            let copy = $(`#album-page-nr${this.counter}`).clone();
            copy.attr('id', `album-page-preview${this.counter}`);
            copy.addClass("album-page-preview");
            if((this.counter)%2 == 0) copy.addClass("preview-margin-left");
            copy.removeClass("album-page");
            $(`#album-page-preview${this.counter}`).replaceWith(copy);


            let copyImg = $(`#album-page-preview${this.counter} .image`);
            let copyInput = $(`#album-page-preview${this.counter} .image input`);
            let copyImgJs = $$(`#album-page-preview${this.counter} .image`); //Pt selectare pag-0


            for(i=0;i<copyImgJs.length;i++){
                if(copyImg.eq().hasClass("text-box")) copyImg.remove();
                copyInput.remove();
                copyImg.eq(i).removeClass("resize-drag");
                let curWidth = copyImg.eq(i).outerWidth();
                let curHeight = copyImg.eq(i).innerHeight();
                //console.log(curHeight);
                let curTransform = window.getComputedStyle(copyImgJs[i]).getPropertyValue("transform").match(/(-?[0-9\.]+)/g);

                if(curTransform != null ) copyImg.eq(i).css({"transform": `translate(${curTransform[4]*0.15}px,${curTransform[5]*0.15}px)`});
                //if(curHeight > 100) copyImg.eq(i).height(curHeight/5.5);


                if(getComputedStyle(document.documentElement).getPropertyValue('--preview-height') == "150px"){
                    if(curWidth > 100) copyImg.eq(i).width(curWidth/4);
                    if(curHeight > 105) copyImg.eq(i).height(curHeight/3.75);
                } 
    
                else{
                    if(curWidth > 100) copyImg.eq(i).width(curWidth/5.5);
                    if(curHeight > 100) copyImg.eq(i).height(curHeight/5.5);
                }
            }

            let pageCounter = this.counter;
            _(`#album-page-preview${this.counter}`).addEventListener("click", function previewAfisare() {
                console.log(`${pageCounter}`);
                    goToPage(pageCounter);
            });// Click pt Afisare pagina din preview


        }

        show(){
            $(`#album-page-nr${this.counter}`).show();
        }

        hide(){
            $(`#album-page-nr${this.counter}`).hide();
        }

        delete(){
            $(`#album-page-nr${this.counter}`).remove();
            $(`#preview${this.counter}`).remove();
            $(`#preview-box${this.counter}`).remove();
        }

        empty(){
            let image = $$(`#album-page-nr${this.counter} .rotate`);
            for(i=0;i<image.length;i++){
                image[i].remove();
            }

            let image2 = $$(`#album-page-nr${this.counter} .resize-drag`);
            for(i=0;i<image2.length;i++){
                image2[i].remove();
            }
        }

        addText(){
            /*
            let textBox = `<div class="text-box resize-drag">
                                <div class="image-delete" onclick="deleteParent(this)"> </div>
                                <textarea class="page-text">Text</textarea>
                            </div>`;
            $(`#album-page-nr${this.counter}`).append(textBox);   
            */
           
            let box = document.createElement("DIV");
            box.classList.add("text-box");
            box.classList.add("resize-drag");
            let text = document.createElement("TEXTAREA");
            text.classList.add("page-text");
            text.innerHTML = "Text";
            let editorBox = document.createElement("DIV");
            editorBox.classList.add("text-editor"); 


            var fontList = ["Arial","Courier Prime","Dancing Script","Inconsolata","Lato","Lilita One","Lobster","Pacifico","Roboto","Ubuntu"];
            //Font
            let fontFamily = document.createElement("SELECT");

            for (let i = 0; i < fontList.length; i++) {
                let option = document.createElement("option");
                option.value = fontList[i];
                option.text = fontList[i];
                fontFamily.appendChild(option);
            }

            fontFamily.onchange = function font(){
                console.log(fontFamily.value);
                text.style.fontFamily = `${fontFamily.value}`;
            }
            editorBox.appendChild(fontFamily);


            //Dimensiune
            let fontSize = document.createElement("SELECT");
            for (var j = 9; j < 30; j++) {
                var option = document.createElement("option");
                option.setAttribute("value", j+1);
                option.innerHTML = j + 1;
                fontSize.appendChild(option);
            }
            fontSize.onchange = function changeColor(){
                text.style.fontSize = `${fontSize.value*1.6}px`;
            }
            editorBox.appendChild(fontSize);


            //Culoare
            let colorPicker = document.createElement("INPUT");
            colorPicker.classList.add("input-color");
            colorPicker.type = "color";
            colorPicker.onchange = function changeColor(){
                text.style.color = colorPicker.value;
            }
            editorBox.appendChild(colorPicker);


            //Bold
            let bold = document.createElement("div");
            bold.innerHTML = "B";
            bold.classList.add("edit-bold");
            bold.onclick = function bold(){
                text.classList.toggle("bold");
            }
            editorBox.appendChild(bold);


            //Incline
            let incline = document.createElement("div");
            incline.innerHTML = "I";
            incline.classList.add("edit-incline");
            incline.onclick = function incline(){
                text.classList.toggle("incline");
            }
            editorBox.appendChild(incline);

            //Sterge
            let del = document.createElement("IMG");
            del.classList.add("edit-delete");
            del.src = "assets/img/delete.png";
            del.onclick = function delText(){
                box.style.display = "none";
            }
            editorBox.appendChild(del);



            box.appendChild(editorBox); 
            box.appendChild(text);
            _(`#album-page-nr${this.counter}`).appendChild(box); 

        }

        standardImage(width = `75%`, height = `70%`, top = `15%`, left = `12.5%`, right = ` `, bottom = ` `){
            //class resize-drag
            const image = `<div class="image center resize-drag"
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
            const image = `<div class="image center resize-drag"
                            style=" 
                                    position:absolute;
                                    width:75%;
                                    left:12.5%;
                                    top:15%; 
                            ">	
                                <div class="image-delete" onclick="deleteParent(this)"> </div>
                                <div class="image-upload"> </div>	
                                <input type="file" onchange="changeImage(this)" accept="image/*">
                                <img src="${photo.src}" style="display:block;">
                            </div>`;
            $(`#album-page-nr${this.counter}`).append(image);
            _(".dark-layer").style.display = "none";
        }

        imageSrcFromGallery(photo){
            let images = $(`#album-page-nr${this.counter} .image img`);

            let i=0;
            let k=1;
            while (i < images.length && k==1){
                console.log(images.length);
                if(images.eq(i).attr("src").length < 5) {
                    images.eq(i).attr('src',`${photo.src}`); 
                    images.eq(i).show();
                    k=0;
                } 
                i++;
            }

            if(k==1) {
                images.eq(0).attr('src',`${photo.src}`); 
                images.eq(0).show();
            }


            if(images.length < 2) this.imageSrc(photo);

            _(".dark-layer").style.display = "none";
        }

        addElement(photo){
            const image = `<div class="image resize-drag center element" width="100px" height="100px">	
                                <div class="image-delete" onclick="deleteParent(this)"> </div>	
                                <img src="${photo.src}" style="display:block;">
                            </div>`;                
            $(`#album-page-nr${this.counter}`).append(image);
            _(".dark-layer").style.display = "none";
        }

        imagesLayout0(){
            let delPg =  document.querySelectorAll(`#album-page-nr${this.counter} .image`);
            for(i=0;i<delPg.length;i++)
                delPg[i].remove();

            this.standardImage();
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
            
            $(`#album-page-nr${this.counter}`).children('img').css({"width":"100%",
                                                                    "min-height":"100%",
                                                                    "min-width":"100%",
                                                                    "position":"absolute",
                                                                    "top":"0",
                                                                    "left":"0",
                                                                    "bottom":"0",
                                                                    "right":"0",
                                                                    "margin":"auto",
                                                                    })  
            _(".dark-layer").style.display = "none";
            this.previewRefresh();
        }


    }//Clasa Paginilor

    function hideAllPages(){
        for(i=0;i<pagesCounter;i++){
            albumPage[i].hide();
        }
    }

    function showPage(selectedPage){
        let page = document.querySelectorAll(".album-page");
        for(k=0;k<page.length;k++){
            albumPage[k].hide();
        }
       // page[selectedPage].style.display = 'block';
        albumPage[selectedPage].show();
    }//Show Album Pages

    function refreshAllPages(){
        for(i=0;i<pagesCounter;i++){
            albumPage[i].previewRefresh();
        }
    }

    function previewNr(){
        let pg = $$(".preview-pg");

        pg[0].innerHTML = `Coperta fata`;
        pg[1].innerHTML = `Coperta spate`;
        for(i=2;i<pagesCounter;i++){
            pg[i].innerHTML = `${i-1}`;
        }
    }


    /*******************************
        Functiile de la inceput
    *******************************/

    _(".bg-change-btn input").addEventListener("click", function clickAddBackground(){
        console.log("previewMerge");
        //albumPage[selectedPage].previewRefresh();
        setTimeout(function(){ albumPage[selectedPage].previewRefresh()}, 5000);
        previewNr();
    })

    let albumPage = new Array();
    function buildAlbum(){
        currentPage=0;
        for(i=0;i<12;i++){
            let side;
            if(i%2==0) side=`left`;
            else side=`right`; 

            albumPage[i]=new page(i,side);
            albumPage[i].build();

            pagesCounter++;
            _(".pagesCounter").innerHTML = pagesCounter-2;
        }
        themeAutumn2(); //Tema Default
    }//Construire Album ( cand porneste programul )
    buildAlbum();
    for(i=0;i<albumPage.length;i++){
        albumPage[i].hide();
    }
    albumPage[currentPage].show();
    albumPage[currentPage+1].show();
    _(".pg-nr-left").innerHTML = `${currentPage+1}`;
    _(".pg-nr-right").innerHTML = `${currentPage+2}`;

    document.querySelectorAll(".album-page")[0].classList.add("album-page-selected");
    //Functiile de inceput





    /*******************************
        Page Selection
    *******************************/

   function deSelectPage(){
        let pageTest = document.querySelectorAll(".album-page");
        for(i=0;i<pagesCounter;i++){
            pageTest[i].classList.remove("album-page-selected");
        }
    }//Deselect All Pages

    function selectPage(){
        deSelectPage();
        this.classList.add("album-page-selected");
        albumPage[selectedPage].previewRefresh();
        if($(this).parent().hasClass("page-left")) selectedPage = currentPage;
        if($(this).parent().hasClass("page-right")) selectedPage = currentPage + 1;
        console.log(selectedPage);
        albumPage[selectedPage].previewRefresh();
    }
    document.querySelectorAll(".album-page")[0].classList.add("album-page-selected");

    function selectPageNav(){
        deSelectPage();
        selectedPage = currentPage;
        albumPage[selectedPage].selectPage();
    }//Selecteaza pag stanga cand se navigheaza intre pagini





    /*******************************
        Navigare intre Pagini
    *******************************/

    function prevPage(){

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
        albumPage[currentPage].previewRefresh();
        albumPage[currentPage+2].previewRefresh();
        albumPage[currentPage+3].previewRefresh();
    }
    _(".prev").addEventListener("click", prevPage);//Pagina anterioara


    function nextPage(){
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
        albumPage[currentPage].previewRefresh();
        albumPage[currentPage-1].previewRefresh();
        albumPage[currentPage-2].previewRefresh();
    }
    _(".next").addEventListener("click", nextPage);//Urmatoarea Pagina

    function goToPage(pageCounter){
        for(i=0;i<pagesCounter;i++){
            albumPage[i].hide();
        }
        deSelectPage();
        let clickedPage = pageCounter;

        if(pageCounter%2 == 1) pageCounter--;
  

        currentPage = pageCounter;
        albumPage[currentPage].show();
        albumPage[currentPage+1].show();
        albumPage[clickedPage].selectPage();
        albumPage[clickedPage].previewRefresh();

        _(".pg-nr-left").innerHTML = `${currentPage+1}`;
        _(".pg-nr-right").innerHTML = `${currentPage+2}`;
    }

    /*******************************
        Adaugare/Stergere Pagini
    *******************************/

    function newPages(){
        albumPage.push(new page(pagesCounter,`left`));
        albumPage.push(new page(pagesCounter+1,`right`));
        albumPage[pagesCounter].build();
        albumPage[pagesCounter+1].build();
        albumPage[pagesCounter].preview();
        albumPage[pagesCounter+1].preview();

        currentPage = pagesCounter;
        pagesCounter = pagesCounter+2;
        _(".pagesCounter").innerHTML = pagesCounter;
        _(".pg-nr-left").innerHTML = `${currentPage+1}`;
        _(".pg-nr-right").innerHTML = `${currentPage+2}`;

        selectPageNav();
        previewNr();
    }//Functie adaugare 2 Pagini

    function delPages(){
        albumPage[currentPage].delete();
        albumPage[currentPage+1].delete();

        albumPage.splice(currentPage,2);

        if(currentPage == 0) currentPage = 0;
        else currentPage -= 2;

        pagesCounter = pagesCounter-2;
        albumPage[currentPage].show();
        albumPage[currentPage+1].show();
        //TO DO: if's pentru fiecare situatie

        _(".pagesCounter").innerHTML = pagesCounter;
        _(".pg-nr-left").innerHTML = `${currentPage+1}`;
        _(".pg-nr-right").innerHTML = `${currentPage+2}`;

        selectPageNav();
        previewNr();
    }//Functie stergere 2 Pagini

    _(".add-page-btn").addEventListener("click", newPages);//Btn Adaugare 2 Pagini
    _(".del-page-btn").addEventListener("click", delPages);//Btn Stergere 2 Pagini


    function emptyPage(){
        albumPage[selectedPage].empty();
        albumPage[selectedPage].previewRefresh();
    }
    _(".empty-page-btn").addEventListener("click", emptyPage);//Btn Stergere 2 Pagini


    /*******************************
        Layout Pagini
    *******************************/

    let layout = document.querySelectorAll("#layout-gallery-container img")

    layout[0].addEventListener("click", function(){ 
        albumPage[selectedPage].imagesLayout0(); 
        _(".layout-gallery").style.display = 'none';
        _(".dark-layer").style.display = "none";    
        albumPage[selectedPage].previewRefresh();       
    });

    layout[1].addEventListener("click", function(){ 
        albumPage[selectedPage].imagesLayout1(); 
        _(".layout-gallery").style.display = 'none';
        _(".dark-layer").style.display = "none";    
        albumPage[selectedPage].previewRefresh();           
    });

    layout[2].addEventListener("click", function(){ 
        albumPage[selectedPage].imagesLayout2(); 
        _(".layout-gallery").style.display = 'none';
        _(".dark-layer").style.display = "none";     
        albumPage[selectedPage].previewRefresh();       
    });

    layout[3].addEventListener("click", function(){ 
        albumPage[selectedPage].imagesLayout3(); 
        _(".layout-gallery").style.display = 'none';
        _(".dark-layer").style.display = "none";   
        albumPage[selectedPage].previewRefresh();            
    });

    layout[4].addEventListener("click", function(){ 
        albumPage[selectedPage].imagesLayout4(); 
        _(".layout-gallery").style.display = 'none';
        _(".dark-layer").style.display = "none";   
        albumPage[selectedPage].previewRefresh();          
    });

    layout[5].addEventListener("click", function(){ 
        albumPage[selectedPage].imagesLayout5(); 
        _(".layout-gallery").style.display = 'none';
        _(".dark-layer").style.display = "none";     
        albumPage[selectedPage].previewRefresh();          
    });

    layout[6].addEventListener("click", function(){ 
        albumPage[selectedPage].imagesLayout6(); 
        _(".layout-gallery").style.display = 'none';
        _(".dark-layer").style.display = "none";    
        albumPage[selectedPage].previewRefresh();       
    });
    layout[7].addEventListener("click", function(){ 
        albumPage[selectedPage].imagesLayout7(); 
        _(".layout-gallery").style.display = 'none';
        _(".dark-layer").style.display = "none";    
        albumPage[selectedPage].previewRefresh();       
    });
    //Galerie Imagini: adaugare imagine pe pagina




    /*******************************
        Teme
    *******************************/


    function themeBaby(){
        currentBg = "assets/img/teme/baby.jpg";
        document.documentElement.style.setProperty('--album-page-border-color', 'lightgreen');
        document.documentElement.style.setProperty('--image-border-color', 'lightgreen');
        _(".theme-gallery").style.display = "none";

        for(i=0;i<pagesCounter;i++){
            let k=i;
            setTimeout(function(){ 
                albumPage[k].changeBg("assets/img/teme/baby.jpg"); 
            }, 100);
        }
    }

    function themeNature(){
        currentBg = "assets/img/teme/nature.jpg";
        document.documentElement.style.setProperty('--album-page-border-color', 'green');
        document.documentElement.style.setProperty('--image-border-color', 'lightgreen');
        _(".theme-gallery").style.display = "none";

        for(i=0;i<pagesCounter;i++){
            let k=i;
            setTimeout(function(){ 
                albumPage[k].changeBg("assets/img/teme/nature.jpg"); 
            }, 100);
        }
    }

    function themeSky(){
        currentBg = "assets/img/teme/sky.jpg";
        document.documentElement.style.setProperty('--album-page-border-color', '#264b66');
        document.documentElement.style.setProperty('--image-border-color', '#ffffff');
        _(".theme-gallery").style.display = "none";

        for(i=0;i<pagesCounter;i++){
            let k=i;
            setTimeout(function(){ 
                albumPage[k].changeBg("assets/img/teme/sky.jpg"); 
            }, 100);
        }
    }

    function themeOcean(){
        currentBg = "assets/img/teme/ocean.jpg";
        document.documentElement.style.setProperty('--album-page-border-color', '#007995');
        document.documentElement.style.setProperty('--image-border-color', '#007995');
        _(".theme-gallery").style.display = "none";

        for(i=0;i<pagesCounter;i++){
            let k=i;
            setTimeout(function(){ 
                albumPage[k].changeBg("assets/img/teme/ocean.jpg"); 
            }, 100);
        }
    }

    _(".theme-baby").addEventListener("click", themeBaby);
    _(".theme-nature").addEventListener("click", themeNature);
    _(".theme-sky").addEventListener("click", themeSky);
    _(".theme-ocean").addEventListener("click", themeOcean);



    function themeAutumn1(){
        currentBg = "assets/img/teme/autumn1.jpg";
        document.documentElement.style.setProperty('--album-page-border-color', '#8f5f17');
        document.documentElement.style.setProperty('--image-border-color', '#e48f3f');
        _(".theme-gallery").style.display = "none";

        for(i=0;i<pagesCounter;i++){
            let k=i;
            setTimeout(function(){ 
                albumPage[k].changeBg("assets/img/teme/autumn1.jpg"); 
            }, 100);
        }
    }
    _(".theme-autumn1").addEventListener("click", themeAutumn1);


    function themeAutumn2(){
        currentBg = "assets/img/teme/autumn2.jpg";
        document.documentElement.style.setProperty('--album-page-border-color', '#8f5f17');
        document.documentElement.style.setProperty('--image-border-color', '#e48f3f');
        _(".theme-gallery").style.display = "none";

        for(i=0;i<pagesCounter;i++){
            let k=i;
            setTimeout(function(){ 
                albumPage[k].changeBg("assets/img/teme/autumn2.jpg"); 
            }, 100);
        }
    }
    _(".theme-autumn2").addEventListener("click", themeAutumn2);

    function themeChristmas1(){
        currentBg = "assets/img/teme/christmas1.jpg";
        document.documentElement.style.setProperty('--album-page-border-color', '#444152');
        document.documentElement.style.setProperty('--image-border-color', '#546e51');
        _(".theme-gallery").style.display = "none";

        for(i=0;i<pagesCounter;i++){
            let k=i;
            setTimeout(function(){ 
                albumPage[k].changeBg("assets/img/teme/christmas1.jpg"); 
            }, 100);
        }
    }
    _(".theme-christmas1").addEventListener("click", themeChristmas1);

    function themeChristmas2(){
        currentBg = "assets/img/teme/christmas2.jpg";
        document.documentElement.style.setProperty('--album-page-border-color', '#350b00');
        document.documentElement.style.setProperty('--image-border-color', '#e72d3b');
        _(".theme-gallery").style.display = "none";

        for(i=0;i<pagesCounter;i++){
            let k=i;
            setTimeout(function(){ 
                albumPage[k].changeBg("assets/img/teme/christmas2.jpg"); 
            }, 100);
        }
    }
    _(".theme-christmas2").addEventListener("click", themeChristmas2);

    function themeChristmas3(){
        currentBg = "assets/img/teme/christmas3.jpg";
        document.documentElement.style.setProperty('--album-page-border-color', '#f5ece3');
        document.documentElement.style.setProperty('--image-border-color', '#fc0112');
        _(".theme-gallery").style.display = "none";

        for(i=0;i<pagesCounter;i++){
            let k=i;
            setTimeout(function(){ 
                albumPage[k].changeBg("assets/img/teme/christmas3.jpg"); 
            }, 100);
        }
    }
    _(".theme-christmas3").addEventListener("click", themeChristmas3);

    function themeChristmas4(){
        currentBg = "assets/img/teme/christmas4.jpg";
        document.documentElement.style.setProperty('--album-page-border-color', '#0072bb');
        document.documentElement.style.setProperty('--image-border-color', '#ff4153');
        _(".theme-gallery").style.display = "none";

        for(i=0;i<pagesCounter;i++){
            let k=i;
            setTimeout(function(){ 
                albumPage[k].changeBg("assets/img/teme/christmas4.jpg"); 
            }, 100);
        }
    }
    _(".theme-christmas4").addEventListener("click", themeChristmas4);

    function themePhoto(){
        currentBg = "assets/img/teme/photo.jpg";
        document.documentElement.style.setProperty('--album-page-border-color', '#232426');
        document.documentElement.style.setProperty('--image-border-color', '#87ae43');
        _(".theme-gallery").style.display = "none";

        for(i=0;i<pagesCounter;i++){
            let k=i;
            setTimeout(function(){ 
                albumPage[k].changeBg("assets/img/teme/photo.jpg"); 
            }, 100);
        }
    }
    _(".theme-photo").addEventListener("click", themePhoto);

    function themeLemon(){
        currentBg = "assets/img/teme/lemon.jpg";
        document.documentElement.style.setProperty('--album-page-border-color', '#fec91b');
        document.documentElement.style.setProperty('--image-border-color', '#f89b00');
        _(".theme-gallery").style.display = "none";

        for(i=0;i<pagesCounter;i++){
            let k=i;
            setTimeout(function(){ 
                albumPage[k].changeBg("assets/img/teme/lemon.jpg"); 
            }, 100);
        }
    }
    _(".theme-lemon").addEventListener("click", themeLemon);

    function themeCyan(){
        currentBg = "assets/img/teme/cyan.jpg";
        document.documentElement.style.setProperty('--album-page-border-color', '#3d8baf');
        document.documentElement.style.setProperty('--image-border-color', '#3886ad');
        _(".theme-gallery").style.display = "none";

        for(i=0;i<pagesCounter;i++){
            let k=i;
            setTimeout(function(){ 
                albumPage[k].changeBg("assets/img/teme/cyan.jpg"); 
            }, 100);
        }
    }
    _(".theme-cyan").addEventListener("click", themeCyan);
    
    function themeViola(){
        currentBg = "assets/img/teme/viola.jpg";
        document.documentElement.style.setProperty('--album-page-border-color', '#5379c4');
        document.documentElement.style.setProperty('--image-border-color', '#87afd2');
        _(".theme-gallery").style.display = "none";

        for(i=0;i<pagesCounter;i++){
            let k=i;
            setTimeout(function(){ 
                albumPage[k].changeBg("assets/img/teme/viola.jpg"); 
            }, 100);
        }
    }
    _(".theme-viola").addEventListener("click", themeViola);







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
                    albumPage[selectedPage].changeBg(this.result);

                    /*
                    var image = document.createElement("IMG");
                    image.setAttribute("src",`${this.result}`);
                    _('#bg-gallery-container').appendChild(image);
                    //Adauga pozele si in galerie
                    */
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

    _(".add-photo-btn").addEventListener("click", function addImage(){
        albumPage[selectedPage].standardImage();
        albumPage[selectedPage].previewRefresh();
    });//Btn Adaugare Imagine

    function addPhotoToPage(){
        _(".photo-gallery").style.display = "none";
            albumPage[selectedPage].imageSrcFromGallery(this);
            albumPage[selectedPage].previewRefresh();
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
                image.setAttribute("onclick", "addPhotoToPage()");
                _('.photo-gallery .gallery-container').appendChild(image);
            }
        }
    });//Btn: adaugare img in Galerie





    /*******************************
        Elemente Grafice
    *******************************/

    function addElementToPage(){
        _(".elements-gallery").style.display = "none";
            albumPage[selectedPage].addElement(this);
            albumPage[selectedPage].previewRefresh();
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
        Text Pagini
    *******************************/

    _(".add-text-btn").addEventListener("click", function addText(){
        albumPage[selectedPage].addText();
        albumPage[selectedPage].previewRefresh();
    })


















    /*******************************
        Lista pagini stanga
    *******************************/



    function showPreview(){
        for(i=0;i<pagesCounter;i++){
            albumPage[i].preview();
        }
        prevPage();
        previewNr();
    }//Functie Afisare lista de pagini stanga


    let resBoxBtn = $$(".res-box-btn");
    for(i=0;i<resBoxBtn.length;i++){
        $$(".res-box-btn")[i].addEventListener("click", showPreview);
    }//Afisare lista stanga



















/*
            let div = document.createElement("div");
            let img = document.createElement("img");
            img.src = imgData;
            img.style.width = '350px';
            img.style.height = '300px';

            div.append(img);
            _(".flipbook").appendChild(div);
*/



    function testFlip(){
        deSelectPage();

        let pageLeft = document.querySelectorAll(".page-left .album-page");
        let pageRight = document.querySelectorAll(".page-right .album-page");
        //let flipbookPage = document.querySelectorAll(".album-page");
        let flipbookPage =[];
        flipbookPage.push(pageLeft[0]);
        for(i=1;i<=(pagesCounter-2)/2;i++)
        {
            flipbookPage.push(pageLeft[i]);
            flipbookPage.push(pageRight[i]);
        }
        flipbookPage.push(pageRight[0]);

        for(i=0;i<pagesCounter;i++){
            flipbookPage[i].style.display ="block";
            let k=i;//Bug Fix
            html2canvas(flipbookPage[i],{scale: 1.5}).then(canvas => {
                imgData = canvas.toDataURL('image/png');
                page = $("<div />", {"class": `p${k+1}`}).html(`<img src="${imgData}">`);
                $(".flipbook").turn("addPage", page);
            });
        }

        //albumPage[0].show();
        //albumPage[1].show();
        prevPage();
    }
    _(".vizualizare").addEventListener("click", testFlip);





    /*******************************
        FlipBook Library
    *******************************/

    function loadApp() {

		$('.flipbook').turn({
				//width:flipWidth,
				//height:flipHeight/2,
				gradients: true,
		});
    }
    
	yepnope({
		test : Modernizr.csstransforms,
		yep: ['assets/js/turn.js'],
		nope: ['assets/js/turn.html4.min.js'],
	//	both: ['assets/css/basic.css'],
		complete: loadApp
	});

    
});








