import React from 'react'
import Card from './card.js'

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