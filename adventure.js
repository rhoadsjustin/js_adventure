var fullName = prompt("What is your name?");
alert("Great to meet you, " + fullName + " Let's ask some serious questions.");

var superHero = prompt("If you could be one of the following Superheroes who would you choose? IronMan, Superman, Batman, and Captain America");

  // if(superHero == "IronMan" || "Superman" || "Batman" || "Captain America") {
  //   alert("that's not a SuperHero available, try again")
  //   }
  // IronMan decision tree //
  if (superHero == "IronMan") {
        var ironMan_1 = prompt("Is is it because of Tony Stark or the mech suit?")
      if(ironMan_1 == "Tony Stark") {
        var ironMan_2 = prompt("Respect that. Would you choose his cars or his women?") }
              if(ironMan_2 == "cars") {
                  console.log("Zoom Zoom");
                  alert("How fast you get from 0-60?");
                  for (var i = 0; i < 60; i++) {
                    alert(i);
                  }
              } else if (ironMan_2 == "women") {
                  console.log("Niceee");
              }
       else if (ironMan_1 == "the mech suit") {
         var ironMan_3 = prompt("The world is in trouble, what would you choose to do? (Save Penny, Save the World, or Die trying to do both")
       if(ironMan_3 == "Save Penny") {
           alert("Choosing one over the world? Interesting choice, must be love.")
         } else if(ironMan_3 == "Save the World") {
           alert("Well technically Penny is apart of the world, so this is the right choice. Good job. You win.");
         } else {
           alert("You didn't have to die, but you probably should've called the Avengers to help. Sorry " + fullName + ", it was nice knowing you.");
         }
      }

  // Superman decision tree
} else  if (superHero == "Superman") {
        var superMan_1 = prompt("Which of his superpowers made you pick him? (Xray Vision, Flight, or Lasers)")
       if(superMan_1 == "Xray Vision") {
       alert("Not a bad choice. Use this power wisely, but I can see through your choice that you should play again.");
       } else if (superMan_1 == "Flight") {
         var superMan_2 = prompt("Where would you fly first? into space or around the earth to turn back time? (respond with space or time)")
         if(superMan_2 == "space") {
           alert("That's a great choice. Don't get lost in space.");
           var superManFlight = prompt("There's trouble on Krypton. You must fly there first. How fast will you choose to fly there? (Enter a MPC [miles per click] number between 1-100)");
           var mpc = parseInt(superManFlight);
            alert("It takes a 1000 miles to get to Krypton, click to get there quicker!");
            for (var i = 0; i < 1000; i += mpc) {
              alert("You have flown " + i + " miles");
            }
            alert("Congrats you made it to Krypton! Thanks for playing");
         } else if (superMan_2 == "time") {
           var superMan_2B = prompt("Awesome. What year and why?")
           alert("You said this: " + superMan_2B + ", that's a great reason. Play again.")
         } else {
           alert("wow please read the instructions and try again, Lex Luthor.");
         }
       } else if (superMan_1 == "Lasers") {
         var superMan_3 = prompt("With great lasers comes great potential danger for the world. What would you do first with your 'lasers'? Melt the polar ice cap or start a forrest fire? (Melt or Fire)"); {
           if (superMan_3 == "Melt") {
             alert("Wow, you would choose to endanger the whole world and make Al Gore's look correct. Are you Man Bear Pig? You lose the game. Try again.");
           } else if (superMan_3 == "Fire") {
             alert("Wow, just wow. You aren't a superhero anymore, you have become Smokey the Bear's greatest adversary. Prepare to lose that battle. Play again.");
           } else {
             alert("way to go superhero, you can't read properly!!");
           }
         }
       }

       // Batman Decision Tree
  } else if(superHero == "Batman") {
         var batman_1 = prompt("Well hello Mr. Wayne. Hopefully you're not Ben Affleck cause then you're the worst Batman. But Anyways, back to our questions. Gotham is in trouble, what do you do? (Hang with Alfred, Hop in the Batmobile, or Hop in the Lambo)")
         if (batman_1 == "Hang with Alfred") {
           alert("While Alfred is a dope old man with a sweet accent. You let Gotham down, shame on you Bruce. Game Over.");
         } else if (batman_1 == "Hop in the Batmobile") {

                  var batman_1a = prompt("Honorable choice, now you get to go Karate chop some bad guys. The have taken hostages in a warehouse, how do you enter the warehouse? (Through the front door batarangs a blazing, A conviently unlocked sky-light, or drive the Batmobile through the wall)")
                  if (batman_1a == "through the front door batarangs a blazing") {
                    alert("You are Batman, not superman. You can die, and you did die. Game Over.")
                  } else if (batman_1a == "A conviently unlocked sky-light") {
                    alert("You are a master of stealth. You save the hostages and Gotham. You are a hero. You win!");
                  } else if (batman_1a == "drive the Batmobile through the wall") {
                    alert("Your confidence and ultimately your fearlessness strike fear in the enemy, they pass out from how awesome that was. Then you save the hostages. You are the hero and your epic in your decision making. You win.");
                  } else {
                    alert("Wrong.");
                  }
                }
        else if (batman_1 == "Hop in the Lambo") {
         var batman_1b = prompt("Respect the style and the flare, but Bruce Wayne isn't cut out for this. Only Batman can save Gotham. You lose. Bonus life if you can guess what number I'm thinking of between 1-10?");
         var numberGuess = parseInt(batman_1b);
         var randomNumber = Math.floor(Math.random() * 10);
          if (numberGuess === randomNumber) {
            alert(numberGuess + " = " + randomNumber + " Wow how'd you know.")
          } else {
            alert("Welp. You lost your last chance. My number was " + randomNumber + " You lose.")
          }
       }
  } else if(superHero == "Captain America") {
         var cptAmerica_1 = prompt("Wow, you are so patriotic. How many stars are on your sheild?")
         var starsNumber = parseInt(cptAmerica_1)
       if(starsNumber == 1) {
           var cptAmerica_2 = prompt("Choosing one over the world? Interesting choice, must be love.")
         } else if(ironMan_3 == "Save the World") {
           console.log("Well technically Penny is apart of the world, so this is the right choice. Good job. You win.");
         } else {
           console.log("You didn't have to die, but you probably should've called the Avengers to help. Sorry " + fullName + ", it was nice knowing you.");
         }
  }

  // alert("That was so much fun. Let's play again! #Adventure");
