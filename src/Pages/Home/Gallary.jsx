

import rr from "../../assets/rr.jpg"
import w4 from "../../assets/w4.jpg"
import ww from "../../assets/ww.jpg"
const Gallary = () => {
    return (
       <div className="flex flex-col md:flex-row gap-3 m-7">
        <div className="">
<img  className="w-[21rem] h-[22rem]"src={rr} alt="" />
        </div>
        <div >
<img className="w-[21rem] h-[22rem]" src={w4} alt="" />
        </div>
        <div >
<img className="w-[21rem] h-[22rem]" src={ww} alt="" />
        </div>
       </div>
    );
};

export default Gallary;