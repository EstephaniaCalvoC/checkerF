#!/usr/bin/node

const colors = require('colors')
const fetch = require('node-fetch')
const HBurl = 'https://intranet.hbtn.io'
const got = require('got')



const validResponse = response => {
    if (!response.ok) {
        console.log('Error: ', response.status)
        if (response.status === 429) {
            console.log('Exceeded request limit! Please try again in an hour.')
        }
        process.exit(response.status)
    }
}

const getToken = async userInfo => {
    const url = `${HBurl}/users/auth_token.json`

    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    })
    validResponse(response)

    let data = await response.json()
    return data.auth_token
}

const getProject = async(projectId, authToken) => {
    const url = `${HBurl}/projects/${projectId}.json?auth_token=${authToken}`

    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })

    validResponse(response)

    let data = await response.json()
    return data
}

const correctionRequest = async(taskId, authToken) => {
    url = `${HBurl}/tasks/${taskId}/start_correction.json?auth_token=${authToken}`

    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })

    validResponse(response)

    let data = await response.json()
    return data.id
}

const getResult = async(dataId, authToken, taskTitle) => {
    url = `${HBurl}/correction_requests/${dataId}.json?auth_token=${authToken}`
    console.log('\n')
    console.log(dataId)
    console.log(url)
    console.log(taskTitle.bgBrightGreen + 'Results:'.bgBrightGreen)
    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
    validResponse(response)
    let burger = await response.json()
    const boo = burger.result_display.checks
    for (const b of boo) {
        title = b.title
        if (b.passed === true) {
            if (b.check_label === 'requirement') {
                console.log('📝 ' + title.green)
            }
            if (b.check_label === 'code') {
                console.log('🍔 ' + title.green)
            }
            if (b.check_label === 'answer') {
                console.log('🤯 ' + title.yellow)
            }
            if (b.check_label === 'efficiency') {
                console.log('🚀 ' + title.magenta)
            }
        } else {
            console.log('💩 ' + title.bgRed)
        }
    }
}

async function main() {
    const userInfo = {
        api_key: '3e0b8a84874a39f4aa4eab6be7f41498',
        email: '2394@holbertonschool.com',
        password: 'p',
        scope: 'checker'
    }
    const authToken = await getToken(userInfo)
    const project = await getProject('233', authToken)
    const burger = project.tasks
    for (const bu of burger) {
        const checkID = await correctionRequest(bu.id, authToken)
        const taskTitle = bu.title
        setTimeout(function() {
            return getResult(checkID, authToken, taskTitle)
        }, 8000)
    }
}

main()