function Footer() {
  return (
    <footer aria-label="Site Footer" class="bg-sky-900">
      <div class="px-4 pt-16 pb-6 sm:px-6 lg:px-8">
        <div class="max-w-screen-lg mx-auto">
          <div class="text-center md:col-span-4 lg:col-span-2">
            <div class="mx-auto mt-8 sm:ml-0">
              <div className="text text-center gap-3 text-white text-lg">
                <p>About Connect Terms & Products</p>
              </div>
              <img
                class="w-20 h-20 mx-auto mt-10"
                src="https://prium.github.io/nirvana/assets/images/logo-nirvana.png"
                alt=""
              />
              <p className="text text-center gap-3 text-white text-lg mt-14">
                (212) 123-4567 666 Unnamed ave, california ● nirvana@abc.com
              </p>
              <form class="mt-20">
                <div class="flex flex-col sm:flex-row justify-center gap-4">
                  <label for="email" class="sr-only">
                    Email
                  </label>
                  <input
                    class="w-full rounded border-gray-200 px-4 py-3 shadow-sm"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button
                    class="block rounded bg-indigo-500 px-6 py-3 font-medium text-white transition hover:bg-indigo-600"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
