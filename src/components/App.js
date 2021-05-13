import React from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import ImageList from './imageList';

class App extends React.Component {

    state = { images: [] }
    onSearchSubmit = async (entry) => {
        const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${entry}`)
        this.setState({ images: response.data })
    }

    render() {
        return (
            <div className='ui container' >
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />

            </div>
        )
    }
}

export default App;