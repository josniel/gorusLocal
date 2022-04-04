import React from 'react'
import { useGlobalState, useGlobalMutation } from '../utils/container'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import api from '../utils/axios'
import { useState } from 'react'
import AgoraRTM from 'agora-rtm-sdk'
// import AgoraRTC from 'agora-rtc-sdk'
// import { Link } from 'react-router-dom'


const Settings = () => {
  const stateCtx = useGlobalState()

  // Parameters for the login method
 let options = {
  token: "",
  uid: ""
}

// Whether to stop the token renew loop
let stopped = false

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function fetchToken(uid) {

  return new Promise(function (resolve) {
      api.post('setToken', {
          uid: uid,
      }, {
          headers: {
              'Content-Type': 'application/json; charset=UTF-8'
          }
      })
          .then(function (response) {
              const token = response.data;
              console.log('token', token)
              resolve(token);
          })
          .catch(function (error) {
              console.log(error);
          });
  })
}

async function loginRTM()
{

  // Your app ID
  const appID = "646f313177d140da8c072fbe80191392"

  // Initialize the client
  const client = AgoraRTM.createInstance(appID)

  // Display connection state changes
  client.on('ConnectionStateChanged', function (state, reason) {
      console.log("State changed To: " + state + " Reason: " + reason)
  })

  // Set RTM user ID
  options.uid = 'prueba'
  // Get Token
  options.token = await fetchToken(options.uid)
  // Log in to RTM
  console.log('options', options)
  await client.login(options)

  while (!stopped)
  {
      // Renew a token every 30 seconds for demonstration purposes.
      // Agora recommends that you renew a token regularly, such as every hour, in production.
      await sleep(30000)
      options.token = await fetchToken(options.uid)
      client.renewToken(options.token)

      let currentDate = new Date();
      let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

      console.log("Renew RTM token at " + time)
  }

}

loginRTM()

  const [ channel, setChannel ] = useState(null);

  const setChannel_ = async () => {
    // const body = { email, password }
    // console.log('body :>> ', body);
    /* await api.post('set', body).then(res => {
        if (res) { // Se debe ejecutar una mutacion que modifique el state con sessionInfo
        // console.log('res', res)
        }
    }) */
  }  

  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col>
          <Card className="mx-auto p-3" style={{width: '50%'}}>
              <h1>Token demo</h1>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="text-white mx-4"><b>Ingresa el nombre del canal</b></Form.Label>
                  <Form.Control style={{borderRadius: '20px'}} type="email" onChange={(evt) => setChannel(evt.target.value)}/>
                </Form.Group>
                <Button variant="dark" style={{borderRadius: '20px', width: '40%'}} onClick={setChannel_}>
                  Crear Canal
                </Button>
              </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Settings;
