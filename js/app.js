var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn){
    btn.addEventListener('click',function(e){
        const li = e.target.parentElement;

        li.parentNode.removeChild(li);
    });
});  