import axios from 'axios';
import React from 'react'
import './App.css';
import InfoWrapper from './InfoWrapper';
import './styles.css'
import TableRow from './TableRow';

class App extends React.Component {
  state = { 
    userData : [],
    searchQuery : '',
    filteredUserData : [],
    activeRowIndex: 2,
    activeRowData : '',
    activeRowId : ''
  }
  
  componentDidMount(){
    axios.get('https://admin-panel-data-edyoda-sourav.herokuapp.com/admin/data')
    .then(res => this.setState({
      userData: res.data,
      activeRowId : res.data[this.state.activeRowIndex].id,
      activeRowData : res.data[this.state.activeRowIndex]
    }))
    .catch(err => console.log(err))
  }

  getFilteredData = (e) => {
    let filteredUsers = this.state.userData.filter(user => user.firstName.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({searchQuery: e.target.value,filteredUserData: filteredUsers})
  }

  handleSelectedRow = (id) => {
    let selectedRowRecord = this.state.userData.findIndex(user => user.id === id)
    console.log(selectedRowRecord)
    this.setState({
      activeRowId: id,
      activeRowData: this.state.userData[selectedRowRecord]
    })
  }

  render() { 
    console.log('I am state ', this.state)
    return (
      <div>
        <main>

<div id="table-section">

    <form action="/">
        <input 
          type="text" 
          placeholder="Enter something" 
          name="search-box" 
          id="search-box" 
          onChange = {(e)=>this.getFilteredData(e)}
          value={this.state.searchQuery}
        />
    </form>

    <div id="table-wrapper">

        <div id="table-headers">
            <table>
                <thead>
                    <tr>
                        <th class="column1">Id</th>
                        <th class="column2">FirstName</th>
                        <th class="column3">LastName</th>
                        <th class="column4">Email</th>
                        <th class="column5">Phone</th>
                    </tr>
                </thead>
            </table>
        </div>

        <div id="table-data">
            <table>
                <tbody>
                  {
                    this.state.filteredUserData.length === 0 && this.state.searchQuery === '' ?
                      this.state.userData.map((item,idx)=><TableRow 
                            data = {item} 
                            handleSelectedRow={this.handleSelectedRow}
                            selectedRow = {this.state.activeRowId}
                          />)
                    : 
                      this.state.filteredUserData.map((item,idx)=><TableRow data = {item} selectedRow = {this.state.activeRowId} handleSelectedRow={this.handleSelectedRow}/>)
                  }
                </tbody>
            </table>
        </div>
                  
    </div>

</div>

{
  this.state.activeRowData ? <InfoWrapper data = {this.state.activeRowData}/> : ''
}
</main>
      </div>
    );
  }
}
 
export default App;
