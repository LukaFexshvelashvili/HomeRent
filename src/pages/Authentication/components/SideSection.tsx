import {
  HomesbgDecor,
  Line1Decor,
  Line2Decor,
  Line3Decor,
} from "../../../assets/images/decorations/svg/Decorations";

export default function SideSection() {
  return (
    <section className="flex-1 loginSection flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 w-full">
        <Line1Decor className="h-[400px] aspect-square absolute" />
        <Line2Decor className="h-[450px] aspect-square absolute right-0 top-[-50px] " />
        <Line3Decor className="h-[200px] aspect-square absolute right-0" />
      </div>
      <div className="h-[70%] w-9/12 loginSectionBlock rounded-[20px] border-[3px] border-[#9AC1FF] relative z-10"></div>
      <div className="absolute bottom-0 z-0 pointer-events-none w-full">
        <HomesbgDecor className="w-full opacity-30 z-0" />
      </div>
    </section>
  );
}
