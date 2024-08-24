import { IconButton } from "@mui/material";
import { IoMdAdd } from "react-icons/io";
import { COLORS } from "../constants/colors";

const CLASSES = "fixed bottom-20 left-1/2 transform -translate-x-1/2 w-12 h-12";

interface AddButtonProps {
  onPress?(): void;
}

export default function AddButton({ onPress }: AddButtonProps) {
  return (
    <IconButton
      className={CLASSES}
      onClick={onPress}
      sx={{
        backgroundColor: COLORS.purple,
        color: COLORS.white,
        "&:hover": {
          backgroundColor: COLORS.purple,
          color: COLORS.white,
        },
      }}
    >
      <IoMdAdd size={28} />
    </IconButton>
  );
}
