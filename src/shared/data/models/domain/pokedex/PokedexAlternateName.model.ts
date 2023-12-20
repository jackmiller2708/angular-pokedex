const altNames: Record<string, string> = {
  kanto: 'Kanto (original)',
  'letsgo-kanto': "Kanto (Let's go series)",
};

export function PokedexAlternateName(name: string): string {
  return name in altNames ? altNames[name] : name;
}
