import { useForm } from "react-hook-form";
// import { withRouter } from "react-router-dom";

const Step1=(props)=> {
  const { handleSubmit} = useForm();
  const onSubmit = () => {props.push('./Step2.jsx')};

return (

    <form onSubmit={handleSubmit(onSubmit)}>
    <input type="submit" value='start now!' />
    </form>
  );
}
export default Step1;
// export default withRouter(Step1);