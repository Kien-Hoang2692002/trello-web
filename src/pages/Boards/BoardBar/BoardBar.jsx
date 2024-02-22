import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const MENU_STYLES = {
  color: "white",
  bgcolor: "transparent",
  border: "none",
  paddingX: "5px",
  borderRadius: "4px",
  ".MuiSvgIcon-root": {
    color: "white",
    "&:hover": {
      bgcolor: "primary.50",
    },
  },
};

const BoardBar = () => {
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          clickable
          label="Kiên Hoàng MERN Stack Board"
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          clickable
          label="Public/Private Workspaces"
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          clickable
          label="Add google drive"
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          clickable
          label="Automation"
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          clickable
          label="Filters"
        />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          sx={{
            color: "white",
            borderColor: "white",
            "&:hover": {
              borderColor: "white",
            },
          }}
          variant="outlined"
          startIcon={<PersonAddIcon />}
        >
          Invite
        </Button>
        <AvatarGroup
          max={3}
          sx={{
            "& .MuiAvatar-root": {
              height: 34,
              width: 34,
              fontSize: 16,
              border: "none",
              cursor: "pointer",
              "&:first-of-type": { bgColor: "#a4b0be" },
            },
          }}
        >
          <Tooltip title="kienhoang">
            <Avatar
              alt="Kiên Hoàng avatar"
              src="https://i.pinimg.com/564x/92/26/5c/92265c40c8e428122e0b32adc1994594.jpg"
            />
          </Tooltip>
          <Tooltip title="nobita">
            <Avatar
              alt="Nobita avatar"
              src="https://i.pinimg.com/originals/14/4e/05/144e054c414069a3d23c10e3f5a1805b.png"
            />
          </Tooltip>
          <Tooltip title="kienhoang">
            <Avatar
              alt="Kiên Hoàng avatar"
              src="https://i.pinimg.com/564x/92/26/5c/92265c40c8e428122e0b32adc1994594.jpg"
            />
          </Tooltip>
          <Tooltip title="kienhoang">
            <Avatar
              alt="Kiên Hoàng avatar"
              src="https://i.pinimg.com/564x/92/26/5c/92265c40c8e428122e0b32adc1994594.jpg"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default BoardBar;
