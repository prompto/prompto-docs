import React from 'react';
import {Carousel, CarouselItem} from "react-bootstrap";

const imageBoxStyle = { width: "100%", height: "440px", backgroundColor: "dimgray", display: "flex" };
const textBoxStyle = { width: "100%", height: "160px", backgroundColor: "dimgray" };
const imageStyle = { margin: "auto", maxWidth: "90%", maxHeight: "90%"};

export default class CloudSlideshow extends React.Component {

    render() {
        return <Carousel ref="carousel" interval={8000} onSlide={this.willSlide.bind(this)}>
            <CarouselItem>{ this.renderProjectsExplorer() }</CarouselItem>
            <CarouselItem>{ this.renderCodeEditor() }</CarouselItem>
            <CarouselItem>{ this.renderTryOut() }</CarouselItem>
            <CarouselItem>{ this.renderDataExplorer() }</CarouselItem>
            <CarouselItem>{ this.renderStoresExplorer() }</CarouselItem>
            <CarouselItem>{ this.renderDebugger() }</CarouselItem>
            <CarouselItem>{ this.renderDeployer() }</CarouselItem>
            <CarouselItem>{ this.renderTablet() }</CarouselItem>
        </Carousel>;
    }

    willSlide(target, direction) {
        if(direction === "left" && target === 0)
            this.props.moveNext();
        else if(direction === "right" && target === 7)
            this.props.movePrevious();
    }

    renderProjectsExplorer() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/cloud-slides/projects-explorer.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Create your project in seconds from your browser</h4>
                once your factory is provided ( in just a few minutes )<br/>
                you can immediately create value, no setup required<br/>
                all major types of projects are supported ( and there's more to come )<br/>
            </Carousel.Caption>
        </>;
    }

    renderCodeEditor() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/cloud-slides/code-editor.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Start coding</h4>
                no need to setup a VCS, a CI or a CD: devops is built-in<br/>
                Prompto lets you focus on what really makes a difference:<br/>
                creative web pages, meaningful data models and relevant algorithms<br/>
            </Carousel.Caption>
        </>;
    }

    renderTryOut() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/cloud-slides/try-out.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Try out your app in less than a minute</h4>
                run your app on your dev server in one click<br/>
                except from domain certificates, it runs in real cloud conditions<br/>
                your app can even store and fetch data, a data store is already wired<br/>
            </Carousel.Caption>
        </>;
    }

    renderDataExplorer() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/cloud-slides/data-explorer.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Explore application data</h4>
                your factory comes with a built-in data explorer<br/>
                no need for additional learning or tools<br/>
                the data explorer works with any supported data store<br/>
            </Carousel.Caption>
        </>;
    }

    renderStoresExplorer() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/cloud-slides/stores-explorer.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Manage data stores</h4>
                once your MVP is ready for deployment, you will want to use dedicated data stores<br/>
                Prompto currently supports Mongo<br/>
                Elastic, SOLR, Datomic, HBase, Dynamo, Athena and more are coming<br/>
            </Carousel.Caption>
        </>;
    }

    renderDebugger() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/cloud-slides/debug-server.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Analyze issues online</h4>
                you can debug server code from the browser<br/>
                no setup required, it's all built-in<br/>
                simply select the problematic code and click on 'debug'<br/>
            </Carousel.Caption>
        </>;
    }

    renderDeployer() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/cloud-slides/deploy-wizard.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Are you ready to go-live?</h4>
                enjoy the built-in deployer (and your week-ends)<br/>
                Prompto implements green-blue deployment out of the box<br/>
                so no downtime when you deploy your app as soon as it's ready<br/>
            </Carousel.Caption>
        </>;
    }

    renderTablet() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/cloud-slides/tablet-coding.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Do you enjoy mobility?</h4>
                experience the freedom of a full-cloud environment<br/>
                you can address any issue using the closest computer<br/>
                you can even fix them and deploy from a tablet<br/>
            </Carousel.Caption>
        </>;
    }

}
