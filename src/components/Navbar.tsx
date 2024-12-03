import Profile from "./Profile";

export default function Navbar() {
  return (
    <>
      <div
        className="min-h-14 bg-gradient-to-r from-[#8C0707] to-[#1B0438] border-b border-[#e0e0e0] text-secondary px-6 inline-flex w-full justify-between items-center z-50 border-none"
        style={{ boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="flex w-fit gap-3 items-center">
          <p className="font-semibold text-h2 md:w-fit w-full">{}</p>
        </div>
        <Profile />
      </div>
    </>
  );
}
