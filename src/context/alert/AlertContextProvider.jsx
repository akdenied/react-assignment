import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import { createContext, useEffect, useState } from "react";

export const AlertContext = createContext(null);

export const ALERT_TYPE = {
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  INFO: "info",
};

const initialState = {
  type: ALERT_TYPE.SUCCESS,
  message: "",
};

export const AlertContextProvider = ({ children }) => {
  const [alert, setAlert] = useState(initialState);

  useEffect(() => {
    let timer = null;
    const prepareState = () => {
      if (!alert.message) return;

      timer = setTimeout(() => setAlert(initialState), 800);
    };

    prepareState();

    return () => clearTimeout(timer);
  }, [alert]);

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {alert.message && (
        <Alert
          severity={alert.type}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAlert(initialState);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {alert.message}
        </Alert>
      )}
      {children}
    </AlertContext.Provider>
  );
};
