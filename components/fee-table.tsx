import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { FeeRow } from "@/lib/data/fees";

export function FeeTable({ title, rows }: { title: string; rows: FeeRow[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <div className="border-b border-border bg-secondary/40 px-4 py-3">
        <h3 className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
          {title}
        </h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Early registration</TableHead>
            <TableHead className="text-right">Late registration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.category}>
              <TableCell className="whitespace-normal font-medium">{row.category}</TableCell>
              <TableCell className="text-right font-mono text-sm">{row.early}</TableCell>
              <TableCell className="text-right font-mono text-sm">{row.late}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
