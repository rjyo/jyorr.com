google.load('search', '1', {language : 'en'});
google.setOnLoadCallback(function() {
    var customSearchControl = new google.search.CustomSearchControl('010541413504069420584:gfnlu4zkb8m');
    customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
    customSearchControl.setSearchCompleteCallback(null, onQueryComplate);
    customSearchControl.setLinkTarget(google.search.Search.LINK_TARGET_SELF);

    var options = new google.search.DrawOptions();
    options.setSearchFormRoot('search');
    customSearchControl.draw('cse', options);
}, true);

function onQueryComplate() {
  $(".cse").show();
  $("#tweet").hide();
  $("#page-loading").hide();
  $("#pagination").hide();
  $("div").filter(function() {
    return this.id.match(/page-\d+/);
  }).hide();
  $("#cse-search-keyword").html($("input.gsc-input").val());
}

