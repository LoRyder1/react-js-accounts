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

  render: function(){
    var items = this.state.records;

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
              return <Record obj={object} key={i} />;
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
        friends: ['Jake Lingwall', 'Murphy Randall', 'Merrick Christensen']
      }
    },
    render: function(){
      return (
        <div>
          <h3> Name: {this.state.name} </h3>
          <ShowList names={this.state.friends} />
        </div>
      )
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

// ReactDOM.render(<FriendsContainer />, document.getElementById('app'));