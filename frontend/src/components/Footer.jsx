import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <div className="flex flex-col items-center p-5 pb-7 gap-1 max-w-screen bg-gray-600">
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              width={30}
              src="favicon.ico"
            />
          </Link>
          <p>{`© ${year} Bo's Battleships All Rights Reserved.`}</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
