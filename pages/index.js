import "semantic-ui-css/semantic.min.css";
import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Step
} from "semantic-ui-react";
import Head from "next/head";

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h2"
      content="One laptop is stolen every 53 seconds. Are you the next victim?"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "2.5em" : "5em"
      }}
    />
    <Header
      as="h1"
      content="Protect your laptop from theft now"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: "1em",
        marginTop: mobile ? "0.5em" : "1em"
      }}
    />

    <Button primary size="huge">
      Download now
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */

const ResponsiveContainer = ({ children }) => {
  return (
    <div>
      <Visibility once={false}>
        <Segment
          textAlign="center"
          style={{
            minHeight: 700,
            padding: "1em 0em",
            backgroundImage: `url(
              "/static/images/background3.jpeg"
            )`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed"
          }}
          vertical
        >
          <Menu inverted={true} secondary={true} size="massive">
            <Container>
              <Menu.Item header>
                <Image
                  size="mini"
                  src="/static/icons/siren128.png"
                  style={{ marginRight: "1.5em" }}
                />
                Alarma App
              </Menu.Item>
            </Container>
          </Menu>
          <HomepageHeading />
        </Segment>
        {children}
      </Visibility>
    </div>
  );
};

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HomepageLayout = () => (
  <div>
    <Head>
      <title>Alarma App - The antitheft alarm app for your laptop</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <ResponsiveContainer>
      <Segment style={{ padding: "4em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Step.Group size="huge" stackable="mobile" widths={6}>
                <Step>
                  <Icon name="check" />
                  <Step.Content>
                    <Step.Title
                      style={{ fontSize: "1em", marginBottom: "1em" }}
                    >
                      Enable the app
                    </Step.Title>
                    <Step.Description
                      style={{ fontSize: "0.8em", marginBottom: "1em" }}
                    >
                      Activate the app when you have to leave your laptop in a
                      public place (like going to the toilet when working in a
                      coffee shop).
                    </Step.Description>
                  </Step.Content>
                </Step>
                <Step>
                  <Icon name="volume up" />
                  <Step.Content>
                    <Step.Title
                      style={{ fontSize: "1em", marginBottom: "1em" }}
                    >
                      Alarma Is On
                    </Step.Title>
                    <Step.Description
                      style={{ fontSize: "0.8em", marginBottom: "1em" }}
                    >
                      If your laptop gets unplugged or the lid closes your
                      laptop will set up its volume to 200% and the alarm will
                      play.
                    </Step.Description>
                  </Step.Content>
                </Step>
                <Step>
                  <Icon name="coffee" />
                  <Step.Content>
                    <Step.Title
                      style={{ fontSize: "1em", marginBottom: "1em" }}
                    >
                      Do what you have to do
                    </Step.Title>
                    <Step.Description
                      style={{ fontSize: "0.8em", marginBottom: "1em" }}
                    >
                      Now you can safely go and order that Decaf, Soy Latte With
                      An Extra Shot And Cream or go and do your business.
                    </Step.Description>
                  </Step.Content>
                </Step>
              </Step.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "0em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                "What a Company"
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                That is what they all say about us
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                "I shouldn't have gone with their competitor."
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <Image avatar src="/images/avatar/large/nan.jpg" />
                <b>Nan</b> Chief Fun Officer Acme Toys
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                "I shouldn't have gone with their competitor."
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <Image avatar src="/images/avatar/large/nan.jpg" />
                <b>Nan</b> Chief Fun Officer Acme Toys
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as="a">Sitemap</List.Item>
                  <List.Item as="a">Contact Us</List.Item>
                  <List.Item as="a">Religious Ceremonies</List.Item>
                  <List.Item as="a">Gazebo Plans</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">Banana Pre-Order</List.Item>
                  <List.Item as="a">DNA FAQ</List.Item>
                  <List.Item as="a">How To Access</List.Item>
                  <List.Item as="a">Favorite X-Men</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Footer Header
                </Header>
                <p>
                  Extra space for a call to action inside the footer that could
                  help re-engage users.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </ResponsiveContainer>
  </div>
);

export default HomepageLayout;
