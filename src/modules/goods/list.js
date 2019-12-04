import React from 'react';

import fetch from 'isomorphic-fetch';


class List extends React.Component {
  constructor(){
    super();
    this.state = {
        lista: [],
    }}      

componentDidMount(){
    fetch('http://localhost:8080/devicedata')
    .then(response => response.json())
    .then(resData => {
        this.setState( {data: resData.results});
    })

}

render(){
  return (
<div>
                  <table className="pure-table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Produto</th>
                                <th>Quantidade</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>{
                                this.state.lista.map(function(data){
                                return (  
                                <ul key={data.objectID}>   
                                    <td>{data.deviceid}></td>
                                    <td>{data.statusstarttime}</td>
                                    <td>{data.statusendtime}</td>
                                    <td>{data.devicestatus}</td>
                                    


                             <td>{data.qntMin}</td>
                                </ul>
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