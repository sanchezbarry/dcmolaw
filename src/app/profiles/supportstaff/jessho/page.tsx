import { JessHoProfile } from "@/components/ProfileCard";

export default function JessHo() {
  return (
    <div className="pt-16 pb-10 flex flex-col items-center lg:px-4 md:px-2">
      <div className="w-full max-w-2xl">
        <JessHoProfile backHref="/profiles/supportstaff" />
      </div>
    </div>
  );
}