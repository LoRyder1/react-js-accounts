# @Record = React.createClass
#   recordRow: ->
#     React.DOM.tr null,
#       React.DOM.td null, @props.record.date
#       React.DOM.td null, @props.record.title
#       React.DOM.td null, amountFormat(@props.record.amount)

#   render: ->
#     @recordRow()

# var AddFriend = React.createClass({
#   getInitialState: function(){
#     return {
#       newFriend: ''
#     }
#   },
#   updateNewFriend: function(e){
#     this.setState({
#       newFriend: e.target.value
#     });
#   },
#   handleAddNew: function(){
#     this.props.addNew(this.state.newFriend);
#     this.setState({
#       newFriend: ''
#     });
#   },
#   render: function(){
#     return (
#         <div>
#           <input type="text" value={this.state.newFriend} onChange={this.updateNewFriend} />
#           <button onClick={this.handleAddNew}> Add Friend </button>
#         </div>
#     );
#   }
# });