import React from 'react';

export default class IndexView extends React.Component {
    render() {
        return (
            <section className="section">
                <div className="section field">
                    <div className="control">
                        <input
                            key="filter-input"
                            className="input is-large"
                            type="text"
                            placeholder="Find a queen"
                            onChange={this.props.updateFilter}
                            value={this.props.filter}
                        />
                    </div>
                </div>
                <section className="section columns is-multiline">
                    {this.props.renderQueens()}
                </section>
            </section>
        );
    }
}