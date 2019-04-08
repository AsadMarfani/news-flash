import React, { Component } from 'react';
import { PageHeader, Button } from 'antd';

export default class Header extends Component {
    render() {
        return (
            <PageHeader
                onBack={() => null}
                title="News Flash"
                subTitle="Great minds are always feared by lesser minds."
                extra={[
                    <Button key="1" type="primary">Login</Button>,
                    <Button key="3">Register</Button>,
                ]}
            />
        )
    }
}