import { Link, useLocation, useNavigate } from "react-router-dom";
import SEO from "../components/SEO";

const logo =
  "https://res.cloudinary.com/daop3bufa/image/upload/v1759051161/Logo_Devext-removebg-preview_1_mktmbg.svg";

export const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-custom-cream relative overflow-hidden">
      <SEO
        title="404 - Page Not Found"
        description="The page you’re looking for doesn’t exist or may have been moved."
        canonical={location?.pathname || "/404"}
        noindex
        nofollow
      />

      {/* Soft background accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-custom-green/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-custom-green/15 blur-3xl" />

      {/* Top-left logo */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-10 z-10 ">
        <Link to="/" className="inline-flex items-center gap-3">
          <img src={logo} alt="Devext" className="h-12 sm:h-16 w-auto " />
        </Link>
      </div>

      {/* Content */}
      <div className="min-h-screen flex items-center justify-center px-4 py-14 mt-5">
        <div className="w-full max-w-2xl">
          <div className="rounded-2xl bg-white/40 backdrop-blur-md border border-custom-green/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-6 sm:p-10">
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-custom-green/15 bg-white/60 px-4 py-2">
                <span className="text-custom-green/80 text-xs font-poppins tracking-[0.28em] uppercase">
                  Error
                </span>
                <span className="h-1 w-1 rounded-full bg-custom-green/40" />
                <span className="text-custom-green text-sm font-semibold font-poppins">
                  404
                </span>
              </div>
            </div>

            <h1 className="mt-6 text-center text-custom-green text-3xl sm:text-4xl font-semibold font-poppins leading-tight">
              Sorry, we couldn&apos;t find that page
            </h1>
            <p className="mt-3 text-center text-custom-green/80 font-poppins text-sm sm:text-base leading-relaxed">
              The link may be broken, or the page may have been removed. Try
              going back, or head to the homepage.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex justify-center rounded-xl border border-custom-green/20 bg-white/60 px-5 py-3 text-custom-green font-poppins font-medium shadow-sm hover:bg-white/80 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-custom-green/40"
              >
                Go back
              </button>

              <Link
                to="/"
                className="inline-flex justify-center rounded-xl bg-custom-green px-5 py-3 text-white font-poppins font-medium shadow-sm hover:brightness-110 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-custom-green/40"
              >
                Back to Home
              </Link>

              <Link
                to="/contact"
                className="inline-flex justify-center rounded-xl border border-custom-green/20 bg-transparent px-5 py-3 text-custom-green font-poppins font-medium hover:bg-custom-green/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-custom-green/40"
              >
                Contact us
              </Link>
            </div>

            <div className="mt-8 border-t border-custom-green/10 pt-5 text-center">
              <p className="text-custom-green/70 text-xs sm:text-sm font-poppins">
                Or explore{" "}
                <Link
                  to="/services"
                  className="underline underline-offset-4 decoration-custom-green/30 hover:decoration-custom-green/60"
                >
                  Services
                </Link>{" "}
                and{" "}
                <Link
                  to="/about"
                  className="underline underline-offset-4 decoration-custom-green/30 hover:decoration-custom-green/60"
                >
                  About
                </Link>
                .
              </p>
            </div>
          </div>

          <p className="mt-6 text-center text-custom-green/50 text-xs font-poppins">
            If you believe this is a mistake, please reach out and we’ll fix it.
          </p>
        </div>
      </div>
    </div>
  );
};
