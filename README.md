jquery.search.js
================

<b>About:</b>

jQuery Search is a fast and light weight jQuery DOM search tool.  I was looking for a filter search tool and everything I found was slow, cumbersome, and feature poor.  jQuery Search is lightning quick, intuitively behaves exactly as you'd expect of a jQuery tool, and because it's a jQuery plugin it automatically benifits from jQuery rich chainability approach!

<b>Installation:</b>

  Like any jQuery plugin, simply include the script in your project after you include jQuery (v1.1.4+).

<b>Version 2 Features:</b>

  Provides new case insensitive search functionality.  
  
  The new methods are:
  
    iAndSearch
    
    iOrSearch
    
    iSearch

  (Works the same as the below described methods except case is ignored.)
  
  <b>Please note:</b> there might be a slight performance hit using the case insensitive search over the regular case sensitive search.

<b>The jQuery Search plugin provides three methods:</b>

  <i>andSearch</i>  – This operates by evaluating a search string as a series of space delimited search terms that are ANDed together, similar to iTunes’ filter search.

  <i>orSearch</i>  – This is similar to the andSearch except that the terms are ORed together.

  <i>search</i>  – This is a simple search that tries to match the search string, treating spaces as part of a single search term.

<b>Examples:</b>

  <i>Elm1</i>: \<div class=”search”>The quick brown fox\</div>
  
  <i>Elm2</i>: \<div class=”search”>The slow red dog\</div>
  
  <i>Elm3</i>: \<div class=”search”>The squirrel  is quickest\</div>

    $(‘.search’).andSearch(‘The quick’)
  
  Returns: <i>Elm1</i> and <i>Elm3</i>

  
    $(‘.search’).orSearch(‘The quick’)
  
  Returns: <i>Elm1</i>, <i>Elm2</i>, and <i>Elm3</i>

  
    $(‘.search’).search(‘The quick’)
  
  Returns: <i>Elm1</i>
  


