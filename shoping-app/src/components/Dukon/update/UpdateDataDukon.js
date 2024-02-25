import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import DukonForm from '../kiritish/dukonForm';
import SaidebarHelpres from '../../helpers/SaidebarHelpres'
import { useParams} from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

const UpdateDataDukon = () => { 
 
    const parm = useParams();
    
    const id = parm.id;

    const {items, routContent} = SaidebarHelpres();

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={routContent}/>
            </Sider>


            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                > 
                    <h1>Dukon tahrirlash</h1>
                </Header>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Tavarlar </Breadcrumb.Item>
                        <Breadcrumb.Item>Tahrirlash</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }} 
                    >
                       <DukonForm id={id}/>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default UpdateDataDukon;