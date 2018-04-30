(function($){
    "use strict";
    $(document).ready(function( $ ) {
        $('.section-map-wrap').each(function() {
            var $div = $(this);
            var map_id = $div.data('map-id');
            var map_wrap = $div.find('#mapwrap');
            var options = window['summit_map_' + map_id];
            var latlang = new google.maps.LatLng(options.latitude, options.longitude);
            var title = options.title;
            var description = options.description;
            var map_hue = options.map_hue;
            var site_url = options.site_url;
            if(description == null) {
            	description = '';
            }
            var settings = {
                center: latlang,
                zoom: 10,
                scrollwheel: false,
                styles: [
                    {
                      "featureType": "water",
                      "elementType": "all",
                      "stylers": [
                          {
                              "color": map_hue
                          },
                          {
                              "visibility": "on"
                          }
                      ]
                    },
                ]
            };
            var map;
            map = new google.maps.Map(document.getElementById('map_wraper_'+ map_id), settings );
            var marker_icon =  {
              url: site_url+'/images/map-marker.png'
            };
      			var marker = new google.maps.Marker({
      				position: latlang,
              icon: marker_icon,
      				map: map,
      				title: 'Hello World!'
      			});
      			var contentString = '<div id="info-wrap">'+
      					'<h3 class="align-center">'+title+'</h3>'+description+
      			'</div>';
      			if( title != '' || description != '') {
      				var infowindow = new google.maps.InfoWindow({
      					content: contentString
      				});
      				infowindow.open(map, marker);
      				marker.addListener('click', function() {
      					infowindow.open(map, marker);
      				});
      			}
            google.maps.event.addDomListener(window, "resize", function() {
                var center = map.getCenter();
                google.maps.event.trigger(map, "resize");
                map.setCenter(center);
            });
        });
    });
}(jQuery));