/**
 *
 * @author  CSC 648 Team 11
 * @version 1.0.0 03/30/2018
 */

$("#search").keyup(function(event) {
  if (event.keyCode === 13) {
      $("#searchButton").click();
  }
});

$(function() {
  $('#searchButton').click( function(e) {
      var searchtext = $('#search');
      console.log(searchtext);
      e.preventDefault();
      if (searchtext.is(':invalid')) {
        searchtext.removeClass('is-valid').addClass('is-invalid');
        e.preventDefault();
        e.stopPropagation();
      } else {
      searchtext.removeClass('is-invalid').addClass('is-valid');
      this.classList.add('was-validated');
      }
      let searchObj = {};
      searchObj.search = $('#search').val();
      searchObj.category = $('#category').val();
      var reg = new RegExp(pattern="^[a-zA-Z0-9 ]{0,40}$");
      if(reg.test(searchObj.search)){
        $.ajax({
          type: 'POST',
          data: JSON.stringify(searchObj),
          contentType: 'application/json',
          url: '/search',
          success: function(data) {
            let badge;
            let issues = JSON.parse(data);
            let issue = document.getElementById('results');
            issue.innerHTML = "";
            issue.innerHTML += "<p>Showing <strong>" + issues.length + "</strong> out of <strong>" + issues.length  + "</strong> results</p>"
            for(var i = 0; i < issues.length; i++) {
                var issueData = issues[i];
                if(issueData['status'] == 'in-progress') {
                  badge = 'badge-warning';
                } else if (issueData['status'] == 'open') {
                  badge = 'badge-danger';
                } else {
                  badge = 'badge-success';
                }
                issue.innerHTML +=
                                    "<div class=\"card flex-md-row mb-4 box-shadow h-md-250 bg-light\">" +
                                      "<a target=\"_blank\" href=\"/issue-detail/" + issueData['id']  + "\"><img class=\"card-img-left flex-auto d-none d-xl-block\" src=\"https://s3.us-east-2.amazonaws.com/csc648/" + issueData['img'] + "\" style=\"width:400px; height:250px;\" alt=\"Card image cap\"></a>" +
                                      "<div class=\"card-body d-flex flex-column align-items-start\">" +
                                        "<strong class=\"d-inline-block mb-2 text-secondary\">" + issueData['title'] + "</a></strong>" +
                                        "<p class=\"mb-2 d-none d-sm-block\"><strong>Issue Category:</strong> " + issueData['issueType'] + "</p>" +
                                        "<p><strong>Location:</strong> <span class=\"mb-1 text-muted\">" + issueData['parkName'] + "</span></p>" +
                                        "<p class=\"d-none d-md-block\"><strong>Last Update:</strong> <span class=\"mb-1 text-muted\">" + issueData['updatedAt'] + "</span></p>" +
                                        "<strong>Status: <span class=\"badge " + badge + "\">" + issueData['status'] + "</span></strong>" +
                                        "<a class =\"btn btn-outline-secondary my-1\" target=\"_blank\" href=\"/issue-detail/" + issueData['id'] + "\"> More Details</a>" +
                                      "</div>" +
                                      "<a target=\"_blank\" href=\"/issue-detail/" + issueData['id']  + "\"><img class=\"card-img-right flex-auto d-none d-md-block\" src=\"https://maps.googleapis.com/maps/api/staticmap?center=" + issueData['parkNameEncoded'] + "&zoom=13&size=250x250&key=AIzaSyBrbVWz2N4cUR105dWBB2pa-aNKfXrXCC4&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C" + issueData['parkNameEncoded'] +  "\"  style=\"width:250px; height:250px;\" alt=\"Map image cap\"></a>" +
                                    "</div>" +
                                  "</div>";
            }
          },
          error: function() { console.log('error');}
        });
      }
      

  });
});
