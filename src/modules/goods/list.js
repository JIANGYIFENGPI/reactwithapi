import React from 'react';

import fetch from 'isomorphic-fetch';


class List extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        lista: [],
    }}      

componentDidMount(){
    fetch('http://localhost:8080/devicedata')
    .then(response => response.json())
    .then(resData => {
        debugger;
        console.log(resData)
        this.setState( {lista: resData});
    })

}

render(){
  return (
<div>
                  <table className="pure-table">
                        <thead>
                            <tr>
                                <th>device id </th>
                                <th>start time </th>
                                <th>send time </th>
                                <th>device status</th>
                            </tr>
                        </thead>
                        <tbody>{
                                this.state.lista.map(function(data){
                                return (  
                                <tr key={data.objectID}>   
                                    <td>{data.deviceid}</td>
                                    <td>{data.statusstarttime}</td>
                                    <td>{data.statusendtime}</td>
                                    <td>{data.devicestatus}</td>
                                    


                             <td>{data.qntMin}</td>
                                </tr>
                                );
                            })
                        }
                        </tbody>
                    </table>
 
                </div>
  )
}
}

export default List;