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
  Input,
  Visibility,
  Step
} from "semantic-ui-react";
import Head from "next/head";

import ReactGA from "react-ga";

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
      content="The mind hacker is a community of founders, creators, freelancers and remote workers that want to be open and improve their mental health"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "2.5em" : "5em"
      }}
    />
    <Header
      as="h1"
      content="Keep your sanity while reaching your business goals"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: "1em",
        marginTop: mobile ? "0.5em" : "1em"
      }}
    />
    <Input
      size="huge"
      placeholder="your@email.com"
      style={{
        marginRight: "2em"
      }}
    />

    <a href="#" target="_blank">
      <Button secondary size="massive">
        Get the newsletter
      </Button>
    </a>
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
              "/static/images/lego.jpg"
            )`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed"
          }}
          vertical
        >
          <Menu inverted={true} secondary={true} size="massive">
            <Container>
              <Menu.Item header>
                <Icon size="big" name="fire" />
                The Mind Hacker
              </Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item as="a">Join the Slack</Menu.Item>
                <Menu.Item as="a">Get the Newsletter</Menu.Item>
              </Menu.Menu>
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

class HomepageLayout extends React.Component {
  componentDidMount() {
    ReactGA.initialize("UA-135975398-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  render() {
    return (
      <div>
        <Head>
          <title>The Mindful Hacker -</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <ResponsiveContainer>
          <Segment style={{ padding: "4em 0em" }} vertical>
            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Step.Group size="huge" stackable="mobile" widths={6}>
                    <Step>
                      <Icon name="graduation" />
                      <Step.Content>
                        <Step.Title
                          style={{ fontSize: "1em", marginBottom: "1em" }}
                        >
                          Learn
                        </Step.Title>
                        <Step.Description
                          style={{ fontSize: "0.8em", marginBottom: "1em" }}
                        >
                          Understand how to identify burnout on yourself or the
                          people around you and how to tackle it.
                        </Step.Description>
                      </Step.Content>
                    </Step>
                    <Step>
                      <Icon name="smile outline" />
                      <Step.Content>
                        <Step.Title
                          style={{ fontSize: "1em", marginBottom: "1em" }}
                        >
                          Act
                        </Step.Title>
                        <Step.Description
                          style={{ fontSize: "0.8em", marginBottom: "1em" }}
                        >
                          Apply actionable insights and advice to see what works
                          for you and helps you get better.
                        </Step.Description>
                      </Step.Content>
                    </Step>
                    <Step>
                      <Icon name="share alternate" />
                      <Step.Content>
                        <Step.Title
                          style={{ fontSize: "1em", marginBottom: "1em" }}
                        >
                          Share
                        </Step.Title>
                        <Step.Description
                          style={{ fontSize: "0.8em", marginBottom: "1em" }}
                        >
                          Give back by sharing your story and useful resources
                          with others.
                        </Step.Description>
                      </Step.Content>
                    </Step>
                  </Step.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment style={{ padding: "8em 0em" }} vertical>
            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column floated="right" width={6}>
                  <Image
                    bordered
                    rounded
                    size="medium"
                    circular={true}
                    src="/static/images/xavi.jpg"
                  />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    A note from the author
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    I have been suffering burnout syndrom for the last couple of
                    years. As an enterpreneur and remote worker for the last 6
                    years, and although a lot of people might envy the lifestyle
                    of living in a tropical country and working from home, there
                    are other problems that don't come to light often enough.
                    This project is born from the will to share how me and
                    others deal with burnout so you can learn to deal with your
                    own in a better way.
                  </p>
                  <p style={{ fontSize: "1.33em" }}>
                    If you would like to share your story please get in touch.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment
            inverted
            vertical
            style={{ padding: "2em 0em" }}
            textAlign="center"
          >
            <p>
              Made with love by{" "}
              <a href="https://javiercarceller.com"> Javier Carceller </a>
            </p>
            <p>
              Contact me at{" "}
              <a href="mailto:helloalarmaapp@gmail.com" target="_top">
                helloalarmaapp@gmail.com
              </a>
            </p>

            <p>
              <a href="https://github.com/elxavicio" target="_blank">
                <Icon size="big" name="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/javiercarceller/"
                target="_blank"
              >
                <Icon size="big" name="linkedin" />
              </a>
              <a href="https://twitter.com/javiercarceller" target="_blank">
                <Icon size="big" name="twitter" />
              </a>
              <a href="https://buymeacoff.ee/javiercarceller" target="_blank">
                <Icon size="big" name="coffee" />
              </a>
            </p>
          </Segment>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default HomepageLayout;
