import { useParams } from "react-router-dom";



const News = () => {
    const { id,title,description,price,image_url} = useParams();
    const decodedImageUrl = decodeURIComponent(image_url);
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={decodedImageUrl}className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Event: {title}</h1>
            <p className="py-6">{description}</p> 
            <button className="btn btn-neutral">price: {price}</button> 
          </div>
        </div>
      </div>
//         <div>
//             <div className="grid md:grid-cols-4">
//                 <div className="col-span-3">
// <h2 className="text-5xl">news detail</h2>
// <p>{id}</p>
//                 </div>
               

//             </div>
//         </div>
    );
};

export default News;