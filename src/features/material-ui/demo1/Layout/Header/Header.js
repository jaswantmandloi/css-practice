import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";

import {
  useStylesContainer,
  useStylesLogo,
  useStylesMegaMenus,
  useStylesSearch,
  useStylesMenus,
} from "./HeaderStyles";

const getBreakPointsWidths = (maxWidth) => {
  return {
    xm: maxWidth,
    sm: maxWidth,
    md: maxWidth,
    lg: maxWidth,
    xl: maxWidth,
  };
};

export default function Header() {
  const containerClasses = useStylesContainer();
  const logoClasses = useStylesLogo();
  const megaMenuClasses = useStylesMegaMenus();
  const searchClasses = useStylesSearch();
  const menusClasses = useStylesMenus();
  return (
    <Container fixed className={containerClasses.root}>
      <Paper className={containerClasses.paper}>
        <Grid container alignItems="center" styles={{ flexGrow: 1 }}>
          <Grid item {...getBreakPointsWidths(2)} className={logoClasses.logo}>
            {/* <img src="/demo1/images/logo.svg" className={logoClasses.logoImage} /> */}
            <img
              src="/demo1/images/white_logo.svg"
              className={logoClasses.logoImage}
            />
          </Grid>
          <Grid item {...getBreakPointsWidths(3)}>
            <Grid container className={megaMenuClasses.container}>
              <Grid item>Products</Grid>
              <Grid item>Deals</Grid>
              <Grid item>Services</Grid>
            </Grid>
          </Grid>

          <Grid
            item
            {...getBreakPointsWidths(3)}
            className={searchClasses.container}
          >
            <Paper className={searchClasses.paper}>
              <Input
                fullWidth
                disableUnderline={true}
                type="search"
                placeholder="Search"
                inputProps={{ "aria-label": "description" }}
                endAdornment={
                  <InputAdornment position="end">
                    <SearchIcon className={searchClasses.searchIcon} />
                  </InputAdornment>
                }
              />
            </Paper>
          </Grid>

          <Grid
            item
            {...getBreakPointsWidths(3)}
            className={menusClasses.container}
            justify="flex-end"
          >
            <Link href="#">Link</Link>
            <Link href="#">Link</Link>
            <Link href="#">Link</Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
