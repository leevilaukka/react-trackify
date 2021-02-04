import React, { PureComponent } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//routes
import Index from "./routes/Index";

//css
import "./css/style.css";

//api import
import request from "./api/request";

//appcontext import
import AppContext from "./components/functional/AppContext";

//components import
import ErrorMessage from "./components/render/ErrorMessage";
import FullscreenLoader from "./components/render/FullscreenLoader";
import OptionMenu from "./components/render/OptionMenu";

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            initialLoad: true,
            loading: true,
        };

        this.toggleLoader = this.toggleLoader.bind(this);
    }

    /*
    componentDidMount() {
        this.checkConnection()
            .then(async () => {
                const coinList = await this.loadCoinList();
                if (coinList == null) throw new Error("Failed to fetch coinlist");
                const currencyList = await this.loadCurrencyList();
                if (currencyList == null) throw new Error("Failed to fetch currencylist");
                this.setState(
                    {
                        data: {
                            coinList: coinList,
                            currencyList: currencyList,
                        },
                    },
                    () => {
                        this.setState({
                            initialLoad: false,
                        });
                    }
                );
            })
            .catch((error) => {
                this.setState({
                    error: <ErrorMessage message={error.message} />,
                });
            });
    }
    */

    async checkConnection() {
        return new Promise((resolve, reject) => {
            request("/ping")
                .then((res) => {
                    if (res.error) throw new Error(res.error);
                    resolve(res);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    async loadCoinList() {
        return new Promise((resolve, reject) => {
            request("/coins/list")
                .then((res) => {
                    resolve(res);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    async loadCurrencyList() {
        return new Promise((resolve, reject) => {
            request("/simple/supported_vs_currencies")
                .then((res) => {
                    resolve(res);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    toggleLoader() {
        this.setState({
            loading: !this.state.loading,
        });
    }

    render() {
        return (
            <div className="w-screen min-h-screen flex flex-col">
                <OptionMenu />
                <Index />
            </div>
        );
        // Uncomment when loader needed!!
        /*
        if (this.state.error) return this.state.error;
        if (this.state.initialLoad) return <FullscreenLoader />;
        return (
            <AppContext.Provider value={{ state: this.state, toggleLoader: this.toggleLoader }}>
                {this.state.loading === true && <FullscreenLoader />}
                <div className="w-screen min-h-screen flex flex-col">
                    <Router>
                        <OptionMenu />
                        <Switch>
                            <Route exact path="/" component={Index} />
                        </Switch>
                    </Router>
                </div>
            </AppContext.Provider>
        );
        */
    }
}

export default App;
