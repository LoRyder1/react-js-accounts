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
    console.log(items);

    var listItems = items.map(function(record, i){
      return <tr key={i}>
              <td> {record.date}</td>
              <td> {record.title}</td>
              <td> {record.amount}</td>
              </tr>
    })

    // var reactElement = React.createElement(Record, key: record.id, record: record);

    // var listItems = function(){
    //   for(record in items) {
    //     React.createElement('tr', null, [key: record.id, record: record]);
    //   }
    // }

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
            {listItems}
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