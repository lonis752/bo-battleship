import { useEffect, useState } from "react";

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <div className="flex flex-col items-center p-5 pb-7 gap-1 max-w-screen bg-gray-600">
        <div className="flex items-center gap-3">
            <img
              width={30}
              src="favicon.ico"
            />
          <p>{`© ${year} Bo's Battleships All Rights Reserved.`}</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
