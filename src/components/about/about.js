import React from "react";
import JSIcon from "../../images/javascript.inline.svg";
import HTMLIcon from "../../images/html5.inline.svg";
import CSSIcon from "../../images/css3.inline.svg";
import SASSIcon from "../../images/sass.inline.svg";
import StyledComponentsIcon from "../../images/styled-components.inline.svg";
import ReactIcon from "../../images/react.inline.svg";
import NextIcon from "../../images/next-dot-js.inline.svg";
import GatsbyIcon from "../../images/gatsby.inline.svg";
import ReduxIcon from "../../images/redux.inline.svg";
import JestIcon from "../../images/jest.inline.svg";

import NodeIcon from "../../images/node-dot-js.inline.svg";
import MongoDBIcon from "../../images/mongodb.inline.svg";
import HerokuIcon from "../../images/heroku.inline.svg";

import CIcon from "../../images/c.inline.svg";
import PythonIcon from "../../images/python.inline.svg";
import GitIcon from "../../images/github.inline.svg";


const AboutComponent = () => {
    return (
        <section className="about">
            <div className="about-content">
                <h1 className="about-title section-title">Who is this guy?</h1>
                <h3 className="about-description">I'm a former embedded developer,
                    now already transitioned to web development.
                    I love to explore new ideas and materialize them
                    into noice web experiences.
                </h3>
                <div className="stack">
                    <h3 className="stack-title">My stack:</h3>
                    <div className="stack-item">
                        <h4 className="stack-group">Frontend</h4>
                        <div className="stack-container">
                            <div className="tech-item">
                                <JSIcon />
                                <span>Javascript</span>
                            </div>
                            <div className="tech-item">
                                <HTMLIcon />
                                <span>HTML5</span>
                            </div>
                            <div className="tech-item">
                                <CSSIcon />
                                <span>CSS</span>
                            </div>
                            <div className="tech-item">
                                <SASSIcon />
                                <span>SASS</span>
                            </div>
                            <div className="tech-item">
                                <StyledComponentsIcon />
                                <span>Styled Components</span>
                            </div>
                            <div className="tech-item">
                                <ReactIcon />
                                <span>React.js</span>
                            </div>
                            <div className="tech-item">
                                <NextIcon />
                                <span>Next.js</span>
                            </div>
                            <div className="tech-item">
                                <GatsbyIcon />
                                <span>Gatsby.js</span>
                            </div>
                            <div className="tech-item">
                                <ReduxIcon />
                                <span>Redux</span>
                            </div>
                            <div className="tech-item">
                                <JestIcon />
                                <span>Jest</span>
                            </div>
                            <div className="tech-item">
                                <JestIcon />
                                <span>Cypress</span>
                            </div>
                        </div>
                    </div>
                    <div className="stack-item">
                        <h4 className="stack-group">Backend</h4>
                        <div className="stack-container">
                            <div className="tech-item">
                                <NodeIcon />
                                <span>Node.js</span>
                            </div>
                            <div className="tech-item">
                                <MongoDBIcon />
                                <span>Express</span>
                            </div>
                            <div className="tech-item">
                                <MongoDBIcon />
                                <span>MongoDB</span>
                            </div>
                            <div className="tech-item">
                                <HerokuIcon />
                                <span>Heroku</span>
                            </div>
                        </div>
                    </div>
                    <div className="stack-item">
                        <h4 className="stack-group">Other</h4>
                        <div className="stack-container">
                            <div className="tech-item">
                                <CIcon />
                                <span>C</span>
                            </div>
                            <div className="tech-item">
                                <PythonIcon />
                                <span>Python</span>
                            </div>
                            <div className="tech-item">
                                <PythonIcon />
                                <span>Tkinter</span>
                            </div>
                            <div className="tech-item">
                                <PythonIcon />
                                <span>PyQt</span>
                            </div>
                            <div className="tech-item">
                                <GitIcon />
                                <span>Github</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AboutComponent;