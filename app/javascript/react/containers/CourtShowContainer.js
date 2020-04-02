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
      })
      .catch(error => console.error(`Error in fetch  ${error.message}`));
  }

  render(){
    return(
      <section className="container">
        <div className="row">
          <div className="columns large-12">
            <h1 className="court-name">{this.state.courtObject.court.name}</h1>
          </div>
        </div>
        <div className="row">
          <div className="columns small-6">
            <h3>{this.state.courtObject.court.street}</h3>
          </div>
          <div className="columns small-6">
            <h3>
              {this.state.courtObject.court.city},
              {this.state.courtObject.court.state}
            </h3>
          </div>
        </div>
      </section>
    )
  }
}

export default CourtShowContainer
