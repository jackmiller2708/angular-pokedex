const altNames: Record<string, string> = {
  'letsgo-kanto': "Kanto (Let's go series)",
  'updated-hoenn': 'Hoenn (Updated)',
  'original-johto': 'Johto',
  'updated-johto': 'Johto (Updated)',
  'original-sinnoh': 'Sinnoh',
  'extended-sinnoh': 'Sinnoh (Extended)',
};

export function PokedexAlternateName(name: string): string {
  return name in altNames ? altNames[name] : name;
}
