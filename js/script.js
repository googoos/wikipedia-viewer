function openSearchForm() {
  x = '<input type="text" name="search" placeholder="Search.." onkeydown="searchWiki(this)" ><span class="glyphicon glyphicon-remove" onclick="closeSearchForm()"></span>';
  document.getElementById("searchbox").innerHTML = x;
}

function closeSearchForm() {
  x = '<span class="glyphicon glyphicon-search" onclick="openSearchForm()"></span>'
  document.getElementById("searchbox").innerHTML = x;
}

function searchWiki(textInput) {
  if (event.keyCode == 13) {
    wikiURL = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=&list=search&continue=-%7C%7C&utf8=1&srsearch=" + textInput.value;
    $.getJSON(wikiURL, function(json) {
      $("#searchResult").html(json.query.search[0].timestamp);
    });  
  }
}


// https://en.wikipedia.org/w/api.php?action=query&format=json&prop=&list=search&continue=-%7C%7C&utf8=1&srsearch=Albert+Einstein
// $("#searchResult").html("<p>" + wikiURL + "</p>");