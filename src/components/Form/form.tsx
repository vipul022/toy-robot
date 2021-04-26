import React, {useState} from "react";

const Form =() => {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [direction, setDirection] = useState<string>('North');
  
  interface FormState {
    x: number;
    y: number;
    direction: string;
  }

  const initialFormState: FormState = {
    x: 0,
    y: 0,
    direction: "north"
  };
  return(
    <form>
        <div>
          <label htmlFor="x">X-coordinates</label>
          <input type="number" name="x" id="x" min ="0"></input>
        </div>
        <div>
          <label htmlFor="y">Y-coordinates</label>
          <input type="number" name="y" id="y" min ="0"></input>
        </div>
        <div>
          <label htmlFor="north">North</label>
          <input type="radio" id="north" name="direction" value="north"></input>
          <label htmlFor="east">East</label>
          <input type="radio" id="east" name="direction" value="east"></input>
          <label htmlFor="south">South</label>
          <input type="radio" id="south" name="direction" value="south"></input>
          <label htmlFor="west">West</label>
          <input type="radio" id="west" name="direction" value="west"></input>
        </div>
        <input type="submit" value="Place"></input>
      </form>
  )
}

export default Form;