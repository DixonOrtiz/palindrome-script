const isPalindrome = (text) => {
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== text[text.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const evaluateText = (text) => {
  let counter = 0;
  for (let i = 0; i < textToEvaluate.length; i++) {
    for (let j = i + 1; j <= textToEvaluate.length; j++) {
      let subText = textToEvaluate.substring(i, j);
      if (isPalindrome(subText) && subText.length > 2) {
        counter += 1;
        console.log(`${subText} is a palindrome!`);
      }
    }
  }
  console.log(
    `\n${counter} strings have been found that are read the same from left to right!`
  );
};

const textToEvaluate =
  'afoolishconsistencyisthehobgoblinoflittlemindsadoredbylittlestatesmenandphilosophersanddivineswithconsistencyagreatsoulhassimplynothingtodohemayaswellconcernhimselfwithhisshadowonthewallspeakwhatyouthinknowinhardwordsandtomorrowspeakwhattomorrowthinksinhardwordsagainthoughitcontradicteverythingyousaidtodayahsoyoushallbesuretobemisunderstoodisitsobadthentobemisunderstoodpythagoraswasmisunderstoodandsocratesandjesusandlutherandcopernicusandgalileoandnewtonandeverypureandwisespiritthatevertookfleshtobegreatistobemisunderstood';

evaluateText(textToEvaluate);
