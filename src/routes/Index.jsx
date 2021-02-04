import React, { PureComponent } from "react";

import AppContext from "../components/functional/AppContext";

import logo from "../assets/trackify.svg";

class Index extends PureComponent {
    static contextType = AppContext;

    constructor(props) {
        super(props);

        this.state = {};
    }

    handleClick(e) {
        console.log(e);
    }

    componentDidMount() {
        /*
        let { toggleLoader } = this.context;

        toggleLoader();
        */
    }

    render() {
        return (
            <div className="h-full flex flex-auto flex-col overflow-auto p-6 items-center justify-evenly text-center">
                <div>
                    <h1 className="text-3xl mb-6">Welcome to</h1>
                    <img src={logo} alt="Trackify logo" className="w-48 mb-8" />
                </div>
                <div className="opacity-50">
                    <p className="text-lg mb-6">Lets get started by adding some&nbsp;symbols to your list.</p>
                    <button onClick={this.handleClick} className="h-48 w-full text-center border-dashed rounded-lg border-white border-2 ">
                        <p className="icon text-2xl">plus</p>
                    </button>
                </div>
                <span></span>
            </div>
        );
    }
}

export default Index;
