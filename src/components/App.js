import React from "react";
import SearchInput from "./SearchInput";
import axios from "axios";
import ImageList from "./ImageList";

const API_KEY = process.env.REACT_APP_PPIXABAY_KEY;

class App extends React.Component {

    state = {images: []}
    onSearchSubmit = async (entry) =>{
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${entry}&image_type=photo`)
        this.setState({images: response.data.hits});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: "30px"}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}


export default App;