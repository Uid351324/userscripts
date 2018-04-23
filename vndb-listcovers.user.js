// ==UserScript==
// @name        vndb-listcovers
// @description	Replace text lists and search results as covers
// @namespace   uid35
// @include     *://vndb.org/*
// @version     1.15.1
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_listValues
// @grant       GM_deleteValue
// @grant       GM_log
// @grant       GM_addStyle
// @grant       GM_getResourceURL 
// @grant       GM_xmlhttpRequest 
// ==/UserScript==
var button = document.createElement("a");
var show = false;
var first = true;
var protocl = (("https:" == document.location.protocol) ?
    "https://" : "http://");
button.innerHTML = "switch view";
button.id = "coverButtonPeri";
button.className = "button";
document.body.appendChild(button);
button.addEventListener("click", replaceWithCovers);
GM_addStyle("	.coverTopPeri{\
			position: 	relative;\
			float: 		left;\
		}\
		.coverListTopPeri{\
	position: absolute;\
			width: 		100%;\
	top: 50px;\
			padding: 	1em;\
			box-sizing: border-box;\
			z-index:110;\
		}\
		.coverListPerii{\
	background-color: lightgray;\
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\
	overflow: 	hidden;\
		}\
		.coverPeri{\
			border-radius: 	5px;\
			border: 	2px outset;\
			position: 	relative;\
			height:		402px;\
			min-width:	200px;\
			text-align: 	center;\
			line-height: 	400px;\
			background: 	#52667C;\
			\
			display:	table-cell;\
			vertical-align:	middle;\
		}\
		.hideThisPeri{\
			display:	none;\
			}\
		.hideRowPeri{\
			display:	none;\
			}\
		.infoPeri{\
			width: 		100%;\
			text-align: 	center;\
			background: 	rgba(240, 243, 247);\
			background: 	rgba(240, 243, 247, 0.8);\
			position: 	absolute;\
			bottom: 	25px;\
			z-index: 	1;\
			padding: 	0.5em 0;\
			text-shadow: 	2px 2px 5px #F0F3F7;\
			display:	none;\
			color:		#52667C;\
			font-weight:	bold;\
			line-height: 	1em;\
		}\
		.coverPeri:hover .infoPeri{\
			display:	block;\
		}\
		#coverButtonPeri{\
			position: 	fixed;\
			top: 		0px;\
			right: 		0px;\
			z-index: 	115;\
		}\
		.series_rows_tablePeri{\
			float: 		left;\
			}\
		.lazyPeri{\
			max-height: 400px;\
			vertical-align: middle;\
		}\
		.lazyPostPeri{\
			max-height: 400px;\
			vertical-align: middle;\
		}\
		.testPeri{\
			float: left;\
		}\
		");

