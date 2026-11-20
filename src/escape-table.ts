import { NSDatabase } from '@sqltools/types';

// Always quote: Netezza folds unquoted names to upper case, so lowercase names (e.g. datalake tables) would not be found.
export const pgCheckEscape = (w: string | { label: string }) =>
  `"${String((<any>w).label || w).replace(/"/g, '""')}"`;


function escapeTableName(table: Partial<NSDatabase.ITable> | string) {
  let items: string[] = [];
  let tableObj = typeof table === 'string' ? <NSDatabase.ITable>{ label: table } : table;
  tableObj.database && items.push(pgCheckEscape(tableObj.database));
  tableObj.schema && items.push(pgCheckEscape(tableObj.schema));
  items.push(pgCheckEscape(tableObj.label));
  return items.join('.');
}

export default escapeTableName;
