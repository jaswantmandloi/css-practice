import { makeStyles } from "@material-ui/core/styles";

export const useStylesContainer = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: 0,
  },
  paper: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.light,
  },
}));

export const useStylesLogo = makeStyles((theme) => ({
  logo: {
    marginLeft: theme.spacing(2),
    padding: `${theme.spacing(2)}px 0`,
  },
  logoImage: {
    height: "24px",
    width: "134px",
    minWidth: "134px",
    backgroundRepeat: "no-repeat",
  },
}));

export const useStylesMegaMenus = makeStyles((theme) => ({
  container: {
    ...theme.typography.subtitle2,
    "& div": {
      padding: `0 ${theme.spacing(2)}px `,
    },
  },
}));

export const useStylesSearch = makeStyles((theme) => ({
  container: {
    paddingLeft: theme.spacing(5),
  },

  paper: {
    borderRadius: `${theme.shape.searchBoxBorderRadius}px`,
    "& input": {
      paddingLeft: theme.spacing(1.25),
    },
    "& div": {
      marginRight: theme.spacing(1.25),
    },
  },
  searchIcon: {
    color: theme.palette.primary.main,
  },
}));

export const useStylesMenus = makeStyles((theme) => ({
  container: {
    display: "flex",
    "& a": {
      color: theme.palette.text.light,
    },
  },
}));
