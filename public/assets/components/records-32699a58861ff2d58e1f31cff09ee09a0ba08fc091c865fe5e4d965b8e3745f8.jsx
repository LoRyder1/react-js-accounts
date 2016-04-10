// this.Records = React.createClass({
  
//   // getInitialState: function() {
//   //   return {
//   //     records: this.props.data
//   //   }
//   // },
//   // getDefaultProps: function() {
//   //   return {
//   //     records: []
//   //   }
//   // },
//   render: function(){
//     React.DOM.div
//       className: 'records'
//     return (
//       <div class='records'>
//         <h3> Hello </h3>
//       <div>
//     )
//   }
// })

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

ReactDOM.render(<FriendsContainer />, document.getElementById('app'));
