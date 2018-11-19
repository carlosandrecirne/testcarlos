function openpage(pg){
	$(".buttonx").removeClass('active');
	$("#"+pg).addClass('active');
	$(".content").hide();
	if (pg == 'btn_map'){
		$("#content_map").show();
	}else if (pg == 'btn_list'){
		$("#content_list").show();
	}
}

 var map;
 
  function initMap() {
	  alert('x');
	map = new google.maps.Map(document.getElementById('content_map'), {
	  center: {lat: -34.397, lng: 150.644},
	  zoom: 8
	});
  }
  