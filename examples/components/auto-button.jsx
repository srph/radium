var React = require('react');
var ReactCreateClassExtended = require('../../modules/react-create-class-extended.js');

var Button = React.createClass({

  radiumStyles: function () {
    return {
      standard: {
        fontSize: 16,
        backgroundColor: "#0074d9",
        color: "#fff",
        border: 0,
        borderRadius: "0.3em",
        padding: "0.4em 1em",
        cursor: "pointer",
        outline: "none",

        states: {
          hover: {
            backgroundColor: "#0088FF"
          },
          focus: {
            backgroundColor: "#0088FF"
          },
          active: {
            backgroundColor: "#005299",
            transform: "translateY(2px)",
          }
        }
      },
      refs: {
        span: {
          standard: {
            color: "#222"
          }
        }
      }
    };
  },

  render: function () {
    return (
      <button>
        <span ref="span">{this.props.children}</span>
      </button>
    );
  }
});

module.exports = Button;