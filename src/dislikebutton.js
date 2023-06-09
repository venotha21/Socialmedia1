import React from "react";


class dislikes extends React.Component{

    state = {
        dislikes : 0
    }

    handleClick = () => {
        this.setState({
            dislikes : this.state.dislikes + 1
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>dislikes: {this.state.dislikes}</button>
            </div>
        )
    }
}

export default dislikes;
    