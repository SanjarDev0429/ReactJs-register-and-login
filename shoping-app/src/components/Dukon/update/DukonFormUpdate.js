import React, { useState, useRef } from 'react';
import axios from "axios"
import {
    Button,
    Form,
    Input,
    InputNumber,
    Select,
} from 'antd';
import { json } from 'react-router-dom';


const DukonForm = () => {
    const name = useRef (null);
    const manzil = useRef (null);
    const manager = useRef (null);
    const xodim = useRef (null);


    const Submit = (id) => {
        
        const data = {
            name: name.current.input.defaultValue,
            manzil: manzil.current.input.defaultValue,
            manager: manager.current.input.defaultValue,
            hodim: xodim.current.input.defaultValue,
            id:id.id,
        }

        const jsonData = JSON.stringify(data)

        axios.post('http://yozma-test.uz/api/update-dukon.php',jsonData,{
            headers: {
                'Content-Type':'application/json'
            },
        }
        )
        .then(function (response) {
            if (response.status == 200) {
                alert("Yozildi")
            } else {
                alert("Xatolik yuz berdi")
            }
        })
        .catch(function (erorr) {
            console.log(erorr);
        });
        console.log(jsonData);
    }


    return (   
        <Form
            
            layout="vertical"
            >
            
            <Form.Item label="Name">
                <Input ref={name}/>
            </Form.Item>
            <Form.Item label="Manzil">
                <Input ref={manzil}/>
            </Form.Item>
            <Form.Item label="Manager">
                <Input ref={manager}/>
            </Form.Item>
            <Form.Item label="Xodimlar">
                <Input ref={xodim}/>
            </Form.Item>
            <Form.Item>
                <Button onClick={Submit} type="primary">Saqlash</Button>
            </Form.Item>
        </Form>
    );
    };
export default DukonFormUpdate;