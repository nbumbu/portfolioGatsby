import React from "react";
import ReactIcon from "../../images/react.inline.svg";
import NextIcon from "../../images/next-dot-js.inline.svg";
import StyledComponentsIcon from "../../images/styled-components.inline.svg";
import NodeJsIcon from "../../images/node-dot-js.inline.svg";
import MongoDbIcon from "../../images/mongodb.inline.svg";
import HerokuIcon from "../../images/heroku.inline.svg"
import ReduxIcon from "../../images/redux.inline.svg";
import GatsbyIcon from "../../images/gatsby.inline.svg";
import NetlifyIcon from "../../images/netlify.inline.svg";


const TechCardComponent = ({ techItemName }) => {
    let icon = null;
    let style = "card-box";

    switch (techItemName) {
        case "React.js": {
            icon = <ReactIcon />
            style += " card-box--react"
            break;
        }
        case "Redux.js": {
            icon = <ReduxIcon />
            style += " card-box--redux"
            break;
        }
        case "Next.js": {
            icon = <NextIcon />
            style += " card-box--next"
            break;
        }
        case "Styled Components": {
            icon = <StyledComponentsIcon />
            style += " card-box--styledcomponents"
            break;
        }
        case "Node.js": {
            icon = <NodeJsIcon />
            style += " card-box--nodejs"
            break;
        }
        case "MongoDB": {
            icon = <MongoDbIcon />
            style += " card-box--mongodb"
            break;
        }
        case "Heroku": {
            icon = <HerokuIcon />
            style += " card-box--heroku"
            break;
        }
        case "Gatsby.js": {
            icon = <GatsbyIcon />
            style += " card-box--gatsby"
            break;
        }
        case "Netlify": {
            icon = <NetlifyIcon />
            style += " card-box--netlify"
            break;
        }
        default: break;
    }

    return (
        <div className={style}>
            {icon}
            <span>{techItemName}</span>
        </div>
    )
};

export default TechCardComponent;