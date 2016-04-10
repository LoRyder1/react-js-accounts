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

# ReactElement createElement(
#   string/ReactClass type,
#   [object props],
#   [children ...]
# )