///////////////////////////////////////////////////////////
function replaceWithCovers()
{
	console.log("first" + first);
// 	var keys = GM_listValues();
// for (var i=0, key=null; key=keys[i]; i++) {
//   GM_deleteValue(key);
// }
if(first){
	first = false;
	var isSeries =  document.URL.indexOf('series.html') != -1 ;
	var isAuthor =  document.URL.indexOf('authors.html') != -1 ;
	var isGroup =  document.URL.indexOf('groups.html') != -1 ;
	
  	console.log("start isSeries "  + isSeries);
	var coverListPeri = document.createElement("div");
	coverListPeri.className = "coverListPeri";
	var coverListTopPeri = document.createElement("div");
	coverListTopPeri.className = "coverListTopPeri";
	coverListTopPeri.appendChild(coverListPeri);
    document.body.appendChild(coverListTopPeri);
    console.log("start isSeries2 "  + isSeries);
	if(isSeries)
	{
		// rows = document.getElementsByClassName('col1');
		// for (i = 0; i < rows.length; i++) 
		// {
		// 	populateCovers(rows[i], coverListPerii, isSeries, isAuthor);
		// 	// rows[i].parentNode.className = "hideRowPeri";
		// }
		// var list_table = document.getElementsByClassName("series_rows_tablePeri")[0];
		// list_table.parentNode.insertBefore(coverListPerii, list_table);
		// GM_addStyle(".coverTopPeri{margin: 5px;}");
			
	}
	else if(isAuthor)
	{
		// var list_table = document.querySelectorAll('#main_content > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1)')[0];
		
		// rows = list_table.getElementsByTagName('a');
		// for (i = 2; i < rows.length; i++) 
		// {
		// 	populateCovers(rows[i], coverListPerii, isSeries, isAuthor);
		// }
		
		// list_table.className = "hideThis";
		// list_table.parentNode.insertBefore(coverListPerii, list_table);
		// GM_addStyle(".coverTopPeri{margin: 5px;}");
	}
	else if(isGroup)
	{
		// var list_table = document.querySelectorAll('#main_content > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1)')[0];
		
		// rows = list_table.getElementsByTagName('a');
		// for (i = 0; i < rows.length; i++) 
		// {
		// 	populateCovers(rows[i], coverListPerii, isSeries, true);
		// }
		
		// list_table.className = "hideThis";
		// list_table.parentNode.insertBefore(coverListPerii, list_table);
		// GM_addStyle(".coverTopPeri{margin: 5px;}");
	}
	else
	{
		// var list_table = document.querySelectorAll('#animelist > tbody')[0];
		// rows = list_table.getElementsByTagName('tr');
		console.log("start");
		var findx = function(query){
			rows = document.querySelectorAll(query);
				var coverListPeriTest = document.createElement("div");
					coverListPeri.appendChild(coverListPeriTest);
					coverListPeriTest.className = "testPeri";
			for (i = 0; i < rows.length; i++) 
			{
				console.log("populateCovers");
				// console.log(rows[i]);
				populateCovers(rows[i], coverListPeriTest, isSeries, isAuthor);
			}
		}
		findx('tbody .tc_t a');
		findx('tbody .tc2 > a');
		findx('tbody .tc1 > a');
		findx('tbody .tc2 .grayedout a');
		findx('tbody .vn  a');
		// var list_table = document.getElementById("list_table");
		// var paginator = list_table.nextSibling.nextSibling;
		// list_table.parentNode.insertBefore(coverListPerii, list_table);
		// console.log(paginator);
		// paginator.className = "paginator";
	}

// 	document.body.removeChild(this);
// 	this.className = "hideThis";
console.log("ll");
	ll();
console.log("ll-");
	// GM_addStyle("\
	// 	#login {\
	// 		width: 919px;\
	// 		text-align: center;\
	// 		vertical-align: middle;\
	// 		margin-left: auto;\
	// 		margin-right: auto;\
	// 	}\
	// 	#centered {\
	// 		width: 100%;\
	// 	}\
	// 	.center_content {\
	// 		width: 100%;\
	// 	}\
	// 	");
// 	window.trigger( "scroll" );
	first = false;
}
	if(show){
		// setClassdisplay("hideThis", 'block');
		// setClassdisplay("hideRowPeri", 'table-row');
		setClassdisplay("coverListTopPeri", 'none');
	}else{
		// setClassdisplay("hideThis", 'none');
		// setClassdisplay("hideRowPeri", 'none');
		setClassdisplay("coverListTopPeri", 'block');
		
		
	}
	show = !show;
	
}
function setClassdisplay(klass, display)
{
	rows = document.getElementsByClassName(klass);
		for (i = 0; i < rows.length; i++) 
		{
			rows[i].style.display = display;
		}
}
function populateCovers(element, coverListPeri, isSeries, isAuthor)
{
	var id;
	// console.log(element);
	if(isSeries)
	{
		// id = element.lastChild.href.split("=")[1];
	}
	else if(isAuthor)
	{
// 		id = element.href.split("=")[1];
// // 		console.log("href: " + element.href);
// // 		console.log("text: " + element.textContent);
// 		if(element.href != '' && element.textContent != '' )
// 			console.log("href: " + element.href);
// 		else
// 			return;
	}
	else{
		// id = element.id.slice(1);
		// id = element.id;
		id = element.href.replace("/chars", "").split("/").pop();;
	}
 	console.log("id: " + id);
	var coverTopPeri = document.createElement("div");
	coverTopPeri.className = "coverTopPeri";
	var coverPeri = document.createElement("div");
	var img = document.createElement("img");
	var link = document.createElement("a");
	var span = document.createElement("span");
	link.appendChild(img);
	coverPeri.appendChild(link);
	coverTopPeri.appendChild(coverPeri);
	coverListPeri.appendChild(coverTopPeri);
	link.appendChild(span);
	
	// link.href =  element.querySelectorAll(".name  a")[0].href;
	link.href = "https://vndb.org/"+id;
	var text;
	if(isSeries)
	{
// 		text = element.lastChild.textContent;
// 		var clones = element.getElementsByTagName("img");
// 		if(clones.length >0){
// 			var clone = clones[0].cloneNode();
// 			Perispan.appendChild(clone);
// // 			console.log(clone)Peri;
			
// 		}
	}
	else if(isAuthor)
	{
		// text = element.textContent;
	}
	else{
		// var infoPeri = element.getElementsByClassName('text');
		// text = infoPeri[0].firstChild.firstChild.textContent;
		text = element.textContent;
	}
	img.alt = text;
// 	console.log("text: " + text);
	coverPeri.className = "coverPeri";
	coverPeri.id = "c" + id;
	img.id =  "lazyPeri"+id;//"i" +
	img.className = "lazyPeri";
	// img.src = GM_getResourceURL("loading");
	// img.src =element.querySelectorAll(".thumb  img")[0].src;

	// img.srcset =element.querySelectorAll(".thumb  source")[0].srcset;

	console.log(img.src); 
	var textnode = document.createTextNode(text);   
	span.appendChild(textnode);
	span.className = "infoPeri";
}

