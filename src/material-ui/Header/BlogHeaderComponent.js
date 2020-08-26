import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';
import Header from './Header';
import MainPage from './HeaderButtons/MainPage';
import Sporcularımız from './HeaderButtons/Sporcularımız';
import Madalyalar from './HeaderButtons/Madalyalar';
import Hakkında from './HeaderButtons/Hakkında';
import FarklıBilgiler from './HeaderButtons/FarklıBilgiler';
import Haberler from './HeaderButtons/Haberler';
import Iletisim from './HeaderButtons/Iletisim';

/*
* BlogHeaderComponent, index.js dosyası içerisinde toolbar_section isimli <div> ogesine eklenir.
* Üzerinde oluşan menü butonları (Header.js dosyasında oluşmaktadır), sahip oldukları tıklama eventi
* ile tüm sayfanın kontrolünü saglamaktadır. Tıklanan butona göre root isimli <div> ögesinin içerisin-
* de ki componenti kaldırıp ilgili yeni componenti koyarak sayfanın bedenini düzenler.
* Ayrıca sunucu ile iletişim de şu an burada yapılmaktadır

* Yapılacaklar:
* component kaldırıp yenisini ekleme işleminden vazgeçip Router kullanılarak yeni html sayfalarına zıplama yapılacaktır.
*/


class BlogHeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { whichPage: "Ana Sayfa", NewsList: null, xmlfound: false, jsonstring: "", index: 0 };
    this.clickedName = "";
    this.handleSelect = this.handleSelect.bind(this);
    this.useStyles = makeStyles((theme) => ({
      mainGrid: {
        marginTop: theme.spacing(3),
      },
    }));

    /* These are the names to be placed on menu buttons. Props of <Header> component*/
    this.sections = [
      { title: 'Ana Sayfa', url: '#' },
      { title: 'Hakkında', url: '#' },
      { title: 'Haberler', url: '#' },
      { title: 'Galeri', url: '#' },
      { title: 'Farklı Bilgiler', url: '#' },
      { title: 'Okçuluk Hakkında', url: '#' },
      { title: 'İletisim', url: '#' },
    ];

    /* This is sample object for MainFeaturedPost component. Going to be removed later. */
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

  /* Fetching News(Haberler) data from a local server program. */
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
        fetch("http://192.168.1.21:4000/news")
      ]);
      const a = await news.json();
      this.setState({ NewsList: a });

    }
    catch (err) {
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
      /* This will trigger a refresh when user click a button on <Header> component. Function is, as a prop, going to be
      /* onClick event handler function inside <Header> */
      this.clickedName = newPage;
      this.setState({ whichPage: newPage });
    }

    /* In this section, root element, which is the symbolic body of the body will be changed accordingly */
    if (this.state.whichPage === "Ana Sayfa") {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'));
      ReactDOM.render(
        <React.StrictMode>
          <MainPage />
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
        <Haberler news={this.state.NewsList} />
        </React.StrictMode>,
        document.getElementById('root')
      );
    }
    else if (this.state.whichPage === "Madalyalar") {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'));
      ReactDOM.render(
        <React.StrictMode>
        <Madalyalar />
        </React.StrictMode>,
        document.getElementById('root')
      );
    }
    else if (this.state.whichPage === "Sporcularımız") {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'));
      ReactDOM.render(
        <React.StrictMode>
          <Sporcularımız></Sporcularımız>
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
    else if (this.state.whichPage === "Okçuluk Hakkında") {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'));
      ReactDOM.render(
        <React.StrictMode>

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
        <Container maxWidth="lg">
          <Header title="" clickedName = {this.clickedName} sections={this.sections} handleClick={changePage} />
        </Container>
      </React.Fragment>
    );
  }
}

export default BlogHeaderComponent;



