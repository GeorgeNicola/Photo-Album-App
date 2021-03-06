/*******************************
    Page Format
*******************************/


let format = {
    orientation: `l`,
    pdfWidth: 595,
    pdfHeight: 842,
    pageWidth: 297,
    pageHeight: 210
}

function changeResolution(dimension){

    if(dimension == `a4portret`){
        format.orientation = `p`;
    //    format.pdfWidth = 210*4.01;
    //    format.pdfHeight = 297*2.0034;
        format.pdfWidth = 842;
        format.pdfHeight = 595;

        format.pageWidth = 210;
        format.pageHeight = 297;

        document.querySelector(".pageDimensions").innerHTML = `${format.pageWidth/10} x ${format.pageHeight/10} cm`;
        document.querySelectorAll(".landscape div")[0].style.width = "0.8em";
        document.querySelectorAll(".landscape div")[1].style.width = "0.8em";


        //CSS width: 355px;
        //CSS height: 500px;

        let windowWidth = document.documentElement.clientWidth;
        if(windowWidth < 1800 ){
            document.documentElement.style.setProperty('--album-page-width', `355px`);
            document.documentElement.style.setProperty('--album-page-height', `500px`);
            document.documentElement.style.setProperty('--preview-height', `120px`);
        }
        if(windowWidth > 1800 ){
            document.documentElement.style.setProperty('--album-page-width', `532.5px`);
            document.documentElement.style.setProperty('--album-page-height', `750px`);
            document.documentElement.style.setProperty('--preview-height', `150px`);
            document.documentElement.style.setProperty('--preview-width', `112px`);
        }

        $(".flipbook").turn("size", 710, `${1000/2}`);

        _(".resolutions-container").style.display = `none`;
        _(".dark-layer").style.display = `none`;


        //Eliminare Teme
        _(".theme-christmas1").parentNode.style.display = "none";
        _(".theme-autumn1").parentNode.style.display = "none";
        _(".theme-photo").parentNode.style.display = "none";
        _(".theme-lemon").parentNode.style.display = "none";
    }

    if(dimension == `a4panoramic`){
        format.orientation = `l`;
        format.pdfWidth = 842;
        format.pdfHeight = 595;

        format.pageWidth = 297;
        format.pageHeight = 210;

        document.querySelector(".pageDimensions").innerHTML = `${format.pageWidth/10} x ${format.pageHeight/10} cm`;

        document.querySelectorAll(".landscape div")[0].style.width = "2em";
        document.querySelectorAll(".landscape div")[1].style.width = "2em";

        let windowWidth = document.documentElement.clientWidth;
        if(windowWidth < 1800 ){
            document.documentElement.style.setProperty('--album-page-width', `500px`);
            document.documentElement.style.setProperty('--album-page-height', `355px`);
            document.documentElement.style.setProperty('--preview-height', `53.3px`);
        }
        if(windowWidth > 1800 ){
            document.documentElement.style.setProperty('--album-page-width', `750px`);
            document.documentElement.style.setProperty('--album-page-height', `532.5px`);
            document.documentElement.style.setProperty('--preview-height', `85px`);
            document.documentElement.style.setProperty('--preview-width', `120px`);
        }


        $(".flipbook").turn("size", 1000, `${710/2}`);

        _(".resolutions-container").style.display = `none`;
        _(".dark-layer").style.display = `none`;
    }

    if(dimension == `20patrat`){
        format.orientation = `p`;
        format.pdfWidth = 567;
        format.pdfHeight = 567;

        format.pageWidth = 200;
        format.pageHeight = 200;

        document.querySelector(".pageDimensions").innerHTML = `${format.pageWidth/10} x ${format.pageHeight/10} cm`;

        document.querySelectorAll(".landscape div")[0].style.width = "1.25em";
        document.querySelectorAll(".landscape div")[1].style.width = "1.25em";


        let windowWidth = document.documentElement.clientWidth;
        if(windowWidth < 1800 ){
            document.documentElement.style.setProperty('--album-page-width', `450px`);
            document.documentElement.style.setProperty('--album-page-height', `450px`);
            document.documentElement.style.setProperty('--preview-height', `80px`);
        }
        if(windowWidth > 1800 ){
            document.documentElement.style.setProperty('--album-page-width', `675px`);
            document.documentElement.style.setProperty('--album-page-height', `675px`);
            document.documentElement.style.setProperty('--preview-height', `120px`);
            document.documentElement.style.setProperty('--preview-width', `120px`);
        }

        $(".flipbook").turn("size", 800, `${800/2}`);

        _(".resolutions-container").style.display = `none`;
        _(".dark-layer").style.display = `none`;



        _(".theme-lemon").parentNode.style.display = "none";
    }

    if(dimension == `a5panoramic`){
        format.orientation = `l`;
        format.pdfWidth = 595;
        format.pdfHeight = 397;

        format.pageWidth = 210;
        format.pageHeight = 140;

        document.querySelector(".pageDimensions").innerHTML = `${format.pageWidth/10} x ${format.pageHeight/10} cm`;

        document.querySelectorAll(".landscape div")[0].style.width = "2em";
        document.querySelectorAll(".landscape div")[1].style.width = "2em";


        let windowWidth = document.documentElement.clientWidth;
        if(windowWidth < 1800 ){
            document.documentElement.style.setProperty('--album-page-width', `500px`);
        document.documentElement.style.setProperty('--album-page-height', `355px`);
        document.documentElement.style.setProperty('--preview-height', `53.3px`);
        }
        if(windowWidth > 1800 ){
            document.documentElement.style.setProperty('--album-page-width', `750px`);
            document.documentElement.style.setProperty('--album-page-height', `532.5px`);
            document.documentElement.style.setProperty('--preview-height', `85px`);
            document.documentElement.style.setProperty('--preview-width', `120px`);
        }

        $(".flipbook").turn("size", 1000, `${710/2}`);

        _(".resolutions-container").style.display = `none`;
        _(".dark-layer").style.display = `none`;
    }

    if(dimension == `14patrat`){
        format.orientation = `p`;
        format.pdfWidth = 397;
        format.pdfHeight = 397;

        format.pageWidth = 140;
        format.pageHeight = 140;

        document.querySelector(".pageDimensions").innerHTML = `${format.pageWidth/10} x ${format.pageHeight/10} cm`;

        document.querySelectorAll(".landscape div")[0].style.width = "1.25em";
        document.querySelectorAll(".landscape div")[1].style.width = "1.25em";


        let windowWidth = document.documentElement.clientWidth;
        if(windowWidth < 1800 ){
             document.documentElement.style.setProperty('--album-page-width', `450px`);
            document.documentElement.style.setProperty('--album-page-height', `450px`);
            document.documentElement.style.setProperty('--preview-height', `80px`);
        }
        if(windowWidth > 1800 ){
            document.documentElement.style.setProperty('--album-page-width', `675px`);
            document.documentElement.style.setProperty('--album-page-height', `675px`);
            document.documentElement.style.setProperty('--preview-height', `120px`);
            document.documentElement.style.setProperty('--preview-width', `120px`);
        }

        $(".flipbook").turn("size", 800, `${800/2}`);

        _(".resolutions-container").style.display = `none`;
        _(".dark-layer").style.display = `none`;


        _(".theme-lemon").parentNode.style.display = "none";
    }
}//Alegerea formatului paginilor









