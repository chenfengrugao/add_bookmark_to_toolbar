//
// Add Bookmark of current tab to Toolbar on one click
//
//----------------
// 0.5 : rewrite using webextensions
// 0.4 : fix icons when using transparent background
//

function addBookmark(){
    var tab_title;
    var tab_url;
    browser.tabs.query({active:true, currentWindow:true}).then(function(tabs){
	if(tabs[0]){
	    tab_url = tabs[0].url;
	    tab_title = tabs[0].title;

	    var newBookmark = browser.bookmarks.create({
		title: tab_title,
		url: tab_url,
		index: 0, //at the top
		parentId: "toolbar_____" //bookmarks toolbar
	    });
	    
	}else{
	    console.error("Can't get active tab");
	}
    });
}

browser.browserAction.onClicked.addListener(addBookmark);

