import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import { useState } from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, withStyles,Toolbar} from '@material-ui/core';
import { Route } from 'react-router-dom';
import Header from './Header';
import MainPage from './HeaderButtons/MainPage';
import Hakkında from './HeaderButtons/Hakkında';
import FarklıBilgiler from './HeaderButtons/FarklıBilgiler';
import Haberler from './HeaderButtons/Haberler';
import Iletisim from './HeaderButtons/Iletisim';
import Galeri from './HeaderButtons/Galeri';
import OkçulukHakkında from './HeaderButtons/OkçulukHakkında';
import Kurslarımız from './HeaderButtons/Kurslarimiz';
import OkculukMalzemeleri from './HeaderButtons/OkculukMalzemeleri';

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
    this.state = {NewsList: null, xmlfound: false, jsonstring: "", index: 0 };
    this.clickedName = "";
    this.handleSelect = this.handleSelect.bind(this);
    
    this.useStyles = withStyles((theme) => ({
      toolbar: theme.mixins.toolbar,
    }));

    /* These are the names to be placed on menu buttons. Props of <Header> component*/
    this.sections = [
      { title: 'AnaSayfa', url: 'AnaSayfa' },
      {
        title: 'Hakkında',
        subtitles: [
          { title: 'Hakkımızda', url: 'Hakkimizda' },
          { title: 'Kurslarımız', url: 'Kurslarimiz' },
        ],
        url: 'Hakkinda'
      },

      { title: 'Haberler', url: 'Haberler' },

      {
        title: 'Galeri',
        subtitles: [
          { title: 'KLÜBÜMÜZ', url: 'Klubumuz' },
          { title: 'Madalyalar', url: 'Madalyalar' },
          { title: 'Sporcularımız', url: 'Sporcularimiz' },
        ],
        url: 'Galeri'
      },

      { title: 'FARKLI BİLGİLER', url: 'FarkliBilgiler' },
      { title: 'Okçuluk Hakkında', url: 'OkculukHakkinda' },
      { title: 'OKÇULUK MALZEMELERİ', url: 'OkculukMalzemeleri' },
      { title: 'İLETİŞİM', url: 'Iletisim' },
    ];
    /*this.featuredPost = [
      {
        title: 'PhotowithPost',
        date: 'Nov 12',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
      },
      {
        title: 'Post title',
        date: 'Nov 11',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
      },
    ];*/


    /* This is sample object for MainFeaturedPost component. Going to be removed later. */

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

    /* This will trigger a refresh when user click a button on <Header> component. Function is, as a prop, going to be
        onClick event handler function inside <Header> */

    return (
      <React.Fragment>
        <CssBaseline />
          <Header title="" clickedName={this.clickedName} sections={this.sections} />
          <Toolbar />
          <Toolbar />

          <Route
            exact
            path='/'
            render={() => (<MainPage></MainPage>)}
          />
          <Route
            exact
            path='/AnaSayfa'
            render={() => (<MainPage></MainPage>)}
          />
          <Route
            exact
            path='/Hakkinda/Hakkimizda'
            render={() => (<Hakkında></Hakkında>)}
          />
          <Route
            exact
            path='/Hakkinda/Kurslarimiz'
            render={() => (<Kurslarımız></Kurslarımız>)}
          />
          <Route
            exact
            path='/Haberler'
            render={() => (<Haberler news={this.state.NewsList}></Haberler>)}
          />      
            <Route
              exact
              path='/Galeri/Klubumuz'
              render={() => (<Galeri section={"Klubumuz"}></Galeri>)}
            />
            <Route
              exact
              path='/Galeri/Madalyalar'
              render={() => (<Galeri section={"Madalyalar"}></Galeri>)}
            />
            <Route
              exact
              path='/Galeri/Sporcularimiz'
              render={() => (<Galeri section={"Sporcularimiz"}></Galeri>)}
            />
            <Route
              exact
              path='/OkculukMalzemeleri'
              render={() => (<OkculukMalzemeleri></OkculukMalzemeleri>)}
            />


          <Route
            exact
            path='/FarkliBilgiler'
            render={() => (<FarklıBilgiler></FarklıBilgiler>)}
          />
          <Route
            exact
            path='/OkculukHakkinda'
            render={() => (<OkçulukHakkında></OkçulukHakkında>)}
          />
          <Route
            exact
            path='/Iletisim'
            render={() => (<Iletisim></Iletisim>)}
          />
      </React.Fragment>
    );
  }
}

export default BlogHeaderComponent;



