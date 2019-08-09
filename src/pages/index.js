import React, { Component } from "react"
import Head from '../components/Head';

import PageWrapper from '../components/PageWrapper'
import Landing from '../components/Landing/Landing'
import Navigation from '../components/Navigation/Navigation'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Services from '../components/Services/Services'
import Footer from '../components/Footer/Footer'
import Contact from '../components/Contact/Contact'


if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]',{
    offset: 75
  })
}



class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showNavbar: false,
      showMenu: false,
      showLinks: false
    }

    this.openMenuHandler = this.openMenuHandler.bind(this);
    this.closeMenuHandler = this.closeMenuHandler.bind(this);
    // this.menuAnimationHandler = this.menuAnimationHandler.bind(this);
  }

  componentDidMount() {
    window.onscroll = () => {
      if(window.pageYOffset >= 100) {
        this.setState({showNavbar: true});
        }
      else {
        this.setState({showNavbar: false});
      }
    }
  }

  openMenuHandler = () => {
    this.setState({
        showNavbar: true,
        showMenu: true
    })

    setTimeout( () => {
      this.setState({
        showLinks: true
      })
    }, 300)
  }

  closeMenuHandler = () => {
    this.setState({
      showLinks: false
    })
    setTimeout( () => {
      this.setState((state) => {
        if (window.pageYOffset < 100) {
          return ({
            showNavbar: false,
            showMenu: false
          })
        } else {
          return ({
            showNavbar: true,
            showMenu: false
          })
        }
      })
    }, 300)
  }

  // menuAnimationHandler = () => {
  //   this.setState( (state) => {
  //     if(this.state.showMenu === true) {
  //       // console.log('show links')
  //       return({
  //         showLinks: true
  //       })
  //     }
  //     else if(this.state.showLinks === false) {
  //       // console.log('hide links')
  //       return({
  //         showMenu: false
  //       })
  //     }
  //   });
  // }




  render() {
    return(
      <PageWrapper>
        <Head />
        <Navigation navbar={this.state.showNavbar} menu={this.state.showMenu} links={this.state.showLinks} 
        openMenuHandler={this.openMenuHandler} closeMenuHandler={this.closeMenuHandler}
        // navAnimation ={this.menuAnimationHandler}
        />
        <Landing />
        <About />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </PageWrapper>
    )
  }
}

export default IndexPage
