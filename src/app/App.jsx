import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">Assemble my Gurls</h1>
                            <h2 className="subtitle">Create your team of Drag Race Queens!</h2>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default App;
