import React, { Component } from 'react';


class App extends Component{
  constructor(){
  super();
  this.state={
     hits: [],
     isLoading: false,
     error: null,
   }
}

componentDidMount(){
  this.setState({
     isLoading: true
    })
  fetch('https://hn.algolia.com/api/v1/search?query=')
  .then(response => {
       if(response.ok){
       return response.json()
      }else{
      throw new Error('Something went wrong...')
    }
 })
  .then(data => this.setState({
    hits: data.hits,
    isLoading: false
  }))
  .catch(error => this.setState({
     error: null, 
     isLoading: false
  }))
 }

render(){
const {hits, isLoading, error} = this.state;

    if(isLoading){
      return <p>Loading ... </p>
    }
    if(error){
      return <p>{error.message}</p>
     }
return(
    <div className="container">

        {hits.map(data => 
          <ul key={data.objectID}>   
            <li><a href={data.url}>Title: {data.title}</a></li>
            <li>Author:{data.author}</li>
            <li>Points: {data.points}</li>
          </ul> 
        )}
    </div>
   )
  }
}
export default App