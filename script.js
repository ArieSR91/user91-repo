var bgArr = [
	'url(https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/images/fauxBG.png)',
	'url(https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/images/fauxBG1.png)',
	'url(https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/images/fauxBG2.png)',
	'url(https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/images/fauxBG3.png)',
	'url(https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/images/fauxBG4.png)',
	'url(https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/images/fauxBG5.png)'	
];

var cacheImg = [
    'https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/images/fauxBG.png',
	'https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/images/fauxBG1.png',
	'https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/images/fauxBG2.png',
	'https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/images/fauxBG3.png',
	'https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/images/fauxBG4.png',
	'https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/images/welcomeRing1G.png',
    'https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/images/welcomeRing2G.png',
    'https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/images/welcomeRing3G.png'
];

var unsliderArr = ['.cogErgo','.typography','.exDes','.resMeth','.openEl','.phyComp','.desProj'];

function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
};

//Recurring Functions

function animateGalCont(index){
	$("#imgGalCont").animate({left:'1400px', opacity:0},200,function(){
		//initUnslider(index);
		$("#imgGalCont").animate({left:'150px',opacity:'1'},500,function(){});		
	});
}

function showGalCont(){
	$("#imgGalCont").animate({left:'150px',opacity:'1'},500,function(){});
}

function animateFooterGraph(elem){
	var i=null;
	$(".sideBarUl li").each(function(index, element) {
        if(elem==element){
			i=index;
		}
    });
	$(".footerGraphUnit").css({opacity:0});
	$(".footerGraphUnit").each(function(index, element) {
		var that = this;
        if(index<=i){
			setTimeout(function(){
				$(that).transition({ opacity : '1'},800,function(){});		
			},50*index);
		}
    });
}

//left Menu Animations
function showLeftMenu(elem){
	$(".sideBarUl").stop(true,true);
	elem.animate({'left':'-10px'},400,function(){});
}

function hideLeftMenu(elem){
	$(".sideBarUl").stop(true,true);
	elem.animate({'left':'-340px'},300,function(){});
}

function showMenuItems(){
	
	$(".sideBarUl").css({'display':'block'});
	$(".sideBarUl li").each(function(i,e) {
		var that = this;
		setTimeout(function(){
			$(that).transition({ opacity : '1'},300,function(){});
			playEventSound('https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/sounds/multimedia_rollover_048.mp3',$(".soundCont"));
		},200*i);        
    });
	showfooterGraph();
	setTimeout(function(){
		showGalCont();
		playEventSound('https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/sounds/robot_movement_6.mp3',$(".soundCont"));
		$(".sideBarUl").trigger('mouseleave');
		setTimeout(function(){
			animateText();
		},500);
	},2000);
	
}

var playEventSound = function(soundfile,elem){
	//elem.html("");
	//elem.html("<embed src='"+soundfile+"' hidden='true' />");
}

var stopEventSound =function (elem){
	//elem.html("");	
}

function soundHandler(){
	//this.play = playEventSound;
	//this.stopMusic = stopEventSound;
	
}
//background Animations
function hideWelcomeRings(){
	playEventSound('https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/sounds/servo_motor.mp3',$(".soundCont"));
	$(".welcomeRing3").transition({scale:'.85714285714'},750,function(){
		playEventSound('https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/sounds/servo_motor.mp3',$(".soundCont"));
		$(".welcomeRing2").transition({scale:'.66666666667'},750,function(){});
		$(".welcomeRing3").transition({scale:'.57142857142'},750,function(){
			playEventSound('https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/sounds/servo_motor.mp3',$(".soundCont"));
			$(".welcomeRing3").transition({scale:'.15714285714'},750,function(){});
			$(".welcomeRing2").transition({scale:'.18333333333'},750,function(){});
			$(".welcomeRing1").transition({scale:'.275'},750,function(){
				$(".welcomeRings").transition({opacity:0},750,function(){
					cycleBG();
				});
			});			
		});
	});
}

function cycleBG(){
	$(".welcomeRings").remove();
	var count1 = count2 = count3 = 0;
	var fauxBody1 = setInterval(function(){
		if(count1 == 6){
			count1 = 0;
		}
		$(".fauxBody").css({'background-image':bgArr[count1]});
//		var soundEv = new soundHandler();
//soundEv.play('https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/sounds/simple_beep_nav.mp3',$(".soundCont"));
		count1++;
	},200);
	var fauxBody2 = setInterval(function(){
		if(count2 == 6){
			count2 = 0;
		}
		$(".fauxBody1").css({'background-image':bgArr[count2]});
//		var soundEv1 = new soundHandler();
//soundEv1.play('https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/sounds/simple_beep_nav.mp3',$(".soundCont1"));
		count2++;
	},200);
	var fauxBody3 = setInterval(function(){
		if(count3 == 6){
			count3 = 0;
		}
		$(".fauxBody2").css({'background-image':bgArr[count3]});
		//var soundEv2 = new soundHandler();
		//soundEv2.play('https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/sounds/simple_beep_nav.mp3',$(".soundCont2"));		
		count3++;
	},500);
	setTimeout(function(){
		clearInterval(fauxBody1);
		clearInterval(fauxBody2);
		clearInterval(fauxBody3);
		$(".fauxBody").css({'background-image':bgArr[0]});
		$(".fauxBody1").remove();
		$(".fauxBody2").remove();
		animateBGRings();
	},1000);	
}

