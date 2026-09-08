export function BarChartCompare() {
  return (
    <div className="w-full rounded-3xl bg-card/70 p-6 shadow-[0_20px_60px_-25px_rgba(16,64,45,0.35)] backdrop-blur-sm sm:p-10">
      <div className="flex h-[340px] items-end justify-center gap-10 sm:gap-16">
        {/* Banca */}
        <div className="flex h-full w-28 flex-col items-center justify-end sm:w-36">
          <span className="mb-3 text-xl font-bold text-navy">4.5%</span>
          <div className="flex h-[22%] w-full items-center justify-center rounded-t-xl bg-bank">
            <span className="text-lg font-bold text-navy">x</span>
          </div>
        </div>
        {/* Prestamype */}
        <div className="flex h-full w-28 flex-col items-center justify-end sm:w-36">
          <span className="mb-3 text-2xl font-extrabold text-primary-dark">20%</span>
          <div className="bg-green-gradient flex h-[88%] w-full items-center justify-center rounded-t-xl">
            <span className="text-3xl font-extrabold text-primary-foreground">4x</span>
          </div>
        </div>
      </div>
      <div className="mt-0 h-px w-full bg-border" />
      <div className="mt-3 flex justify-center gap-10 sm:gap-16">
        <p className="w-28 text-center text-sm font-semibold text-muted-foreground sm:w-36">
          Banca
        </p>
        <p className="w-28 text-center text-sm font-semibold text-navy sm:w-36">Prestamype</p>
      </div>
    </div>
  );
}
