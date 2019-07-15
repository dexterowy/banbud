import React, { Component } from "react"
import Head from '../components/Head';

import PageWrapper from '../components/PageWrapper'
import Landing from '../components/Landing/Landing'
import Navigation from '../components/Navigation'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'

class IndexPage extends Component {
  render() {
    return(
      <PageWrapper>
        <Head />
        <Navigation/>
        <Landing />
        <About />
        <Footer />
      </PageWrapper>
    )
  }
}

export default IndexPage
