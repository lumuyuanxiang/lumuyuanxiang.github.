window.addEventListener('scroll',function(){
		let scrol=$('body,html').scrollTop();
        if(scrol>0){
        		$(".nav").addClass('active')       
        	 }
        else{
            $(".nav").removeClass('active')  
        }
})
$('footer .scolltop').click(function(){
	$('html,body').animate({scrollTop:'0px'},500);
})