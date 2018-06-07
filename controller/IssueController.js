/**
 *
 * @author  CSC 648 Team 11
 * @version 1.0.0 03/30/2018
 */
const queriesController = require('../controller/queriesController')
const queries           = require('../db/queries');
const models            = require('../models');
const formidable        = require("formidable");

/**
 * Module creates issue then stores data in DB
 */
module.exports.addIssue = function(request, response) {

  request.checkBody('title', 'issue title is required').notEmpty();
  request.checkBody('parkName', 'park name is required').notEmpty();
  request.checkBody('issueType', 'Issue type is required').notEmpty();
  request.checkBody('description', 'description is required').notEmpty();

  let errors = request.validationErrors();

  async function submitIssue() {
    let Issue;
    let issueTitle;
    let parkName;
    let issueType;
    let description;
    let image;
    let parkNameEncoded;

    let newIssue = {
      title: issueTitle,
      parkName: parkName,
      parkNameEncoded: parkNameEncoded,
      issueType: issueType,
      description: description,
      status: 'open',
      author: request.user.dataValues.username,
      img: image
    }

    var form = formidable.IncomingForm();

    await new Promise(resolve => {

      form.parse(request, function(err, fields, files) {
        newIssue.title = fields.title;
        newIssue.parkName = fields.parkName;
        newIssue.parkNameEncoded = encodeURIComponent(newIssue.parkName);
        newIssue.issueType = fields.issueType;
        newIssue.description = fields.description;

        // fileBegin runs before parse so creating a new Issue after file Begin
        Issue = new models.Issue(newIssue);

        Issue.save((err) => {
          if (err) {
            return response.send(err);
          } else {}
        });
        return response.redirect('/dashboard');

      }) // end of parse
      form.on('fileBegin', function(fields, file) {
        newIssue.img = file.name;
      });
      // if error happens
      form.on('error', function(err) {
        console.log(err);
      });
      resolve();
    }) // end of await
  } // end of async
  submitIssue();
};

/**
 * Module updates the status of the issue in the DB
 */
module.exports.updateIssueStatus = function(request, response, next) {
  queriesController.UpdateIssueStatus(request.params.issueId, request.params.statusUpdate);
  return response.redirect('/dashboard');
};

module.exports.updateIssueCategory = function(request, response, next) {
  queriesController.UpdateIssueCategory(request.params.issueId, request.params.categoryUpdate);
  return response.redirect('/dashboard');
}

/**
 * Module retrieves issue details base on issueId
 */
module.exports.getIssueDetail = function(request, response, next) {
  queriesController.GetIssueDetail(request.params.issueId)
  .then(data => {
    response.render('issue-detail',
      {
        title: 'Issue Details',
        user: request.user,
        description: 'Issue Details',
        css: ['bootstrap.min.css','font-awesome.min.css','style.css'],
        js: ['jquery.min.js','bootstrap.min.js','issue-actions.js'],
        issue: data
      }
    );
  })
  .catch(err => {
    console.log(err)
  });
};

/**
 * Module deletes issue from DB
 */
module.exports.deleteIssue = function(request, response, next) {
  queriesController.DeleteIssue(request.params.issueId);
  return response.redirect('/dashboard');
}
