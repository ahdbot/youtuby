$(document).ready(function () {


       
    $('.reply').click(function() {
    
        $(this).parents("div.row").next("div.card").toggle();
     });


    $("#mybtn").on("click",function(){
    
    
        read();
    });


 
     
 
    
   
    
    });


function read()
{

    var dots = document.getElementById("dots");

    var moretext = document.getElementById("more");


    var btnText = document.getElementById("mybtn");

    if (dots.style.display === "none") {
        

        dots.style.display = "inline";
        btnText.innerHTML = "عرض المزيد"

        moretext.style.display = "none";
    } else {

        dots.style.display = "none";
        btnText.innerHTML = "عرض عناصر أقل";
        moretext.style.display = "inline";
    }
}

