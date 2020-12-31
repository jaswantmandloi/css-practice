import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useStylesContainer, useStylesLogo } from "./HeaderStyles";

export default function Header() {
  const containerClasses = useStylesContainer();
  const logoClasses = useStylesLogo();
  return (
    <Container fixed className={containerClasses.root}>
      <Grid container>
        <Grid item xm="2" className={logoClasses.logo}>
          {/* <img src="/demo1/images/logo.svg" className={logoClasses.logoImage} /> */}
          <img
            src="/demo1/images/white_logo.svg"
            className={logoClasses.logoImage}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
