import {useState, useEffect} from "react";
import axios from 'axios';


const Advice = () =>{
const [data, setData] = useState('Advice Project');
const [advices, setAdvice] = useState({});
const [endPoint, setEndPoint] = useState('https://api.adviceslip.com/advice');
 useEffect(()=>{
 	axios.get(endPoint)
 		 .then((res) => {
 		 	setAdvice(res.data);
 		 	console.log("advices>>>>",advices.slip);
 		 })
 },[])

 const reload = () =>{
 	window.location.reload();
 }

return(
	<div className="text-center">
		<p className="text-emerald-500 pt-12 text-lg font-bold">{data}</p>

		<div className="mt-40 md:mt-60 bg-slate-700 mx-auto rounded-lg w-[460px] h-60">
			<p className="text-emerald-300 text-lg font-bold pt-2">Advice #{advices.slip && advices.slip.id}</p>
        	<p className="text-white text-xl font-bold mt-10">"{advices.slip && advices.slip.advice}"</p>
			<img className="mt-10" src="./images/patternDivider.svg"/>
			<button onClick={reload} className="mr-4">
			<img className="mt-10 bg-emerald-300 px-3 py-3 rounded-full  mx-auto" src="./images/iconDice.svg"/>
			</button>
		</div>
	</div>
	)
}

export default Advice;

// const adviceElements = advices.map((elem, index) => (
  //   <div key={index} className="text-center">
  //     <p className="text-emerald-500 pt-12 text-lg font-bold">{data}</p>
  //     <p className="text-emerald-500 pt-12 text-lg font-bold">{elem.email}</p>
  //   </div>
  // ));

  // return (
  //   <div>
  //     {adviceElements}
  		// onClick={() => window.location.reload()}
  //   </div>
  // );
