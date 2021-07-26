import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    [theme.breakpoints.up("lg")]: {
        width: "1200px",
        height: "600px"
    },
    [theme.breakpoints.down("md")]: {
        width: "800px",
        height: "400px"
    },
    [theme.breakpoints.down("sm")]: {
        width: "600px",
        height: "300px"
    },
    [theme.breakpoints.down("xs")]: {
        width: "400px",
        height: "400px",
        flexDirection: "column"
    },
  },
  demo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: "100% !important",  
    [theme.breakpoints.up("lg")]: {
        width: "850px !important",
    },
    [theme.breakpoints.down("md")]: {
        width: "600px",
    },
    [theme.breakpoints.down("sm")]: {
        width: "400px",
    },
    [theme.breakpoints.down("xs")]: {
        width: "400px",
    },
  },
  demoImg: {
    maxWidth: "95%",
    maxHeight: "90%",
    [theme.breakpoints.down("xs")]: {
        maxHeight: "300px",
    },
    },
   info: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    title: {
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
            fontSize: "1.6rem"
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.2rem"
        },
    },
    button: {
        margin: "10px 0px",
        [theme.breakpoints.down("md")]: {
            width: "100px",
            fontSize: "0.6rem",
            margin: "3px 0px",
        },
    }

}));

export default function TransitionsModal({ show, onHide, title, demo, sourceCode, live }) {
  const classes = useStyles();

  return (
     <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={show}
        onClose={() => onHide()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={show}>
            <div className={classes.paper}>
                <div className={classes.demo}>
                    <img className={classes.demoImg} src={demo} alt="" srcSet=""/>
                </div>
                <div className={classes.info}>
                    <h1 className={classes.title}> { title } </h1>
                    <a href={sourceCode} rel="noopener noreferrer" target="_blank"> <Button variant="contained" color="primary" className={classes.button} > Source Code </Button> </a>
                    { live && <a href={live} rel="noopener noreferrer" target="_blank" > <Button variant="contained" color="primary" className={classes.button} > Live </Button> </a> }
                </div>
            </div>
        </Fade>
      </Modal>
  );
}