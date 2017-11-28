import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <section className="hero is-primary">
                <div className="hero-head">
                    <div id="navbarMenuHeroA" className="navbar-menu">
                        <div className="navbar-end">
                            <NavLink activeClassName="is-active" className="navbar-item" exact to="/">
                                Home
                            </NavLink>
                            <NavLink activeClassName="is-active" className="navbar-item" to="/favourites">
                                {`FAVS (${this.props.favLength})`}
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="hero-body columns">
                    <div className="container column">
                        <h1 className="title">Assemble my Gurls</h1>
                        <h2 className="subtitle">Create your team of Drag Race Queens!</h2>
                    </div>
                </div>
            </section>
        );
    }
}
