import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import MainPage from './HeaderButtons/MainPage';
import Sporcularımız from './HeaderButtons/Sporcularımız';
import Madalyalar from './HeaderButtons/Madalyalar';
import Hakkında from './HeaderButtons/Hakkında';
import FarklıBilgiler from './HeaderButtons/FarklıBilgiler';
import Haberler from './HeaderButtons/Haberler';
import Iletisim from './HeaderButtons/Iletisim';

class BlogHeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { whichPage: "Ana Sayfa", NewsList:null, xmlfound: false, jsonstring: "",index:0};
    this.handleSelect = this.handleSelect.bind(this);
    this.useStyles = makeStyles((theme) => ({
      mainGrid: {
        marginTop: theme.spacing(3),
      },
    }));
    this.sections = [
      { title: 'Ana Sayfa', url: '#' },
      { title: 'Hakkında', url: '#' },
      { title: 'Haberler', url: '#' },
      { title: 'Madalyalar', url: '#' },
      { title: 'Sporcularımız', url: '#' },
      { title: 'Farklı Bilgiler', url: '#' },
      { title: 'İletisim', url: '#' },
    ];

    this.mainFeaturedPost = [{
      title: '',
      description:
        "",
      image: 'https://www.colinglen.org/content/uploads/2020/02/Colin-Glen-987.jpg',
      imgText: '',
      linkText: '',
    },
    {
    title: '',
      description:
        "",
      image: 'https://miro.medium.com/max/3000/1*bHf1bqIQEJmtRDnuxVPdfg.jpeg',
      imgText: '',
      linkText: '',
    },
  ];

    
  }

  async componentDidMount() {
    console.log(this.NewsList);
    try {
      /*
      let [items, news] = await Promise.all([
        fetch("http://localhost:4000/"),
        fetch("http://localhost:4000/news")
      ]);      
      */
     let [news] = await Promise.all([
      fetch("http://localhost:4000/news")
    ]);   
      const a = await news.json();
      this.setState({NewsList:a});
       
    }
    catch(err) {
      console.log(err);
    };
    
  }
  componentWillUnmount() {
    
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
          <MainPage/>
        </React.StrictMode>,
        document.getElementById('root')
      );
    }
    else if (this.state.whichPage === "Hakkında") {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'));
      ReactDOM.render(
        <React.StrictMode>
          <Hakkında />
        </React.StrictMode>,
        document.getElementById('root')
      );
    }
    else if (this.state.whichPage === "Haberler") {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'));
      ReactDOM.render(
        <React.StrictMode>
-          <Haberler news= {this.state.NewsList}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
    }
    else if (this.state.whichPage === "Madalyalar") {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'));
      ReactDOM.render(
        <React.StrictMode>
-          <Madalyalar />
        </React.StrictMode>,
        document.getElementById('root')
      );
    }
    else if (this.state.whichPage === "Sporcularımız") {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'));
      ReactDOM.render(
      <React.StrictMode>
      <Sporcularımız></Sporcularımız>
      <MainPage />
      </React.StrictMode>,
        document.getElementById('root')
      );
    }
    else if (this.state.whichPage === "Farklı Bilgiler") {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'));
      ReactDOM.render(
        <React.StrictMode>
          <FarklıBilgiler />
        </React.StrictMode>,
        document.getElementById('root')
      );
    }
    else if (this.state.whichPage === "İletisim") {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'));
      ReactDOM.render(
        <React.StrictMode>
          <Iletisim />
        </React.StrictMode>,
        document.getElementById('root')
      );
    }
    
    return (
      <React.Fragment>
        <CssBaseline />
        <Header title="Hoş Geldiniz" sections={this.sections} handleClick={changePage} />
      </React.Fragment>
    );
  }
}

export default BlogHeaderComponent;



