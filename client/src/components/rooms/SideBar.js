import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "", city: "", price: 100
        };
    }

    onChange = ({target}) => {
        let {name, value} = target;
        if (name === "price") {
            if (value < 100) value = 100;
            value = parseInt(value);
            this.setState({[name]: value});

        } else {
            this.setState({[name]: value});
        }
        if (name === "price") this.props.filterPrice(value);
        if (name === "name") this.props.filterName(value);
        if (name === "city") this.props.filterCity(value);
    };

    searchByAll = () => {
        const {city, price} = this.state;
        this.props.searchByAll(city, price);
    };

    render() {
        const {city, price, name} = this.state;
        return (
            <div className="pl-3 pt-5">
                <div>
                    <button className="btn btn-primary" onClick={this.searchByAll}>
                        price & name
                    </button>
                </div>
                <div>
                    <h3>-50 Price +50 : </h3>
                    <input value={price} name="price" type="number" className="form-control"
                           onChange={this.onChange}/>
                </div>
                <div>
                    <h3>Name : </h3>
                    <input value={name} name="name" type="text" className="form-control"
                           onChange={this.onChange}/>
                </div>
                <div>
                    <h3>City : </h3>
                    <input value={city} name="city" type="text" className="form-control"
                           onChange={this.onChange}/>
                </div>
            </div>
        );
    };
}

export default Search

