window.onload=function(){

const title = document.getElementById("title");
const box = document.getElementById("box");
const submit = document.getElementById("sub");
const clearB = document.getElementById("clear");
const output = document.getElementById("output");
clearB.addEventListener('click', clear);
title.value = get("title");
box.value = get("box");

submit.onclick = function() {
	console.log(title.value);
	console.log(box.value);

		if(title.value && box.value !=null){
			localStorage.setItem("title",title.value);
			localStorage.setItem("box",box.value);
			location.reload();
		}

}

title.oninput = function() {
	localStorage.setItem("title", title.value);
}
box.oninput = function() {
  localStorage.setItem("box", box.value);
}


function clear()
{
    title.value = '';
    box.value = '';

    localStorage.removeItem('title');
    localStorage.removeItem('box');
    //localStorage.clear(); 
}

function get(key)
{
    let local;
    if(localStorage)
    {
        try { local = localStorage.getItem(key) || ''; 
	    }catch(e){
	 console.error(e); }
    }
    return local;
}


}//end of file