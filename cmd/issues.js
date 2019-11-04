
const Octokit = require("@octokit/rest");
const csv = require('csv')
const fs = require('fs')
const Bottleneck = require('bottleneck')
require('env2')('./.env');

const { epic, feature, bug } = require('../util/templates')

const octokit = new Octokit({
    auth: process.env.PASS
});

const repoOwner = process.env.OWNER;
const repoProject = process.env.REPO


const issueCreator = (file) => {
    const templateCSV = __dirname + `/../util/csv/${file}.csv`;
  
    // read the relvant csv 
    fs.readFile(templateCSV, 'utf8', (err, data) => {

        if (err) {
            console.error('Error reading file.')
        }
        csv.parse(data, {
            trim: true
        }, (err, csvRows) => {
            if (err) throw err
            const cols = csvRows[0]
            csvRows.shift()

            // get indexes of the fields we need
            const titleIndex = cols.indexOf('title')
            const labelsIndex = cols.indexOf('labels')
            const decsIndex = cols.indexOf('description')
            const goalsIndex = cols.indexOf('goals')
            const hyposIndex = cols.indexOf('hypothesis')
            const acsIndex = cols.indexOf('accept criteria')
            const stakeholdersIndex = cols.indexOf('stakeholders')
            const timelimesIndex = cols.indexOf('timeline')
            const priorityIndex = cols.indexOf('priority')
            const reproduceIndex = cols.indexOf('reproduce')
            const expectationsIndex = cols.indexOf('should be')
            const currentIndex = cols.indexOf('current')
            const imageIndex = cols.indexOf('image') 
            const logsIndex = cols.indexOf('logs')
            const contextIndex = cols.indexOf('context')
            const desktopIndex = cols.indexOf('desktop')
            const mobileIndex = cols.indexOf('mobile')
            const otherIndex = cols.indexOf('other')
            const backgroundIndex = cols.indexOf('background')
            const assumptionsIndex = cols.indexOf('assumptions')
            const testIndex = cols.indexOf('tests')
            const idealIndex = cols.indexOf('ideal')
            const difficultyIndex = cols.indexOf('difficulty')
            const fitIndex = cols.indexOf('fit in the current') 
            const requesterIndex = cols.indexOf('requester')           

           

            if (titleIndex === -1) {
                console.error('Title required by GitHub, but not found in CSV.')
                process.exit(1)
            }
            csvRows.forEach((row) => {
                const sendObj = {
                    owner: repoOwner,
                    repo: repoProject,
                    title: row[titleIndex]
                }

               
                const issueBody = {
                    desc: row[decsIndex],
                    hypo: row[hyposIndex],
                    goal: row[goalsIndex],
                    ac: row[acsIndex],
                    stakeholders: row[stakeholdersIndex],
                    timeline: row[timelimesIndex],
                    priority: row[priorityIndex],
                    repo: row[reproduceIndex],
                    expect: row[expectationsIndex],
                    current: row[currentIndex],
                    image: row[imageIndex],
                    logs: row[logsIndex],
                    context: row[contextIndex],
                    desktop: row[desktopIndex],
                    mobile: row[mobileIndex],
                    comments: row[otherIndex],
                    background: row[backgroundIndex],
                    asump: row[assumptionsIndex],
                    design: row[imageIndex],
                    test: row[testIndex],
                    ideal: row[idealIndex],
                    dif: row[difficultyIndex],
                    fit: row[fitIndex],
                    requester: row[requesterIndex]
                }


                // Switch case depending on flag 
                switch (file) {
                    case 'epics':
                        sendObj.body = epic(issueBody);
                        break;
                    case 'features':
                        sendObj.body = feature(issueBody);
                        break;
                    case 'bugs':
                        sendObj.body = bug(issueBody);
                        break;
                    default:
                        console.error(`"${file}" is not a valid flag for hub-ext.`);
                        break;
                }
               

                // if we have a labels column, pass that.
                if (labelsIndex > -1 && row[labelsIndex] !== '') {
                    sendObj.labels = row[labelsIndex].split(',')
                }


                // rate limiting 
                var limiter = new Bottleneck({ reservoir: 200 })


                limiter.submit(octokit.issues.create, sendObj, function (err, res) {
                    // console.log(JSON.stringify(res));
                    if (err) { console.error('ERROR', err) } else {
                        console.log('===> Created issue #' + res.number)
                        // state column and state=closed, close the issue
                        if (stateIndex > -1 && row[stateIndex] === 'closed') {
                            console.log('===> Closing issue #' + res.number)
                            var updateIssue = {
                                owner: repoOwner,
                                repo: repoProject,
                                number: res.number,
                            }
                            limiter.submit(octokit.issues.edit, updateIssue, function (err, res) {
                                // console.log(JSON.stringify(res));
                                if (err) { console.error('ERROR', err) };
                                if (limiter.nbQueued() === 0 && limiter.nbRunning() === 0) {

                                }
                            })
                        } else {
                            if (limiter.nbQueued() === 0 && limiter.nbRunning() === 0) {

                            }
                        }
                    }
                })
            })
        })
    })

}





module.exports = issueCreator;