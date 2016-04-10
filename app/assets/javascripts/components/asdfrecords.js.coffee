# @Records = React.createClass
#   getInitialState: ->
#     records: @props.data

#   getDefaultProps: ->
#     records: []

#   render: ->
#     React.DOM.div
#       className: 'records'
#       React.DOM.h2
#         className: 'title'
#         'Records'
#       React.DOM.div
#         className: 'row'
#       React.DOM.hr null
#       React.DOM.table
#         className: 'table table-bordered'
#         React.DOM.thead null,
#           React.DOM.tr null,
#             React.DOM.th null, 'Date'
#             React.DOM.th null, 'Title'
#             React.DOM.th null, 'Amount'
#             React.DOM.th null, 'Actions'
#         React.DOM.tbody null,
#           for record in @state.records
#             React.createElement Record, key: record.id, record: record, handleDeleteRecord: @deleteRecord

# <tbody>
#     {objects.map(function(object, i){
#         return <ObjectRow obj={object} key={i} />;
#     })}
# </tbody>

# var data = [{name:'Jhon', age:28, city:'HO'},{name:'Onhj', age:82, city:'HN'},{name:'Nohj', age:41, city:'IT'}]

# var Hello = React.createClass({
    
#     render: function() {
            
#       var _data = this.props.info;
#       console.log(_data);
#       return(
#         <div>
#           {_data.map(function(object, i){
#              return <div className={"row"} key={i}> 
#                           {[ object.name ,
#                              <b className="fosfo" key={i}> {object.city} </b> , // remove the key 
#                              object.age
#                           ]}
#                       </div>; 
#            })}
#         </div>
#        );
#     }
# });