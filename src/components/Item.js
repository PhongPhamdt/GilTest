import React from 'react'
import { Card, CardBody, CardTitle, Row, Col, CardSubtitle } from 'reactstrap'

const Item = () => {
  return (
    <Card className="card--custom">
      <CardBody>
        <CardTitle>
          <Row xs={2}>
            <Col xs={4}>
              <div className="inset--shadow">
                <img
                  src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-avatar-vector-icon-white-background-png-image_5254779.jpg"
                  alt="avatar"
                  className="avatar"
                />
                <div className="custom"></div>
              </div>
            </Col>
            <Col xs={8}>
              <div className="container meta">
                <Row>
                  <div className="name">Eugene Sia</div>
                </Row>
                <Row>
                  <div className="icon">
                    <i className="fa fa-heart-o"></i>
                  </div>
                  <div className="info">1 Likes</div>
                </Row>
              </div>
            </Col>
          </Row>
        </CardTitle>
        <CardSubtitle>
          <div className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget euismod est. 
          </div>
        </CardSubtitle>
      </CardBody>
    </Card>
  )
}

export default Item
