import React, { Component } from 'react'

import networkingImg from './img/applications/developers-networking/networking.jpg';
import networkingGif from './img/applications/developers-networking/spinning-like.gif';
import networkingDemo from './img/applications/developers-networking/demo-networking.png';

import travelImg from './img/applications/travel-log/travel.jpg';
import travelGif from './img/applications/travel-log/travel.gif';
import travelDemo from './img/applications/travel-log/demo-travel.gif';

import expensesImg from './img/applications/expenses-tracker/expenses.jpg';
import expensesGif from './img/applications/expenses-tracker/expenses.gif';
import expenseTrackerDemo from './img/applications/expenses-tracker/demo-expense-tracker.png';

import beachImg from './img/applications/beach-resort/beach.jpeg';
import beachGif from './img/applications/beach-resort/beach.gif';
import beachDemo from './img/applications/beach-resort/demo-beach.png';

import newsImg from './img/applications/news-tracking/news.jpeg';
import newsGif from './img/applications/news-tracking/news.gif';
import newsDemo from './img/applications/news-tracking/demo-news-2.png';

import cartImg from './img/applications/react-ts-cart/cart.jpeg';
import cartDemo from './img/applications/react-ts-cart/demo-cart.png';

import redditCloneImg from './img/applications/reddit-clone/reddit-clone.jpeg';
import redditDemo from './img/applications/reddit-clone/demo-reddit-clone.png';

import vandendriescscheImg from './img/applications/vandendriessche/vanden.jpeg';
import vandendriescscheDemo from './img/applications/vandendriessche/demo-vanden.png';

import clickAppDemo from './img/applications/click-app/click-app-demo.png';
import clickAppGif from './img/applications/click-app/click-app.gif';

const Context = React.createContext();
class ContextProvider extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
         projects: [
                {
                    demo: clickAppDemo,
                    heroImg: clickAppDemo,
                    gif: clickAppGif,
                    sourceCode: 'https://github.com/Cristian-creator/click-app',
                    title: 'Click Game',
                    used: ['Typescript','SCSS', 'React | Redux Toolkit', 'Jest', 'NodeJS | Express', 'MongoDB'],
                },
                {
                    demo: redditDemo,
                    heroImg: redditCloneImg,
                    sourceCode: 'https://github.com/Cristian-creator/reddit-clone-nextjs',
                    title: 'Reddit Clone',
                    used: ['Typescript','Material UI', 'NextJS', 'GraphQL | URQL', 'NodeJS | Express', 'PostgreSQL'],
                },

                {
                    demo: newsDemo,
                    sourceCode: 'https://github.com/Cristian-creator/news-tracking-app',
                    heroImg: newsImg,
                    gif: newsGif,
                    title: 'News Tracking App',
                    used: ['Puppeteer', 'React | Redux', 'SCSS | Bootstrap', 'NodeJS | Express', 'PostgreSQL', 'JSON Web Tokens'],
                }, 
                {
                    demo: travelDemo,
                    sourceCode: 'https://github.com/Cristian-creator/travel-log',
                    heroImg: travelImg,
                    gif: travelGif,
                    title: 'Travel Log',
                    used: ['React', 'REACT-MAP-GL','CSS', 'NodeJS | Express', 'MongoDB'],
                },   
                {
                    demo: cartDemo,
                    heroImg: cartImg,
                    sourceCode: 'https://github.com/Cristian-creator/shopping-cart-react-ts',
                    title: 'Shopping Cart',
                    used: ['Typescript','CSS','Material UI', 'React'],
                    live: 'https://cristian-creator.github.io/shopping-cart-react-ts/'
                },     
                {
                    demo: expenseTrackerDemo,
                    heroImg: expensesImg,
                    sourceCode: 'https://github.com/Cristian-creator/expenses-tracker',
                    gif: expensesGif,
                    title: 'Expenses Tracker',
                    used: ['React | Context API','CSS', 'NodeJS | Express', 'MongoDB'],
                },
                {
                    demo: networkingDemo,
                    sourceCode: 'https://github.com/Cristian-creator/social-media-app',
                    heroImg: networkingImg,
                    gif: networkingGif,
                    title: 'Developers Networking',
                    used: ['React', 'Socket.IO', 'CSS | SCSS', 'NodeJS | Express', 'MongoDB', 'JSON Web Tokens'],
                },
                {
                    demo: beachDemo,
                    sourceCode: 'https://github.com/Cristian-creator/beach-resort',
                    heroImg: beachImg,
                    gif: beachGif,
                    title: 'Beach Resort',
                    used: ['React | Context API', 'CSS', 'Styled-Components'],
                    live: 'https://objective-euclid-7279e2.netlify.app/'
                },
                {
                    demo: vandendriescscheDemo,
                    heroImg: vandendriescscheImg,
                    sourceCode: 'https://github.com/Cristian-creator/Vandendriessche',
                    title: 'Responsive website',
                    used: ['HTML5','CSS', 'Javascript', 'PHP'],
                    live: 'http://anounceovsilver.eu/index.html'
                },       
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


