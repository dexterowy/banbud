import React, { Component } from "react"
import Head from '../components/Head';

import PageWrapper from '../components/PageWrapper'
import Landing from '../components/Landing/Landing'
import Navigation from '../components/Navigation'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Services from '../components/Services/Services'
import Footer from '../components/Footer/Footer'
import Contact from '../components/Contact/Contact'



class IndexPage extends Component {
  render() {
    return(
      <PageWrapper>
        <Head />
        <Navigation/>
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
