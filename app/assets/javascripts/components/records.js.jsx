this.Records = React.createClass({  
  getInitialState: function() {
    return {
      records: this.props.data
    }
  },

  getDefaultProps: function() {
    return {
      records: []
    }
  },

  deleteRecord: function(record) {
    records = this.state.records.slice();
    index = records.indexOf(record);
    records.splice(index, 1);
    this.replaceState({records: records});
  },

  render: function(){
    var items = this.state.records;
    var el = this;

    return (
      <div className='records'>
        <h2 className='title'>Records</h2>
        <div className='row'></div>
        <hr></hr>
        <table className='table'>
          <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
            {items.map(function(object, i){
              return <Record obj={object} key={i} handleDeleteRecord={el.deleteRecord} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
})


var FriendsContainer = React.createClass({
    getInitialState: function(){
      return {
        name: 'Tyler McGinnis',
        friends: ['Jake Lingwall', 'Murphy Randall', 'Merrick Christensen'],
      }
    },
    addFriend: function(friend){
      this.state.friends.push(friend);
      this.setState({
        friends: this.state.friends
      });
    },
    render: function(){
      return (
        <div>
          <h3> Name: {this.state.name} </h3>
          <AddFriend addNew={this.addFriend} />
          <ShowList names={this.state.friends} />
        </div>
      )
    }
});

var AddFriend = React.createClass({
  getInitialState: function(){
    return {
      newFriend: ''
    }
  },
  updateNewFriend: function(e){
    this.setState({
      newFriend: e.target.value
    });
  },
  handleAddNew: function(){
    this.props.addNew(this.state.newFriend);
    this.setState({
      newFriend: ''
    });
  },
  render: function(){
    return (
        <div>
          <input type="text" value={this.state.newFriend} onChange={this.updateNewFriend} />
          <button onClick={this.handleAddNew}> Add Friend </button>
        </div>
    );
  }
});

var ShowList = React.createClass({
  render: function(){
    var listItems = this.props.names.map(function(friend){
      return <li> {friend} </li>;
    });
    return (
        <div>
          <h3> Friends </h3>
          <ul>
            {listItems}
          </ul>
        </div>
    )
  }
});
 
// ReactDOM.render(
//   <FriendsContainer />,
//   document.getElementById('app')
// );