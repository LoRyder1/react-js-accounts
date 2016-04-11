this.Record = React.createClass({
  recordRow: function() {
    return (
      <tr>
        <td> {this.props.obj.date} </td>
        <td> {this.props.obj.title} </td>
        <td> {this.props.obj.amount} </td>
      </tr>
    )
  },

  render: function() {
    return this.recordRow()
  }
});