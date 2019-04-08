import React, { Component } from 'react';
import { List, Skeleton, Icon, Avatar, Switch, Spin, Pagination, } from 'antd';
import NewsCard from './NewsCard';
import axios from 'axios';
import { FETCH_NEWS_URL, INTERNAL_SERVER_URL } from '../constants';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
const PAGE_SIZE = 5;
export default class NewsList extends Component {
    state = {
        loading: true,
        news: [],
        pageNumber: 1,
        totalResults: 0
    }
    componentDidMount() {
        const { pageNumber } = this.state;
        const URL = `${FETCH_NEWS_URL}&pageSize=${PAGE_SIZE}&page=${pageNumber}`;
        console.log('URL : ', URL);
        axios.get(URL).then(response => {
            console.log(response.data);
            const { articles, totalResults } = response.data;
            this.setState({
                loading: false,
                news: articles,
                totalResults
            });
        }).catch(error => console.log(error))
    }

    onChange = (checked) => {
        this.setState({ loading: !checked });
    }
    handleChange = (page, pageSize) => {
        console.log('page, pageSize', page, pageSize);
    }

    render() {
        const { loading } = this.state;
        console.log('loading : ', loading);
        return (
            <div style={{ width: '80%', margin: '0 auto' }}>
                {this.state.loading ? <Spin indicator={antIcon} /> :
                    <div>
                        <List
                            // grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
                            itemLayout='vertical'
                            size="large"
                            dataSource={this.state.news}
                            renderItem={item =>
                                <List.Item
                                    key={item.publishedAt}
                                    // actions={!loading && [<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                                    extra={!loading && <img width={272} height={160} alt="logo" src={item.urlToImage} />}
                                >
                                    <List.Item.Meta
                                        title={<a href={item.url}>{item.title}</a>}
                                        description={item.description}
                                    />
                                </List.Item>
                            }
                        />
                        <Pagination
                            size = "small"
                            defaultCurrent={1}
                            defaultPageSize={PAGE_SIZE}
                            onChange={this.handleChange}
                            total={this.state.totalResults}
                        />
                    </div>
                }
            </div>
        )
    }
} 