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
    // var listItems = this.state.records.map(function(record, i){
    console.log(items);

    // var listItems = function() {
    //   return (
    //     <tbody>
    //       {items.map(function(object, i){
    //         return <tr key={i}>
    //                   {[ object.date]}
    //                 </tr>;
    //       })}
    //     </tbody>
    //   );
    // }

    // var listItems = function() {
    //   for(item in itemes) {
    //     return React.createElement Record, key: item.id, record: item
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
            {items.map(function(object, i) {
              return <tr obj={object} key={i}/>;
            })}
          </tbody>
        </table>
      </div>
    )
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