

const epic = (body) => {
    return `# Epic

## Description
${body.desc}
## Initiative / goal
${body.goal}

### Hypothesis
${body.hypo}
## Acceptance criteria and must have scope
${body.ac}
## Stakeholders
${body.stakeholders}
## Timeline
${body.timeline}`
}


const feature = (body) => {

    return `## New Feature description
${body.desc} 

## Background
${body.background}

## Constraints and Assumptions
${body.asump}
## Design Changes
${body.design}

## Tests
${body.test}

## Describe the ideal solution or feature request
${body.ideal}

## Difficulty and impact
| Technical difficulty | User goals |
|--------------------| --------------------| 
| ${body.dif}|  ${body.goal} | 

## How does this tie into our current product?
${body.fit}
## Who asked for this?
${body.requester}`
}


const bug = (body) => {
    return `## Describe the bug
${body.desc}

## Priority + Rationale
${body.priority}

## Steps to Reproduce
Steps to reproduce the behavior:
${body.repro}

## What do you believe the expected behavior is
${body.expect}

# Current Behavior
${body.current}

## Relevant screenshots
${body.image}
## Failure Logs
${body.logs}

## Context
${body.context}

** Desktop(please complete the following information):**
${body.desktop}

** Mobile(please complete the following information):**
${body.mobile}


## Any other comments ?
${body.comments}`
}




module.exports = {epic, feature, bug};