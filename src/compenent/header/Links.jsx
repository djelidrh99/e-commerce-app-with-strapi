import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

// eslint-disable-next-line react/prop-types
export default function Links({Title}) {
  return (
    <Box
    
      sx={{
        ":hover .navLink" :{display:"block"},
        display: "flex",
        alignItems: "center",
        gap: "10px",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <Typography>{Title}</Typography>
      <KeyboardArrowDownIcon />
      <Box
      component="section"
      className="navLink"
        sx={{
          position: "absolute",
          top: "100%",
          minWidth: "150px",
          left: "50%",
          transform: "translateX(-50%)",
          display:"none",
          zIndex:"100"
        }}
      >
        <Paper sx={{ mt: 2, p: 0 }}>
          <nav aria-label="secondary mailbox folders">
            <List sx={{ p: 0 }}>
              <ListItem sx={{ p: 0 }}>
                <ListItemButton sx={{ p: 0 }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": { fontSize: "15px" },
                      px: 1,
                      py: 0,
                    }}
                    primary="Dashboard"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem sx={{ p: 0 }}>
                <ListItemButton
                  sx={{
                    p: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "relative",
                    ":hover .subNav":{display:"block"}
                  }}
                >
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": { fontSize: "15px" },
                      px: 1,
                      py: 0,
                    }}
                    primary="Product"
                  />

                  <KeyboardArrowRightIcon sx={{ fontSize: "15px" }} />
                  <Box
                  component="section"
                  className="subNav"
                    sx={{
                      position: "absolute",
                      top: "0",
                      minWidth: "120px",
                      left: "100%",
                      display:"none"
                    }}
                  >
                    <Paper sx={{ ml: 2, p: 0 }}>
                      <List sx={{ p: 0 }}>
                        <ListItem sx={{ p: 0 }}>
                          <ListItemButton sx={{ p: 0 }}>
                            <ListItemText
                              sx={{
                                ".MuiTypography-root": { fontSize: "15px" },
                                px: 1,
                                py: 0,
                              }}
                              primary="Add"
                            />
                          </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ p: 0 }}>
                          <ListItemButton sx={{ p: 0 }}>
                            <ListItemText
                              sx={{
                                ".MuiTypography-root": { fontSize: "15px" },
                                px: 1,
                                py: 0,
                              }}
                              primary="Edite"
                            />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </Paper>
                  </Box>
                </ListItemButton>
              </ListItem>

              <ListItem sx={{ p: 0 }}>
                <ListItemButton sx={{ p: 0 }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": { fontSize: "15px" },
                      px: 1,
                      py: 0,
                    }}
                    primary="Orders"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem sx={{ p: 0 }}>
                <ListItemButton sx={{ p: 0 }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": { fontSize: "15px" },
                      px: 1,
                      py: 0,
                    }}
                    primary="Profile"
                  />
                </ListItemButton>
              </ListItem>

              
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
}
