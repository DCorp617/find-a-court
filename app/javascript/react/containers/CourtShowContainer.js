import React, { Component } from 'react'

class CourtShowContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      courtObject: {
        court: {},
        court_photo: {
          url: ""
        }
      }
    }
  }

  componentDidMount(){
    let courtId = this.props.match.params.id

    fetch(`/api/v1/courts/${courtId}`)
      .then(response => {
        if(response.ok){
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(courtData => {
        this.setState({
          courtObject: courtData
        })
        debugger
      })
      .catch(error => console.error(`Error in fetch  ${error.message}`));
  }

  render(){
    debugger
    return(
      <div>
        <h1>{this.state.courtObject.court.name}</h1>

      </div>
    )
  }
}

export default CourtShowContainer
