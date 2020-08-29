import React from 'react';

//import smallBlueTrucker from "./smallBlueTrucker.png";

class CustomGoogleMapWithMarker extends React.PureComponent {
    render() {
        const { compose, withProps, lifecycle } = require("recompose");
        const {
            withScriptjs,
            withGoogleMap,
            GoogleMap,
            Marker,
        } = require("react-google-maps");
        const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");


        const CustomGoogleMap = compose(
            withProps({
                googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCYe51yX3uNKnA75LxP091mhw8QHdZk07g",
                loadingElement: <div style={{ height: `10%` }} />,
                containerElement: <div style={{ height: this.props.height ? this.props.height : '200px' }} />,
                mapElement: <div style={{ height: `10%` }} />,
            }),
            lifecycle({
                componentWillMount() {
                    this.setState({
                        latitude: 0,
                        center: {
                            lat:38.4237, lng:27.1428
                        },
                    })
                },
            }),
            withScriptjs,
            withGoogleMap
        )(props =>
            <GoogleMap
                defaultZoom={10}
                center={props.center}
                onBoundsChanged={props.onBoundsChanged}
                componentRestrictions={{country: 'IN'}}
                defaultOptions={{mapTypeControl: false, scaleControl: true, streetViewControl: false,  fullscreenControl: false}}
            >
                <MarkerWithLabel
                    labelStyle={{ textAlign: "center",width:"50px",height: "15px", backgroundColor: "#0047CC", boxSizing: "border-box", border: "2.4px solid #FFFFFF",  borderRadius: "22.4px",padding:"8px"}}
                    labelAnchor={{ x: 90 , y: 65 }}
                   // icon={smallBlueTrucker}
                    key="1"
                    position={{ lat: 38.619099	, lng: 27.428921}}/>
            </GoogleMap>
        );
        return(
            <CustomGoogleMap mapCallback={this.props.mapCallback}/>
        )
    }
}
export default CustomGoogleMapWithMarker