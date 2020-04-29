import React from 'react';

class Search extends React.Component {
    onChange = ({target}) => this.props.onChange(target);
    searchByAll = () => this.props.searchByAll();

    render() {
        const {city, price, name} = this.props;
        const sideBarStyle = {height: "40px", borderRadius: ".25rem"};
        return (
            <div className="p-2 border h-100" style={{position: "fixed"}}>
                <div className="pt-5">
                    <button className="btn btn-success" onClick={this.searchByAll}>
                        Price & City
                    </button>
                </div>
                <div className="pt-3">
                    <h3>-50 Price +50 : </h3>
                    <input
                        value={price} name="price"
                        style={sideBarStyle} type="number"
                        onChange={this.onChange}
                    />
                </div>
                <div className="pt-3">
                    <h3>Name : </h3>
                    <input
                        value={name} name="name"
                        style={sideBarStyle} type="text"
                        onChange={this.onChange}
                    />
                </div>
                <div className="pt-3">
                    <h3>City : </h3>
                    <input
                        value={city} name="city"
                        style={sideBarStyle} type="text"
                        onChange={this.onChange}
                    />
                </div>
            </div>
        );
    };
}

export default Search

