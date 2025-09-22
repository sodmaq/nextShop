import Image from "next/image";

const Homepage = () => {
  return (
    <div className="">
      <div className="">
        <Image
          src="/featured.png"
          alt="featured product"
          width={40}
          height={40}
          className="cursor-pointer w-6 h-6 md:w-9 md:h-9"
        />
      </div>
    </div>
  );
};

export default Homepage;
