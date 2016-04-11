this.Record = React.createClass({
  getInitialState: function(){
    return null;
  },

  handleDelete: function(e) {
    e.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: "/records/" + this.props.obj.id,
      dataType: 'JSON',
      // An arrow function expression has a shorter syntax compared to function expressions and lexically binds the this value (does not bind its own this, arguments, super, or new.target). Arrow functions are always anonymous.

      // lexically binds the this value, arrow functions are anonymous
      success: () => {
        console.log(this.props);
        this.props.handleDeleteRecord(this.props.obj)
      }
    })
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


// $(document).ready(function() {
//   $("#cr_sect").one("click", function (e) {
//     e.preventDefault();
//     $("form").find("input[type=text]").val("")

//     var request = $.ajax({ url: $(this).attr("href"), type: "get"});

//     request.done(function(response){
//       $(".cr_sectshow").append(response);
//     });
//   });

//   $(".cr_sectshow").on("submit", "form", function (e) {
//     e.preventDefault();
//     $(".cr_sectshow").bPopup().close()

//     var link = $(this).attr("action");
//     var data = $(this).serialize();


//     var request = $.ajax({url: link, data: data, type: "post", dataType: "JSON"});

//       request.done(function(data){
//         $(".sect_show").append(data)
//     var new_link = "<li><a href=/sections/" + data.id + ">"+ data.section + "</li>";
//         $("ul").prepend(new_link);
//         $("form").find("input[type=text]").val("")
//       });

//   });
// });

// $(".cr_sectshow").ready(function() {
//   $("#cr_sect").on("click", function (e) {
//       e.preventDefault();
//   $(".cr_sectshow").bPopup({
//                       appendTo: 'body'
//                       , zIndex: 2
//                       , opacity: 0.6
//                       , modalClose: true
//                       , transition: 'slideIn'

//       });

//   });
// });

// //show d3.js bargraph
// $("#mastery_by_section").ready(function() {
//   var request = $.ajax({url:"/sections/show_bargraph", type: "get"});
//   request.done(function(response){
//   $("#mastery_by_section").show();
//   });
// });
