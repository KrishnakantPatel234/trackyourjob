import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400">

      <div className="max-w-6xl mx-auto px-6 py-8
                      flex flex-col md:flex-row
                      items-center justify-between gap-3">

        <p className="text-sm">
          © 2026 TrackYourJob. All rights reserved.
        </p>

        <p className="text-sm">
          Track. Progress. Get Hired.
        </p>

      </div>

    </footer>
  );
};

export default Footer;