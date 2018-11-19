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