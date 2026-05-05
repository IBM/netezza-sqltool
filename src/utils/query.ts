// Simplified query parser for Netezza driver
export function parse(query: string, _dialect: string = 'pg'): string[] {
  // Simple split by semicolon, handling common cases
  const queries = query
    .split(/;(?=(?:[^']*'[^']*')*[^']*$)/) // Split by ; not inside quotes
    .map(q => q.trim())
    .filter(q => q.length > 0);
  
  return queries;
}


