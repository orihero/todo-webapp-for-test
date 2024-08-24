import { useCallback } from "react";
import useVisibility from "../../hooks/useVisibility";
import TodoStatus from "../TodoStatus";
import "./TodoItem.css";
import { TodoItemButtonGroup, TodoItemInfoSection } from "./ui";
import { Box, Collapse } from "@mui/material";

export default function TodoItem() {
  const statusVisibility = useVisibility();

  const onTogglePressItem = useCallback(() => {
    statusVisibility.toggle();
  }, [statusVisibility]);

  return (
    <div className="TodoItem" onClick={onTogglePressItem}>
      <div className="flex justify-between items-center">
        <ColoredCircle />
        <TodoItemInfoSection />
        <TodoItemButtonGroup />
      </div>

      {/* Collapse component to hide/show TodoStatus without taking up space */}
      <Collapse in={statusVisibility.visible} timeout={500}>
        <Box sx={{ mt: 2 }}>
          <TodoStatus />
        </Box>
      </Collapse>
    </div>
  );
}

export const ColoredCircle = () => (
  <div className="TodoItemButtonGroup__circle" />
);
