import React, { useEffect, useState } from 'react';
import '../styles/Dashboard.scss';
import { Grid } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import LineChart from '../components/line_chart';
import { TweenMax } from 'gsap';
import CSSPlugin from 'gsap/CSSPlugin';
import RadialBarChart from '../components/radial_bar_chart';

const C = CSSPlugin;

const Dashboard = () => {
    
    useEffect(() => {
        var dashBoxs = document.querySelectorAll(".dash-box");
        var chartBoxs = document.querySelectorAll(".chart-box");
        TweenMax.staggerFrom(dashBoxs, .5, {
            y: -50,
            opacity: 0
        }, .1)
        TweenMax.staggerFrom(chartBoxs, .5, {
            y: 100,
            opacity: 0
        }, .1)
    }, []);

    return (
        <div className="dash-container">
            <Grid stackable>
                <Grid.Row>
                    <Grid.Column><h1>Dashboard</h1></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <div className="dash-box">
                            <div className="dash-info">
                                <div className="info-desc">
                                    <span>Total User</span>
                                    <h2>40.689</h2>
                                </div>
                                <div className="info-avatar">
                                    <Icon circular inverted color='teal' name='users' size="large" />
                                </div>
                            </div>
                            <div className="dash-feedback">
                                <Icon color='green' name='bolt' size='small' /> <span className="increase">8.5%</span> Up from yesterday
                            </div>
                        </div>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <div className="dash-box">
                            <div className="dash-info">
                                <div className="info-desc">
                                    <span>Total Order</span>
                                    <h2>10293</h2>
                                </div>
                                <div className="info-avatar">
                                    <Icon circular inverted color='yellow' name='box' size="large" />
                                </div>
                            </div>
                            <div className="dash-feedback">
                                <Icon color='green' name='bolt' size='small' /> <span className="increase">1.3%</span> Up from past week
                            </div>
                        </div>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <div className="dash-box">
                            <div className="dash-info">
                                <div className="info-desc">
                                    <span>Total Sales</span>
                                    <h2>$89.689</h2>
                                </div>
                                <div className="info-avatar">
                                    <Icon circular inverted color='green' name='line graph' size="large" />
                                </div>
                            </div>
                            <div className="dash-feedback">
                                <Icon color='red' name='bolt' size='small' /> <span className="descrease">4.3%</span> Down from yesterday
                            </div>
                        </div>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <div className="dash-box">
                            <div className="dash-info">
                                <div className="info-desc">
                                    <span>Total Pendig</span>
                                    <h2>2056</h2>
                                </div>
                                <div className="info-avatar">
                                    <Icon circular inverted color='orange' name='history' size="large" />
                                </div>
                            </div>
                            <div className="dash-feedback">
                                <Icon color='green' name='bolt' size='small' /> <span className="increase">1.8%</span> Up from yesterday
                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={8} computer={8}>
                        <div className="chart-box">
                            <h2 className="title">Sales Details</h2>
                            <div className="chart">
                                <LineChart />
                            </div>
                        </div>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={8}>
                        <div className="chart-box">
                            <h2 className="title">Sales Details</h2>
                            <div className="chart">
                                <RadialBarChart />
                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Dashboard;