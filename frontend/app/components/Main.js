import React from 'react';
import {Card, CardText, CardTitle} from 'material-ui/Card';
import {Grid, Row, Col} from 'react-flexbox-grid';

class Main extends React.Component {



    render() {
        console.log('Main loaded!');

        return(
            <div>
                <Grid>
                    <Row>
                        <Col md={4}>
                            <Card>
                                <CardTitle title="Yobanavrot" subtitle="asdasd" />
                                <CardText>aasfasdfs</CardText>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card>
                                <CardTitle title="Yobanavrot" subtitle="asdasd" />
                                <CardText>aasfasdfs</CardText>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card>
                                <CardTitle title="Yobanavrot" subtitle="asdasd" />
                                <CardText>aasfasdfs</CardText>
                            </Card>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Main;