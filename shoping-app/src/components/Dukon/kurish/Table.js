import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';



const Tablee = () => {


  const columns = [
    {
      title: 'Nomi',
      dataIndex: 'nomi',
    },
    {
      title: 'manager',
      dataIndex: 'manager',
    },
    {
      title: 'hodim',
      dataIndex: 'hodim',
      sorter:{
        compare:(a, b) => a.narx - b.narx,
        multiple: 2,
      }
    },    
    {
      title: 'amallar',
      dataIndex: '',
      render: (
        {
          id,
        }
      ) =>
      <>
        <Link to={"/updatedukon/" + id}> <Button type="primary"> Tahrirlash </Button></Link>
        <Button onClick={() => dataDelet(id)} type="primary" danger>O'chirish</Button>
      </>
    },
  ];
  
  const dataDelet = (id) =>{

    axios.post('http://yozma-test.uz/api/delete-dukon.php',JSON.stringify({id:id}),{
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(function (response) {
      setMalumot(response.data.data.malumot)
      console.log(response.data.data);
      setData()
    })
    .catch(function (erorr) {
      console.log(erorr);
    });
  }
  
  const setData = () =>{
    axios.get('http://yozma-test.uz/api/select-dukon.php',{
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(function (response) {
      setMalumot(response.data.data.malumot);
    })
    .catch(function (erorr) {
      console.log(erorr);
    });
  }


  const [malumot, setMalumot] = useState([]);

  useEffect(() => {
    setData()
  }, []); 

  return (
    <Table columns = {columns} dataSource={malumot} />
  );

}

export default Tablee;