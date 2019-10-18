import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import {Button, Grid, Header, Icon, Image, Menu} from "semantic-ui-react";

class TopMenu extends React.Component {

    render() {
        return (
            <Menu className="topmenu" borderless container>
                <Menu.Item header>
                    <Image src="https://mechanicalkeyboards.com/images/mk_logo.png" width="200px"/>
                    THE ULTIMATE MECHANICAL KEYBOARD CATALOG
                </Menu.Item>
                <Menu.Item position="right" className="orange-text"><Icon name="search"/>| Advanced Keyboard Search</Menu.Item>
            </Menu>
        );
    }
}

class TopMenuNav extends React.Component {

    render() {
        return (
            <Menu className="topmenu" borderless inverted color={"orange"}>
                <Menu.Item active>HOME</Menu.Item>
                <Menu.Item>BUY</Menu.Item>
                <Menu.Item>LEARN</Menu.Item>
                <Menu.Item>INCOMING STOCK</Menu.Item>
                <Menu.Item>JUST ARRIVED</Menu.Item>
            </Menu>
        );
    }
}

class Product extends React.Component {

    render() {
        return (
            <div className="keyboard-background">
                <Grid container centered verticalAlign="middle" style={{height: "500px"}} columns={3}>
                    <Grid.Row column>
                        <Grid.Column centered textAlign="center"><Header as="h1" className="white-text">PURE WHITE MINI</Header></Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column centered textAlign="center"><Header as="h3" className="white-text">EVERYTHING YOU LOVE ABOUT DUCKY'S ONE 2 MINI. <br/> IN WHITE.</Header></Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column centered textAlign="center"><Button color="orange">PURE WHITE</Button></Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

class FAQ extends React.Component {

    render() {
        return (
            <div className="dark-bg">
                <Grid container verticalAlign="middle" columns={2}>
                    <Grid.Column>
                        <Header as="h1" size="huge" inverted><Icon name="cogs" floated="left"/>WHAT US A MECHANICAL KEYBOARD?</Header>
                        <Header as="h3" size="medium" color="orange">FOCUS ON THE SWITCHES</Header>
                        <p className="white-text">A mechanical keyboard is built with high quality, typically spring activated key switches. These key switches vary based on the keyboard’s application or user preference.</p>
                        <Button inverted>LEARN MORE</Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as="h1" size="huge" inverted><Icon name="check" floated="left"/>MECHANICAL KEYBOARD GUIDE</Header>
                        <Header as="h3" size="medium" color="orange">FINDING YOUR FIRST MECHANICAL - MADE EASY</Header>
                        <p className="white-text">Don't be overwhelmed looking for your first Mechanical Keyboard! We've put together a short and simple survey that will make finding your first mechanical keyboard a breeze.</p>
                        <Button inverted>KEYBOARD GUIDE</Button>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

class FeaturedBrands extends React.Component {

    render() {
        return (
            <div></div>
        );
    }
}

class MechanicalKeyboards extends React.Component {

    render() {
        return (
            <div>
                <TopMenu/>
                <TopMenuNav/>
                <Product/>
                <FAQ/>
                <FeaturedBrands/>
            </div>
        );
    }
}

ReactDOM.render(<MechanicalKeyboards/>, document.getElementById("root"));