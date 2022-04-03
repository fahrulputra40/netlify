window.addEventListener("DOMContentLoaded", function(){
    let collabse = document.getElementById("collabse").parentElement;
    setTimeout(() => {
        let el = document.getElementsByClassName("scroll");
        for (let index = 0; index < el.length; index++) {
           let h = el[index].getBoundingClientRect().height;
           h-= el[index].parentElement.getBoundingClientRect().height;
           el[index].addEventListener('mouseover', function(){
                el[index].style.top = `${-h}px`;
           });   
           el[index].addEventListener('mouseleave', function(){
            el[index].style.top = '0px';
       });        
        }
    }, 3000);

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
