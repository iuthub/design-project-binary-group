import React from 'react';
import {Card, CardText, CardTitle, CardActions, CardMedia} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import {Grid, Row, Col} from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';
import {ActionInfo} from 'material-ui/svg-icons';
import axios from 'axios';

const _ = require('lodash');

const styles = {
    rowStyle: {
        paddingTop: '20px'
    }
}

class Main extends React.Component {

    constructor () {
        super()
        this.state = {
            data: [],
          username: ''
        }
    
      }

      reloadHotelsData() {
        axios.get('http://172.20.10.5:8000/api/hotels')
        .then(response => {
            console.log(response);
            this.setState({data: response.data.data})
          })
      }


      componentDidMount() {
            this.reloadHotelsData();
      }
      


    render() {
        console.log('Main loaded!');
        const data = this.state.data;
        if (!data.length) {
            return <div></div>
        }
        const splittedArray = _.chunk(data,3)
        return(
            <div>
                <Grid>
                    {
                        splittedArray.map(hotelsArray=> {
                            return <Row style={styles.rowStyle}>
                                    {
                                        hotelsArray.map(hotel=> {
                                            return (
                                                <Col md={4}>
                                                    <Card>
                                                        <CardTitle title={hotel.title} subtitle={"Price: " + hotel.price + " $"}/>
                                                        <CardMedia
                                                            overlay={<CardTitle title={hotel.available ? "Available" : "Not Available"} />}
                                                        >
                                                        <img src="images/nature-600-337.jpg" alt="" />
                                                        </CardMedia>
                                                        
                                                        <CardText>
                                                            {hotel.description}
                                                        </CardText>
                
                
                                                        <CardActions>
                                                            <FlatButton label="More" icon={<ActionInfo/>}/>
                                                        </CardActions>
                                                    </Card>
                                                </Col>
                                                )
                                    })
                                }
                                </Row>
                        })
                    }
                
                </Grid>
            </div>
        )
    }
}

export default Main;