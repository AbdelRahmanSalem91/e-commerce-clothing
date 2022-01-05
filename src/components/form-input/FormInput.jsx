import "./formInput.styles.scss";

const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <div className="form-control">
      <input className="form-input" onChange={handleChange} {...props} />
      {label ? <label className="form-input-label">{label}</label> : null}
    </div>
  );
};

export default FormInput;
