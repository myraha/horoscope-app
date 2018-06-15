// horoscope app
// user enters birthday
// user clicks button
// sign is displayes
//user gets horoscope
//result is entered in the dom


//user can click a button
//horoscope will be generated
//horoscope will be displayed to the userBirthday

//event listener
document.getElementById("submit").onclick = getHoroscope
//function
function getHoroscope(){
//get value of month
var month = parseFloat(document.getElementById("month").value);
//get value of days
var day = parseFloat(document.getElementById("day").value);
//horoscope signs
var horoscopeSigns = {
 aquarius: "Aquarius: There are some big things standing in your way and although you are able to see them.",
 pisces: "Pisces: Yelling product names at the end of TV ads is patented by Sony.",
 aries: "Aries: Too many important matters are burning in your mind and you can’t shake them off unless when you deal with them.",
 taurus: "Taurus: Your routine is truly important today and you should make sure that you are making healthy choices.",
 gemini: "Gemini: The first uniform registered with the U. S. Patent and Trademark Office was the Playboy Bunny outfit.",
 cancer: "Cancer: You will feel the move of the Moon to Capricorn and it might get you frozen in a moment in time.",
 leo: "Leo: Your mind is quick and sharp, but some words could be spoken that aren’t really necessary at the moment. ",
 virgo: "Virgo: Patents of Tesla Motors are being publicly released to encourage the advancement of electric vehicle technology and competition.",
 libra: "Libra: It is time to give something away without expecting anything in return.",
 scorpio: "Scorpio: You will heal, once you take responsibility for your own actions and see others.",
 sagittarius: "Sagittarius: Many powerful things can be said, but this means you should step on your own toes.",
 capricorn: "Capricorn: Stay in touch with information you wish to share and keep them going.",
}
//determine horoscope
if((month == 12 && day >= 22) || (month == 1 && day <= 19)){
  document.getElementsByTagName("span")[0].innerHTML = horoscopeSigns.capricorn;
}
  else if((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    document.getElementsByTagName("span")[0].innerHTML = horoscopeSigns.aquarius;
  }
  else if((month == 2 && day >= 19 && day <= 28) || (month == 3 && day <= 20)){
    document.getElementsByTagName("span")[0].innerHTML = horoscopeSigns.pisces;
  }
  else if((month == 3 && day >= 21) || (month == 4 && day <= 19)){
    document.getElementsByTagName("span")[0].innerHTML = horoscopeSigns.aries;
  }
  else if((month == 4 && day >= 20 && day <= 30 ) || (month == 5 && day <= 20)){
    document.getElementsByTagName("span")[0].innerHTML = horoscopeSigns.taurus;
  }
  else if((month == 5 && day >= 21 ) || (month == 6 && day <= 20 )){
    document.getElementsByTagName("span")[0].innerHTML = horoscopeSigns.gemini;
  }
  else if((month == 6 && day >= 21 && day <= 30) || (month == 7 && day <= 22)){
    document.getElementsByTagName("span")[0].innerHTML = horoscopeSigns.cancer;
  }
  else if((month == 7 && day >= 23) || (month == 8 && day <= 22)){
    document.getElementsByTagName("span")[0].innerHTML = horoscopeSigns.leo;
  }
  else if((month == 8 && day >= 23) || (month == 9 && day <= 22)){
    document.getElementsByTagName("span")[0].innerHTML = horoscopeSigns.virgo;
  }
  else if((month == 9 && day >= 23) || (month == 10 &&dDay <= 22)){
    document.getElementsByTagName("span")[0].innerHTML = horoscopeSigns.libra;
  }
  else if((month == 10 && day >= 23) || (month == 11 && day <= 21)){
    document.getElementsByTagName("span")[0].innerHTML = horoscopeSigns.scorpio;
  }
  else if((month == 11 && day >= 22 && day <= 28) || (month == 12 && day <= 21)){
    document.getElementsByTagName("span")[0].innerHTML = horoscopeSigns.sagittarius;
  }
  else{
    document.getElementsByTagName("span")[0].innerHTML = "I couldn't find your birthday...try again";
  }
}

  // clear out input logs
  document.getElementById('month').value = "";
  document.getElementById('day').value = "";
