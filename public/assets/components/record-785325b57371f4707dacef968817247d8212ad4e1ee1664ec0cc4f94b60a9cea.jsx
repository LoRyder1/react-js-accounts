this.Record = React.createClass({
  getInitialState: function(){
    return null;
  },

  handleDelete: function(e) {
    e.preventDefault();

    var request = $.ajax({
      method: 'DELETE',
      url: "/records/" + this.props.obj.id,
      dataType: 'JSON'
    });

    // An arrow function expression has a shorter syntax compared to function expressions and lexically binds the this value (does not bind its own this, arguments, super, or new.target). Arrow functions are always anonymous.

    // lexically binds the this value, arrow functions are anonymous
    request.done( () => {
      this.props.handleDeleteRecord(this.props.obj)
    });

  },

  recordRow: function() {
    return (
      <tr>
        <td> {this.props.obj.date} </td>
        <td> {this.props.obj.title} </td>
        <td> {this.props.obj.amount} </td>
        <td> <button onClick={this.handleDelete}> Delete </button> </td>
      </tr>
    )
  },

  render: function() {
    return this.recordRow()
  }
});
