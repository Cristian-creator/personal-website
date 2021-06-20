import React, { Component } from 'react'

// img && gif
import networkingImg from './img/networking.jpg';
import networkingGif from './img/3F3D.gif';

import travelImg from './img/travel.jpg';
import travelGif from './img/travel.gif';

import expensesImg from './img/expenses.jpg';
import expensesGif from './img/expenses.gif';

import beachImg from './img/beach.jpeg';
import beachGif from './img/beach.gif';

import newsImg from './img/news.jpeg';
import newsGif from './img/news.gif';

import schoolResponsive from './img/school-responsive.jpeg';
import schoolResponsive2 from './img/school-responsive2.jpeg';

import lyricsImg from './img/lyrics.jpeg';
import lyricsGif from './img/lyrics-gif.gif';


// demos
import networkingDemo from './img/demo/demo-networking.png';
import travelDemo from './img/demo/demo-travel.gif';
import expenseTrackerDemo from './img/demo/demo-expense-tracker.png';
import beachDemo from './img/demo/demo-beach.png';
import newsDemo from './img/demo/demo-news-2.png';
import firstResponsive from './img/demo/demo-first.png';
import secondResponsive from './img/demo/demo-second.png';
import lyricsDemo from './img/demo/demo-lyrics.png';


const Context = React.createContext();
class ContextProvider extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
         projects: [
                {
                    index: 1,
                    demo: networkingDemo,
                    sourceCode: 'https://github.com/Cristian-creator/social-media-app',
                    heroImg: networkingImg,
                    gif: networkingGif,
                    title: 'Developers Networking',
                    used: ['React', 'Socket.IO', 'CSS | SCSS', 'NodeJS | Express', 'MongoDB', 'JSON Web Tokens'],
                    // backColor: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(58,0,0,1) 0%, rgba(21,22,22,1) 0%, rgba(108,13,46,1) 0%, rgba(37,104,255,1) 0%, rgba(7,8,46,1) 100%, rgba(46,23,149,0.24693627450980393) 100%, rgba(247,2,237,1) 100%, rgba(0,212,255,1) 100%)'
                    backColor: 'linear-gradient(143deg, rgba(2,0,36,1) 0%, rgba(167,19,207,1) 0%, rgba(21,22,22,1) 0%, rgba(108,13,46,1) 0%, rgba(2,131,255,1) 0%, rgba(121,0,116,1) 0%, rgba(56,16,49,1) 100%, rgba(255,255,0,1) 100%, rgba(162,117,18,1) 100%)',
                    live: ''
                },
                {
                    index: 2,
                    demo: travelDemo,
                    sourceCode: 'https://github.com/Cristian-creator/travel-log',
                    heroImg: travelImg,
                    gif: travelGif,
                    title: 'Travel Log',
                    used: ['React', 'REACT-MAP-GL','CSS', 'NodeJS | Express', 'MongoDB'],
                    // backColor: 'linear-gradient(29deg, rgba(2,0,36,1) 0%, rgba(58,0,0,1) 0%, rgba(21,22,22,1) 0%, rgba(108,13,46,1) 0%, rgba(124,82,35,1) 0%, rgba(255,227,3,1) 100%, rgba(162,117,18,1) 100%, rgba(46,23,149,0.24693627450980393) 100%, rgba(247,2,237,1) 100%)'
                    backColor: 'linear-gradient(143deg, rgba(2,0,36,1) 0%, rgba(167,19,207,1) 0%, rgba(21,22,22,1) 0%, rgba(108,13,46,1) 0%, rgba(2,131,255,1) 0%, rgba(121,0,116,1) 0%, rgba(56,16,49,1) 100%, rgba(255,255,0,1) 100%, rgba(162,117,18,1) 100%)',
                    live: ''
                },
                {
                    index: 3,
                    demo: firstResponsive,
                    sourceCode: 'https://github.com/Cristian-creator/jdsajds',
                    heroImg: schoolResponsive,
                    gif: '',
                    title: 'Responsive website',
                    used: ['HTML', 'SCSS', 'Javascript', 'Webpack'],
                    backColor: 'linear-gradient(143deg, rgba(2,0,36,1) 0%, rgba(167,19,207,1) 0%, rgba(21,22,22,1) 0%, rgba(108,13,46,1) 0%, rgba(2,131,255,1) 0%, rgba(121,0,116,1) 0%, rgba(56,16,49,1) 100%, rgba(255,255,0,1) 100%, rgba(162,117,18,1) 100%)',
                    live: 'https://dreamy-minsky-330978.netlify.app/'
                    
                },
                
                {
                    index: 4,
                    demo: beachDemo,
                    sourceCode: 'https://github.com/Cristian-creator/beach-resort',
                    heroImg: beachImg,
                    gif: beachGif,
                    title: 'Beach Resort',
                    used: ['React | Context API', 'CSS', 'Styled-Components'],
                    // backColor: 'linear-gradient(309deg, rgba(2,0,36,1) 0%, rgba(58,0,0,1) 0%, rgba(21,22,22,1) 0%, rgba(108,13,46,1) 0%, rgba(2,131,255,1) 0%, rgba(255,255,0,1) 100%, rgba(162,117,18,1) 100%, rgba(46,23,149,0.24693627450980393) 100%, rgba(247,2,237,1) 100%)'
                    backColor: 'linear-gradient(143deg, rgba(2,0,36,1) 0%, rgba(167,19,207,1) 0%, rgba(21,22,22,1) 0%, rgba(108,13,46,1) 0%, rgba(2,131,255,1) 0%, rgba(121,0,116,1) 0%, rgba(56,16,49,1) 100%, rgba(255,255,0,1) 100%, rgba(162,117,18,1) 100%)',
                    live: 'https://objective-euclid-7279e2.netlify.app/'
                    
                },
                {
                    index: 5,
                    demo: newsDemo,
                    sourceCode: 'https://github.com/Cristian-creator/news-tracking-app',
                    heroImg: newsImg,
                    gif: newsGif,
                    title: 'News Tracking App',
                    used: ['Puppeteer', 'React | Redux', 'SCSS | Bootstrap', 'NodeJS | Express', 'PostgreSQL', 'JSON Web Tokens'],
                    // backColor: 'linear-gradient(309deg, rgba(2,0,36,1) 0%, rgba(58,0,0,1) 0%, rgba(21,22,22,1) 0%, rgba(108,13,46,1) 0%, rgba(2,131,255,1) 0%, rgba(255,255,0,1) 100%, rgba(162,117,18,1) 100%, rgba(46,23,149,0.24693627450980393) 100%, rgba(247,2,237,1) 100%)'
                    backColor: 'linear-gradient(143deg, rgba(2,0,36,1) 0%, rgba(167,19,207,1) 0%, rgba(21,22,22,1) 0%, rgba(108,13,46,1) 0%, rgba(2,131,255,1) 0%, rgba(121,0,116,1) 0%, rgba(56,16,49,1) 100%, rgba(255,255,0,1) 100%, rgba(162,117,18,1) 100%)',
                    live: ''

                },                
                {
                    index: 6,
                    demo: expenseTrackerDemo,
                    heroImg: expensesImg,
                    sourceCode: 'https://github.com/Cristian-creator/expenses-tracker',
                    gif: expensesGif,
                    title: 'Expenses Tracker',
                    used: ['React | Context API','CSS', 'NodeJS | Express', 'MongoDB'],
                    // backColor: 'linear-gradient(29deg, rgba(2,0,36,1) 0%, rgba(58,0,0,1) 0%, rgba(21,22,22,1) 0%, rgba(108,13,46,1) 0%, rgba(167,8,8,1) 0%, rgba(251,250,250,1) 100%, rgba(162,117,18,1) 100%, rgba(46,23,149,0.24693627450980393) 100%, rgba(247,2,237,1) 100%)'
                    backColor: 'linear-gradient(143deg, rgba(2,0,36,1) 0%, rgba(167,19,207,1) 0%, rgba(21,22,22,1) 0%, rgba(108,13,46,1) 0%, rgba(2,131,255,1) 0%, rgba(121,0,116,1) 0%, rgba(56,16,49,1) 100%, rgba(255,255,0,1) 100%, rgba(162,117,18,1) 100%)',
                    live: ''
                },
                {
                    index: 7,
                    demo: secondResponsive,
                    sourceCode: 'https://github.com/Cristian-creator/lkskmdsd',
                    heroImg: schoolResponsive2,
                    gif: '',
                    title: 'Responsive website',
                    used: ['HTML', 'SCSS', 'Javascript', 'jQuery'],
                    backColor: 'linear-gradient(143deg, rgba(2,0,36,1) 0%, rgba(167,19,207,1) 0%, rgba(21,22,22,1) 0%, rgba(108,13,46,1) 0%, rgba(2,131,255,1) 0%, rgba(121,0,116,1) 0%, rgba(56,16,49,1) 100%, rgba(255,255,0,1) 100%, rgba(162,117,18,1) 100%)',
                    live: 'https://peaceful-wescoff-218f90.netlify.app/'
                },
                // {
                //     index: 8,
                //     demo: lyricsDemo,
                //     sourceCode: 'https://github.com/Cristian-creator/lyrics-finder',
                //     heroImg: lyricsImg,
                //     gif: lyricsGif,
                //     title: 'Lyrics Finder',
                //     used: ['React | Redux', 'CSS | SCSS', 'Lyrics.ovh API','Unsplash API'],
                //     backColor: 'linear-gradient(143deg, rgba(2,0,36,1) 0%, rgba(167,19,207,1) 0%, rgba(21,22,22,1) 0%, rgba(108,13,46,1) 0%, rgba(2,131,255,1) 0%, rgba(121,0,116,1) 0%, rgba(56,16,49,1) 100%, rgba(255,255,0,1) 100%, rgba(162,117,18,1) 100%)',
                //     live: 'https://silly-jones-36f97e.netlify.app/'

                // }
            ]
        }
    }
    
    render() {
        return (
            <Context.Provider value={this.state}>
                { this.props.children }
            </Context.Provider>
        )
    }
}



export { Context, ContextProvider };


