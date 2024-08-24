import React, { useCallback } from "react";
import { Backdrop, Box, Input, Modal, Slide, Button } from "@mui/material";
import { RefObject, useImperativeHandle } from "react";
import useVisibility, { UseVisibility } from "../../hooks/useVisibility";
import { COLORS } from "../../constants/colors";

interface ModalFormProps {
  _ref?: RefObject<UseVisibility>;
}

const style = {
  top: "calc(50% - 200px)",
  left: "calc(50% - 200px)",
  bgcolor: "background.paper",
  p: 4,
  borderRadius: "12px",
};

export default function ModalForm({ _ref }: ModalFormProps) {
  const modal = useVisibility();
  useImperativeHandle(_ref, () => modal);

  const onCancelModal = useCallback(() => {
    _ref?.current?.hide();
  }, [_ref]);

  return (
    <Modal
      open={modal.visible}
      onClose={modal.hide}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Slide direction="up" in={modal.visible} mountOnEnter unmountOnExit>
        <Box sx={{ ...style }} className="fixed flex flex-col w-96 shadow-lg">
          <Input
            placeholder="Title"
            sx={{
              mb: 2,
              borderRadius: "8px",
              backgroundColor: "#f7f7f7",
              padding: "10px",
              border: "1px solid #e0e0e0",
              "&:hover": {
                borderColor: "#bdbdbd",
              },
              "&.Mui-focused": {
                borderColor: COLORS.purple,
              },
            }}
            disableUnderline
            fullWidth
          />
          <Input
            placeholder="Description"
            multiline // Input komponentini textarea kabi ishlatadi
            minRows={3} // textarea uchun minimal qator soni
            sx={{
              mb: 2,
              borderRadius: "8px",
              backgroundColor: "#f7f7f7",
              padding: "10px",
              border: "1px solid #e0e0e0",
              "&:hover": {
                borderColor: "#bdbdbd",
              },
              "&.Mui-focused": {
                borderColor: COLORS.purple,
              },
            }}
            disableUnderline
            fullWidth
          />
          <Box className="flex justify-between mt-4">
            <Button
              variant="outlined"
              onClick={onCancelModal}
              sx={{
                borderRadius: "8px",
                borderColor: COLORS.purple,
                color: COLORS.purple,
                "&:hover": {
                  backgroundColor: "#f3e5f5",
                  borderColor: COLORS.purple,
                },
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: "8px",
                backgroundColor: COLORS.purple,
                "&:hover": {
                  backgroundColor: "#7b1fa2",
                },
              }}
            >
              Done
            </Button>
          </Box>
        </Box>
      </Slide>
    </Modal>
  );
}
