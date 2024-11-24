import Info from "@/components/dashboard/Info";
import Top from "@/components/dashboard/Top";

export default function Home() {
  return (
    // homepage(dashboard)
    <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:row-span-3 px-2 md:px-4 lg:px-6 py-4 md:py-6 lg:py-8 mx-auto">
      {/* top section */}
      <section className="w-full col-span-3 mb-8">
        <Top />
      </section>

      {/* middle section */}
      <Info />
      <section className="w-full row-span-3">

      </section>

    </section>
  );
}
