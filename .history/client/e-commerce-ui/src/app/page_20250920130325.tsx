import Image from "next/image";

const Homepage = () => {
  return (
    <div className="">
      <div className="relative">
        <Image src="/featured.png" alt="featured product" fill />
      </div>
    </div>
  );
};

export default Homepage;
