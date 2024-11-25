import AvailabilityGraph from "@/components/dashboard/AvailabilityGraph";
import Info from "@/components/dashboard/Info";
import Map from "@/components/dashboard/Map";
import Properties from "@/components/dashboard/Properties";
import RevenueGraph from "@/components/dashboard/RevenueGraph";
import Top from "@/components/dashboard/Top";

export default function Home() {
  return (
    // homepage(dashboard)
    <section className="w-full lg:grid lg:grid-cols-6 px-2 md:px-4 lg:px-6 py-4 md:py-6 lg:py-8 mx-auto gap-4">
      {/* top section */}
      <section className="w-full col-span-4 lg:col-span-6 mb-8">
        <Top />
      </section>

      {/* middle section */}

      {/* left section */}
      <section className="w-full flex flex-col col-span-2 gap-y-8 mb-8 md:mb-12 lg:mb-0 max-h-screen">
        <Info />
        <div className="h-full overflow-y-scroll scroll-container">
          <AvailabilityGraph />
          <RevenueGraph />
        </div>
      </section>

      {/* right section */}
      <section className="w-full lg:col-span-4 mb-8 md:mb-12 lg:mb-0">
        <Properties />
      </section>
    </section>
  );
}
