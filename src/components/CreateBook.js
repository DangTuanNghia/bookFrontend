import React from "react";
import {Component} from "react/cjs/react.production.min";
import BookService from "../services/BookService";
class CreateBook extends Component{
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            name: '',
            author: '',
            publisher: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAuthorHandler = this.changeAuthorHandler.bind(this);
        this.changePublisherHandler = this.changePublisherHandler.bind(this);
        this.saveOrUpdateBook = this.saveOrUpdateBook.bind(this);
    }

    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else {
            BookService.getBookById(this.state.id).then((res) => {
                let book = res.data;
                this.setState({
                    id: book.id,
                    name: book.name,
                    author: book.author,
                    publisher: book.publisher
                })
            })
        }
    }

    saveOrUpdateBook = (e) =>{
        e.preventDefault();
        if(this.state.id === '_add'){
            let book = {id:0,name: this.state.name, author: this.state.author, publisher: this.state.publisher};
            BookService.createBook(book).then(res =>{
            })
        }else{
            let book = {id:this.state.id,name: this.state.name, author: this.state.author, publisher: this.state.publisher};
            BookService.updateBook(book, this.state.id).then( res => {
                console.log(this.state.id)
                this.props.history.push('/books');
            });
        }
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeAuthorHandler= (event) => {
        this.setState({author: event.target.value});
    }

    changePublisherHandler= (event) => {
        this.setState({publisher: event.target.value});
    }

    cancel(){
        this.props.history.push('/books');
    }
    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Book</h3>
        }else{
            return <h3 className="text-center">Update Book</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Name: </label>
                                        <input placeholder="book name" name="name" className="form-control"
                                               value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Author: </label>
                                        <input placeholder="Book Author" name="author" className="form-control"
                                               value={this.state.author} onChange={this.changeAuthorHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Publisher: </label>
                                        <input placeholder="Book publisher" name="publisher" className="form-control"
                                               value={this.state.publisher} onChange={this.changePublisherHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateBook}>Save
                                    </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}
                                            style={{marginLeft: "10px"}}>Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateBook
