import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Rubric } from "@/data/course";

const NAMES = ["Strong", "Solid", "Developing", "Beginning"];

export default function RubricTabs({ rubrics }: { rubrics: Rubric[] }) {
  const [active, setActive] = useState(rubrics[0].key);
  const r = rubrics.find((x) => x.key === active)!;
  return (
    <div>
      <div role="tablist" aria-label="Rubrics" className="inline-flex gap-1 rounded-full border bg-card p-1">
        {rubrics.map((x) => (
          <button
            key={x.key}
            role="tab"
            aria-selected={x.key === active}
            onClick={() => setActive(x.key)}
            className={cn(
              "cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors",
              x.key === active ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {x.label}
          </button>
        ))}
      </div>
      <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{r.intro}</p>

      {/* Desktop: the full grid */}
      <div className="mt-6 hidden overflow-hidden rounded-[18px] border bg-card lg:block">
        <table className="w-full table-fixed border-collapse text-left text-sm">
          <thead>
            <tr className="border-b bg-secondary/60">
              <th className="w-[16%] p-4 font-semibold">Category</th>
              {NAMES.map((n, i) => (
                <th key={n} className="p-4 font-semibold">
                  <span className={cn("mr-2 inline-grid size-6 place-items-center rounded-full text-xs", i === 0 ? "bg-primary text-primary-foreground" : "bg-foreground/8")}>{4 - i}</span>
                  {n}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {r.rows.map((row) => (
              <tr key={row.category} className="border-b last:border-0 align-top">
                <th scope="row" className="p-4 font-semibold">{row.category}</th>
                {row.levels.map((l, i) => (
                  <td key={i} className={cn("p-4 leading-relaxed", i === 0 ? "text-foreground" : "text-muted-foreground")}>{l}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Phones and tablets: one card per category */}
      <div className="mt-6 grid gap-4 lg:hidden">
        {r.rows.map((row) => (
          <div key={row.category} className="rounded-[18px] border bg-card p-5">
            <h4 className="font-semibold">{row.category}</h4>
            <ol className="mt-3 grid gap-3">
              {row.levels.map((l, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed">
                  <span className={cn("mt-0.5 inline-grid size-6 shrink-0 place-items-center rounded-full text-xs font-semibold", i === 0 ? "bg-primary text-primary-foreground" : "bg-foreground/8")}>{4 - i}</span>
                  <span className={i === 0 ? "" : "text-muted-foreground"}>{l}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}