function getImgSrc(id, img, delay=3000)
{
	console.log(id); 
	// document.getElementByID(id)
	// img.src = (document.getElementById(id)).src.split('-thumb.jpg')[0].replace('thumbs/50x65/', '');
	// img.src = (document.getElementById(id)).srcset;
	// console.log(img.src); 
	var url = "https://vndb.org/" + id.replace("lazyPeri",'');;
	console.log( " url. "+ url); 
	if (GM_getValue(url)) {
		var retrievedLink = GM_getValue(url);
 		console.log(id + " from  cache."); 
		img.src = retrievedLink;
	}
	else {
			GM_xmlhttpRequest({
				method: "GET",
				url: url,
				context: {img: img, idUrl: url }, 
				onload: getHTML,
				timeout: delay-1000,
				ontimeout: getTimeout,
				onerror: getError
			});
	}
	setTimeout(testDelay, delay, id, img, delay);
}
function testDelay(id,img, delay)
{
	if(!img.src)
	{
		console.log(delay +' testDelay ' +id);
		// img.className = "lazyPeri";
		if(delay > 20000)
		{
			console.log( 'end testDelay ');
			img.src = 'https://s.vndb.org/s/angel/bg.jpg?2.26-27-g877f69f9';
			return;
		}
		getImgSrc(id, img,delay*2);
	}
}

