export default function Header({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
