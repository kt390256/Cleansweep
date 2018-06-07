/**
 *
 * @author  CSC 648 Team 11
 * @version 1.0.0 03/30/2018
 */

 $(".btn-delete").click(function(){
     let issueID = $(this).attr('id');
     $.ajax({
      type: "POST",
      url: '/issue/delete/' + issueID,
      error: function() { console.log('error');}
    });
   console.log("Issue ID: ", issueID);
   $("#issue-" + issueID).remove();
 });

 $(".btn-completed").click(function(){
   let issueID = $(this).attr('id');
   $.ajax({
    type: "PATCH",
    url: '/issue/update/' + issueID + '/completed',
    success: function() { location.reload(); },
    error: function() { console.log('error');}
  });
 });

 $(".btn-progress").click(function(){
   let issueID = $(this).attr('id');
   $.ajax({
    type: "PATCH",
    url: '/issue/update/' + issueID + '/in-progress',
    success: function() { location.reload(); },
    error: function() { console.log('error');}
  });
 });
