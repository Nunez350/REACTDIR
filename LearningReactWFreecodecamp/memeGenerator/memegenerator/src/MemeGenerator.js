import React , {Component} from "react"
import './style.css';
/**initialize state to save the following data
 * top ext
 * bottom text
 * random image ( initalize with )
 * 
 */
class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText:"",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            //console.log(memes[0])
            this.setState({allMemeImgs: memes})
        })
    }

     handleChange(event){
       const {name, value} = event.target
       console.log(name)
       this.setState({ [name]: value })

     }

    handleSubmit(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        console.log(this.state.allMemeImgs.length)
        console.log(Math.floor(Math.random()))
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({randomImg:randMemeImg})
       
    }
     render(){
         return (
            <div>
                <form className="meme-form" 
                onSubmit={this.handleSubmit}>
                    <input
                        type ="text"
                        name ="topText"
                        placeholder="Top Text"
                        value = {this.state.toptext}
                        onChange={this.handleChange}
                    />
                    <input
                        type ="text"
                        name ="bottomText"
                        placeholder="Bottom text"
                        value = {this.state.bottomText}
                        onChange={this.handleChange}
                    />
              
                <button> Gen</button>
                </form>


                <div className ="meme">
                    <img  src={this.state.randomImg} alt = ""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
         )
     }
}

export default MemeGenerator