import './index.css';
import React from 'react'
import { Card } from 'react-bootstrap';

export default function Details(props) {
    return (
        <>
            <section className='detailSection'>
                <Card className='detailCard'>
                    <Card.Header className='titleDetail'><span><Card.Img className='detailImg' variant="top" src={`${props.history.location.state.avatar}`} />{props.history.location.state.fullName}</span>
                    </Card.Header>
                </Card>
                <Card className='subDetailCard'>
                    <Card.Header>Owner Information</Card.Header>
                    <Card.Body className='cardBody'>
                        <Card.Text>
                            <span className='testTitle'><span>Owner - {props.history.location.state.owner}</span></span>
                            <span className='testTitle'>Stars - {props.history.location.state.stars}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='subDetailCard'>
                    <Card.Header>Repository Information</Card.Header>
                    <Card.Body className='cardBody'>
                        <Card.Text>
                            <span className='testTitle'><span>Description - {props.history.location.state.description}</span></span>
                            <span className='testTitle'> Language - {props.history.location.state.language}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>
        </>
    )
}