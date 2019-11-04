# cli to simplify github issue generation 

the initial idea was, for a CLI to wrap hub cli, so multiple issues can be made from a csv. 

However, I decided to make this more independent and t also include a selection of git hub templates 

---
Templates 

Epic
New feature
Bug 
PR

---
# Epic

## Description
Brief summary of what this Epic is, whether it's a larger project, goal, or user story. Describe the job to be done, which persona this Epic is mainly for, or if more multiple, break it down by user and job story.

## Initiative / goal
Describe how this Epic impacts an initiative the business is working on.

### Hypothesis
What is your hypothesis on the success of this Epic? Describe how success will be measured and what leading indicators the team will have to know if success has been hit.

## Acceptance criteria and must have scope
Define what is a must-have for launch and in-scope. Keep this section fluid and dynamic until you lock-in priority during planning.

## Stakeholders
Describe who needs to be kept up-to-date about this Epic, included in discussions, or updated along the way. Stakeholders can be both in Product/Engineering, as well as other teams like Customer Success who might want to keep customers updated on the Epic project.

## Timeline
What's the timeline for this Epic, what resources are needed, and what might potentially block this from hitting the projected end date.

---

# New feature 

# New Feature Proposal Template
Provide a short single paragraph description for the feature. 


## Background
Provide any additional background for the feature. I.e.: user scenarios, business value, etc.

## Constraints and Assumptions
Call out any constraint and/or assumption relevant for the development and use of this feature. 

## Design Changes
image: Provide a high level description of the design highlighting the impacted OSC components, i.e.: REST API, data entities, SDKs, etc. 


## Tests
Describe here any new test requirement for this feature. This can include: virtualization platform, test infrastructure, stubs, etc. 


## Describe the ideal solution or feature request
A clear and concise description of what the customer wants to happen.

## Difficulty, impact, and usage score
| Technical difficulty | User goals | Usage frequency |
|--------------------| --------------------| --------------------|
| ie. Small, medium, large (filled out after submission)|  ie. How important is this to the user, what the user wants to accomplish | ie. Daily, weekly, monthly |

## How does this tie into our current product?
Describe whether this request is related to an existing workflow, feature, or otherwise something in the product today. Or, does this open us up to new markets and innovative ideas?

## Who asked for this?
Add more on who asked for this, ie. company, person, how much they pay us, what their tier is, are they a strategic account, etc.
---


# Bugs 

## Describe the bug
A clear and concise description of what the bug is.

## Priority + Rationale

- Add stats if available on % of customers impacted
- Is this visible by all customers, or in a high traffic area?
- Is this tech debt?
- If applicable, what % of revenue is possibly impacted by this?

## Steps to Reproduce
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

## What do you believe the expected behavior is
A clear and concise description of what you expected to happen.


# Current Behavior

What is the current behavior?

## Relevant screenshots
If applicable, add screenshots to help explain your problem.

## Failure Logs

Any logs, error output, etc?


## Context
Where is this occurring and more details about the environment (computer setup) of the customer.

**Desktop (please complete the following information):**
 - OS: [e.g. iOS]
 - Browser [e.g. chrome, safari]
 - Version [e.g. 22 or web app]

**Mobile (please complete the following information):**
 - Device: [e.g. iPhone6]
 - OS: [e.g. iOS8.1]
 - Browser [e.g. stock browser, safari]
 - Version [e.g. 22]


## Any other comments?

---
PRs Currently beyond this version of CLI

# PR 
## Pull request type
 Bugfix
 Feature
 Code style update (formatting, renaming)
 Refactoring (no functional changes, no api changes)
 Build related changes
 Documentation content changes
 Other (please describe):

## Description

Please include a summary of the change and which issue is fixed. Please also include relevant motivation and context. List any dependencies that are required for this change.

## What is the current behavior?

## Issue Number:


## What is the new behavior?

## Does this introduce a breaking change?
 Yes
 No
Other information

## Any relevant logs, error output, etc?


## How Has This Been Tested?

Please describe the tests that you ran to verify your changes. Provide instructions so we can reproduce. Please also list any relevant details for your test configuration

**Test Configuration**:

Code ` ` 

## Where has this been tested?
Desktop / Mobile

## Any other comments?