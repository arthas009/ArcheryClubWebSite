import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import MainPage from './HeaderButtons/MainPage';
import Sidebar from '../Sidebar';
import ResponsiveDrawer from '../ResponsiveDrawer.js';
import Footer from '../Footer';
import Sporcularımız from './HeaderButtons/Sporcularımız';
import Madalyalar from './HeaderButtons/Madalyalar';
import Hakkında from './HeaderButtons/Hakkında';
import FarklıBilgiler from './HeaderButtons/FarklıBilgiler';
import CheckData from '../../Controller/CheckData';
import WebWorker from '../../Controller/WebWorker';
import MainFeaturedPost from '../MainFeaturedPost';
import Carousel from 'react-bootstrap/Carousel'

class BlogHeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { whichPage: "Ana Sayfa", keytosearch: "", xmlfound: false, jsonstring: "",index:0};
    this.handleSelect = this.handleSelect.bind(this);
    this.useStyles = makeStyles((theme) => ({
      mainGrid: {
        marginTop: theme.spacing(3),
      },
    }));
    this.sections = [
      { title: 'Ana Sayfa', url: '#' },
      { title: 'Hakkında', url: '#' },
      { title: 'Madalyalar', url: '#' },
      { title: 'Sporcularımız', url: '#' },
      { title: 'Farklı Bilgiler', url: '#' },
    ];

    this.mainFeaturedPost = {
      title: '',
      description:
        "",
      image: 'https://www.colinglen.org/content/uploads/2020/02/Colin-Glen-987.jpg',
      imgText: '',
      linkText: '',
    };
    
  }

  componentDidMount() {
    this.XmlFetcherWorker = new WebWorker(CheckData);
    //LISTEN MESSAGES FROM WORKER
    this.XmlFetcherWorker.addEventListener('message', function (event) {
      if (event.data == "" || event.data == null) {
        this.setState({ xmlfound: false });
        return;
      }
      this.state.xmlfound = true;
      var jsontext = JSON.stringify(event.data);
      var parser = new DOMParser();
      // SET OBJECT STRING TO STATE. THIS WILL TRIGGER A COMPONENT REFRESH
      this.setState({ jsonstring: jsontext });
    }.bind(this));

  }
  componentWillUnmount() {
    this.XmlFetcherWorker.terminate();
  }
  handleSelect(selectedIndex, e) {
		this.setState({
			index: selectedIndex,
			direction: e.direction,
		});
	}
  render() {
    const changePage = (newPage) => {
      //setState()
      //This will trigger a refresh
      this.setState({ whichPage: newPage });
    }

    if (this.state.whichPage === "Ana Sayfa") {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'));
      ReactDOM.render(
        <React.StrictMode>
          <MainFeaturedPost post={this.mainFeaturedPost} />
          <MainPage />
        </React.StrictMode>,
        document.getElementById('root')
      );
    }
    else if (this.state.whichPage === "Hakkında") {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'));
      ReactDOM.render(
        <React.StrictMode>
          <MainFeaturedPost post={this.mainFeaturedPost} />
          <Hakkında />
        </React.StrictMode>,
        document.getElementById('root')
      );
    }
    else if (this.state.whichPage === "Madalyalar") {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'));
      ReactDOM.render(
        <React.StrictMode>
          <MainFeaturedPost post={this.mainFeaturedPost} />
          <Madalyalar />
        </React.StrictMode>,
        document.getElementById('root')
      );
    }
    else if (this.state.whichPage === "Sporcularımız") {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'));
      ReactDOM.render(
      <React.StrictMode>
     
        </React.StrictMode>,
        document.getElementById('root')
      );
    }
    else if (this.state.whichPage === "Farklı Bilgiler") {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'));
      ReactDOM.render(
        <React.StrictMode>
          <MainFeaturedPost post={this.mainFeaturedPost} />
          <FarklıBilgiler />
        </React.StrictMode>,
        document.getElementById('root')
      );
    }
    return (
      <React.Fragment>
        <CssBaseline />

        <Header title="" sections={this.sections} handleClick={changePage} />
      </React.Fragment>
    );
  }
}

export default BlogHeaderComponent;



