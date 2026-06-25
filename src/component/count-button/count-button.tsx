import { useCounterStore } from "#/stores/useCounterStore.ts";
import { useTranslation } from "react-i18next";

export function CountButton() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-3">
      <p className="text-white font-inter">
        {t("count")}: {useCounterStore((state) => state.counter)}
      </p>
      <div className="flex gap-3">
        <button
          className="cursor-pointer bg-chart-1 py-1 px-2 text-foreground uppercase font-inter rounded-sm"
          onClick={useCounterStore((state) => state.increment)}
        >
          {t("increment")}
        </button>
        <button
          className="cursor-pointer bg-destructive py-1 px-2 text-foreground uppercase font-inter rounded-sm"
          onClick={useCounterStore((state) => state.reset)}
        >
          {t("reset")}
        </button>
      </div>
    </div>
  );
}
