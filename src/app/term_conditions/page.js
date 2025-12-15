import BlackBorder from "../(component)/border/BlackBorder";
import GreyBorder from "../(component)/border/GreyBorder";
import "./term.scss";


const page = () => {
  return (
    <>
      <div className="term parent">
        <div className="term-container container">
          <h1>Term And Conditions</h1>
        </div>
      </div>
      <GreyBorder margin={"-100px"} />

      <div className="term1 parent">
        <div className="term-container1 container">
          <h1>Terms and Conditions</h1>
          <br></br>
          <p>
            Waiver form English:{" "}
            <a href="/english.pdf" target="_blank" rel="noopener noreferrer">
              Click Here...
            </a>
          </p>
          <p>
            Waiver form Arabic:{" "}
            <a href="/arabic.pdf" target="_blank" rel="noopener noreferrer">
              Click Here...
            </a>
          </p>

          <br></br>
          <br></br>
          <p></p>
        </div>
      </div>
      <BlackBorder flip={true} margin={"-96px"} />
    </>
  );
};

export default page;
