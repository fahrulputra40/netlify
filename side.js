window.addEventListener("DOMContentLoaded", function(){
    let collabse = document.getElementById("collabse").parentElement;
   
    collabse.addEventListener('click', function(e){
        if(collabse.getElementsByTagName('span')[0].style.display === 'none' || collabse.getElementsByTagName('span')[0].style.display === ''){
            collabse.getElementsByTagName('span')[0].style.display = 'block';
            collabse.getElementsByTagName('i')[0].style.display = 'none';
            document.getElementById("side").style.display = "block"
        }else{
            collabse.getElementsByTagName('i')[0].style.display = 'block';
            collabse.getElementsByTagName('span')[0].style.display = 'none';
            document.getElementById("side").style.display = "none"
        }
    });
});