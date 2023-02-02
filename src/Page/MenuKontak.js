import { Component } from "react";

class MenuKontak extends Component{
    constructor(props){
        super(props);
        this.state = {
            alamat: 'Jl. Swadaya IV, Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota jakarta 1380',
            kontak: 'Kontak kami: 081312345678'
        }
    }
    render(){
        return(
            <center>
                <h3>{this.state.alamat}</h3>
                <h4>{this.state.kontak}</h4>
            </center>
        )
    }
}

export default MenuKontak;