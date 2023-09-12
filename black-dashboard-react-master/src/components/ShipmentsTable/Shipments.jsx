import React, { useState, useEffect } from 'react'
import { Spinner } from 'reactstrap';
import { Link, } from "react-router-dom";
import { Button } from "reactstrap";


function Shipments() {
    const [shipments, setShipments] = useState([])
    const [dbShipments, setDbShipments] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://my.api.mockaroo.com/shipments.json?key=5e0b62d0")
        .then(res => res.json())
        .then(json => {
            setShipments(json || [])
            setShipments(json || [])
            setLoading(false)
        })
    }, []);

    const deleteShipment = (orderNo) => {
        const index = dbShipments.findIndex(shipment => shipment.orderNo === orderNo);
        dbShipments.splice(index, 1);
        setDbShipments(dbShipments.slice())
    }



    if (isLoading === true ) {
        return<Spinner/>
    }


  return (
    <div>
    <table className="text-center" responsive>
        <thead className="text-primary">
            <tr>
                <th>Order number</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Tracking number</th>
                <th>Status</th>
                <th className="text-center">Consignee</th>
            </tr>
        </thead>
            <tbody>
                {shipments.map((shipment, index) =>(
                    <tr key={shipment.orderNo}>
                        <td>{shipment.orderNo}</td>
                        <td>{shipment.date}</td>
                        <td>{shipment.customer}</td>
                        <td>{shipment.trackingNo}</td>
                        <td>{shipment.status}</td>
                        <td>{shipment.consignee}</td>
                        <td>
                        <Button className="btn-icon btn-simple " color="danger" size='sm' onClick={() => deleteShipment(shipment.orderNo)}>
                        <i className='fa fa-times'></i> 
                        </Button>{` `}
                        <Button className="btn-icon btn-simple " color="success" size='sm' as={Link} to={"views/single-shipment/:index" + shipment.orderNo}>
                        <i className='fa fa-edit'></i> 
                        </Button>{` `}
                        </td>
                    </tr>
                ))}



            </tbody>
    </table>

    </div>
  )
}

export default Shipments