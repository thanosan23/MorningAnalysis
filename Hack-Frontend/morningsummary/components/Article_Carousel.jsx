import React, { useEffect, useState } from "react";
import Image from "next/image";

const Article_Carousel = () => {
  const [Author, setAuthor] = useState("");
  const [Description, setDescription] = useState("");
  const [Title, setTitle] = useState("");
  const [Url, setUrl] = useState("");
  const [image, setImage] = useState("");



  return (
    <div className="min-h-100 grid place-items-center">
      <div className=" h-[450px] m-auto w-[90%] grid place-items-center overflow-hidden">
        <div className="flex animate-scroll hover:pause width-[4500px]">
          <div className="h-[400px] w-[450px] flex items-center p-[15px] hover:scale-[1.2] transition-all duration-300">
            <Image
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              height={400}
              width={450}
            />

            <h1 className="text-4xl font-bold tracking-wide z-10 translate-x-[70px] text-white title"></h1>
          </div>
          <div className="h-[400px] w-[450px] flex items-center p-[15px] hover:scale-[1.2] transition-all duration-300">
            <Image
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              height={400}
              width={450}
            />

            <h1 className="text-4xl font-bold tracking-wide z-10 translate-x-[70px] text-white title"></h1>
          </div>
          <div className="h-[400px] w-[450px] flex items-center p-[15px] hover:scale-[1.2] transition-all duration-300">
            <Image
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              height={400}
              width={450}
            />

            <h1 className="text-4xl font-bold tracking-wide z-10 translate-x-[70px] text-white title"></h1>
          </div>
          <div className="h-[400px] w-[450px] flex items-center p-[15px] hover:scale-[1.2] transition-all duration-300">
            <Image
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              height={400}
              width={450}
            />

            <h1 className="text-4xl font-bold tracking-wide z-10 translate-x-[70px] text-white title"></h1>
          </div>
          <div className="h-[400px] w-[450px] flex items-center p-[15px] hover:scale-[1.2] transition-all duration-300">
            <Image
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              height={400}
              width={450}
            />

            <h1 className="text-4xl font-bold tracking-wide z-10 translate-x-[70px] text-white title"></h1>
          </div>
          <div className="h-[400px] w-[450px] flex items-center p-[15px] hover:scale-[1.2] transition-all duration-300">
            <Image
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              height={400}
              width={450}
            />

            <h1 className="text-4xl font-bold tracking-wide z-10 translate-x-[70px] text-white title"></h1>
          </div>
          <div className="h-[400px] w-[450px] flex items-center p-[15px] hover:scale-[1.2] transition-all duration-300">
            <Image
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              height={400}
              width={450}
            />

            <h1 className="text-4xl font-bold tracking-wide z-10 translate-x-[70px] text-white title"></h1>
          </div>
          <div className="h-[400px] w-[450px] flex items-center p-[15px] hover:scale-[1.2] transition-all duration-300">
            <Image
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              height={400}
              width={450}
            />

            <h1 className="text-4xl font-bold tracking-wide z-10 translate-x-[70px] text-white title"></h1>
          </div>
          <div className="h-[400px] w-[450px] flex items-center p-[15px] hover:scale-[1.2] transition-all duration-300">
            <Image
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              height={400}
              width={450}
            />

            <h1 className="text-4xl font-bold tracking-wide z-10 translate-x-[70px] text-white title"></h1>
          </div>
          <div className="h-[400px] w-[450px] flex items-center p-[15px] hover:scale-[1.2] transition-all duration-300">
            <Image
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              height={400}
              width={450}
            />

            <h1 className="text-4xl font-bold tracking-wide z-10 translate-x-[70px] text-white title"></h1>
          </div>
          <div className="h-[400px] w-[450px] flex items-center p-[15px] hover:scale-[1.2] transition-all duration-300">
            <Image
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              height={400}
              width={450}
            />

            <h1 className="text-4xl font-bold tracking-wide z-10 translate-x-[70px] text-white title"></h1>
          </div>
          <div className="h-[400px] w-[450px] flex items-center p-[15px] hover:scale-[1.2] transition-all duration-300">
            <Image
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              height={400}
              width={450}
            />

            <h1 className="text-4xl font-bold tracking-wide z-10 translate-x-[70px] text-white title"></h1>
          </div>
          <div className="h-[400px] w-[450px] flex items-center p-[15px] hover:scale-[1.2] transition-all duration-300">
            <Image
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              height={400}
              width={450}
            />

            <h1 className="text-4xl font-bold tracking-wide z-10 translate-x-[70px] text-white title"></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article_Carousel;
