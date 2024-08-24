import { IconButton } from "@mui/material";
import { MdEdit, MdDelete } from "react-icons/md";
import { COLORS } from "../../../constants/colors";

export default function ButtonGroup() {
  return (
    <div className="TodoItemButtonGroup">
      <IconButton sx={{ color: COLORS.black }}>
        <MdEdit className="TodoItemButtonGroup__icon" />
      </IconButton>
      <IconButton sx={{ color: COLORS.black }}>
        <MdDelete className="TodoItemButtonGroup__icon" />
      </IconButton>
    </div>
  );
}
