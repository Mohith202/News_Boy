import react,{Component,useEffect} from "react"
import NewsItem from "./NewsItem"


export default class NewsContent extends Component {
    
    constructor(){
        super();
        this.state={
            articles:[],
            pageSize:20,
            page:1,
            totalResults:""
        }
    }

    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=5a485da8602d4228bf1edde9d4745b6e&pageSize=${this.state.pageSize}`;
        let data=await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState(
            {articles:parsedData.articles,
            totalResults:parsedData.totalResults
             } )

    }
    handleNextChange=async()=>{
        if (( this.state.totalResults/this.state.pageSize)*10!=="0"){
            let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=5a485da8602d4228bf1edde9d4745b6e&pageSize=${this.state.pageSize}&page=${this.state.page+1}`;
            let data=await fetch(url);
            let parsedData = await data.json();
            this.setState(
                {articles:parsedData.articles,
                totalResults:parsedData.totalResults,
                    page:this.state.page+1
                 } )
        }
    }   
    handlePreviousChange=async()=>{
        if (this.state.page!=1 ){
            let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=5a485da8602d4228bf1edde9d4745b6e&pageSize=${this.state.pageSize}&page=${this.state.page-1}`;
            let data=await fetch(url);
            let parsedData = await data.json();
            this.setState(
                {articles:parsedData.articles,
                totalResults:parsedData.totalResults,
                    page:this.state.page-1
                 } )
        }
    }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsBoy -Breaking News</h2>
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-3" key={element.title}>
                    <NewsItem  title={element.title} des={element.description} img={element.urlToImage} url={element.url}></NewsItem>
                </div>
            }
            )}
        </div>
            <div className="container d-flex justify-content-between">

        <button type="button" className="btn btn-primary" disabled={this.state.page==1?true:false} onClick={this.handlePreviousChange}> &larr; Previous</button>

        <button type="button" className="btn btn-primary "  disabled={(this.state.totalResults-(this.state.pageSize *this.state.page))<="0"?true:false} onClick={this.handleNextChange}>  &rarr; Next</button>
      </div>
      </div>
    )
  }
}


