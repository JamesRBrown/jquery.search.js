/*
	Title: 			jquery.search.js
	Author: 		James R. Brown
	Date: 			6/7/13
	Version: 		2.0
	Requirements: 	jQuery 1.1.4+ 
	
	The MIT License (MIT)
	Copyright (c) 2013 James R. Brown
	
	Permission is hereby granted, free of charge, to any person obtaining 
	a copy of this software and associated documentation files (the "Software"), 
	to deal in the Software without restriction, including without limitation 
	the rights to use, copy, modify, merge, publish, distribute, sublicense, 
	and/or sell copies of the Software, and to permit persons to whom the Software 
	is furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in 
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
	INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
	PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
	HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
	CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
	OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
jQuery.expr[':'].iContains = function(a,i,m){
     return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase())>=0;
};

jQuery.extend( jQuery.fn, {
    andSearch: function(p) {
        if (p.match(/[^\s]+/g) === null) return this;        
        var t = p.match(/[^\s]+/g);
		var c = '';
		for (var i = 0; i < t.length; i++) {
			c += ':contains(' + t[i] + ')';
		}
		return $(this).filter(c);
    },
    orSearch: function(p) {
        if (p.match(/[^\s]+/g) === null) return this;        
        var t = p.match(/[^\s]+/g);
		var c = '';
		for (var i = 0; i < t.length; i++) {
			c += ':contains(' + t[i] + ')';
			if(i+1 !== t.length) c += ',';
		}
		return $(this).filter(c);
    },
	search: function(p) {
	   if (p.match(/.+/g) === null) return this;
		return $(this).filter(':contains(' + p + ')');
	},
    iAndSearch: function(p) {
        if (p.match(/[^\s]+/g) === null) return this;        
        var t = p.match(/[^\s]+/g);
		var c = '';
		for (var i = 0; i < t.length; i++) {
			c += ':iContains(' + t[i] + ')';
		}
		return $(this).filter(c);
    },
    iOrSearch: function(p) {
        if (p.match(/[^\s]+/g) === null) return this;        
        var t = p.match(/[^\s]+/g);
		var c = '';
		for (var i = 0; i < t.length; i++) {
			c += ':iContains(' + t[i] + ')';
			if(i+1 !== t.length) c += ',';
		}
		return $(this).filter(c);
    },
	iSearch: function(p) {
	   if (p.match(/.+/g) === null) return this;
		return $(this).filter(':iContains(' + p + ')');
	}
});
