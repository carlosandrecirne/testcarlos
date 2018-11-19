function openpage(pg){
	$(".buttonx").removeClass('active');
	$("#"+pg).addClass('active');
	$(".content").hide();
	if (pg == 'btn_map'){
		$("#content_map").show();
		getpoints();
	}else if (pg == 'btn_list'){
		$("#content_list").show();
		getpoints();
	}
}

 var map;
 
  function initMap() { 
  var x=window.innerHeight-180; 
  $("#content_map").css({"min-height":x,height:x});
	map = new google.maps.Map(document.getElementById('content_map'), {
	  center: {lat: -34.397, lng: 150.644},
	  zoom: 8
	});
	
  }
  
  function getpoints(){
	    initMap();
		var s="<ul>";
		$.get('https://raw.githubusercontent.com/carlosandrecirne/testcarlos/master/db.json',{},function(data){
			$.each(data,function(index,value){
				s+="<li>"+value.name+"<br>Lat:"+value.lat+"<br>Lng:"+value.lng+"</li>";
				var marker = new google.maps.Marker({
					position: {lat: value.lat, lng: value.lng},
					map: map,
					title: value.name
				  });
			});
			s+="</ul>";
			$("#content_list").html(s);
		},'json');
  }
  
  setTimeout(function(){
	  getpoints();
  },1000);
  