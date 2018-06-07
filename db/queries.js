/**
 *
 * @author  CSC 648 Team 11
 * @version 1.0.0 03/30/2018
 */
const user = require('../models').User;
const park = require('../models').Park;
const issue = require('../models').Issue;
const categories = require('../models').Categories;
const sequelize = require('sequelize');

const dbGetCategoryNames = () => {
  return categories.findAll()
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log('err')
    });
}

const dbGetParkNames = () => {
  return park.findAll()
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log('err')
    });
}

const dbGetTeam = () => {
  return user.findAll({
      order: [
        ['id', 'ASC']
      ],
      limit: 6 // only 6 team members
    }).then(data => {
      return data;
    })
    .catch(err => {
      console.log('err')
    });
}

const dbGetIssues = () => {
  return issue.findAll({
      order: [
        ['id', 'DESC']
      ]
    }).then(data => {
      return data;
    })
    .catch(err => {
      console.log('err')
    });
}

const dbGetIssueDetail = (issueId) => {
  return issue.findOne({
    where: {
      id: issueId
    }
  }).then(data => {
    return data;
  }).catch(err => {
    console.log('err');
  })
}

const dbGetDefaultIssues = () => {
  return issue.findAll({
      order: [
        ['id', 'DESC']
      ],
      limit: 6
    }).then(data => {
      return data;
    })
    .catch(err => {
      console.log('err')
    });
}

const dbGetTeamMember = (userId) => {
  return user.findOne({
    where: {
      id: userId
    }
  }).then(data => {
    return data;
  }).catch(err => {
    console.log('err')
  })
}

const dbUpdateIssueStatus = (issueId, statusUpdate) => {
  return issue.findOne({
    where: {
      id: issueId
    }
  }).then(issue => {
    if (issue) {
      issue.updateAttributes({
        status: statusUpdate
      })
      .success(function () {console.log('GOT HERE QUERY 107')})
    }
  }).catch(err => {
    console.log('err')
  })
}

const dbUpdateIssueCategory = (issueId, categoryUpdate) => {
  return issue.findOne({
    where: {
      id: issueId
    }
  }).then(issue => {
    if (issue) {
      issue.updateAttributes({
        issueType: categoryUpdate
      }).success(function() {console.log('GOT HERE QUERY 122')})
    }
  }).catch(err => {
    console.log('err')
  })
}


const dbDeleteIssue = (issueId) => {
  return issue.destroy({
    where: {
      id: issueId
    }
  }).catch(err => {
    console.log('err');
  })
}

const dbGetParks = (key) => {
  return park.findAll({
    where: {
      $or: {
        name: {
          $iLike: '%' + key + '%'
        },
        city: {
          $iLike: '%' + key + '%'
        },
        state: {
          $iLike: '%' + key + '%'
        },
        zipcode: {
          $iLike: '%' + key + '%'
        },
        lat: {
          $iLike: '%' + key + '%'
        },
        lon: {
          $iLike: '%' + key + '%'
        },
        description: {
          $iLike: '%' + key + '%'
        }
      }
    }
  }).then(data => {
    return data;
  }).catch(err => {
    console.log('err')
  })
}

const searchThis = (key, category) => {
  return issue.findAll({
    where: {
      $or: {
        title: {
          $iLike: '%' + key + '%'
        },
        parkName: {
          $iLike: '%' + key + '%'
        },
        issueType: {
          $iLike: '%' + key + '%'
        },
        description: {
          $iLike: '%' + key + '%'
        },
        status: {
          $iLike: '%' + key + '%'
        },
        author: {
          $iLike: '%' + key + '%'
        }
      }
    }
  }).then(data => {
      let Issues = [];
      if(category == 'All') {
          data.forEach( function(issue) {
            Issues.push({
              id: issue['id'],
              title: issue['title'],
              parkName: issue['parkName'],
              parkNameEncoded: issue['parkNameEncoded'],
              issueType: issue['issueType'],
              description: issue['description'],
              status: issue['status'],
              author: issue['author'],
              img: issue['img'],
              updatedAt: issue['updatedAt']
            })
          })
          return Issues;
      } else {
        data.forEach( function(issue) {
          if(category == issue['issueType']) {
            Issues.push({
              id: issue['id'],
              title: issue['title'],
              parkName: issue['parkName'],
              parkNameEncoded: issue['parkNameEncoded'],
              issueType: issue['issueType'],
              description: issue['description'],
              status: issue['status'],
              author: issue['author'],
              img: issue['img'],
              updatedAt: issue['updatedAt']
            })
          }
        })
        return Issues;
      }
  }).catch(err => {
    console.log('err')
  })
}

const searchDB = () => {
  return issue.findAll({
      order: [
        ['id', 'DESC']
      ],
      limit: 10
    }).then(data => {
      return data;
    })
    .catch(err => {
      console.log('err')
    });
}

module.exports = {
  dbGetTeam,
  dbGetTeamMember,
  dbGetParks,
  searchThis,
  searchDB,
  dbGetDefaultIssues,
  dbGetIssueDetail,
  dbGetCategoryNames,
  dbGetParkNames,
  dbGetIssues,
  dbDeleteIssue,
  dbUpdateIssueStatus,
  dbUpdateIssueCategory
}
