import Image from "next/image";

export default function Mid() {
  return (
    <div className="flex flex-col justify-center items-center gap-1.5 text-white">
      <div className="relative">
        <Image
          src="/clock.svg"
          width={25}
          height={25}
          alt="clock icon"
          className="absolute right-full top-5 mr-2"
        />
        <p className="text-9xl font-medium">9:00</p>
        <span className="uppercase text-[2.5rem] font-normal absolute left-full bottom-3.5">
          (am)
        </span>
        <button className="all-unset cursor-pointer absolute left-full bottom-1/2 w-5 h-5 ml-20">
          <Image
            src={"/change-cycle.svg"}
            width={18}
            height={18}
            alt="change clock format"
          />
        </button>
      </div>
      <div className="flex gap-2 mb-2">
        <p className="text-[2.5rem] font-medium">
          Inhale Love, Exhale Gratitude
        </p>
      </div>
      <div className="flex flex-col">
        <p className="text-[1.25rem]">
          "Everything you've ever wanted is sitting on the other side of fear."
        </p>
        <p className="text-center">Geoge Addair</p>
      </div>
    </div>
  );
}
