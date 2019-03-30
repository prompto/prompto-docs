import React from 'react';
import Overview from "./topics/Overview";
import Topics from "../components/Topics";
import Console from "./topics/console/Console";
import Attributes from "./topics/Attributes";
import Maths from "./topics/Maths";
import Utilities from "./topics/Utilities";
import Parsing from "./topics/Parsing";
import Cloud from "./topics/cloud/Cloud";
import Internet from "./topics/internet/Internet";
import Data from "./topics/data/Data";
import Server from "./topics/server/Server";
import Frameworks from "./topics/frameworks/Frameworks";

const TOPICS = [ Overview, Data, Internet, Frameworks, Server, Attributes, Maths, Console, Utilities, Parsing, Cloud ];

export default class Libraries extends React.Component {

    constructor(props) {
        super(props);
        this.state = { activeTopic: Overview };
        this.topicSelected = this.topicSelected.bind(this);
    }

    topicSelected(topic) {
        this.setState({activeTopic: topic});
    }

    render() {
        const style = { display: this.props.visible ? "block" : "none" };
        return <div className="topics" style={style}>
                <div className="sidebar">
                    <Topics topics={TOPICS} activeTopic={this.state.activeTopic} level={1} topicSelected={this.topicSelected}/>
                </div>
                <div className="content">
                    { this.state.activeTopic.renderContent(this.topicSelected) }
                </div>
            </div>;

    }

}