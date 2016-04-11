this.Record = React.createClass({
  recordRow: function() {
    return (
      <div className="hey"> </div>

      // <tr>
      //   <td> {this.props.record.date} </td>
      //   <td> {this.props.record.title} </td>
      // </tr>
    )
  },

  render: function() {
    this.recordRow()
  }
});