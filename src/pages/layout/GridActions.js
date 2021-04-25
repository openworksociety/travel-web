import { Grid, IconButton, Tooltip } from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import RefreshOutlinedIcon from "@material-ui/icons/RefreshOutlined";

function GridActions(props) {
  return (
    <div>
      <Grid container justify="flex-end">
        <Tooltip title="Create">
          <IconButton
            size="small"
            aria-label="create"
            onClick={props.handleCreateClick}
          >
            <AddCircleOutlineOutlinedIcon color="secondary" fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit">
          <IconButton
            size="small"
            aria-label="edit"
            onClick={props.handleEditClick}
          >
            <EditOutlinedIcon color="secondary" fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton
            size="small"
            aria-label="delete"
            onClick={props.handleDeleteClick}
          >
            <DeleteOutlineOutlinedIcon color="secondary" fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Refresh">
          <IconButton
            size="small"
            aria-label="refresh"
            onClick={props.handleRefreshClick}
          >
            <RefreshOutlinedIcon color="secondary" fontSize="small" />
          </IconButton>
        </Tooltip>
      </Grid>
    </div>
  );
}

export default GridActions;
