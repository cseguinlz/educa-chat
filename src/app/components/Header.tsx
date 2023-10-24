import Image from "next/image";
import EducariumLogo from "../../../public/educarium.svg";

export default function Header({ className }: { className?: string }) {
  return (
    <header
      className={`flex items-center justify-center text-gray-200 text-2xl ${className}`}
    >
      <Image
        src={EducariumLogo}
        alt="educarium-logo"
        width="50"
        height="25"
      />{" "}
      <div className="text-4xl ml-3 mr-3">Educhatty</div>
    </header>
  );
}
