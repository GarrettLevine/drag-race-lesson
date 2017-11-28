import React from 'react';

export default class Queen extends React.Component {
    constructor(props) {
        super(props);
        this.renderLipsyncList = this.renderLipsyncList.bind(this);

        this.state = {
            queen: {},
        };
    }

    componentDidMount() {
        fetch(`http://www.nokeynoshade.party/api/queens/${this.props.match.params.id}`)
            .then((resp) => resp.json())
            .then((data) => {
                this.setState({
                    queen: data,
                });
            });
    }

    renderLipsyncList() {
        const { lipsyncs } = this.state.queen;
        if (!lipsyncs) return null;

        const list = lipsyncs.map(({ lipsyncId, name, artist, won }) => {
            return (
                <li key={lipsyncId}>
                    {`${name} by ${artist} - ${won ? 'won' : 'lost'}`}
                </li>
            );
        });

        return (
            <div key="test">
                <p className="title">Lipsyncs</p>
                <ul>{list}</ul>
            </div>
        );
    }

    render() {
        const {
            name,
            quote,
            image_url,
        } = this.state.queen;

        return (
            <section className="section">
                <h2 className="title">{name}</h2>
                <h3 className="subtitle">{quote}</h3>
                <div className="columns">
                    <div className="column">
                        <figure className="image is-1by1">
                            <img src={image_url} alt={name} />
                        </figure>
                    </div>
                    <div className="column">
                        {this.renderLipsyncList()}
                    </div>
                </div>
            </section>
        )
    }
}