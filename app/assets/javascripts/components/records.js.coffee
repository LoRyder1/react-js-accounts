@Records = React.createClass
  # getInitialState: ->
  #   records: @props.data

  # getDefaultProps: ->
  #   records: []

  render: ->
    # "<div className='records'>
    #   <h2 className='title'> Records </h2>
    # </div>"
    React.DOM.div
      className: 'records'
      React.DOM.h2
        className: 'title'
        'Records'
      React.DOM.div
        className: 'row'
      React.DOM.hr null
      React.DOM.table
        className: 'table table-bordered'
        React.DOM.thead null,
          React.DOM.tr null,
            React.DOM.th null, 'Date'
            React.DOM.th null, 'Title'
            React.DOM.th null, 'Amount'
            React.DOM.th null, 'Actions'
