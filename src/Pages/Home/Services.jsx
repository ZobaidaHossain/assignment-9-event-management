import { Link } from "react-router-dom";


const Services = ({news}) => {
    const {title,description,price,image_url,id}=news;
    return (
        <div className="card bg-base-100 shadow-xl w-96  mb-16 border-b-6">
        <figure> <img src={image_url} alt={title} className="w-[30rem] h-[19rem] object-cover" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          
            {
                description.length>20 ? 
                <div>
                    <div>
                    {description.slice(0,100)} 

                    </div>
                    
                   <div>
                   <button className="btn btn-neutral mt-4 ml-[6.25rem]" > <Link to={`/news/${id}/${title}/${description}/${price}/${encodeURIComponent(image_url)}`} className="text-white">Read More</Link></button>

                   </div>
                    
                
                </div>
                 
                :
                <p>{description}</p>
            }
         
          
        </div>
      </div>
    );
};

export default Services;