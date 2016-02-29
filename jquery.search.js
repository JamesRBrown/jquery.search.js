/*
	Title: 			jquery.search.js
	Author: 		James R. Brown
	Date: 			10/1/13
	Version: 		4.0
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

//useful and supporting jQuery selectors
jQuery.expr[':'].iContains = function(a,i,m){
     return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase())>=0;
};
jQuery.expr[':'].valueContains = function(a,i,m){
     var matches = 0; 
    jQuery(a).find('[value]').filter('input,option:selected').each(function(){
        if(jQuery(this).attr('value').indexOf(m[3])>=0) matches++;
        if(jQuery(this).text().indexOf(m[3])>=0) matches++;
    });
    return matches > 0;
};
jQuery.expr[':'].iValueContains = function(a,i,m){
    var matches = 0; 
    jQuery(a).find('[value]').filter('input,option:selected').each(function(){
        if(jQuery(this).attr('value').toUpperCase().indexOf(m[3].toUpperCase())>=0) matches++;
        if(jQuery(this).text().toUpperCase().indexOf(m[3].toUpperCase())>=0) matches++;
    });
    return matches > 0;
};
jQuery.expr[':'].wildcard = function(a,i,m){
    var regex  = "^"+m[3].replace(/\?/g,'.?').replace(/\*/g,'.*?')+"jQuery";
    var re = new RegExp(regex, 'i');
    var text = jQuery(a).text();
    return text.match(re) ? true : false;
};
jQuery.expr[':'].displayNone = function(a,i,m){
    var result = jQuery(a).attr('style').match(/display:\s*none/);
    return !!result;
}

//Text searches
jQuery.extend( jQuery.fn, {
    andSearch: function(p) {
        if (p.match(/[^\s]+/g) === null) return this;        
        var t = p.match(/[^\s]+/g);
		var c = '';
		for (var i = 0; i < t.length; i++) {
			c += ':contains(' + t[i] + ')';
		}
		return jQuery(this).filter(c);
    },
    orSearch: function(p) {
        if (p.match(/[^\s]+/g) === null) return this;        
        var t = p.match(/[^\s]+/g);
		var c = '';
		for (var i = 0; i < t.length; i++) {
			c += ':contains(' + t[i] + ')';
			if(i+1 !== t.length) c += ',';
		}
		return jQuery(this).filter(c);
    },
    search: function(p) {
       if (p.match(/.+/g) === null) return this;
            return jQuery(this).filter(':contains(' + p + ')');
    },
    iAndSearch: function(p) {
        if (p.match(/[^\s]+/g) === null) return this;        
        var t = p.match(/[^\s]+/g);
		var c = '';
		for (var i = 0; i < t.length; i++) {
			c += ':iContains(' + t[i] + ')';
		}
		return jQuery(this).filter(c);
    },
    iOrSearch: function(p) {
        if (p.match(/[^\s]+/g) === null) return this;        
        var t = p.match(/[^\s]+/g);
		var c = '';
		for (var i = 0; i < t.length; i++) {
			c += ':iContains(' + t[i] + ')';
			if(i+1 !== t.length){
                c += ',';
            }
		}
		return jQuery(this).filter(c);
    },
    iSearch: function(p) {
	   if (p.match(/.+/g) === null) return this;
		return jQuery(this).filter(':iContains(' + p + ')');
	}
});

//Value Searches
jQuery.extend( jQuery.fn, {
    andValueSearch: function(p) {
        if (p.match(/[^\s]+/g) === null) return this;        
        var t = p.match(/[^\s]+/g);
		var v = '';
		for (var i = 0; i < t.length; i++) {
			v += ':valueContains(' + t[i] + ')';
		}
		return jQuery(this).filter(v);
    },
    orValueSearch: function(p) {
        if (p.match(/[^\s]+/g) === null) return this;        
        var t = p.match(/[^\s]+/g);
		var v = '';
		for (var i = 0; i < t.length; i++) {
			v += ':valueContains(' + t[i] + ')';
			if(i+1 !== t.length) v += ',';
		}
		return jQuery(this).filter(v);
    },
    valueSearch: function(p) {
       if (p.match(/.+/g) === null) return this;
            return jQuery(this).filter(':valueContains(' + p + ')');
    },
    iAndValueSearch: function(p) {
        if (p.match(/[^\s]+/g) === null) return this;        
        var t = p.match(/[^\s]+/g);
		var v = '';
		for (var i = 0; i < t.length; i++) {
			v += ':iValueContains(' + t[i] + ')';
		}
		return jQuery(this).filter(v);
    },
    iOrValueSearch: function(p) {
        if (p.match(/[^\s]+/g) === null) return this;        
        var t = p.match(/[^\s]+/g);
		var v = '';
		for (var i = 0; i < t.length; i++) {
			v += ':iValueContains(' + t[i] + ')';
			if(i+1 !== t.length){
                v += ',';
            }
		}
		return jQuery(this).filter(v);
    },
	iValueSearch: function(p) {
	   if (p.match(/.+/g) === null) return this;
		return jQuery(this).filter(':iValueContains(' + p + ')');
	}
});

//Special Searches
jQuery.extend( jQuery.fn, {
    wildcardSearch: function(p) {
        var regex  = "^"+p.replace(/\?/g,'.{1}').replace(/\*/g,'.*?')+"$";
        var re = new RegExp(regex, 'i');
        var value = jQuery();
        
        jQuery(this).each(function(){
            if(re.test(jQuery(this).text())){
                value = jQuery(value).add(this); 
            }
        });
        
        return value;
    },
    regexSearch: function(regex) {
        var value = jQuery();
        jQuery(this).each(function(){
            if(regex.test(jQuery(this).text())){
                value = jQuery(value).add(this); 
            }
        });
        
        return value;
    }
});
