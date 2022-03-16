import React, { useEffect } from 'react'
import { useGlobalState, useGlobalMutation } from '../utils/container'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import AgoraRTC from 'agora-rtc-sdk'
import useDevices from '../utils/use-devices'
import useRouter from '../utils/use-router'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'

Index.propTypes = {
  name: PropTypes.string,
  resolution: PropTypes.string,
  cameraDevice: PropTypes.string,
  microphoneDevice: PropTypes.string,
  video: PropTypes.bool,
  audio: PropTypes.bool
}

export default function Index () {

  const routerCtx = useRouter()
  const stateCtx = useGlobalState()
  const mutationCtx = useGlobalMutation()
  const [cameraList, microphoneList] = useDevices()
  let navigate = useNavigate();

  const handleClick = () => {
    if (!stateCtx.config.channelName) {
      mutationCtx.toastError('You need enter the topic')
      return
    }

    mutationCtx.startLoading()
    navigate(`/meeting/${stateCtx.config.channelName}`)
  }

  const handleChange = (evt) => {
    const { value, checked } = evt
    console.log('value', evt)
    mutationCtx.updateConfig({
      host: value === 'host'
    })
  }

  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col>
          <Card className="mx-auto p-3" style={{width: '50%'}}>
            <span className="version">Web SDK Version: {AgoraRTC.VERSION}</span>
            <Form>
              <Form.Select 
                aria-label="Resolución"
                className="my-1"
                value={stateCtx.config.resolution}
                onChange={(evt) => {
                  mutationCtx.updateConfig({
                    resolution: evt.target.value
                  })
                }}
                inputProps={{
                  name: 'resolution',
                  id: 'resolution'
                }}
              >
                <option>Open this select menu</option>
                <option value="480p">480p</option>
                <option value="720p">720p</option>
                <option value="1080p">1080p</option>
              </Form.Select>
              <Form.Select
                aria-label="Codec"
                className="my-1"
                value={stateCtx.codec}
                onChange={(evt) => {
                  mutationCtx.setCodec(evt.target.value)
                }}
                inputProps={{
                  name: 'codec',
                  id: 'codec'
                }}
              >
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
            </Form>
            <Form>
                <Form.Check
                  inline
                  label="host"
                  value="host"
                  name="group1"
                  type="radio"
                  id="inline-radio-1"
                  checked={stateCtx.config.host}
                  onClick={handleChange}
                />
                <Form.Check
                  inline
                  label="audience"
                  value="audience"
                  name="group1"
                  type="radio"
                  id="inline-radio-2"
                  checked={!stateCtx.config.host}
                  onClick={handleChange}
                />
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Canal del live</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="Nombre del Canal"
                  value={stateCtx.config.channelName}
                  onChange={(evt) => {
                    const PATTERN = /^[a-zA-Z0-9!#$%&()+\-:;<=.>?@[\]^_{}|~,\s]{1,64}$/
                    const value = PATTERN.test(evt.target.value)
                    if (value && evt.target.value.length < 64) {
                      mutationCtx.updateConfig({ channelName: evt.target.value })
                    } else {
                      mutationCtx.updateConfig({ channelName: '' })
                    }
                  }}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleClick}>
                Iniciar Live
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
