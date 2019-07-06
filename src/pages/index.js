import React, { Component } from "react"
import Head from '../components/Head';

import PageWrapper from '../components/PageWrapper'
import Landing from '../components/Landing'


class IndexPage extends Component {
  render() {
    return(
      <PageWrapper>
        <Head />
        <Landing />
      </PageWrapper>
    )
  }
}

export default IndexPage
