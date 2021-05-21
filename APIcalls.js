const HBurl = "https://intranet.hbtn.io";

const correctionRequest = async (taskId, authToken) => {
  const url = `${HBurl}/tasks/${taskId}/start_correction.json?auth_token=${authToken}`
  let response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  let data = await response.text();
  console.log(data);


  // let data = await response.text();
  // console.log(data);
//   statusCode: {
//     429: () => {
//       alert("Exceeded request limit! Please try again in an hour.");
//     }
//   }
};

correctionRequest ('1007', '5fc7e48d3c57dd5c2c17ad825d8c35e0')

