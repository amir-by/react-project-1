function App() {
  return (
    <>
  <header className="hide-when-mobile">
    <h1>Courses 4 Arab</h1>
    <ul className="flex">
      <li className="main-list">
        <a className="main-link" href="#ww">
          
          HTML
        </a>
        <ul className="sub-ul">
          <li>
            <a href="xxx">Full Course</a>
          </li>
          <li>
            <a href="xxx">Crash Course</a>
          </li>
          <li>
            <a href="xxx">learn in 1h</a>
          </li>
        </ul>
      </li>
      <li className="main-list">
        <a className="main-link" href="#xx">
          
          CSS
        </a>
        <ul className="sub-ul">
          <li>
            <a href="xxx">Full Course</a>
          </li>
          <li>
            <a href="xxx">CSS Examples</a>
          </li>
          <li className="mini-projects">
            <a href="xxx">mini projects&nbsp; + </a>
            <ul className="sub-sub-ul">
              <li>
                <a href="xxx">project 1</a>
              </li>
              <li>
                <a href="xxx">project 2</a>
              </li>
              <li>
                <a href="xxx">project 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="main-list">
        <a className="main-link" href="sss">
          
          JavaScript
        </a>
        <ul className="sub-ul sub-of-js">
          <li>
            <a href="xxx">coming soon🔥</a>
          </li>
        </ul>
      </li>
    </ul>
  </header>
  <header style={{backgroundColor:'yellow'}}  className="show-when-mobile">
    <h1>Courses 4 Arab</h1>
    <label className="absolute" htmlFor="burger">
      <i className="fas fa-bars" />
    </label>
    <input id="burger" type="checkbox" />
    <div className="show-on-click">
      <div className="main-div">
        <label htmlFor="html">
          HTML <i className="fas fa-plus" />
        </label>
        <input id="html" type="checkbox" />
        <ul className="sub-div">
          <li>
            <a href="ww">Full Course</a>
          </li>
          <li>
            <a href="ww">Crash Course</a>
          </li>
          <li>
            <a href="ww">learn in 1h</a>
          </li>
        </ul>
      </div>
      <div className="main-div">
        <label htmlFor="css">
          CSS <i className="fas fa-plus" />
        </label>
        <input id="css" type="checkbox" />
        <ul className="sub-div">
          <li>
            <a href="ww">Full Course</a>
          </li>
          <li>
            <a href="ww">CSS Examples</a>
          </li>
          <li>
            <label className="mini-projects" htmlFor="mini">
              mini projects <i className="fas fa-plus" />
            </label>
            <input id="mini" type="checkbox" />
            <ul className="sub-sub-div">
              <li>
                <a href="ww">project 1</a>
              </li>
              <li>
                <a href="xxx">project 2</a>
              </li>
              <li>
                <a href="ww">project 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="main-div">
        <label htmlFor="js">
          JavaScript <i className="fas fa-plus" />
        </label>
        <input id="js" type="checkbox" />
        <ul className="sub-div">
          <li>
            <a href="ww">coming soon🔥</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <main>
    Respossive Drop-down <br />
    Menu Bar <br />
    HTML &amp; CSS only
  </main>
  <footer>
    Designed and developed by Courses4Arab.com
    <span>🧡</span>
  </footer>
</>

  );
}

export default App;
