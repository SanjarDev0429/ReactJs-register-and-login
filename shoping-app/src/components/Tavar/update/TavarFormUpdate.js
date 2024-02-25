import React, { useState, useRef } from 'react';
import axios from "axios"
import {
    Button,
    Form,
    Input,
    InputNumber,
    Select,
} from 'antd';

const TavarFormUpdate = (id) => {
    const name = useRef (null);
    const type = useRef (null);
    const cost = useRef (null);

    const Submit = () => {
        
        const data = {
            name: name.current.input.defaultValue,
            type: type.current.input.defaultValue,
            cost: cost.current.defaultValue,
            id:id.id
        }

        const jsonData = JSON.stringify(data)

        axios.post('http://yozma-test.uz/api/update-tavar.php',jsonData,{
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
        console.log(cost.current.defaultValue);
    }


    return (   
        <Form
            
            layout="vertical"
            >
            <Form.Item label="Name">
                <Input ref={name}/>
            </Form.Item>
            <Form.Item label="Type">
                {/* <Select ref={type}>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                </Select> */}
                <Input ref={type}/>
            </Form.Item>
            <Form.Item label="Narx(so'mda)">
                <InputNumber ref={cost} />
            </Form.Item>
            <Form.Item>
                <Button onClick={Submit} type="primary">Saqlash</Button>
            </Form.Item>
        </Form>
    );
    };
export default TavarFormUpdate;