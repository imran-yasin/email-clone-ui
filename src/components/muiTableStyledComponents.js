import { styled, createTheme } from "@mui/material/styles";
import { Avatar, Chip, Select } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#b3e5fc",
    },
    secondary: {
      main: "#007bb2",
    },
  },
});

export const StyledAvatar = styled(Avatar)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(["background-color", "transform"], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    ${"" /* background-color: ${theme.palette.secondary.main}; */}
    color: ${theme.palette.getContrastText(theme.palette.primary.main)};
    transform: scale(1.3);
  }
  `}
`;

export const StyledChip = styled(Chip)`
  ${({ theme }) => `
  cursor: pointer;
  color: ${theme.palette.getContrastText(theme.palette.primary.main)};
  transition: ${theme.transitions.create(["background-color", "transform"], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    ${"" /* background-color: ${theme.palette.secondary.main}; */}
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.getContrastText(theme.palette.primary.main)};
    ${"" /* color: ${theme.palette.primary.main}; */}
    transform: scale(1.3);
  }
  `}
`;

export const StyledSelect = styled(Select)`
  ${({ theme }) => `
  cursor: pointer;
  border-radius: 50;
  `}
`;
