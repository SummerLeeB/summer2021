$(function(){
	//menu_open click > menu show
	$('.menu_open').click(function(){
		$('.navi').fadeIn(300);
		$('.menu_open').hide();
	});
	
	//menu_close click > menu hide
	$('.menu_close').click(function(){
		$('.navi').fadeOut(300);
		$('.menu_open').delay(300).fadeIn(300);
	});
	// 장치 너비 인식하여 태블릿 이하 풀페이지x 
	var winWidth=$(window).width();
	if (winWidth<=960) {
		//Main
		$('svg#main_animate').hide();
		$('.animation_img').hide().delay(500).fadeIn(1000);
		$('.main_des ul li').hide().delay(1500).fadeIn(1000);
		//About
		$('.circle-graph').easyPieChart({
								 scaleColor: false,
								 lineWidth: 25,
								 lineCap: 'butt',
								 barColor: '#e79796',
								 trackColor: '#ffffff',
								 size: 250,
								 animate: 300
							});
		$('.thankyou').addClass('active');
		$('.contact_info ul li').show();
		// 메뉴 클릭시 스크롤 이동
		$('nav#mobile_menu ul li a').click(function(){
			var scrollTo=$($(this).attr('href')).offset().top;
				$('html, body').animate({scrollTop:scrollTo},800)
			return false;			
		});
		//top btn 클릭시 모니터 top로 이동
		$('.top_btn').click(function(e){
			e.preventDefault();
			$('html, body').animate({scrollTop : 0},500);
			  return false;
		});
		
		
	} else if (winWidth>960) {
		//장치 너비가 960 초과인 경우 fullpage.js 실행
		$('#fullpage').fullpage({
			  navigation:true,
			  navigationPosition:'left',
			  anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage'],
			  menu: '#menu',
			  scrollingSpeed: 700,
			  afterLoad:function(anchorLink){
	////////first page animation
				if (anchorLink=='firstPage'){
					//main animation
					$('.st0').addClass('active');
					$('.animation_img').hide().delay(3000).fadeIn(1000);			
					//textAni 실행
					setTimeout(textAni1, 4000);
						function textAni1(){
							$('.main_des ul li').each(function(){
							var num=$(this).index();
							$(this).delay(num*700).fadeIn(1000);
						});
					}
					//main description
					$('.main_des p').hide().delay(6000).fadeIn(700);
					//scroll down
					$('.scroll-downs').hide().delay(6500).fadeIn(500);

				} else {
					//main animation 삭제
					$('.st0').removeClass('active');
					$('.animation_img').hide();
					//textAni 삭제
					$('.main_des ul li').hide();
					//main description 삭제
					$('.main_des p').hide();
					//scroll down 삭제
					$('.scroll-downs').hide();
				}

				//그래프 애니메이션 기능변수 선언1
				function graphAni1(){
					var winW=$(window).width();
					if(winW<=1024) {
						$('.circle-graph').easyPieChart({
							 scaleColor: false,
							 lineWidth: 20,
							 lineCap: 'butt',
							 barColor: '#e79796',
							 trackColor: '#ffffff',
							 size: 150,
							 animate: 800
							});
					} else if(winW<=1280) {
							$('.circle-graph').easyPieChart({
							 scaleColor: false,
							 lineWidth: 20,
							 lineCap: 'butt',
							 barColor: '#e79796',
							 trackColor: '#ffffff',
							 size: 180,
							 animate: 800
							});
					} else if(winW>1280) {
							$('.circle-graph').easyPieChart({
							 scaleColor: false,
							 lineWidth: 25,
							 lineCap: 'butt',
							 barColor: '#e79796',
							 trackColor: '#ffffff',
							 size: 200,
							 animate: 800
							});
						}	
					//변수 data_value에 data-percent값을 저장하고 해당 값으로 차트 업데이트
					$('.circle-graph').each(function(){
						var data_value=$(this).attr('data-percent');
							$(this).data('easyPieChart').update(data_value);
						});
				}

				//그래프 애니메이션 기능변수 선언2
				function graphAni2(){
					var winW=$(window).width();
					if(winW<=1024) {
						$('.circle-graph').easyPieChart({
							 scaleColor: false,
							 lineWidth: 20,
							 lineCap: 'butt',
							 barColor: '#e79796',
							 trackColor: '#ffffff',
							 size: 150,
							 animate: 800
							});
					} else if(winW<=1280) {
							$('.circle-graph').easyPieChart({
							 scaleColor: false,
							 lineWidth: 20,
							 lineCap: 'butt',
							 barColor: '#e79796',
							 trackColor: '#ffffff',
							 size: 180,
							 animate: 800
							});
					} else if(winW>1280) {
							$('.circle-graph').easyPieChart({
							 scaleColor: false,
							 lineWidth: 25,
							 lineCap: 'butt',
							 barColor: '#e79796',
							 trackColor: '#ffffff',
							 size: 200,
							 animate: 800
							});
						}	
					//값을 0으로 차트 업데이트하여 페이지 이동시 초기화
					$('.circle-graph').each(function(){
							$(this).data('easyPieChart').update(0);
						});
					}	

	/////////second page animation
					if(anchorLink=='secondPage'){
						//profile 애니메이션 실행
						$('.about_me').addClass('animated');
						//그래프 애니메이션 기능변수1 실행
						graphAni1(); 					
					} else {	
						//profile 애니메이션 삭제
						$('.about_me').removeClass('animated');
						//그래프 애니메이션 기능변수2 실행
						graphAni2();					
					}
	/////////5th page animation
					function textAni2(){
								$('.contact_info ul li').each(function(){
								var num=$(this).index();
								$(this).delay(num*700).fadeIn(1000);
								});
							}
					if(anchorLink=='5thPage'){
						//contact_info 애니메이션
						textAni2();
						//Thank you 애니메이션
						setTimeout(function(){
							$('.thankyou').addClass('active');
						},2300);				

					} else {
						//textAni2 삭제
						$('.contact_info ul li').hide();
						//Thank you 애니메이션 삭제
						$('.thankyou').removeClass('active');					
					}			
				} //afterload end
		}); //fullpage end
	}	
	
	//Web portfolio Swiper.js
	var swiper = new Swiper('.swiper-container', {
		loop: true,
      centeredSlides: true,
      spaceBetween: 40,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		breakpoints:{
			 1920:{slidesPerView:2},
			 1600:{slidesPerView:1.8},
			 1440:{slidesPerView:1.8},
			 1280:{slidesPerView:1.5},
			 1024:{slidesPerView:1.5},
			 960:{slidesPerView:1},
			 768:{slidesPerView:1},
		    480:{slidesPerView:1},
		},
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },		
    });
	// Swiper. hover시 자동 슬라이드 멈춤
	$('.swiper-slide').hover(function(){
		swiper.autoplay.stop();
	}, function(){
		swiper.autoplay.start();
	});
	
	//Graphic portfolio lightbox.js
	$('.gallery a').lightbox({
		margin: 0,
		nav:true,
	});	
});