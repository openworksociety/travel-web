import { Grid, Paper, Typography } from "@material-ui/core";
import { Component } from "react";
import { DataGrid } from "@material-ui/data-grid";
import GridActions from "../../../layout/GridActions";
import EmpTypeDialog from "./EmpTypeDialog";

const columns = [
  {
    field: "id",
    headerName: "Id",
    sortable: false,
    type: "number",
    flex: 0.5,
  },
  {
    field: "name",
    headerName: "Name",
    description: "Employee type name",
    flex: 1,
  },
  { field: "isDeactivated", headerName: "Deactive", flex: 0.5 },
];

// const rows = [
//   { id: 1, name: "Snow", active: 1 },
//   { id: 2, name: "Lannister", active: 1 },
//   { id: 3, name: "Lannister", active: 1 },
//   { id: 4, name: "Rushikesh", active: 1 },
//   { id: 5, name: "Nandu", active: 1 },
//   { id: 6, name: "Hari", active: 1 },
//   { id: 7, name: "Shubhshri", active: 1 },
//   { id: 8, name: "Aai", active: 1 },
// ];

function handleEditClick(e) {
  alert("Hurreeyyy edit clicked");
}

function handleDeleteClick(e) {
  alert("Hurreeyyy Delete clicked");
}

function handleRefreshClick(e) {
  alert("Hurreeyyy Refresh clicked");
}

export class EmpTypeGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      open: false,
      rows: [],
    };
    this.handleCreateClick = this.handleCreateClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  // componentDidMount() {
  //   fetch("http://localhost:8080/identitytype/findAll")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           rows: result,
  //         });
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // }

  handleCreateClick(e) {
    this.setState({ open: true });
  }

  handleClose(e) {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <Paper elevation={3}>
          <Grid container spacing={1}>
            <Grid item xs={4} container justify="center">
              <Typography variant="caption">Employee Type</Typography>
            </Grid>
            <Grid item xs={8}>
              <GridActions
                handleCreateClick={this.handleCreateClick}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
                handleRefreshClick={handleRefreshClick}
              />
            </Grid>
            <Grid item xs={12}>
              <EmpTypeDialog
                open={this.state.open}
                handleClose={this.handleClose}
              />
              <div style={{ width: "100%" }}>
                <DataGrid
                  rows={this.state.rows}
                  columns={columns}
                  pageSize={5}
                  checkboxSelection
                  autoHeight="true"
                  density="compact"
                />
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default EmpTypeGrid;
