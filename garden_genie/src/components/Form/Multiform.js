import React, {useState} from "react";
import Time from "./Time";
import Space from "./Space";
import Region from "./Region";
import Accessibility from "./Accessibility";
import Budget from "./Budget";

function Multiform(props) {

const [values, setValues] = useState({
  time: "",
  space: "",
  region: "",
  accessibility: "",
  budget: "",
});

const [step, setStep] = useState(1);

const nextStep = () => {
  if (step < 5) {
    setStep(step + 1);
  } 
  else if(step === 5) {
    handleSubmit();
  }
};

const prevStep = () => {
  if (step > 1) {
    setStep(step - 1);
  }
};

const handleChange = (option) => (e) => {
  setValues({ ...values, [option]: e.target.value });
};

 
const handleSubmit = () => {
  console.log(values);
  props.onFormSubmit(values);
};


    return (
      <div className="bg-dark vh-100">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card p-3 w-50 mt-5">
          {
            {
              1: <Time handleChange={handleChange} />,
              2: <Space handleChange={handleChange} />,
              3: <Region handleChange={handleChange} />,
              4: <Accessibility handleChange={handleChange} />,
              5: <Budget handleChange={handleChange} />,
            }[step]
          }
          <div className="d-flex justify-content-around px-5 mt-5">
            {step > 1 ? (
              <button className="btn btn-warning" onClick={prevStep}>
                Back
              </button>
            ) : null}
            <button className="btn btn-warning" onClick={nextStep}>
              {step === 5 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>

    );
  }
  
export default Multiform;


/* 1)Will you have time to the maintain garden? Please circle or explain. (min, mod, high)
2) Space - indoors or outdoors pots or in ground
3) Region- North, South, Midlands 
4) Do you have difficulties with your mobility- yes or no
5) Budget/ start up costs

*/
