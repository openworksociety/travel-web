import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles, Theme } from '@material-ui/core/styles';
//import createStyles from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//         width: '25ch',
//       },
//     },
//   })
// );

const useStylesCard = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const styles = makeStyles((muiBaseTheme:Theme) => ({
  card: {
    maxWidth: 500,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "center",
    margin: "auto"
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  }
})
);

function Contact() {
  const classesCard = useStylesCard();
  const classes = styles();

  return (
    <div>
      <Box py={20} textAlign="center"  justifyContent="center">
        <Card className={classes.card}>
        {/* <CardMedia
          className={classes.media}
          image={
            "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
          }
        /> */}
        <Typography className={"MuiTypography--heading"} variant="h4">
          Contact Us
          </Typography>
        
        <CardContent className={classes.content}>
        <form className={classesCard.root} noValidate autoComplete="off">
        <Grid container spacing={3}>
        <Grid item xs={12}>
        <TextField
        required
          id="standard-full-width"
          label="First Name"
          style={{ margin: 8 }}
          placeholder="Enter your first name"
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </Grid>  
        <Grid item xs={12}>
        <TextField
        
          id="standard-full-width"
          label="Last Name"
          style={{ margin: 8 }}
          placeholder="Enter your last name"
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
        required
          id="standard-full-width"
          label="Email Id"
          style={{ margin: 8 }}
          placeholder="Enter your email id"
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          id="standard-multiline-flexible"
          label="Message"
          multiline
          fullWidth
          rows={4}
          placeholder="Enter your message here"
          defaultValue=""
        />
        </Grid>
        </Grid>
          
                  
        </form>
          {/* <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            This is sample text
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
            You can reach us at.
          </Typography> */}
        </CardContent>
      </Card>
      </Box>
      
    </div>
  );
}

export default Contact;
