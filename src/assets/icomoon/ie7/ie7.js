/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-heart': '&#xe900;',
		'icon-location': '&#xe901;',
		'icon-home3': '&#xe902;',
		'icon-search': '&#xe986;',
		'icon-smile': '&#xe9e1;',
		'icon-grin': '&#xe9e9;',
		'icon-arrow-up2': '&#xea3a;',
		'icon-arrow-right2': '&#xea3c;',
		'icon-arrow-down2': '&#xea3e;',
		'icon-arrow-left2': '&#xea40;',
		'icon-ctrl': '&#xea50;',
		'icon-cart': '&#xe93a;',
		'icon-chevron-down': '&#xe904;',
		'icon-chevron-left': '&#xe905;',
		'icon-chevron-right': '&#xe906;',
		'icon-chevron-up': '&#xe907;',
		'icon-shopping-cart': '&#xe903;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
