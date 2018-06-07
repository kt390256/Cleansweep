/**
 *
 * @author  CSC 648 Team 11
 * @version 1.0.0 03/30/2018
 */
const queries = require('../db/queries');

module.exports.GetTeam = () => {
  return queries.dbGetTeam()
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log('err')
    })
}

module.exports.getCategoryNames = () => {
  return queries.dbGetCategoryNames()
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log('err')
    })
}

module.exports.getParkNames = () => {
  return queries.dbGetParkNames()
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log('err')
    })
}

module.exports.GetIssues = () => {
  return queries.dbGetIssues()
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log('err')
    })
}

module.exports.GetIssueDetail = (issueId) => {
  return queries.dbGetIssueDetail(issueId)
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log('err')
    })
}

module.exports.GetDefaultIssues = () => {
  return queries.dbGetDefaultIssues()
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log('err')
    })
}

module.exports.GetTeamMember = (userId) => {
  return queries.dbGetTeamMember(userId)
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log('err')
    })
}

module.exports.UpdateIssueStatus = (issueId, statusUpdate) => {
  return queries.dbUpdateIssueStatus(issueId, statusUpdate);
}

module.exports.UpdateIssueCategory = (issueId, categoryUpdate) => {
  return queries.dbUpdateIssueCategory(issueId, categoryUpdate);
}

module.exports.DeleteIssue = (issueId) => {
  return queries.dbDeleteIssue(issueId);
}

module.exports.GetParks = (key) => {
  return queries.dbGetParks(key)
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log('err')
    })
}

module.exports.SearchThis = (key, category) => {
  return queries.searchThis(key, category)
    .then(data => { return data })
    .catch(err => {
      console.log('err')
    })
}

module.exports.SearchDB = () => {
  return queries.searchDB()
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log('err')
    })
}
