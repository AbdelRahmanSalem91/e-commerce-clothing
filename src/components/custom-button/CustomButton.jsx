import "./customButton.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, invertrd, ...props }) => {
  return (
    <button
      className={`${invertrd ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
