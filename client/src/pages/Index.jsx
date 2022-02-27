import React, { useEffect } from 'react'
import { useGlobalState, useGlobalMutation } from '../utils/container'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import AgoraRTC from 'agora-rtc-sdk'
import { Link } from 'react-router-dom'
import { useState } from 'react'



const Index = () => {
  const stateCtx = useGlobalState()
  const mutationCtx = useGlobalMutation()
  const [ host, setHost ] = useState(null);
  const [ channel, setChannel ] = useState(null);

  useEffect(() => {
    if (stateCtx.loading === true) {
      mutationCtx.stopLoading()
    }
  }, [stateCtx.loading, mutationCtx])

  const handleClick = () => {
    const config = { host, channel }
    console.log('config', config)
    if (!stateCtx.config.channelName) {
      mutationCtx.toastError('You need enter the topic')
      return
    }

    mutationCtx.startLoading()
    /* routerCtx.history.push({
      pathname: `/meeting/${stateCtx.config.channelName}`
    }) */
  }

  const handleChange = (evt) => {
    const { value, checked } = evt
    console.log('value', evt, value, checked)
    console.log('host', host)
    /* mutationCtx.updateConfig({
      host: value === 'host'
    }) */
  }

  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col>
          <Card className="mx-auto p-3" style={{width: '50%'}}>
          {/* <Box
            marginTop="114px"
            flex="1"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            flexDirection="column"
          >
            <Link to="index/setting" className="setting-btn" />
            <span className="version">Web SDK Version: {AgoraRTC.VERSION}</span>
            <a
              href="https://github.com/AgoraIO/Basic-Video-Broadcasting/tree/master/OpenLive-Web"
              className="github"
            ></a>
            <div className="role-container">
              <CustomRadio
                className={classes.radio}
                value="host"
                checked={stateCtx.config.host}
                onClick={handleChange}
              ></CustomRadio>
              <CustomRadio
                className={classes.radio}
                value="audience"
                checked={!stateCtx.config.host}
                onClick={handleChange}
              ></CustomRadio>
            </div>
            <Box
              marginTop="92"
              flex="1"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <FormControl className={clsx(classes.input, classes.grid)}>
                <InputLabel htmlFor="channelName">Enter a channel name</InputLabel>
                <Input
                  id="channelName"
                  name="channelName"
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
              </FormControl>
            </Box>
          </Box> */}
            <span className="version">Web SDK Version: {AgoraRTC.VERSION}</span>
            <Form>
                <div key="inline-radio" className="mb-3">
                  <Form.Check
                    inline
                    label="host"
                    name="group1"
                    type="radio"
                    id="inline-radio-1"
                    onClick={handleChange}
                    onChange={(evt) => setHost(evt.target.value = true)}
                  />
                  <Form.Check
                    inline
                    label="audience"
                    name="group1"
                    type="radio"
                    id="inline-radio-2"
                    onClick={handleChange}
                    onChange={(evt) => setHost(evt.target.value = false)}
                  />
                </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Canal del live</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="Nombre del Canal"
                  // value={stateCtx.config.channelName}
                  onChange={(evt) => setChannel(evt.target.value)}
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

export default Index
