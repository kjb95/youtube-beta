import {useEffect, useState} from "react";
import axios from 'axios';

const Test = () => {

  const [state, setState] = useState();

  useEffect(() => {
      axios.get('/api/test').then(res => {setState(res.data);})
  }, []);
  return <div style={{color:'white'}}>
    스프링한테 받음 : {state}
  </div>;
}

export default Test;