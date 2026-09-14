import heroBarsAsset from "@/assets/hero-bars.png.asset.json";

export function BarChartCompare() {
  return (
    <div className="w-full rounded-3xl bg-card/70 p-4 backdrop-blur-sm sm:p-6">
      <img
        src={heroBarsAsset.url}
        alt="Comparación de rentabilidad: Banca 4.5% vs Prestamype 20%, 4 veces más rentable"
        className="h-auto w-full"
        width={1024}
        height={768}
        loading="eager"
      />
    </div>
  );
}
