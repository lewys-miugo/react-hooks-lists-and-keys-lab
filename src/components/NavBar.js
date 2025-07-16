import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{links.map(link => <a key={link} href={"#" + link}>{link}</a>)}</nav>;
}
// links.map(links => <a key={link} href={"#"+link}>{link}</a>)
export default NavBar;
