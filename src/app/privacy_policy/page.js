import Link from "next/link";
import BlackBorder from "../(component)/border/BlackBorder";
import GreyBorder from "../(component)/border/GreyBorder";
import "./privacy.scss";

const page = () => {
  return (
    <>
      <div className="privacy parent">
        <div className="privacy-container container">
          <h1>Privacy Policy</h1>
        </div>
      </div>

      <GreyBorder margin={"-100px"} />

      <div className="privacy1 parent">
        <div className="privacy-container1 container">
          <p>
            <strong>Effective Date:</strong> 17 March 2025
          </p>
          <br></br>
          <h2>1. Introduction</h2>
          <p>{`Welcome to Sahara Amusement ("we," "our," or "us"). We are committed to protecting your privacy and ensuring your personal information is handled securely. This Privacy Policy outlines how we collect, use, and protect your data.`}</p>
          <br></br>
          <h2>2. Information We Collect</h2>
          <ul>
            <li>
              <strong>Name:</strong> To personalize communication and provide
              tailored services.
            </li>
            <li>
              <strong>Mobile Number:</strong> For direct communication, updates,
              and support.
            </li>
            <li>
              <strong>Email Address:</strong> For newsletters, updates, and
              support-related communication.
            </li>
            <li>
              <strong>User Activity:</strong> To improve website performance and
              enhance user experience.
            </li>
            <li>
              <strong>Game Activities Information:</strong> Details of
              participation in activities such as Mini GP Bike, Paintball,
              Quadbike, Dune Buggy, and Go-Kart Racing. These activities are
              available to all users.
            </li>
          </ul>
          <br></br>
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To provide, maintain, and improve our services.</li>
            <li>
              To communicate with you about updates, promotions, and support.
            </li>
            <li>To ensure website security and prevent fraudulent activity.</li>
            <li>To analyze website usage and improve our content.</li>
          </ul>
          <br></br>
          <h2>4. Sharing Your Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. However, we may share your information with trusted
            partners to assist us in providing our services, such as:
          </p>
          <ul>
            <li>Service providers that support our website functionality.</li>
            <li>
              Analytics services like Google Analytics to understand user
              behavior.
            </li>
          </ul>
          <br></br>
          <h2>5. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your data from
            unauthorized access, alteration, disclosure, or destruction.
            However, no method of transmission over the internet is 100% secure.
          </p>
          <br></br>
          <h2>6. Cookies and Tracking Technologies</h2>
          <p>
            We may use cookies and similar tracking technologies to enhance user
            experience, analyze website traffic, and improve functionality. You
            can adjust your browser settings to disable cookies if desired.
          </p>
          <br></br>
          <h2>7. Your Rights</h2>
          <ul>
            <li>Access, correct, or delete your personal data.</li>
            <li>Withdraw consent for data processing where applicable.</li>
            <li>Request details on how your data is used.</li>
          </ul>
          <br></br>
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
          </p>
          <p>
            <a href="tel:+971565776001">+971565776001</a>
          </p>
          <p>
            <a href="mailto:info@saharaamusement.com"> info@saharaamusement.com</a>
          </p>
          <br></br>
          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We reserve the right to update this Privacy Policy as necessary. We
            encourage you to review this page regularly for updates. Continued
            use of our website constitutes acceptance of these changes.
          </p>
          <br></br><br></br>

          <h1>Term And Conditions</h1>
          <br></br>
          <p>
            Waiver form English:{" "}
            <Link href="/english.pdf" target="_blank" rel="noopener noreferrer">
              Click Here...
            </Link>
          </p>
          <p>
            Waiver form Arabic:{" "}
            <Link href="/arabic.pdf" target="_blank" rel="noopener noreferrer">
              Click Here...
            </Link>
          </p>
        </div>
      </div>
      <BlackBorder flip={true} margin={"-96px"} />
    </>
  );
};

export default page;
