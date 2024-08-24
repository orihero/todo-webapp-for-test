import { useCallback, useMemo, useState } from "react";
import { Status } from "../../@types";
import { COLORS } from "../../constants/colors";
import { Button, Stack } from "@mui/material";

export default function TodoStatus() {
  const [loadingStatus, setLoadingStatus] = useState<Status | null>(null);
  const statusConfig = useMemo(
    () => [
      {
        label: "Pending",
        status: Status.pending,
        color: COLORS.yellow,
        textColor: "#333",
        variant: "outlined",
      },
      {
        label: "Done",
        status: Status.done,
        color: COLORS.green,
        textColor: "#fff",
        variant: "contained",
      },
      {
        label: "Won’t do",
        status: Status.wontdo,
        color: COLORS.red,
        textColor: "#333",
        variant: "outlined",
      },
    ],
    []
  );

  const handlePress = useCallback(async (status: Status) => {
    setLoadingStatus(status);
    //   await updateStatus({ status, id });
    setLoadingStatus(null);
  }, []);

  return (
    <Stack direction="row" spacing={2} className="justify-between pt-3">
      {statusConfig.map(
        ({ label, color, textColor, variant, status: btnStatus }, index) => (
          <Button
            key={index}
            onClick={() => handlePress(btnStatus)}
            // @ts-ignore
            variant={variant}
            sx={{
              color: textColor,
              borderColor: color,
              backgroundColor: variant === "contained" ? color : "transparent",
              borderRadius: "50px",
              padding: "5px 20px",
              "&:hover": {
                backgroundColor:
                  variant === "contained" ? color : "rgba(0, 0, 0, 0.04)",
                borderColor: color,
              },
            }}
          >
            {label}
          </Button>
        )
      )}
    </Stack>
  );
}
