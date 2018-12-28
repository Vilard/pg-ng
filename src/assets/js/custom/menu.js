(function (){
window.onload= function() {
  document.getElementById('toggler').onclick = function() {
    openbox('box', this);
    return false;
  };
};
function openbox(id, toggler) {
	var div = document.getElementById(id);
  if(div.style.display == 'flex') {
    div.style.display = 'none';
  }
  else {
    div.style.display = 'flex';
  }
}
	
}())


