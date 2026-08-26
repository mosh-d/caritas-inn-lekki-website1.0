import About1 from "../../assets/about/about-1.jpg";
import About2 from "../../assets/about/about-2.jpg";

export default function AboutMainSection() {
  return (
    <>
      <div
        data-component="AboutMainSection"
        className="p-[12rem] max-md:px-[6rem] max-sm:px-[2rem] w-full flex flex-col gap-[4.8rem]"
      >
        <div
          data-component="Block1"
          className="bg-[color:var(--text-color)] p-[6rem] max-sm:p-[4rem] flex flex-col gap-[1.8rem] text-[var(--white)] font-secondary"
        >
          <h1 className="text-6xl font-secondary font-bold">
            Seamless Comfort and Hospitality
          </h1>
          <p className="text-3xl">
            Caritas Inn Lekki brings together contemporary comfort and West African warmth in the heart of Lekki Phase 1. The hotel's location keeps guests close to the neighborhood's best while offering a genuinely relaxing base - ideal for anyone balancing work and downtime in Lekki.
          </p>
        </div>
        <div data-component="Block2" className="flex flex-col w-full">
          <div className="flex max-sm:flex-col">
            <div
              data-component="Block2Image"
              className="w-[60%] max-sm:w-[100%] max-w-[40rem] max-sm:max-w-[100%] max-sm:h-[25rem]"
            >
              <img
                src={About1}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div
              data-component="Block2Text"
              className="flex flex-col gap-[1.8rem] font-secondary bg-[color:var(--background-color-2)] w-[100%] p-[12rem] max-md:p-[6rem] max-sm:p-[2rem]"
            >
              <h2 className="text-6xl font-bold">
                Your Ideal Retreat for Comfort and Convenience
              </h2>
              <p className="text-3xl">
                A short reach from the Lekki-Epe Expressway, Caritas Inn Lekki was built around a simple idea: comfort and function shouldn't be a trade-off. Every room comes with king-sized beds and premium bedding, a complimentary coffee station, air conditioning, free Wi-Fi, a flat-screen TV, and a private ensuite bathroom.
              </p>
            </div>
          </div>
          {/* Second row - you can add this structure for additional img+text pairs */}
          <div className="flex max-sm:flex-col">
            <div
              data-component="Block2Text"
              className="flex flex-col gap-[1.8rem] font-secondary bg-[color:var(--background-color-2)] w-[100%] p-[12rem] max-md:p-[6rem] max-sm:p-[2rem]"
            >
              <h2 className="text-6xl font-bold">
                Experience Tranquil Stays with Unmatched Security
              </h2>
              <p className="text-3xl">
                Caritas Inn Lekki takes a serious approach to guest security, with round-the-clock surveillance and a dedicated team looking after the property. The goal isn't just a place to sleep - it's a stay shaped by comfort, safety, and service you'll actually notice.
              </p>
            </div>
            <div
              data-component="Block2Image"
              className="w-[60%] max-w-[40rem] max-sm:w-[100%] max-sm:max-w-[100%] max-sm:h-[25rem]"
            >
              <img
                src={About2}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div
          data-component="Block3"
          className="bg-[color:var(--text-color)] p-[6rem] flex max-sm:flex-col gap-[6rem] text-[var(--white)] font-secondary"
        >
          <div className="flex flex-col gap-[1.8rem]">
            <h2 className="text-6xl font-secondary font-bold">Our Vision</h2>
            <p className="text-3xl">
              We measure ourselves against a bigger goal: growing, branch by branch, into a hospitality group known for getting the fundamentals right - place, service, people, and system.
            </p>
          </div>
          <div className="flex flex-col gap-[1.8rem]">
            <h2 className="text-6xl font-secondary font-bold">Our Mission</h2>
            <p className="text-3xl">
              For Caritas Inn Lekki, that means one thing in practice - making every guest's experience the best part of their trip.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
