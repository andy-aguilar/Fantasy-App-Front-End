import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#BADBBE',
            main: '#75D481',
            dark: '#53965C',
            contrastText: '#485449',
        },
        secondary: {
            light: '#3596AC',
            main: '#027F9C',
            dark: '#014D5E',
            contrastText: '#48CBE8',
        },
    },
})
export default theme