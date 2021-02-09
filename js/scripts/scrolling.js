		$(document).ready(function() {
			var $content_right = $('#right'),
				$content_left = $('#left'),
				scale_r = $content_right[0].scrollHeight / $(window).height() / 30,
				scale_l = $content_left[0].scrollHeight / $(window).height() * 2,
				mousepos_r, mousepos_l;
			
		$('#right').mousedown(function(event) {
			if (event.which == 1) {
				mousepos_r = event.screenY;
			}
		});
		
		$('#right').mousemove(function(event) {
			if (event.which == 1) {
				var delta = (event.screenY - mousepos_r) * scale_r;
				$content_right.scrollTop($content_right.scrollTop() - delta);
				mousepos_r = event.screenY;
			}
		});

		$('#left').mousedown(function(event) {
			if (event.which == 1) {
				mousepos_l = event.screenY;
			}
		});
		
		$('#left').mousemove(function(event) {
			if (event.which == 1) {
				var delta = (event.screenY - mousepos_l) * scale_l;
				$content_left.scrollTop($content_left.scrollTop() - delta);
				mousepos_l = event.screenY;
			}
		});

	});

