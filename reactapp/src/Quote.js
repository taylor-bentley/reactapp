import React from 'react';

export class Quote extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isLoaded: '',
      thisQuote: ''
    };
  }

  componentDidMount(){
    fetch("https://talaikis.com/api/quotes/random")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded:true,
            returnedQuote: result.quote
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }

    getQuote = () => {
      return this.state.returnedQuote
    }
  render(){
    return(
      <div className='thisQuote'>
        <div>
          <p className='quoteDetails'>{this.getQuote()}</p>
        </div>
      </div>
    )
  }
}

export default Quote;
