import {
    Facebook,
    GitHub,
    Instagram,
    LinkedIn,
    Twitter,
  } from "@mui/icons-material";
  import Link from "next/link";
  
  export default function Footer() {
    return (
      <div className="max-w-7xl pb-12 pt-10 bg-blue-200 mx-auto rounded-md p-4 mt-20  grid lg:gird-cols-3 md:grid-cols-3 gap-4 grid-cols-1 justify-center items-center  w-full ">
        <div>
          <h1 className="p-4 w-full rounded-full bg-white text-2xl font-bold text-center h-20">
            Stock Tutor
          </h1>
        </div>
        <div className="flex justify-center align-center flex-col  pl-8 ">
          <h1 className="text-2xl font-semibold pb-6">Quick links</h1>
          <ul>
            <Link href="https://stocktutor.com/TermsandConditions">
              <li className="underline text-blue-800">Terms & Conditions</li>
            </Link>
            <Link href="https://stocktutor.com/Privacy_policy">
              <li className="underline text-blue-800">Privacy Policy</li>
            </Link>
  
            <Link href="https://stocktutor.com/Refundpolicy">
              <li className="underline text-blue-800">
                Refund & Cancellation Policy
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="max-h-fit">
            <h1 className="text-xl font-bold ">Download App</h1>
            <Link href="/">
              <img src="/App.svg" className="max-w-32" alt="playstore" />
            </Link>
          </div>
          <h1 className="text-2xl font-semibold text-black">Follow Us</h1>
          <div>
            <Link href="https://www.instagram.com/stocktutorofficial">
              <Instagram />
            </Link>
            <Link href="https://www.linkedin.com/company/stock-tutor">
              <LinkedIn />
            </Link>
  
            <Link href="https://www.twitter.com/_Stocktutor">
              <Twitter />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61552036775314&mibextid=ZbWKwL">
              <Facebook />
            </Link>
          </div>
        </div>
      </div>
    );
  }
  