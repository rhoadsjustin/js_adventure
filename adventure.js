var fullName = prompt("What is your name?");
alert("Great to meet you, " + fullName + " Let's ask some serious questions.");

var superHero = prompt("If you could be one of the following Superheroes who would you choose? IronMan, Superman, Batman, and Captain America");

  // if(superHero == "IronMan" || "Superman" || "Batman" || "Captain America") {
  //   alert("that's not a SuperHero available, try again")
  //   }
  if (superHero == "IronMan") {
        var ironMan_1 = prompt("Is is it because of Tony Stark or the mech suit?")
       if(ironMan_1 == "Tony Stark") {
       var ironMan_2 = prompt("Respect that. Would you choose his cars or his women?") }
       if(ironMan_2 == "cars") {
         console.log("Zoom Zoom");
       } else {
         console.log("Niceee");
       }
  } else if(ironMan_1 == "the mech suit") {
         var ironMan_3 = prompt("The world is in trouble, what would you choose to do? (Save Penny, Save the World, or Die trying to do both")
       if(ironMan_3 == "Save Penny") {
           console.log("Choosing one over the world? Interesting choice, must be love.")
         } else if(ironMan_3 == "Save the World") {
           console.log("Well technically Penny is apart of the world, so this is the right choice. Good job. You win.");
         } else {
           console.log("You didn't have to die, but you probably should've called the Avengers to help. Sorry " + fullName + ", it was nice knowing you.");
         }
  }
