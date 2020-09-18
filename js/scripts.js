$(function () {
    $(document).scroll(function () {
      let $nav = $("#mainNav");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

document.getElementById("emailCopy").onclick = function(e){
    let email = "sean.chen0818@gmail.com";
    copyStringToClipboard(email);
}

function copyStringToClipboard (str) {
    
    var el = document.createElement('textarea');
    
    el.value = str;
    
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    
    el.select();
    
    document.execCommand('copy');
    
    document.body.removeChild(el);
 }
 