var bottab=document.querySelector('.bottom');
var lis=bottab.querySelectorAll('li');
var items=document.querySelectorAll('.item');
var items2=document.querySelectorAll('.item2');
for(var i=0;i<lis.length;i++){
	lis[i].setAttribute('index',i);
	lis[i].onmouseover=function(){
		var index=this.getAttribute('index');
		console.log(index);
		for(var i=0;i<items.length;i++){
			items[i].style.display='none';
		}
		items[index].style.display='block';
		for(var i=0;i<items2.length;i++){
			items2[i].style.display='none';
		}
		items2[index].style.display='block';
	}
}
