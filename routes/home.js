/**
 *
 * @author  CSC 648 Team 11
 * @version 1.0.0 03/30/2018
 */
const express               = require('express');
const router                = express.Router();
const aws                   = require('aws-sdk');
const AuthController        = require('../controller/AuthController');
const AboutController       = require('../controller/AboutController');
const TeamController        = require('../controller/TeamController');
const ParkController        = require('../controller/ParkController');
const IssueController       = require('../controller/IssueController');
const SearchController      = require('../controller/SearchController');
const HomeController        = require('../controller/HomeController');
const ReportIssueController = require('../controller/ReportIssueController');
const DashboardController   = require('../controller/DashboardController');
const passport              = require('passport');

/*
 * WILL DELETE
 */
const accessKeyId     = process.env.AWS_ACCESS_KEY_ID || "AKIAJGX3MAWU2T4QQJTQ";
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY || "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";
const S3_BUCKET       = process.env.S3_BUCKET || "csc648";

aws.config.update({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    region: 'us-east-2'
});

/*
 * Respond to GET requests to /sign-s3.
 * Upon request, return JSON containing the temporarily-signed S3 request and
 * the anticipated URL of the image.
 */
router.get('/sign-s3', (req, res) => {
  const s3 = new aws.S3();
  const fileName = req.query['file-name'];
  const fileType = req.query['file-type'];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    res.write(JSON.stringify(returnData));
    res.end();
  });
});

// Home page route.
router.get('/', HomeController.getDefaultIssues);

// About page route.
router.get('/about', AboutController.getTeam);

// Login page route.
router.get('/login', function (req, res) {
  res.render('login',
    { title: 'Login - CSC 648',
      user: req.user,
      description: 'Term Project',
      css: ['bootstrap.min.css','font-awesome.min.css','login.css'],
      js: ['jquery.min.js','bootstrap.min.js']
    }
  );
})

// Terms-of-Use page route.
router.get('/terms-of-use', function (req, res) {
  res.render('terms-of-use',
    { title: 'Terms of use - CSC 648',
      description: 'Terms of use',
      css: ['bootstrap.min.css','font-awesome.min.css'],
      js: ['jquery.min.js','bootstrap.min.js']
    }
  );
})

// Sign up page route.
router.get('/sign-up', function (req, res) {
  res.render('sign-up',
    { title: 'Sign Up - CSC 648',
      user: req.user,
      description: 'Term Project',
      css: ['bootstrap.min.css','font-awesome.min.css','sign-up.css'],
      js: ['jquery.min.js','bootstrap.min.js']
    }
  );
})

router.get('/users/:userId', TeamController.getTeamMember);

router.get('/dashboard', AuthController.isManager, DashboardController.getIssues);

router.post('/search', SearchController.search);

router.get('/report-issue', ReportIssueController.getData);

router.get('/issue-detail/:issueId', IssueController.getIssueDetail);

router.post('/issue/update/:issueId/:statusUpdate', IssueController.updateIssueStatus);

router.post('/issue/category/:issueId/:categoryUpdate', IssueController.updateIssueCategory);

router.post('/issue/delete/:issueId', IssueController.deleteIssue);

// Add Park Form
router.get('/add-park', AuthController.isAuthenticated, function(req , res) {
  res.render('add-park',
    { title: 'Add Park',
      user: req.user,
      description: 'Add Park',
      css: ['bootstrap.min.css','font-awesome.min.css'],
      js: ['jquery.min.js','bootstrap.min.js']
    }
  );
});

// Add Issue
router.post('/report-issue', IssueController.addIssue);

// Add Park
router.post('/add-park', ParkController.addPark);

// Login Auth
router.post('/dashboard', AuthController.login);

//lazy registration
router.post('/lazy-login',AuthController.lazyRegLogin);

// Sign Up
router.post('/sign-up', AuthController.create);

//lazy sign up
router.post('/lazy-sign-up', AuthController.lazyRegCreate);

// Logout Page
router.get('/logout', AuthController.logout);

module.exports = router;
