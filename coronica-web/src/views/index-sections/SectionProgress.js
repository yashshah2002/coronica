/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  Progress,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

// core components

function SectionProgress() {
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col md={12}>
              <div className="title">
                <h3>Self Care</h3>
                <br />
              </div>
              <Progress max="100" value="75" barClassName="progress-bar-info" />
              <br />
              <p className="Description">
                <strong>Self-care</strong> is not an indulgence. Self-care is a
                discipline. It requires tough-mindedness, a{" "}
                <strong>
                  deep and personal understanding of your priorities
                </strong>
                , and a <strong>respect for yourself</strong> and the people you
                choose to spend your life with. Ironically when you{" "}
                <strong>truly care for yourself</strong>, exercising all the
                discipline that requires, you are actually in a{" "}
                <strong>much stronger place</strong> to give of yourself to
                those around you. You will be a <strong>happier</strong> parent,
                a more <strong>grateful</strong> spouse, a{" "}
                <strong>fully engaged</strong> colleague. Those who take care of
                themselves have the{" "}
                <strong>energy to take care of others</strong> joyfully because
                that caregiving doesn’t come at their own expense. And those who
                take care of themselves also have the energy to work with{" "}
                <strong>meaning and purpose</strong> toward a worthy goal. Which
                means they are also the people most likely to{" "}
                <strong>make the world a better place</strong> for all of us.
              </p>
            </Col>
            <Col md={12}>
              <div className="title">
                <h3>Physical Activity</h3>
                <br />
              </div>
              <Progress
                max="100"
                value="85"
                barClassName="progress-bar-success"
              />
              <br />
              <p className="Description">
                Regular <strong>physical activity</strong> can relieve stress,
                anxiety, depression and anger. You know that{" "}
                <strong>"feel good sensation"</strong> you get after doing
                something physical? Think of it as a <strong>happy pill</strong>{" "}
                with no side effects! Most people notice they{" "}
                <strong>feel better</strong> over time as physical activity
                becomes a regular part of their lives. Without regular activity,
                your body slowly loses its{" "}
                <strong>strength, stamina and ability</strong> to function
                properly. It’s like the old saying: you don’t stop moving from
                growing old, you grow old from stopping moving.{" "}
                <strong>Exercise</strong> increases{" "}
                <strong>muscle strength</strong>, which in turn increases your
                ability to do other physical activities. So, this is easy! Just{" "}
                <strong>move more</strong>, with <strong>more intensity</strong>
                , and sit less. You don’t have to make{" "}
                <strong>big life changes</strong> to see the benefits. Just
                start building more activity into your day,{" "}
                <strong>one step at a time</strong>.
              </p>
            </Col>
            <Col md={12}>
              <div className="title">
                <h3>Social Connections</h3>
                <br />
              </div>
              <Progress
                max="100"
                value="55"
                barClassName="progress-bar-warning"
              />
              <br />
              <p className="Description">
                <strong>Social connection</strong> is important as it improves
                your <strong>physical, emotional, and mental health</strong>. By
                nature, we as human beings are{" "}
                <strong>inherently social</strong>. While caring for your body
                and mind through healthy habits is important, establishing and
                maintaining social connections with others is important too. You
                shouldn’t overlook the benefits of this{" "}
                <strong>crucial aspect of life</strong>. The more connected you
                are with other people, the more{" "}
                <strong>enriched your life</strong> becomes. Of course, it’s not
                just about the number of connections you have. You should also{" "}
                <strong>focus on the quality</strong> of these social
                connections and how they{" "}
                <strong>contribute to happiness and positivity</strong> in your
                life. The strongest social connections are the ones you{" "}
                <strong>share with people</strong> who are concerned about your{" "}
                <strong>happiness and well-being.</strong>
              </p>
            </Col>
          </Row>
          <br />
        </Container>
      </div>

      <div className="section">
        <Container>
        <div className="title">
            <h3>Daily Feelings & Mood</h3>
          </div>
          <br />
          <Row>
            <Col md={4}>
              <CircularProgressbar
                value={60}
                maxValue={100}
                text="Happy"
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#3e98c7",
                  textColor: "#fff",
                  pathColor: "#fff",
                  trailColor: "transparent",
                })}
              />
            </Col>
            <Col md={4}>
              <CircularProgressbar
                value={90}
                maxValue={100}
                text="Focus"
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#5cb85c",
                  textColor: "#fff",
                  pathColor: "#fff",
                  trailColor: "transparent",
                })}
              />
            </Col>
            <Col md={4}>
              <CircularProgressbar
                value={80}
                maxValue={100}
                text="Will"
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#f0ad4e",
                  textColor: "#fff",
                  pathColor: "#fff",
                  trailColor: "transparent",
                })}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section section-dark">
        <Container>
          <br />
          <Row>
            <Col md={12}>
              <div className="title">
                <h3>Your Timeline in Review</h3>
              </div>
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <Nav id="tabs" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={activeTab === "1" ? "active" : ""}
                        onClick={() => {
                          toggle("1");
                        }}
                      >
                        <label className="label label-info mr-1">Day</label>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        <label className="label label-success mr-1">
                          Month
                        </label>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "3" ? "active" : ""}
                        onClick={() => {
                          toggle("3");
                        }}
                      >
                        <label className="label label-warning mr-1">Year</label>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
              <TabContent activeTab={activeTab} className="text-center">
                <TabPane tabId="1">
                  <p>
                    This week you've been amazingly fit! You've been outside 56%
                    more than the last week and 74% more than the national
                    average during the quarantine. Kudos to you! Your self-care
                    scores are on par with the previous week and is 4% higher
                    than the national average. Your social connectedness
                    statistics are lower this week by 18% and 24% lower than the
                    national average. Check coronica for suggestions on how to
                    build a better relationship with friends and family.
                  </p>
                </TabPane>
                <TabPane tabId="2">
                  <p>
                    This month you've been fairly fit! You've been outside 16%
                    more than the last month and 34% more than the national
                    average. Great job! Your self-care scores are on par with
                    the previous month and is 6% higher than the national
                    average. Your social connectedness statistics are lower this
                    month by 8% and 14% lower than the national average. We
                    recommend improving your communication with friends and
                    family.
                  </p>
                </TabPane>
                <TabPane tabId="3">
                  <p>
                    This year you've been acceptably fit! You've been outside 6%
                    less than the last year and only 4% more than the national
                    average. Try to increase the duration of your physical
                    workouts and spend more time outdoors Your self-care scores
                    are on par with the previous year and is 14% higher than the
                    national average. Your social connectedness statistics are
                    higher this year by 12% and 34% higher than the national
                    average. Great job in staying engaged with the community!
                  </p>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionProgress;