/*******************************
    Algorithm: GENERATE PDF
*******************************/

function showPage(selectedPage){
    let page = document.querySelectorAll(".album-page");
    for(k=0;k<page.length;k++){
        page[k].style.display = "none";
    }
    page[selectedPage].style.display = 'block';
}//Show Album Pages



function generatePdf(quality = 3){   
    const totalPages = document.querySelectorAll(".album-page").length;
    
    const pdf = new jsPDF({
        orientation: format.orientation,
        unit: 'mm',
        format: [`${format.pdfWidth}`, `${format.pdfHeight}`]
    });
    //let albumPage = document.querySelectorAll(".album-page");


        let pageLeft = document.querySelectorAll(".page-left .album-page");
        let pageRight = document.querySelectorAll(".page-right .album-page");
        let albumPage = [];

        albumPage.push(pageLeft[0]);

        for(i=1;i<=(totalPages-2)/2;i++)
        {
            albumPage.push(pageLeft[i]);
            albumPage.push(pageRight[i]);
        }

        albumPage.push(pageRight[0]);




    for(let i=0;i<totalPages;i++){
        //setTimeout(showPage(i), 250);
        albumPage[i].style.display = "block";
        html2canvas(albumPage[i], {scale: quality}).then(canvas => {  
            imgData = canvas.toDataURL('image/png');
            pdf.addImage(imgData,'PNG', 0, 0, `${format.pageWidth}`, `${format.pageHeight}`);
            console.log(i);
            if(i == totalPages-1){
                pdf.save("Album Foto.pdf");
            }
            else{
                pdf.addPage();
            }
        });
    }

    for(i=0;i<totalPages;i++){
        albumPage[i].style.display = "none";
    }
    //albumPage[0].style.display = "block";
    //albumPage[1].style.display = "block";
    pageLeft[0].style.display = "block";
    pageRight[0].style.display = "block";
} 
