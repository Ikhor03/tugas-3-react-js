import { Component } from "react";

class ListMenuUtama extends Component {
    render() {
        return (
            <div>
                <h1>
                    <center>Selamat Datang di Warung Nusantara</center>
                </h1>
                <center>
                    <img src={this.props.img} alt="Masakan Nusantara" width='600' />
                </center>
            </div>
        )
    }
}

export default ListMenuUtama;