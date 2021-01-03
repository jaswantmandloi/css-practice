import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {
  useStylesContainer,
  useStylesLogo,
  useStylesMegaMenus,
} from "./HeaderStyles";

export default function Header() {
  const containerClasses = useStylesContainer();
  const logoClasses = useStylesLogo();
  const megaMenuClasses = useStylesMegaMenus();
  return (
    <Container fixed className={containerClasses.root}>
      <Grid container alignItems="center">
        <Grid item xm="2" className={logoClasses.logo}>
          {/* <img src="/demo1/images/logo.svg" className={logoClasses.logoImage} /> */}
          <img
            src="/demo1/images/white_logo.svg"
            className={logoClasses.logoImage}
          />
        </Grid>
        <Grid item xm="4">
          <Grid container className={megaMenuClasses.container}>
            <Grid item>Products</Grid>
            <Grid item>Deals</Grid>
            <Grid item>Services</Grid>
          </Grid>
        </Grid>

        <Grid item xm="4"></Grid>

        <Grid item xm="2"></Grid>
      </Grid>
    </Container>
  );
}
