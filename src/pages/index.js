import React, { Component } from "react"
import Head from '../components/Head';
import axios from 'axios';

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

const PATH_URL = 'http://new.ban-bud.pl/api/contact.php';
const PRODUCTION_MODE = false;

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showNavbar: false,
      showMenu: false,
      showLinks: false,
      loadingContact: false,
      form: {
        name: '',
        email: '',
        subject: '',
        msg: ''
      },
      sended: false,
      error: false
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

  handleSubmit = (event) => {
    const formData = {
      ...this.state.form
    }

    formData.msg = encodeURIComponent(this.state.form.msg);
    event.preventDefault();
    console.log(formData);
    this.setState({
      loadingContact: true
    });
    if(PRODUCTION_MODE) {
      console.log(PATH_URL, formData);
      axios.post(PATH_URL, formData)
      .then((res) => {
        console.log(res)
        console.log("WORKS!")
        setTimeout( () => {
        this.setState({
          loadingContact: false,
          error: false,
          sended: true,
          form: {
            name: '',
            email: '',
            subject: '',
            msg: ''
          }});
        }, 1000)
      })
      .catch( (err) => {
        console.log(err);
        setTimeout( () => {
        this.setState({
          loadingContact: false,
            sended: true,
            error: true
          });
        }, 1000)
      })
    }
    else {
      setTimeout( () => {
        this.setState({
          loadingContact: false,
          sended: true,
          error: false,
          form: {
            name: '',
            email: '',
            subject: '',
            msg: ''
          }});
        }, 1000);
    }
  }

  closeContactInfo = () => {
    this.setState({
      sended: false,
      error: false
    })
  }

  handleInput = (e) => {
    switch(e.target.id) {
      case 'name':
        this.setState({form: {
          ...this.state.form,
          name: e.target.value
        }});
        break;
      case 'email':
        this.setState({form: {
          ...this.state.form,
          email: e.target.value
        }});
        break;
      case 'subject':
        this.setState({form: {
          ...this.state.form,
          subject: e.target.value
        }});
        break;
      case 'msg':
        this.setState({form: {
          ...this.state.form,
          msg: e.target.value
        }});
        break;
      default:
        break;
    }
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
        <Contact error={this.state.error} closeInfo={this.closeContactInfo.bind(this)} sended={this.state.sended} formValues={this.state.form} loading={this.state.loadingContact} submitHandle={this.handleSubmit.bind(this)} handleInput={this.handleInput.bind(this)}/>
        <Footer />
      </PageWrapper>
    )
  }
}

export default IndexPage
