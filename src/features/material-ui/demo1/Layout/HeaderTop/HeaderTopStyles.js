import { makeStyles } from "@material-ui/core/styles";

export const useStylesContainer = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: 0,
    backgroundColor: theme.palette.background.headerTop,
    flexGrow: 1,
  },
}));

export const useStylesBackMoney = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(0.5)}px 0`,
    margin: `0 auto`,
  },
  backAmount: {
    fontWeight: theme.typography.fontWeightBold,
  },
  normalLink: {
    color: theme.palette.text.primary,
  },
  divider: {
    margin: `${theme.spacing(0.5)}px 0`,
  },
}));
