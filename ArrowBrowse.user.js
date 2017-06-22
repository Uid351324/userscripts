// ==UserScript==
// @name        ArrowBrowse
// @namespace   uid35
// @include     http://gelbooru.com/index.php?page=post&s=list&tags=*
// @version     1.01
// @grant       none
// ==/UserScript==
var next = null;
var prev = null;
document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  if(document.querySelector("input.stdinput" ) === document.activeElement)
  {
  	console.log("document.activeElement");
  	return;
  }

  if (keyName === 'ArrowLeft' && prev) {
    window.location.assign(prev);
    return;
  }
	if (keyName === 'ArrowRight' && next) {
    window.location.assign(next);
    return;
  }
  
}, false);
var node = document.querySelector(".pagination > b");
if(node === null)
{
	console.log("null");
}
else
{
	if( node.nextElementSibling)
		next = node.nextElementSibling.href;
	console.log(node.nextElementSibling);
	if( node.previousElementSibling)
		prev = node.previousElementSibling.href;
	console.log(node.previousElementSibling);
	console.log(next);
	console.log(prev);
}
