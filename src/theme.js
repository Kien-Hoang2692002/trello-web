import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { teal, deepOrange, cyan, orange } from "@mui/material/colors";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
      // components: {
      //   MuiCssBaseline: {
      //     styleOverrides: `
      //       div {
      //         color: red;
      //       }
      //     `,
      //   },
      // },
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
      },
    },
  },
  // ...other properties
});

export default theme;

// // Create a theme instance.
// const theme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#556cd6",
//     },
//     secondary: {
//       main: "#19857b",
//     },
//     error: {
//       main: red.A400,
//     },
//     text: {
//       secondary: red[500],
//     },
//   },
// });
