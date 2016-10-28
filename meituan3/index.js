//点击li清除所以亮度 ，在点亮当前下标
	$('nav a').on('click',function(){
	   $('nav a li section').css({
	   	'background-position-y': '-8px'
	   	}).eq($(this).index()).css({
	   	'background-position-y':'-3.46rem'
	  });

	   	$('nav a li p').css({
	   	'color':'black'
	  }).eq($(this).index()).css({
	   	'color':'black',
			'font-weight': 'bold'
	  });
	});

	
