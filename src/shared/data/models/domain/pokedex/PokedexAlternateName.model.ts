const altNames: Record<string, string> = {
  'letsgo-kanto': "Kanto (Let's go series)",
  'updated-hoenn': 'Hoenn (Updated)',
  'original-johto': 'Johto',
  'updated-johto': 'Johto (Updated)',
  'original-sinnoh': 'Sinnoh',
  'extended-sinnoh': 'Sinnoh (Extended)',
  'original-unova': 'Unova',
  'updated-unova': 'Unova (Updated)',
  'kalos-central': 'Kalos (Central)',
  'kalos-coastal': 'Kalos (Coastal)',
  'kalos-mountain': 'Kalos (Mountain)',
  'original-alola': 'Alola',
  'updated-alola': 'Alola (Updated)',
  'original-melemele': 'Melemele',
  'updated-melemele': 'Melemele (Updated)',
  'original-akala': 'Akala',
  'updated-akala': 'Akala (Updated)',
  'original-ulaula': 'Ulaula',
  'updated-ulaula': 'Ulaula (Updated)',
  'original-poni': 'Poni',
  'updated-poni': 'Poni (Updated)',
  'isle-of-armor': 'Isle of Amor',
  'crown-tundra': 'Crown Tundra',
};

export function PokedexAlternateName(name: string): string {
  return name in altNames ? altNames[name] : name;
}
