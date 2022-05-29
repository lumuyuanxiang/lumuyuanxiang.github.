window.onload=function(){
	var page=-1;
	var len=5;
	var srcoll=true;
	var divlunbo=document.getElementById("left");
	var imgs=divlunbo.getElementsByTagName("img");
	var lis=divlunbo.getElementsByTagName("li");
	function slide(){
		if(srcoll){
			page++;
			if(page==5){
				page=0;
			}
			for(var i=0;i<imgs.length;i++){
				imgs[i].style.display="none"
			}
			for(var i=0;i<lis.length;i++){
				lis[i].style.background="rgb(0,0,0,0.5)";
				lis[i].style.color="white";
			}
			imgs[page].style.display="inline-block";
			lis[page].style.background="white";
			lis[page].style.color="black";
		}
		setTimeout(slide,1500);
	}
	slide();
	divlunbo.onmouseover=function(){
		srcoll=false;
	}
	divlunbo.onmouseout=function(){
		srcoll=true;
	}
	
	for(var i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			srcoll=false;
			page=this.innerText-1;
			changeimgs(page);
		}
		lis[i].onmouseout=function(){
			srcoll=true;
		}
	}
	function changeimgs(page){
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.display="none";
			lis[i].style.background="rgb(0,0,0,0.5)";
			lis[i].style.color="white";
		}
		imgs[page].style.display="block";
		lis[page].style.background="white";
		lis[page].style.color="black";
	}
}

