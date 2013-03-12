jquery.search.js
================

Installation:

  Like any jQuery plugin, include script in your project after you include jQuery (v1.1.4+).

The jQuery Search plugin provides three methods:

  andSearch – This operates by evaluating a search string as a series of space delimited search terms that are ANDed together, similar to iTunes’ filter search.

  orSearch – This is similar to the andSearch except that the terms are ORed together.

  Search – This is a simple search that tries to match the search string, treating spaces as part of a single search term.

Examples:

  Elm1: \<div class=”search”>The quick brown fox\</div>
  
  Elm2: \<div class=”search”>The slow red dog\</div>
  
  Elm3: \<div class=”search”>The squirrel  is quickest\</div>

    $(‘.search’).andSearch(‘The quick’)
  
  Returns: Elm1 and Elm3

  
    $(‘.search’).orSearch(‘The quick’)
  
  Returns: Elm1, Elm2, and Elm3

  
    $(‘.search’).search(‘The quick’)
  
  Returns: Elm1
