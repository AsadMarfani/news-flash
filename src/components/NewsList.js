import React, { Component } from 'react';
import { List } from 'antd';
import NewsCard from './NewsCard';

const data = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
    {
        title: 'Title 5',
    },
    {
        title: 'Title 6',
    },
];
export default class NewsList extends Component {
    render() {
        return (
            <List
                grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
                dataSource={data}
                renderItem={item => <List.Item>
                    <NewsCard title={item.title} />
                </List.Item>
                }
            />
        )
    }
} 