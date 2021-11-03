import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Button, Card } from 'semantic-ui-react'
import productService from '../services/productService'

export default function ProductDetail() {

    

    const [product, setproduct] = useState({})
    let { name } = useParams()

    useEffect(() => {
        let ProductService = new productService();

        ProductService.getByProductName(name)
        .then(result => setproduct(result.data.data))

    }, [name])

    

    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>{name}</Card.Header>
                        <Card.Meta>Friends of Elliot {name}</Card.Meta>
                        <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>   
            </Card.Group>
        </div>
    )
}
