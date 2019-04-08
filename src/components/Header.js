import React, { Component } from 'react';
import { PageHeader } from 'antd';

export default class Header extends Component {
    render() {
        return (
            <PageHeader
                onBack={() => null}
                title="News Flash"
                subTitle="Great minds are always feared by lesser minds." />
        )
    }
}