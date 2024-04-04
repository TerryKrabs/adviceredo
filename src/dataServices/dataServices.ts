import adviceString from "../interface/interface";
const adviceGenerator = async () => {
    const promise = await fetch('https://api.adviceslip.com/advice  ');
    const data: adviceString = await promise.json();
    console.log(data);
    return data;
}
export{adviceGenerator}
