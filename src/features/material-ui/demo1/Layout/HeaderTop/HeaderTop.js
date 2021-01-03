import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import { useStylesContainer, useStylesBackMoney } from "./HeaderTopStyles";

export default function HeaderTop() {
  const containerClasses = useStylesContainer();
  const backMoneyClasses = useStylesBackMoney();

  return (
    <Container fixed className={containerClasses.root}>
      <Grid container alignItems="center">
        <Grid item xm={6} className={backMoneyClasses.root}>
          <Link
            href="#"
            variant="body2"
            className={backMoneyClasses.normalLink}
          >
            <Typography component="span">Now! Up to</Typography>
            <Typography
              component="span"
              className={backMoneyClasses.backAmount}
            >
              {" "}
              5% back{" "}
            </Typography>
            <Typography component="span">
              both online & in store for Rewards members.{" "}
            </Typography>
            <Typography component="span">
              <Link href="#" variant="body2">
                Learn more
              </Link>
            </Typography>
          </Link>
        </Grid>
        <Divider
          orientation="vertical"
          flexItem
          className={backMoneyClasses.divider}
        />
        <Grid item xm={6} className={backMoneyClasses.root}>
          <Link
            href="#"
            variant="body2"
            className={backMoneyClasses.normalLink}
          >
            <Typography component="span">Up to</Typography>
            <Typography
              component="span"
              className={backMoneyClasses.backAmount}
            >
              {" "}
              40% off{" "}
            </Typography>
            <Typography component="span">
              bselect chairs and furniture.{" "}
            </Typography>
            <Typography component="span">
              <Link href="#" variant="body2">
                Shop now
              </Link>
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
