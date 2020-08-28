import React from 'react';

import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { Container } from '@material-ui/core'

import MainFeaturedPost from './MainFeaturedPost';

const mainFeaturedPost = [{
    title: 'Hedefi olmayan sporcu, rehberi olmayan gezgin gibidir',
    description:
        "Kendine bir hedef belirlemek istiyorsan",
    image: 'https://www.colinglen.org/content/uploads/2020/02/Colin-Glen-987.jpg',
    btnName: "İletişim",
    btnUrl:"Iletisim",
},
{
    title: 'Atılan her ok, hedefe değmelidir!',
    description:
        "",
    image: 'https://miro.medium.com/max/3000/1*bHf1bqIQEJmtRDnuxVPdfg.jpeg',
    btnName:"Okçuluk Hakkında",
    btnUrl:"OkculukHakkinda"
},
];

export default function SwipeableContent(props) {
    return (
        <React.Fragment>
                <Grid spacing={4}>
                    <Carousel autoPlay={true} navButtonsAlwaysInvisible={true}>
                        {
                            mainFeaturedPost.map((item, i) =>
                                <MainFeaturedPost key={i} post={item} />
                            )
                        }
                    </Carousel>
                </Grid>
        </React.Fragment>
    )

    /*
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
    return (
        <Carousel autoPlay={true}>
            {
                items.map((item, i) => <MainFeaturedPost key={i} item={item} />)
            }
        </Carousel>
    )*/
}
