import React from 'react'
import Card from './card.js'
import { Button } from 'antd';

class Content extends React.Component {
    render() {
        return (
            <div className="container">
                <section id="grid" className="grid clearfix">
                    <Card />
                </section>
            </div>
        );
    }
}

export default Content;