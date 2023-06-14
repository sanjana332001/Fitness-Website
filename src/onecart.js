function Onecart({ img, title, decription }) {
  return (
    <div className="flex flex-col sm:flex-row py-10">
      <div className="sm:w-1/2 p-4">
        <a href="#">
          <h3 className="text-center text-4xl text-gray-900 my-5 font-medium">
            {title}
          </h3>
        </a>
        <p className="mt-2 text-lg leading-relaxed text-gray-500 line-clamp-3 text-center mx-10 font-medium">
          {decription}
        </p>
        <div className="flex justify-center mt-8">
          <button className="py-2 px-6 border-2 border-indigo-800 rounded-3xl">
            Learn more
          </button>
        </div>
      </div>
      <div className="sm:w-1/2 sm:mr-20">
        <img alt="Lava" className="rounded-3xl" src={img} />
      </div>
    </div>
  );
}

export default Onecart;
