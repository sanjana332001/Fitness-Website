function Cart({ img, title, decription }) {
  return (
    <div className="flex flex-col sm:flex-row">
      <img
        alt="Lava"
        src={img}
        className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] sm:w-1/2"
      />

      <div className="p-4 sm:w-1/2">
        <a href="#">
          <h3 className="text-center text-2xl text-gray-900 my-5">{title}</h3>
        </a>

        <p className="mt-2 text-md leading-relaxed text-gray-500 line-clamp-3 text-center">
          {decription}
        </p>
      </div>
    </div>
  );
}

export default Cart;
