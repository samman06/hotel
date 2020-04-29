import React from 'react';

class SearchDate extends React.Component {
    onChange = ({target}) => this.props.onChange(target);
    searchByDate = () => this.props.searchByDate();

    render() {
        const {from, to} = this.props;
        const {start, end} = this.props.errors;
        return (
            <div className="row m-0">
                <div className="offset-1 col-4 row">
                    <div className="col-2">
                        <label className="col-form-label ">From : </label>
                    </div>
                    <div className="col-8">
                        <input value={from} name="from" type="date" className="form-control"
                               onChange={this.onChange}/>
                        {start && <h5 style={{color: 'red'}}>{start}</h5>}
                    </div>
                </div>
                <div className=" col-4 row">
                    <div className="col-2">
                        <label className="col-form-label ">To : </label>
                    </div>
                    <div className="col-8">
                        <input value={to} name="to" type="date" className="form-control" onChange={this.onChange}/>
                        {end && <h5 style={{color: 'red'}}>{end}</h5>}

                    </div>
                </div>
                <div className="col">
                    <button className="offset-1 btn btn-success" onClick={this.searchByDate}>Search</button>
                </div>
            </div>
        );
    };
}

export default SearchDate
