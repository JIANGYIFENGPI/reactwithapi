import React, { Component } from 'react';
import Brand from './Brand';
import axios from 'axios';

class Brands extends Component {
  constructor() {
    super();
  
    this.state = {
      error: null,
      isLoaded: false,
      brands: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/devicedata').then(
      res => {
        this.setState({
          isLoaded: true,
          brands: res.data
        });
      }
    ).catch(
      error => {
        this.setState({
          isLoaded: true,
          error
        })
      }
    )
  }

  render() {
    const { error, isLoaded, brands } = this.state;
    if (error) {
      return <div>{ error.message }</div>;
    } else if (!isLoaded) {
      return <div>loading...</div>
    } else {
      return (
        <div>
          <h2>devicedata</h2>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>deviceid</th>
                <th>statusstarttime</th>
                <th>statusendtime</th>
                <th>devicestatus</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand) => <Brand {...brand} key={brand.id}/>)}
            </tbody>
          </table>
        </div>
      );
    }

    
  }
}

export default Brands;