import React, { Component } from "react"
import Head from '../components/Head';

import PageWrapper from '../components/PageWrapper'
import Landing from '../components/Landing/Landing'
import Navigation from '../components/Navigation'

class IndexPage extends Component {
  render() {
    return(
      <PageWrapper>
        <Head />
        <Navigation/>
        <Landing />
      </PageWrapper>
    )
  }
}

export default IndexPage
