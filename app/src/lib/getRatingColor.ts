export default function getRatingColor(rating: number): string {
  // Rundet das Rating auf die nächste ganze Zahl, um sicherzustellen, dass es zwischen 0 und 100 liegt
  const ratingValue = Math.round(rating);

  // Bedingte Anweisung, um die Farbe basierend auf dem gerundeten Rating zu bestimmen
  if (ratingValue >= 0 && ratingValue <= 20) {
    return "bg-red-500";
  } else if (ratingValue > 20 && ratingValue <= 40) {
    return "bg-red-400";
  } else if (ratingValue > 40 && ratingValue <= 60) {
    return "bg-yellow-400";
  } else if (ratingValue > 60 && ratingValue <= 80) {
    return "bg-yellow-300";
  } else {
    return "bg-green-400";
  }
}