function animateBGRings(){
	setTimeout(function(){
		$(".bgAnimRing3").css({'opacity':'1'});
		animateRing3();
		playEventSound('https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/sounds/slanesh__bip.mp3',$(".soundCont1"));
	},1000);
	setTimeout(function(){
		$(".bgAnimRing2").css({'opacity':'1'});
		animateRing2();
		$(".sineGraph").css({'opacity':'.4'});
		animateSineGraph();
	},2000);
	setTimeout(function(){
		$(".bgAnimRing1").css({'opacity':'1'});
		animateRing1();
	},3000);
	setTimeout(function(){
		showMenuItems();
	},3500);	
}

var animateRing3 = function(){
	$(".bgAnimRing3").css({ rotate: '-360deg' });
	$(".bgAnimRing3").transition({ rotate: '360deg' }, 30000, 'linear', function(){
		animateRing3();
	});	
}

var animateRing2 = function(){
	$(".bgAnimRing2").css({ rotate: '360deg' });
	$(".bgAnimRing2").transition({ rotate: '-360deg' }, 22000, 'linear', function(){
		animateRing2();
	});
}

var animateRing1 = function(){
	$(".bgAnimRing1").css({ rotate: '-360deg' });
	$(".bgAnimRing1").transition({ rotate: '360deg' }, 40000, 'linear', function(){
		animateRing1();
	});
}

var animateSineGraph = function(){
	$(".sineGraph").animate({'background-position':'75%'},10000,'linear',function(){
		$(".sineGraph").animate({'background-position':'0%'},1000,function(){
			animateSineGraph();
		});
	});
}


//Footer Animations

function showfooterGraph(){
	$(".footerGraphUnit").each(function(i,e) {
		var that = this;
		setTimeout(function(){
			$(that).transition({ opacity : '1'},300,function(){});			
		},200*i);        
    });
	
	setTimeout(function(){
		$($(".footerGraphUnit").get().reverse()).each(function(i,e){
			var that = this;
			if(that!=$(".footerGraphUnit")[0]){
				setTimeout(function(){
				$(that).transition({ opacity : '0'},800,function(){});		
				},50*i);
			}			
		})
	},2000);
}

function animateSemText(){
	playEventSound('https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/sounds/osd-text-10.mp3',$(".soundCont1"));
	$('.semText').airport(['Crypto-Core']);
	setTimeout(function(){
		stopEventSound($(".soundCont1"));	
	},1000);	
}



function animateJuryText(){
	$('.juryText').airport(['Bitcoin']);
	setTimeout(function(){
		animateCursor();
	},2000)			
}

function animateHeadText(){
	$('.headText').airport([$($(".sideBarUl li")[0]).html()]);	
}

function animateCursor(){
	setTimeout(function(){
		var newHTML = ($('.juryText').html()=='melisandre')?'Bitcoin_':'Bitcoin';
		$('.juryText').html(newHTML);
		animateCursor();
	},500)
}

function animateText(){
	animateSemText();
	animateJuryText();
	animateHeadText();	
}

//Init calls
var animateRings = function(elem, time, deg){
	var resetDeg = (deg=='-360deg')?'360deg':'-360deg';
	elem.css({ rotate: resetDeg });
	elem.transition({ rotate: deg }, time, 'linear', function(){});
}

function rotObj(){
	this.animator = animateRings;
}

function jarvisRecog(){
	playEventSound('https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/sounds/multimedia_rollover_046.mp3',$(".soundCont"));
	$(".lockIcon").css({'background-image':'https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/url(static/images/lock1.png)'});	
}

var aniRing1Delay = aniRing2Delay = aniRing3Delay = null;

