import React from "react";
import {Component} from "react/cjs/react.production.min";
import BookService from "../services/BookService";
class ViewBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            book: {}
        }
    }
    cancel(){
        this.props.history.push('/books');
    }
    componentDidMount(){
        BookService.getBookById(this.state.id).then( res => {
            this.setState({book: res.data});
        })
    }

    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Book Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Name: </label>
                            <div> { this.state.book.name}</div>
                        </div>
                        <div className = "row">
                            <label> Author: </label>
                            <div> { this.state.book.author }</div>
                        </div>
                        <div className = "row">
                            <label> Publisher: </label>
                            <div> { this.state.book.publisher }</div>
                        </div>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)}
                        style={{marginLeft: "10px"}}>Back
                    </button>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewBook;
