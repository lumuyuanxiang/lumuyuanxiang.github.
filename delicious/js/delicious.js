function delicious(){
	$.ajax({
		type:"get",
		url:"../json/delisious.json",
		success:function(data){
			for(var i in data){
				console.log(data[i]);
				$('.foot_list ul').append(`<li>
						<a href="#">
							<img src="${data[i].imgs}"/>
							<p>${data[i].name}</p>
						</a>
					</li>`)
			}
		}
	});
}
delicious();
$('.foot_list .more').click(function(){
	delicious();
})