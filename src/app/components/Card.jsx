import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-1by1">
                        <img src={this.props.image_url} alt="Placeholder image" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-conten">
                            <p className="title is-4">
                                <a onClick={this.props.titleClick}>
                                    {this.props.title}
                                </a>
                                { this.props.icon ?
                                    <span
                                        className="icon has-text-success padding-left"
                                        onClick={this.props.click}
                                    >
                                        <i className={`fa fa-${this.props.icon}`}></i>
                                    </span>
                                    :
                                    null
                                }
                            </p>
                        </div>
                        </div>
                        
                        <div className="content">
                            {this.props.description}
                        </div>
                    </div>
            </div>
        );
    }
}

export default Card;
