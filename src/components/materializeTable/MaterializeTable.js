import React from 'react'
import "./MaterializeTable.css";
import $ from 'jquery';
import jQuery from 'jquery';
$.dataTable = require('datatables.net');


class MaterializeTable extends React.Component{
  constructor(props){
    super(props)
    this.state = props;    
    console.log(this.state);
  }
  componentDidMount(){

    const allowedKeys = ["id", ...this.state.columns.map(c => c.value)]

    const editKeys = this.state.columns
      .filter(c => c.canEdit)
      .map(c => c.value);
    console.log(allowedKeys);

    const filteredData = this.state.data.map(raw => {
      return Object.keys(raw)
      .filter(key => allowedKeys.includes(key))
      .reduce((obj, key) => {
        obj[key] = raw[key]
        return obj;
      }, {});
    });
  
    console.log(filteredData);

    this.setState({data: filteredData});



    (function(window, document, undefined) {

      var factory = function($, DataTable) {
        "use strict";
    
        $('.search-toggle').click(function() {
          if ($('.hiddensearch').css('display') == 'none')
            $('.hiddensearch').slideDown();
          else
            $('.hiddensearch').slideUp();
        });
    
        /* Set the defaults for DataTables initialisation */
        $.extend(true, DataTable.defaults, {
          dom: "<'hiddensearch'f'>" +
            "tr" +
            "<'table-footer'lip'>",
          renderer: 'material'
        });
    
        /* Default class modification */
        $.extend(DataTable.ext.classes, {
          sWrapper: "dataTables_wrapper",
          sFilterInput: "form-control input-sm",
          sLengthSelect: "form-control input-sm"
        });
    
        /* Bootstrap paging button renderer */
        DataTable.ext.renderer.pageButton.material = function(settings, host, idx, buttons, page, pages) {
          var api = new DataTable.Api(settings);
          var classes = settings.oClasses;
          var lang = settings.oLanguage.oPaginate;
          var btnDisplay, btnClass, counter = 0;
    
          var attach = function(container, buttons) {
            var i, ien, node, button;
            var clickHandler = function(e) {
              e.preventDefault();
              if (!$(e.currentTarget).hasClass('disabled')) {
                api.page(e.data.action).draw(false);
              }
            };
    
            for (i = 0, ien = buttons.length; i < ien; i++) {
              button = buttons[i];
    
              if ($.isArray(button)) {
                attach(container, button);
              } else {
                btnDisplay = '';
                btnClass = '';
    
                switch (button) {
    
                  case 'first':
                    btnDisplay = lang.sFirst;
                    btnClass = button + (page > 0 ?
                      '' : ' disabled');
                    break;
    
                  case 'previous':
                    btnDisplay = '<i class="material-icons">chevron_left</i>';
                    btnClass = button + (page > 0 ?
                      '' : ' disabled');
                    break;
    
                  case 'next':
                    btnDisplay = '<i class="material-icons">chevron_right</i>';
                    btnClass = button + (page < pages - 1 ?
                      '' : ' disabled');
                    break;
    
                  case 'last':
                    btnDisplay = lang.sLast;
                    btnClass = button + (page < pages - 1 ?
                      '' : ' disabled');
                    break;
    
                }
    
                if (btnDisplay) {
                  node = $('<li>', {
                      'class': classes.sPageButton + ' ' + btnClass,
                      'id': idx === 0 && typeof button === 'string' ?
                        settings.sTableId + '_' + button : null
                    })
                    .append($('<a>', {
                        'href': '#',
                        'aria-controls': settings.sTableId,
                        'data-dt-idx': counter,
                        'tabindex': settings.iTabIndex
                      })
                      .html(btnDisplay)
                    )
                    .appendTo(container);
    
                  settings.oApi._fnBindAction(
                    node, {
                      action: button
                    }, clickHandler
                  );
    
                  counter++;
                }
              }
            }
          };
    
          // IE9 throws an 'unknown error' if document.activeElement is used
          // inside an iframe or frame. 
          var activeEl;
    
          try {
            // Because this approach is destroying and recreating the paging
            // elements, focus is lost on the select button which is bad for
            // accessibility. So we want to restore focus once the draw has
            // completed
            activeEl = $(document.activeElement).data('dt-idx');
          } catch (e) {}
    
          attach(
            $(host).empty().html('<ul class="material-pagination"/>').children('ul'),
            buttons
          );
    
          if (activeEl) {
            $(host).find('[data-dt-idx=' + activeEl + ']').focus();
          }
        };
    
        /*
         * TableTools Bootstrap compatibility
         * Required TableTools 2.1+
         */
        if (DataTable.TableTools) {
          // Set the classes that TableTools uses to something suitable for Bootstrap
          $.extend(true, DataTable.TableTools.classes, {
            "container": "DTTT btn-group",
            "buttons": {
              "normal": "btn btn-default",
              "disabled": "disabled"
            },
            "collection": {
              "container": "DTTT_dropdown dropdown-menu",
              "buttons": {
                "normal": "",
                "disabled": "disabled"
              }
            },
            "print": {
              "info": "DTTT_print_info"
            },
            "select": {
              "row": "active"
            }
          });
    
          // Have the collection use a material compatible drop down
          $.extend(true, DataTable.TableTools.DEFAULTS.oTags, {
            "collection": {
              "container": "ul",
              "button": "li",
              "liner": "a"
            }
          });
        }
    
      }; // /factory
    
    // Otherwise simply initialise as normal, stopping multiple evaluation
    factory(jQuery, jQuery.fn.dataTable);
    
    })(window, document);
    
    $(document).ready(function() {
      $('#datatable').dataTable({
        "oLanguage": {
          "sStripClasses": "",
          "sSearch": "",
          "sSearchPlaceholder": "Enter Keywords Here",
          "sInfo": "_START_ -_END_ of _TOTAL_",
          "sLengthMenu": '<span>Rows per page:</span><select class="browser-default">' +
            '<option value="10">10</option>' +
            '<option value="20">20</option>' +
            '<option value="30">30</option>' +
            '<option value="40">40</option>' +
            '<option value="50">50</option>' +
            '<option value="-1">All</option>' +
            '</select></div>'
        },
        bAutoWidth: false
      });
    });
    
  }

th = column => <th key={column.header}>{column.header}</th>
td = value => <td>{value}</td>
tr = value =>  <tr data-id={value.id}>{this.state.columns.map(obj => obj.canEdit ? 
  <td data-id={obj.value} contentEditable onInput={e=> obj.handleUpdate(e.target.parentElement)}>{value[Object.values(obj)[1]]}</td> 
    : 
  <td data-id={obj.value}>{value[obj.value]}</td>
)}</tr>

render (){return <div className="row">
  <div id="admin" className="col s12">
    <div className="card material-table">
      <div className="table-header">
        <span className="table-title">{this.state.title}</span>
        <div className="actions">
          {/* <a href="#add_users" className="modal-trigger waves-effect btn-flat nopadding"><i className="material-icons">person_add</i></a> */}
          <a href="#" className="search-toggle waves-effect btn-flat nopadding"><i class="material-icons">search</i></a>
        </div>
      </div>
      <table id="datatable" className="striped">
        <thead>
          <tr>
          {this.state.columns.map(this.th)}
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(this.tr)}
        </tbody>
      </table>
    </div>
  </div>
</div>
}
}

export default MaterializeTable;

