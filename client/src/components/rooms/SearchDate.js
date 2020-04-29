import React from 'react';

class SearchDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            from: "", to: "",
        };
    }

    onChange = ({target}) => this.setState({[target.name]: target.value});
    searchByDate = () => {
        const {from, to} = this.state;
        this.props.searchByDate(from, to);
    };

    render() {
        const {from, to} = this.state;
        return (
            <div className="form-row">
                <div className="offset-1 col-4 row">
                    <div className="col-2">
                        <label className="col-form-label ">From : </label>
                    </div>
                    <div className="col-8">
                        <input value={from} name="from" type="date" className="form-control"
                               onChange={this.onChange}/>
                    </div>
                </div>
                <div className=" col-4 row">
                    <div className="col-2">
                        <label className="col-form-label ">To : </label>
                    </div>
                    <div className="col-8">
                        <input value={to} name="to" type="date" className="form-control" onChange={this.onChange}/>
                    </div>
                </div>
                <div className="col">
                    <button className="offset-1 btn btn-secondary" onClick={this.searchByDate}>Search</button>
                </div>
            </div>
        );
    };
}

export default SearchDate
