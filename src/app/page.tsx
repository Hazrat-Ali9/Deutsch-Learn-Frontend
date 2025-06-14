import Best from "@/Components/Best";
import Choose from "@/Components/Choose";
import Faq from "@/Components/Faq";
import Slider from "@/Components/Slider";
import Timeline from "@/Components/Timeline";
// Layout page
export default function Home() {
  return (
    <div>
      
      <Slider />
      <Best />
      <Choose />
      <Timeline />
      <Faq/>
    </div>
  );
}
