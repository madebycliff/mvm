/*copyright james clifford 2013 for Andorra B&B, Dublin, Ireland www.andorrabb.com, www.jc-ae.com
 */

var UI = (function(){

	var imgW = 0, imgH = 0, overlayH = 0;//image sizing variables
	var LayoutIsVertical = true;

	

	initialiseUI = function(){
		console.log("initialising UI");


		//getting imagemain's image size
		getImgSize($('#imagemain').attr('src'));

		$("#imageOverlay").hide();
		//$("button").button();
		$('#leftMenuBar button').removeAttr('onclick');

		$('#galleryscroller').magnificPopup({
			delegate: 'div',
			type: 'image',
			gallery:{enabled:true}
		});


		responsiveLayout();


		function getImgSize(imgSrc) {
		    var newImg = new Image();

		    newImg.onload = function() {
			    imgH = newImg.height;
			    imgW = newImg.width;
			    console.log('The image size is '+imgW+'x'+imgH);
			}
			newImg.src = imgSrc; // this must be done AFTER setting onload
		}
	}

	$("#leftMenuBar button").on('click',function(e){
		var id = this.id;
		console.log("toggling element #"+id+" with "+$("#"+id).hasClass("showingRight")+" showingRight class.");
		
		if ($(this).hasClass("showingRight")){
			$("#imageOverlay").hide();
			$(this).removeClass("showingRight")
			$('#imageAndOverlay').height( 'auto' );
		} else {
			$("#leftMenuBar .showingRight").removeClass("showingRight");
			$("#imageOverlay").show(function(){
				if (id == "bio") {
					$("#imageOverlay #infoAbout").siblings().hide();
					$("#imageOverlay #infoAbout").show(500);
					$(this).addClass("showingRight");
				} else if (id == "events") {
					$("#imageOverlay #infoBook").siblings().hide();
					$("#imageOverlay #infoBook").show(500);
					$(this).addClass("showingRight");
				} else if (id == "tracks") {
					$("#imageOverlay #infoRooms").siblings().hide();
					$("#imageOverlay #infoRooms").show(500);
					$(this).addClass("showingRight");
				} else if (id == "news") {
					$("#imageOverlay #infoFacilities").siblings().hide();
					$("#imageOverlay #infoFacilities").show(500);
					$(this).addClass("showingRight");
				}  else if (id == "friends") {
					$("#imageOverlay #infoLocation").siblings().hide();
					$("#imageOverlay #infoLocation").show(500);
					$(this).addClass("showingRight");
				} else if (id == "gallery") {
					$("#imageOverlay #infoNews").siblings(500).hide();
					$("#imageOverlay #infoNews").show(500);
					$(this).addClass("showingRight");
				} else if (id == "contactUs") {
					$("#imageOverlay #infoContact").siblings().hide();
					$("#imageOverlay #infoContact").show(500);
					$(this).addClass("showingRight");
				}

				$('#bodydiv').animate({scrollTop:$('#imageOverlay').offset().top}, 500);
			});
		}
	});

	updateUI = function(){
		responsiveLayout();
	}

	responsiveLayout = function(){
		var bodyW = $('body').width();
		var bodyH = $('body').height();
		$('bodydiv').height( bodyH - $('footerdiv').height() );
		/*if (bodyW >= 1111 || ( ($('#imageAndTextHome #headings').width() == "100%") && (bodyW > 1111) ) ){
			LayoutIsVertical = false;
			$('#bodydiv').css({overflow: "hidden"});
			$('#imageAndTextHome #headings').width("40%");
			$('#imageAndTextHome #imageAndOverlay').width("60%");
			$('#imageAndTextHome #imageAndOverlay').height("98%");
			$('#bodydiv').css({overflow: "auto"});
		} else {*/
			//make header width = 100% and underneath then, image width 100%
			$('#imageAndTextHome #headings').width("100%");
			$('#imageAndTextHome #imageAndOverlay').width("100%");
			$('#imageAndTextHome #imageAndOverlay').height("auto");
			LayoutIsVertical = true;
		/*}*/

		//resize header and image if below min size
		oldImgW = $('#imagemain').width();
		oldImgH = $('#imagemain').height();
		
		var aspectRatio = imgW/imgH;
		var newH = oldImgW/aspectRatio;
		$('#imagemain').css('height',newH);
	}

	$(window).resize(function() {
		console.log("resize event");
		updateUI();
	});

	$(window).load( function(){ initialiseUI();});

	return {
		updateUI: updateUI
	}


}());	