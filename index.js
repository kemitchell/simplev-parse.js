module.exports = simplevParse

var re = new RegExp(
  // At the start of the string.
  '^' +
  // Non-zero number without leading zeroes.
  '([1-9][0-9]*)' +
  // Dot.
  '\\.' +
  // Possibly-zero number without leading zeroes.
  '(0|[1-9][0-9]*)' +
  // Dot.
  '\\.' +
  // Another possibly-zero number without leading zeroes.
  '(0|[1-9][0-9]*)' +
  // Optionally ...
  '(' +
    // A dash.
    '-' +
    // Yet another possibly-zero number without leading zeroes.
    '([1-9][0-9]*)' +
  ')?' +
  // No extra stuff at the end.
  '$')

function simplevParse(argument) {
  var match = re.exec(argument)
  if (match) {
    var parsed = {
      edition: match[1],
      update: match[2],
      correction: match[3] }
    if (match[5]) {
      parsed.draft = match[5] }
    return parsed }
  else {
    return null } }
