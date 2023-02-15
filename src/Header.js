const Header = ({title}) => {
  return(
    <header className="App-header">
      <h1 className="ml-3 mt-3 text-4xl">{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: "Default Title"
}

export default Header;
