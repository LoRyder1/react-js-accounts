this.Record = React.createClass({
  recordRow: function() {
    return (
      <tr>
        <td> {this.props.record.date} </td>
        <td> {this.props.record.title} </td>
      </tr>
    )
  },

  render: function() {
    this.recordRow();
  }
});