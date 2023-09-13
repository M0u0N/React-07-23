/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// reactstrap components
import {
  Spinner,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";


function SingleShipment(){
  const [shipments, setShipments] = useState([])
  const {orderNo} = useParams();
  const [isLoading, setLoading] = useState(true)
  const found = shipments.find(shipment => shipment.orderNo === (orderNo))

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/shipments.json?key=5e0b62d0")
    .then(res => res.json())
    .then(json => {
      setShipments(json || [])
      setLoading(false)
    })
  }, []);

  if (isLoading === true) {
    return <Spinner/>
  }

  if (found === undefined)
  return <div>Shipment not found </div>

  return(
    <div className="content">
  <Row>
    <Col lg="12" md="12">
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Shipment details</CardTitle>
        </CardHeader>
          <CardBody>
            <div>
              <div>Order number: {shipments.orderNo} </div>
              <div>Date: {shipments.date} </div>
              <div>Customer: {shipments.customer} </div>
              <div>Tracking number: {shipments.trackingNo} </div>
              <div>Status: {shipments.status} </div>
              <div>Consignee: {shipments.consignee} </div>
            </div>
            <Link to={"/admin/dashboard"}>
              <Button>Back</Button>
            </Link>
          </CardBody>
      </Card>
    </Col>
  </Row>
  </div>   
  )
}

export default SingleShipment

