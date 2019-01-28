const linData = {
    newsfeed: [
      {
        title: "Lin Manuel Miranda Working on Moana Sequel",
        url: "https://www.cinemablend.com/news/2465663/is-lin-manuel-miranda-working-on-a-moana-sequel",
        date: "1/23/19"
      },
      {
        title: "Lin-Manuel Miranda is peeved about this year’s Oscars",
        url: "https://pagesix.com/2019/01/25/lin-manuel-miranda-is-peeved-about-this-years-oscars/",
        date: "1/25/19",
      },
      {
        title: "Lin-Manuel Miranda in Talks to Write Disney's First Latina Disney Princess",
        url: "https://www.thedailybeast.com/lin-manuel-miranda-in-talks-to-write-disneys-first-latina-princess",
        date: "1/25/19",
      },
      {
        title: "Puerto Rico Gives Lin-Manuel Miranda a Hero's Welcome at Hamilton Opening Weekend: 'I Felt It'",
        url: "  https://people.com/theater/lin-manuel-miranda-hamilton-puerto-rico-standing-ovation/",
        date: "1/25/19"
      },
      {
        title: "See Lin-Manuel Miranda, ‘Hamilton’ Cast Perform ‘The Story of Tonight’ With Jimmy Fallon",
        url: "  https://www.rollingstone.com/tv/tv-news/lin-manuel-miranda-hamilton-jimmy-fallon-779743/",
        date: "1/16/19"
      },
      {
        title: "Lin-Manuel Miranda And 'Hamilton' Partners Save A Manhattan Theater Bookstore",
        url: "https://www.npr.org/2019/01/08/683284098/lin-manuel-miranda-and-hamilton-partners-save-a-manhattan-theater-bookstore",
        date: "1/8/19"
      }
    ],
    personalLife: {
      birthDate: "January 16, 1980",
      birthLocation: "New York City",
      cityOfResidence: "New York City",
      nationality: "Puerto Rican, American",
      family: {
        spouse: "Vanessa Nada",
        kids: ["Sebastian Miranda",
          "Francisco Miranda"
        ],
        parents: ["Luis A. Miranda, Jr.",
          "Luz Towns-Miranda"],
        pets: ["Tobillo", "Toby"]
      }
    },
    career: {
      shortIntro: "Lin-Manuel Miranda has written and performed in many successful musicals and movies since 2002. His most recent               musical being Hamilton: An American Musical. He recently starred in the movie, Mary Poppins Returns.",
      MusicalsWritten: ["In The Heights", "Bring It On: The Musical", "Hamilton: An American Musical"],
      notableRoles: ["Usnavi", "Alexander Hamilton"],
      notableSongs: ["In The Heights", "My Shot", "Alexander Hamilton"],
      awards: ["Multiple, Grammy Awards", "Multiple Tony Awards", "An Emmy Award"]
    },
    
    executiveSummary: {
      knownCollaborations: ["Dwayne The Rock Johnson", "The McElroy Brothers", "Emily Blunt", "Leslie Odom Jr.", "Daveed Diggs", "Renee         Elise Goldsberry", "Phillipa Soo"],
      image: {
        photURL: "https://pmcvariety.files.wordpress.com/2018/07/lin-manuel.jpg?w=1000",
        caption: "Lin Manuel Miranda Headshot"
      },
      listOfAliases: ["Lin", "LMM", "Alexander Hamilton"],
      countryOfResidence: "United States"
    }
  }
  
    // writing loops for printing the personalLife object to the DOM. Individual functions for the the individual keys. Concatenate the arrays with only 2 items in them.

    function makePElement(paraValueParam){
    const paragraph = document.createElement('p');
    paragraph.textContent=paraValueParam;
    return paragraph
    }

    const paragraphCatcher = makePElement(linData.personalLife.birthDate)
    console.log(paragraphCatcher)
    
    // birthDate.className = "birth-date";
    // birthDate.textContent = linData.personalLife.birthDate;
    // personalFeed.appendChild(birthDate)
    
    // return personalFeed;
    // }
    // const personCatcher = makePersonalLife();
    // console.log(personCatcher);
    
    
    
    




    function makeNews(){newsFeed = document.createElement('div')
  for(i = 0;  i < linData.newsfeed.length; i++){
    const oneList = document.createElement('a');
    oneList.className ="news-title";
    oneList.href = linData.newsfeed[i].url;
    oneList.textContent = linData.newsfeed[i].title;
    newsFeed.appendChild(oneList);
    }
    return newsFeed;
}
  const boo = makeNews();
  console.log(boo);










//   const birthLocation = document.createElement('p');
//   birthLocation.className = "birth-location";
//   birthLocation.textContent = linData.personalLife.birthLocation;
//   personalFeed.appendChild(birthLocation)
//   const cityOfResidence = document.createElement('p');
//   cityOfResidence.className = "City-of-Residence";
//   cityOfResidence.textContent = linData.personalLife.cityOfResidence;
//   personalFeed.appendChild(cityOfResidence)
//   const nationality = document.createElement('p');
//   nationality.className = "nationality";
//   nationality.textContent = linData.personalLife.nationality;
//   personalFeed.appendChild(nationality)

//   const family = document.createElement('p');
//   family.className = "family";
//   family.textContent = linData.personalLife.family;
//   personalFeed.appendChild(family)

















