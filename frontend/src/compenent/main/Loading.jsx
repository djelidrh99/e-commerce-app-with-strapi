import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading() {
  return (
    <Box sx={{ py: "50px", textAlign: "center" }}>
    <CircularProgress sx={{ color: "rgb(239 68 68)" }} />
  </Box>
)
}
