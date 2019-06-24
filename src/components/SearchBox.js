import React from "react"

class SearchBox extends React.Component {
    handleChange = (e) => {
        let searchText = e.target.value
        this.props.handleChange(searchText)
    }
    render() {
        return (
            <div>
                <input onChange={this.props.handleChange} type="search" />
            </div>
        )
    }
}

export default SearchBox;