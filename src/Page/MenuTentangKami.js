import { Component } from "react";

class MenuTentangKami extends Component{
    constructor(props){
        super(props);
        this.state = {
            tentang: 'Warung Nusantara adalah Restoran yang bernuansa Nusantara, Kami ada untuk membuat anda menikmati makanan khas dari Nusantara'
        }
    }

    render(){
        return(
            <div>
                <center>
                    <p>Tentang Kami:</p> {this.state.tentang}
                </center>
            </div>
        )
    }
}

export default MenuTentangKami;