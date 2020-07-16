import React from 'react'
import Item from './Item'
import { Row, Col } from 'reactstrap'

const ItemList = () => {
  return (
    <div>
      <Row xs={3}>
        <Col><Item /></Col>
        <Col><Item /></Col>
        <Col><Item /></Col>
        <Col><Item /></Col>
        <Col><Item /></Col>
        <Col><Item /></Col>
      </Row>
      <div className="pagination--custom">
        <a href="#">1, </a>
        <a href="#" className="active">2,</a>
        <a href="#">3, </a>
        <a href="#">4, </a>
        <a href="#">5 </a>
        <a href="#">&gt;</a>
      </div>
    </div>
  )
}

export default ItemList
