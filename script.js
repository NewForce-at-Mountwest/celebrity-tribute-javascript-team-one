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
      knownCollaborations: ["Dwayne The Rock Johnson", "The McElroy Brothers", "Emily Blunt", "Leslie Odom Jr.", "Daveed Diggs", "Renee Elise Goldsberry", "Phillipa Soo"],
      image: {
        photURL: "https://pmcvariety.files.wordpress.com/2018/07/lin-manuel.jpg?w=1000",
        caption: "Lin Manuel Miranda Headshot"
      },
      listOfAliases: ["Lin", "LMM", "Alexander Hamilton"],
      countryOfResidence: "United States"
    }
  }



//   loop for newsfeed links

  //need function that loops through lindata.newfeed to get A tag with title and url with a date underneather. should display like <div><a href="#><h2>$words</h2></a></div>" then post the dom
// function makeNews(){newsFeed = document.createElement('div');
//   for(i = 0;  i < linData.newsfeed.length; i++){
//     const oneList = document.createElement('a');
//     oneList.className ="news-title";
//     oneList.href = linData.newsfeed[i].url;
//     oneList.textContent = linData.newsfeed[i].title;
//     newsFeed.appendChild(oneList);
//     const date = document.createElement('h4');
//     date.className = "dateList";
//     date.textContent = linData.newsfeed[i].date;
//     newsFeed.appendChild(date);
//     }
//     return newsFeed;
// }
//   const boo = makeNews();
//   console.log(boo);

//makes a clickable link
  function createAList(arrayParam){
    newsFeed = document.createElement('div');
  for(i = 0;  i < arrayParam.length; i++){
    const oneList = document.createElement('a');
    oneList.className ="news-title";
    oneList.href = arrayParam[i].url;
    oneList.textContent = arrayParam[i].title;
    newsFeed.appendChild(oneList);
    }
  return newsFeed;
}

function createAListofDates(arrayParam){
  newsFeed = document.createElement('div');
for(i = 0;  i < arrayParam.length; i++){
  const oneList = document.createElement('a');
  oneList.className ="news-title";
  oneList.href = arrayParam[i].url;
  oneList.textContent = arrayParam[i].date;
  newsFeed.appendChild(oneList);
  }
return newsFeed;
}



const foo = createAListofDates(linData.newsfeed);
console.log(createAListofDates(linData.newsfeed));


const boo = createAList(linData.newsfeed)
console.log(boo);


 function makeh2Heading(object, ClassName){
    headingh2 = document.createElement('h2');
    headingh2.className = ClassName;
    headingh2.textContent = object;
    return headingh2;    
  }

  const heading = makeh2Heading(linData.executiveSummary.countryOfResidence, "h2heading");
  console.log(heading);
  
 
//   loop for newsfeed

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

//   loop for arrays in executive summary

function listItems(arrayParam){
    const knownCollabs = document.createElement('ul')
    knownCollabs.textContent = "Known Collaborators"
    for (i = 0; i < arrayParam.length; i++){
        const people = document.createElement('li')
        people.textContent = arrayParam[i];
        knownCollabs.appendChild(people);

   
}
return knownCollabs;
}
// const megan = listItems(linData.executiveSummary.knownCollaborations);
// console.log(megan);

// function for images with alt text and a caption below, hopefully!
function img_create(src, alt, title) {
    var img = document.createElement('img');
    img.src = src;
    if ( alt != null ) img.alt = "Lin-Manuel Miranda";
    if ( alt != null ) img.title = title;
    return img;
}
// const imgs = img_create(linData.executiveSummary.image.photURL," " ,linData.executiveSummary.image.caption)

const megan = listItems(linData.executiveSummary.knownCollaborations);
console.log(megan);

