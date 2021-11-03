import React, { useEffect } from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup";
import { Button, FormField, Label } from "semantic-ui-react"
import TextInput from '../utilities/customFormControls/TextInput';
import productService from '../services/productService';

export default function ProductAdd() {

    const initialValues = { 
        productName: "", 
        unitPrice: 0
     }

    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunlu")
    })

    

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values)=>{
                    let ProductService = new productService();
                    ProductService.Add(values).then((result)=>console.log(result.data.data));
                    console.log(values);
                }}
            >
                <Form className="ui form">
                    <TextInput  name="productName" placeholder="Ürün Adı"/>
                    <TextInput  name="unitPrice" placeholder="Ürün Fiyatı"/>
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
