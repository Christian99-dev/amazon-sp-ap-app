module.exports = (input) => {
  // Regulärer Ausdruck für die Überprüfung einer gültigen ASIN
  const asinRegex = /^([A-Z0-9]{10})$/;

  // Überprüfen, ob die Eingabe dem ASIN-Regex entspricht
  return asinRegex.test(input);
};
