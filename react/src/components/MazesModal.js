import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({});

class MazesModal extends Component {

  render() {
      if(!this.props.show) return null;
  
      const backdropStyle = {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 50,
        overflow: "auto"
      };
  
      const modalStyle = {
        backgroundColor: '#fff',
        borderRadius: 5,
        maxWidth: 500,
        minHeight: 300,
        margin: '0 auto',
        padding: 30,
        overflow: "auto"
      };
  
      const { classes } = this.props;

      return (
        <div className="backdrop" style={backdropStyle}>
            <div className="modal" style={modalStyle}>
                <div className="header">
                <IconButton className={classes.button} size="small" onClick={this.props.onClose}>
                  <CloseIcon className={classes.iconSmall} />
                </IconButton>
                </div>
                {this.props.children}
            </div>
        </div>
      );
    }
  }
  
  MazesModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
  };
  
  export default withStyles(styles)(MazesModal);