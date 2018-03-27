import React from 'react'

class Card extends React.Component {
    render() {
        return (
            <a href="#" data-path-hover="m 0,0 0,47.7775 c 24.580441,3.12569 55.897012,-8.199417 90,-8.199417 34.10299,0 65.41956,11.325107 90,8.199417 L 180,0 z">
                <figure>
                    <img src="img/bower.jpg" />
                    <svg viewBox="0 0 180 320" preserveAspectRatio="none"><path d="m 0,0 0,171.14385 c 24.580441,15.47138 55.897012,24.75772 90,24.75772 34.10299,0 65.41956,-9.28634 90,-24.75772 L 180,0 0,0 z"/></svg>
                    <figcaption>
                        <h2>Crystalline</h2>
                        <p>Soko radicchio bunya nuts gram dulse.</p>
                        <button>View</button>
                    </figcaption>
                </figure>
            </a>
        );
    }
}

export default Card;