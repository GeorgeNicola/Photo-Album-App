
let albumPageWidth = 297;
let albumPageHeight = 210;
let orientation = 'l';
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











function showPage(selectedPage){
    let page = document.querySelectorAll(".album-page");
    for(k=0;k<page.length;k++){
        page[k].style.display = 'none';
    }
    page[selectedPage].style.display = 'block';
}//Show Album Pages



function generatePdf(quality = 4){   
    let page = document.querySelectorAll(".album-page");
    
    const pdf = new jsPDF({
        orientation: `${orientation}`,
        unit: 'mm',
      //  format: [albumPageWidth, albumPageHeight]
      // 595 x 846 pt A4
        format: 'a4'
    });

    let albumPage = document.querySelectorAll(".album-page");
    for(let i=0;i<albumPage.length;i++){
        setTimeout(showPage(i), 500);
        html2canvas(page[i], {scale: quality})
            .then(canvas => {  
            imgData = canvas.toDataURL('image/png');
         //   211 298 
         //   pdf.addImage(imgData,'PNG', 0, 0, albumPageWidth, albumPageHeight) ;
            pdf.addImage(imgData,'PNG', 0, 0, 297, 210);

            if(i == albumPage.length-1){
                pdf.save("Album Foto.pdf");
            }
            else{
                pdf.addPage();   
            }
        });
    }
    
} 
