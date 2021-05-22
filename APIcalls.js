const HBurl = "https://intranet.hbtn.io";
const fetch = require('node-fetch');
const execSync = require('child_process').execSync;
const axios = require('axios');
const fs = require('fs');


const validResponse = (response) => {
  if (!response.ok) {
    console.log("Error: ", response.status)
    if (response.status === 429)
    {
      console.log("Exceeded request limit! Please try again in an hour.");
    }
    process.exit(response.status)
  }
}

const getToken = async (userInfo) => {
  const url = `${HBurl}/users/auth_token.json`

  let response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo)
  });

  validResponse(response);

  let data = await response.json();
  return data.auth_token;
};

const getProject = async (projectId, authToken) => {
  const url = `${HBurl}/projects/${projectId}.json?auth_token=${authToken}`

  let response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  validResponse(response);

  let data = await response.json();
  return data;
};

const correctionRequest = async (taskId, authToken) => {
  url = `${HBurl}/tasks/${taskId}/start_correction.json?auth_token=${authToken}`

  let response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  validResponse(response);

  let data = await response.json();
  return data.id
};

const getResult =  () => {
  // command = `./results.py ${dataId} ${authToken}`;
  command = `./results.py > results.json`;
  execSync(command, { encoding: 'utf-8' });
  fs.readFile("./results.json", 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let results = JSON.parse(data) 
    console.log(results);
    console.log(results.result_display.checks)
  }
}
);
  

};

// const getResult = async (dataId, authToken) => {
//   url = `${HBurl}/correction_requests/${dataId}.json?auth_token=${authToken}`;
//   console.log(url)
//   let response = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   validResponse(response);
//   let data = await response.json();
//   return data;
// }

// const getResult = async (dataId, authToken) => {
//   url = `${HBurl}/correction_requests/${dataId}.json?auth_token=${authToken}`;
//   console.log(url)
//   axios.get(url)
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   });

//   validResponse(response);

//   console.log(response)

//   let data = await response.json();
//   return data;
// };

async function main () {
  const userInfo = { "api_key": "5fc7e48d3c57dd5c2c17ad825d8c35e0",
  "email": "2177@holbertonschool.com",
  "password": "uogxrl-0767",
  "scope": "checker"}
  const authToken = await getToken(userInfo);
  const project = await getProject('333', authToken);
  const checkID = await correctionRequest('2550', authToken);
  
  console.log(checkID)
  // getResult('2550', authToken)
  getResult()
  // console.log(await getResult(checkID, authToken))


  // url = `${HBurl}/correction_requests/${checkID}.json?auth_token=${authToken}`;
  // console.log(url)
  // let response = await fetch(url, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   }
  // });

  // validResponse(response);
  // let data = await response.json();
  // console.log(data);

}

main()

