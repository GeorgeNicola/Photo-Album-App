    let albumPage = document.querySelectorAll(".album-page");
    let albumPageWidth = 211;
    let albumPageHeight = 298;
    let orientation = 'p';
    //Dimensions


    function changePagesResolution(width, height) {
        albumPageWidth = width;
        albumPageHeight = height;
        for(i=0;i<albumPage.length;i++){
            albumPage[i].style.width = `${2*width}px`;
            albumPage[i].style.height = `${2*height}px`;
        }
    }

    let resolutions = [
        {
          width:'210',
          height:'297'
        },
        {
          width:'297',
          height:'210'
        },
    ];

    let resBtn = document.querySelectorAll(".resolution-button");
    console.log(resBtn.length);
    for(i=0;i<resBtn.length;i++){
        let k = i;
        resBtn[i].addEventListener("click", function chooseRes(){
            changePagesResolution(resolutions[k].width, resolutions[k].height);
            if(k==1) orientation = 'l';
            else orientation = 'p';
            $(".resolution-container").hide();
            $(".dark-layer").hide();
        });
    }//Choose the resolution






/*
function DivToPdf(quality = 4) {
    const filename  = 'Album.pdf';

    html2canvas(document.querySelector('#album-page-wrap1'), 
                            {scale: quality}
                     ).then(canvas => {
        let pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
        pdf.save(filename);
    });
}
*/ 
//Merge


/*
function DivToPdf(quality = 4){      
    html2canvas(document.querySelector("#album-page-wrap1"), 
                {scale: quality}
    ).then(canvas1 => {
        let imgData1 = canvas1.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4'
        });
        pdf.addImage(imgData1,'PNG', 0, 0, 211, 298) ;
        pdf.save("download.pdf");     
}); 
} 
*/
//Merge









function showPage(selectedPage){
    let page = document.querySelectorAll(".album-page");
    for(k=0;k<page.length;k++){
        page[k].style.display = 'none';
    }
    page[selectedPage].style.display = 'block';
}//Show Album Pages



function DivToPdf(quality = 4){   
    let page = document.querySelectorAll(".album-page");
    
    const pdf = new jsPDF({
        orientation: `${orientation}`,
        unit: 'mm',
      //  format: [albumPageWidth, albumPageHeight]
      // 595 x 846 pt A4
        format: 'a4'
    });
    console.log(albumPageWidth);
    function savePdf(input){
        const saved = pdf.save("download.pdf");
        const newPg = pdf.addPage();
        if(input < page.length){
            return newPg;
        }
        else 
            return saved;
    }

    for(let i=0;i<page.length;i++){
        setTimeout(showPage(i), 500);
        html2canvas(page[i], {scale: quality})
            .then(canvas => {  
            imgData = canvas.toDataURL('image/png');
         //   211 298 
         //   pdf.addImage(imgData,'PNG', 0, 0, albumPageWidth, albumPageHeight) ;
            if({orientation} === 'l') pdf.addImage(imgData,'PNG', 0, 0, 298, 210);
            else pdf.addImage(imgData,'PNG', 0, 0, albumPageWidth, albumPageHeight);
            if(i===2) savePdf();
        });
    }
} 