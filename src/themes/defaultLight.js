import { createTheme } from "@mui/material";

export const lightDefault = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#766896',
    },
    secondary: {
      main: '#673ab7',
    },
    warning: {
      main: '#dd2c00',
    },
    background: {
      default: 'rgba(0,0,0,0.8)',
      paper: '#4c4851'
    },
    text: {
      primary: '#fff',
      secondary: '#c2ebdf'
    }
  },
  typography: {
    fontFamily: 'Open Sans',
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'empty-title' },
          style: {
            border: 0,
            borderRadius: 16,
            textTransform: 'none',
          }
        },
        {
          props: { variant: 'nav-button' },
          style: {
            borderRadius: 16,
            padding: '0px 5px 0px 5px',
            margin: '0 5px 0 5px',
            textTransform: 'none',
            background: 'transparent',
          }
        },
        {
          props: { variant: 'empty' },
          style: {
            border: 0,
            borderRadius: 16,
            background: 'linear-gradient(90deg, rgba(120, 120, 120, 0.2) 0%, rgba(222, 222, 222, 0.32) 100%)',
            textTransform: 'none',
            color: '#33f20d',
            margin: '15px',
            paddingTop: '5px',
            paddingBottom: '5px',
            paddingLeft: '10px',
            paddingRight: '10px',
            hover: {
              background: 'linear-gradient(90deg, rgba(222, 222, 222, 0.32) 0%,  rgba(120, 120, 120, 0.2) 100%)',
            }
          }
        },
        {
          props: { variant: 'empty-small' },
          style: {
            size: "sm",
            border: 0,
            borderRadius: 16,
            background: 'transparent',
            padding: '2px',
            margin: '0',
            textTransform: 'none'
          }
        }
      ],
    },
    MuiPaper: {
      variants: [
        {
          props: { variant: 'textBlock' },
          style: {
            background: 'transparent',
            margin: '5px',
          }
        },
      ],
      styleOverrides: {
        root: {
          padding: '0px',
          margin: '0px',
          borderRadius: '1px',
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'buttons' },
          style: {
            display: 'inline',
            padding: '2px',
            alignItems: 'center'
          }
        },
        {
          props: { variant: 'buttons-small' },
          style: {
            display: 'inline',
            padding: '2px',
            alignItems: 'center'
          }
        },
      ],
      styleOverrides: {
        root: {
          padding: '0',
          margin: '0.1em',
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: '0',
          margin: '0'
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          background: '#d9d9d9',
        }
      }
    },
    MuiStack: {
      styleOverrides: {
        root: {
          padding: '0px',
          margin: '0px',
        }
      }
    },
    MuiGrid: {
      variants: [
        {
          props: { variant: 'border' },
          style: {
            border: '2px solid white',
          }
        }
      ],
      styleOverrides: {
        root: {
          // border: '1px solid white',
          // margin: '3px',
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          padding: '5px',
        }
      }
    }
  },
  props: {
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: 'small',
    },
    MuiButton: {
      size: 'small',
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiCheckbox: {
      size: 'small',
    },
    MuiFab: {
      size: 'small',
    },
    MuiFormControl: {
      margin: 'dense',
      size: 'small',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiRadio: {
      size: 'small',
    },
    MuiSwitch: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
      size: 'small',
    },
    MuiTooltip: {
      arrow: true,
    },
  },
});
