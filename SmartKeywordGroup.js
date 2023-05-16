/**
 * Groups keywords based on similarity to ad groups.
 *
 * @param {Array} adGroups The list of ad groups.
 * @param {string} keyword The keyword to group.
 * @return The name of the ad group that has the smallest Levenshtein distance to the keyword.
 * @customfunction
 */
function GROUP_KEYWORD(keyword, adGroups, allKeywords) {
  var minDistance = Infinity;
  var bestMatch = '';
  var threshold = 5; // adjust this value according to your needs

  for (var j = 0; j < adGroups.length; j++) {
    var distance = LEVENSHTEIN(keyword, adGroups[j][0]);
    if (distance < minDistance) {
      minDistance = distance;
      bestMatch = adGroups[j][0];
    }
  }

  if (minDistance > threshold) {
    for (var i = 0; i < allKeywords.length; i++) {
      if (allKeywords[i][0] == keyword) continue;
      var distance = LEVENSHTEIN(keyword, allKeywords[i][0]);
      if (distance < minDistance) {
        minDistance = distance;
        bestMatch = allKeywords[i][0];
      }
    }
  }

  return bestMatch;
}

/**
 * Calculates the Levenshtein distance between two strings.
 *
 * @param {string} a The first string.
 * @param {string} b The second string.
 * @return The Levenshtein distance.
 */
function LEVENSHTEIN(a, b) {
  var aLen = a.length;
  var bLen = b.length;
  var matrix = [];

  if (aLen == 0) {
    return bLen;
  } else if (bLen == 0) {
    return aLen;
  }

  for (var i = 0; i <= bLen; i++) {
    matrix[i] = [i];
  }

  for (var j = 0; j <= aLen; j++) {
    matrix[0][j] = j;
  }

  for (var i = 1; i <= bLen; i++) {
    for (var j = 1; j <= aLen; j++) {
      if (b.charAt(i-1) == a.charAt(j-1)) {
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, Math.min(matrix[i][j-1] + 1, matrix[i-1][j] + 1));
      }
    }
  }

  return matrix[bLen][aLen];
}
