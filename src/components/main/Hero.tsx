const Hero = () => {
  const buttonClass = "w-9 h-9 flex justify-center items-center";

  return (
    <section className="relative w-full p-4 flex ">
      <img
        src="/imgs/anime-hero2.jpg"
        className="w-full h-96 rounded-md object-cover opacity-80"
      />
      <div className="absolute p-4 inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
        Hello
      </div>
    </section>
  );
};

export default Hero;
