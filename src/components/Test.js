import React, { Component } from 'react'

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 10
        }
        console.log("Constructor");
    }
    componentDidMount() {
        console.log("cDM");
        //API isteklerini burada gerçekleştireceğiz.
        this.setState({
            a: 20
        })
    }
    componentDidUpdate = (prevProps, prevState) => {
        console.log("cDUP");
    }
    shouldComponentUpdate(){
        console.log("sCUP");
        return false; //true döndürürsek componentDidUpdate tekrar çalışır lifecycle'a göre.
    }
    render() {
        console.log("Render");
        return (
            <div>

            </div>
        )
    }
}
export default Test;