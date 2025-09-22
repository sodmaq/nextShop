import Image from "next/image";

const Homepage = () => {
  return (
    <div className="">
      <div className="">
        <Image
          src="/featured.png"
          alt="featured product"
          fill
          className="cursor-pointer w-6 h-6 md:w-9 md:h-9"
        />
      </div>
    </div>
  );
};

export default Homepage;
