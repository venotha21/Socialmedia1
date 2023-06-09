import React from "react";


class Dislikes extends React.Component{

    state = {
        Dislikes : 0
    }

    handleClick = () => {
        this.setState({
            Dislikes : this.state.Dislikes + 1
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Dislikes: {this.state.Dislikes}</button>
            </div>
        )
    }
}

export default Dislikes;
    