function getError(response) 
{

	var img = response.context.img;
	var url = response.context.idUrl;
	console.log( ' error ' +url);
}
function getTimeout(response) 
{
	var img = response.context.img;
	var url = response.context.idUrl;
	console.log( ' timeout ' +url);
	GM_xmlhttpRequest({
				method: "GET",
				url: url,
				context: {img: img, idUrl: url }, 
				onload: getHTML,
				onerror: getError
			});
}
function getHTML(response) 
{
	
	var img = response.context.img;
	var url = response.context.idUrl;
	var responseXML = null;
	    // Inject responseXML into existing Object (only appropriate for XML content).
	    // if (!response.responseXML) {
	    //   responseXML = new DOMParser()
	    //     .parseFromString(response.responseText, "text/html");
	    // }
	    responseXML = (new DOMParser()).parseFromString(response.responseText, "text/html");
	var image = responseXML.querySelectorAll(	'.mainbox img');
// 									'div.sContainer:nth-child(4) > div:nth-child(1) > div:nth-child(2) > center:nth-child(1) > img:nth-child(1)'
	if(image[0]){

		var imagelink = image[0].src;
// 			var imagelink = $('<div>').html(data)[0].getElementsByClassName('sContainer')[1].getElementsByTagName('img') [0].src;
 	
		GM_setValue(response.finalUrl, imagelink);
 	
		img.src = imagelink;
		console.log( ' from ajax ' +url); // for testing purposes
	}
	else{
		console.log('no image from ajax' +url); // for testing purposes
		img.src = 'https://s.vndb.org/s/angel/bg.jpg?2.26-27-g877f69f9';
	}
}
/* ============================================================================
 * 
 * ============================================================================
 * 
 * ============================================================================
 * 
 * ============================================================================
 */

/* lazyload.js (c) Lorenzo Giuliani
 * MIT License (http://www.opensource.org/licenses/mit-license.html)
 *
 * expects a list of:  
 * `<img src="blank.gif" data-src="my_image.png" width="600" height="400" class="lazyPeri">`
 */

function ll() {
	  var $q = function(q, res){
	        if (document.querySelectorAll) {
	          res = document.querySelectorAll(q);
	        } else {
	          var d=document
	            , a=d.styleSheets[0] || d.createStyleSheet();
	          a.addRule(q,'f:b');
	          for(var l=d.all,b=0,c=[],f=l.length;b<f;b++)
	            l[b].currentStyle.f && c.push(l[b]);

	          a.removeRule(0);
	          res = c;
	        }
	        return res;
	      }
	    , addEventListener = function(evt, fn){
	        window.addEventListener
	          ? this.addEventListener(evt, fn, false)
	          : (window.attachEvent)
	            ? this.attachEvent('on' + evt, fn)
	            : this['on' + evt] = fn;
	      }
	    , _has = function(obj, key) {
	        return Object.prototype.hasOwnProperty.call(obj, key);
	      }
	    ;

// 	  function loadImage (el, fn) {//--
	function loadImage (el, i, images) {//++
	    var img = new Image();
//	      , src = el.getAttribute('data-src');//--
	    var id = el.id;//++
	    img.onload = function() {
	      if (!! el.parent){
	        el.parent.replaceChild(img, el);
	}
	      else{
// 	        el.src = src;//--
// 			el.className="lazyPostPeri";
	        el.src = this.src;//++
	      }

// 	      fn? fn() : null;//--
	      this.onload = null;
	    };
	    getImgSrc(id, img);//++
// 	    img.src = src; //--
	  }

	  function elementInViewport(el) {
		var rect = el.getBoundingClientRect();
		var test = (
			rect.top    >= 0
			&& rect.left   >= 0
			&& rect.top <= (window.innerHeight || document.documentElement.clientHeight)
			);
	    return test;
	  }

	    var images = new Array()
	      , query = $q('img.lazyPeri')
	      , processScroll = function(){
// 		console.log("lx" + images.length);
	          for (var i = 0; i < images.length; ) {
	            if (elementInViewport(images[i])) {
			loadImage(images[i], i, images);//-+
// 			images.splice(i, 1);//+-
			images.splice(i, 1);
	              }
	              else{ i++; }
	            }
	          };
	      ;
	    // Array.prototype.slice.call is not callable under our lovely IE8
	    for (var i = 0; i < query.length; i++) {
	      images.push(query[i]);
	    };
	    processScroll();
		addEventListener('scroll',processScroll);
		addEventListener("resize", processScroll);
		
	  }
