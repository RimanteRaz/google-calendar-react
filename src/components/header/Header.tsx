export const Header = () => {
  return (
    <header>
      <div className="burger">
        <span className="material-icons-outlined"> menu </span>
      </div>
      <div className="brand">
        <h1>Calendar</h1>
      </div>
      <button className="show-today">Today</button>
      <button className="previous-week">
        <span className="material-icons-outlined"> navigate_before </span>
      </button>
      <button className="next-week">
        <span className="material-icons-outlined"> navigate_next </span>
      </button>
      <div className="current-date">
        <span>Jun - Jul 2021</span>
      </div>
    </header>
  );
};
