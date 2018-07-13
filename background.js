"use strict";
	 
	browser.contextMenus.create({
	  title: "Search Wiktionary for \"%s\"",
	  contexts:["selection"],
	  onclick: search,
	});
	 
	function search(info, tab){
		
	browser.tabs.query({"active":true, "currentWindow":true}, function(tabArray) {
	    var tab = tabArray[0];
		var searchquery = encodeURIComponent(info.selectionText);
		var url = "https://ru.wiktionary.org/w/index.php?search=";
		
	    browser.tabs.create({"url":url + searchquery, "index":tab.index+0});
	  });
	}