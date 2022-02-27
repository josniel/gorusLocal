import React from 'react'
import useDevices from '../utils/use-devices'
import PropTypes from 'prop-types'
import { useGlobalState, useGlobalMutation } from '../utils/container'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
// import AgoraRTC from 'agora-rtc-sdk'
// import { Link } from 'react-router-dom'
// import { useState } from 'react'

Settings.propTypes = {
  name: PropTypes.string,
  resolution: PropTypes.string,
  cameraDevice: PropTypes.string,
  microphoneDevice: PropTypes.string,
  video: PropTypes.bool,
  audio: PropTypes.bool
}

export default function Settings () {
  const stateCtx = useGlobalState()
  const mutationCtx = useGlobalMutation()
  const [cameraList, microphoneList] = useDevices()
  // const [ host, setHost ] = useState(null);
  // const [ channel, setChannel ] = useState(null);

  // const handleChange = (evt) => {
  //   const { value, checked } = evt
  //   console.log('value', evt, value, checked)
  //   console.log('host', host)
  //   /* mutationCtx.updateConfig({
  //     host: value === 'host'
  //   }) */
  // }

  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col>
          <Card className="mx-auto p-3" style={{width: '50%'}}>
            <Form>
              <Form.Select aria-label="Resolución" className="my-1">
                <option>Open this select menu</option>
                <option value="480p">480p</option>
                <option value="720p">720p</option>
                <option value="1080p">1080p</option>
              </Form.Select>
              <Form.Select aria-label="Codec" className="my-1">
                <option>Open this select menu</option>
                <option value="h264">h264</option>
                <option value="vp8">vp8</option>
              </Form.Select>
              <Form.Select
                aria-label="Camara"
                className="my-1"
                value={stateCtx.config.cameraId}
                onChange={(evt) => {
                  mutationCtx.updateConfig({
                    cameraId: evt.target.value
                  })
                }}
                inputProps={{
                  name: 'camera',
                  id: 'camera'
                }}
              >
                <option>Open this select menu</option>
                {cameraList.map((item, key) => (
                  <option key={key} value={item.value}>{item.label}</option>
                ))}
              </Form.Select>
              <Form.Select
                aria-label="Microfono"
                className="my-1"
                value={stateCtx.config.microphoneId}
                onChange={(evt) => {
                  mutationCtx.updateConfig({
                    microphoneId: evt.target.value
                  })
                }}
                inputProps={{
                  name: 'microphone',
                  id: 'microphone'
                }}
              >
                <option>Open this select menu</option>
                {microphoneList.map((item, key) => (
                  <option key={key} value={item.value}>{item.label}</option>
                ))}
              </Form.Select>
              <Form.Check 
                type="switch"
                label="Video"
                checked={stateCtx.muteVideo}
                onChange={() => {
                  mutationCtx.setVideo(!stateCtx.muteVideo)
                }}
                value={stateCtx.muteVideo}
                color="primary"
              />
              <Form.Check 
                type="switch"
                label="Audio"
                checked={stateCtx.muteAudio}
                onChange={() => {
                  mutationCtx.setAudio(!stateCtx.muteAudio)
                }}
                value={stateCtx.muteAudio}
                color="primary"
              />
              <Form.Check 
                type="switch"
                label="Perfil"
                checked={stateCtx.profile}
                onChange={() => {
                  mutationCtx.setProfile(!stateCtx.profile)
                }}
                value={stateCtx.profile}
                color="primary"
              />
              <Button variant="primary">
                Guardar
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
