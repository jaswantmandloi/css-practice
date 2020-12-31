import { makeStyles } from "@material-ui/core/styles";

export const useStylesContainer = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: 0,
    backgroundColor: theme.palette.primary.main,
  },
}));

export const useStylesLogo = makeStyles((theme) => ({
  logo: {
    marginLeft: theme.spacing(2),
  },
  logoImage: {
    height: "24px",
    width: "134px",
    minWidth: "134px",
    backgroundRepeat: "no-repeat",
  },
}));