function unlockApp(){
	
	$(".lockIcon").css({'background-image':'url(https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/images/unlock.png)'});
	setTimeout(function(){
		playEventSound('https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/sounds/multimedia_rollover_048.mp3',$(".soundCont"));
		$(".welcomeRing1").css({'background-image':'url(https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/images/welcomeRing1G.png)'});
	},500);
	setTimeout(function(){
		playEventSound('https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/sounds/multimedia_rollover_048.mp3',$(".soundCont"));
		$(".welcomeRing2").css({'background-image':'url(https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/images/welcomeRing2G.png)'});
	},1000);
	setTimeout(function(){
		playEventSound('https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/sounds/multimedia_rollover_048.mp3',$(".soundCont1"));
		$(".welcomeRing3").css({'background-image':'url(https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/images/welcomeRing3G.png)'});
		$(".welcomeRing3").stop(true,true);
		$(".welcomeRing2").stop(true,true);
		$(".welcomeRing1").stop(true,true);
		clearInterval(aniRing1Delay);
		clearInterval(aniRing2Delay);
		clearInterval(aniRing3Delay);
		hideWelcomeRings();
	},1500);
	
}

function animateWelcomeRings(){	
	var aniRing1 = new rotObj();
	aniRing1.animator($(".welcomeRing1"),40000,'-360deg');
	aniRing1Delay = setInterval(function(){
		aniRing1.animator($(".welcomeRing1"),40000,'-360deg');
	},40000);
	
	var aniRing2 = new rotObj();
	aniRing2.animator($(".welcomeRing2"),20000,'360deg');
	aniRing2Delay = setInterval(function(){
		aniRing2.animator($(".welcomeRing2"),20000,'360deg');
	},20000);
	
	var aniRing3 = new rotObj();
	aniRing3.animator($(".welcomeRing3"),25000,'-360deg');
	aniRing3Delay = setInterval(function(){
		aniRing3.animator($(".welcomeRing3"),25000,'-360deg');
	},25000);
}
	
function fireLockAnim(){
	animateWelcomeRings();	
}

function getLiIndex(elem){
	var liArr = $(".sideBarUl li");
	for(var i=0; i<liArr.length;i++){
		if(elem == liArr[i])
		{
			return i;
		}
	}
}

function bindButtons(){
	
	$(".sideBarUl").unbind('mouseleave').bind('mouseleave',function(){
		hideLeftMenu($(this));
	});
	
	$(".sideBarUl").unbind('mouseenter').bind('mouseenter',function(){
			showLeftMenu($(this));			
	});
	
	$(".sideBarUl li").unbind('mooseenter').bind('mouseenter',function(){
		playEventSound('https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/sounds/multimedia_rollover_048.mp3',$(".soundCont"));
	});
		
	$(".footerGraphUnit").unbind('click').bind('click',function(){
		
	});
	
	$(".sideBarUl li").unbind('click').bind('click',function(e){
		playEventSound('https://raw.githubusercontent.com/Chrisdanyk/Melisandre/master/static/sounds/multimedia_rollover_046.mp3',$(".soundCont"));
		updateHeadText($(this).html());
		animateGalCont(getLiIndex(this));
		animateFooterGraph(this);
	});
}
  
$(document).ready(function(){
    preloadImages(cacheImg);
	bindButtons();
	fireLockAnim();
});

    setInterval(function(){

var promise = getPrice();
		
promise.then(function(response) {
		
var result = JSON.parse(response.btcprice)
		
	var color="";
	var trend = parseInt(result.find( ({ symbol }) => symbol === 'BTCUSDT' ).priceChange)
	if(trend > 0){color="green";}else if(trend < 0){color="red";}else{color="grey";};	
	//var price = document.querySelector("body > div.livecoinwatch-widget-5 > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div > span:nth-child(1)").innerHTML;
	$("#imgGalMid").css( "text-align", "center" );
	$("#imgGalMid").css( "height", "auto" );
	$("#imgGalMid").css( "width", "auto" );
    $("#imgGalMid").css( "margin-top", "42px" );
	$("#imgGalMid").css( "font-size", "175px" );
	$("#imgGalMid").css( "color", color );
	var price = "$" + parseFloat(result.find( ({ symbol }) => symbol === 'BTCUSDT' ).lastPrice).toFixed(2);
	$("#imgGalMid").text(numberWithCommas(price));
});
      
          }, 10000);

function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

async function getPrice()
{
	return await getCurrentPrice();
}

function getCurrentPrice()
{

  return new Promise(function(resolve, reject) {

var obj = { 
    priceobj: get('https://api.coindesk.com/v1/bpi/currentprice.json'),
	btcprice: get('https://data.binance.com/api/v3/ticker/24hr')
};

rxjs.forkJoin(
  // as of RxJS 6.5+ we can use a dictionary of sources
obj
)
// { google: object, microsoft: object, users: array }
.subscribe(function(response) {

return resolve(response);

});

});

}

function get(url) {

  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };
    // Make the request
    req.send();
  });
}