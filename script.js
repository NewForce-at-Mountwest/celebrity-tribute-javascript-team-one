const linData = {
  newsfeed: [{
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
        "Luz Towns-Miranda"
      ],
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
// this function creates P elements. The parameters are the key values in the object

function makePElement(paraValueParam){
const paragraph = document.createElement('p');
paragraph.textContent=paraValueParam;
return paragraph
}
// this function creates a p element with a className so that the elements can be more precisely targeted with CSS styles
function makestyledPElement(paraValueParam, style){
  const paragraph = document.createElement('p');
  paragraph.className = style;
  paragraph.textContent=paraValueParam;
  return paragraph
  }

  // the following variables call the functions above creating p elements

  const bdayKey = makestyledPElement("Birth Date", "personalKey")
  const blocationKey = makestyledPElement("Birth Location", "personalKey")
  const cityKey = makestyledPElement("City of Residence", "personalKey")
  const nationKey = makestyledPElement("Nationality", "personalKey")
  const familyKey = makestyledPElement("Family", "personalKey")
  const spouseKey = makestyledPElement("(Spouse)", "personalKey")
  const kidsKey = makestyledPElement("(Kids)", "personalKey")
  const parentsKey = makestyledPElement("(Parents)", "personalKey")
  const petsKey = makestyledPElement("(Pets)", "personalKey")
  

const bdayCatcher = makePElement(linData.personalLife.birthDate)
const blCatcher = makePElement(linData.personalLife.birthLocation)
const cityCatcher = makePElement(linData.personalLife.cityOfResidence)
const nationCatcher = makePElement(linData.personalLife.nationality)
const spouseCatcher = makePElement(linData.personalLife.family.spouse)
const kidsCatcher = makePElement(linData.personalLife.family.kids)
const parentsCatcher = makePElement(linData.personalLife.family.parents)
const petsCatcher = makePElement(linData.personalLife.family.pets)
const careerIntroCatcher = makePElement(linData.career.shortIntro)
const summaryCountryCatcher = makePElement(linData.executiveSummary.countryOfResidence)

// throw other p elements into the respective div containers with document query selectors and append child methods

const p = document.querySelector("#personal-life")
const e = document.querySelector("#executive-summary")
const n = document.querySelector("#news-feed")
const c = document.querySelector("#career")

// theses appendChild methods write the above caught functions to the DOM

const summaryHeading = makeh2Heading("Executive Summary", "career-heading");
e.appendChild(summaryHeading);
e.appendChild(summaryCountryCatcher);

const personalHeading = makeh2Heading("Personal Information", "career-heading");
p.appendChild(personalHeading);
p.appendChild(bdayKey);
p.appendChild(bdayCatcher);
p.appendChild(blCatcher);
p.appendChild(cityCatcher);
p.appendChild(nationCatcher);
p.appendChild(spouseCatcher);
p.appendChild(kidsCatcher);
p.appendChild(parentsCatcher);
p.appendChild(petsCatcher);



c.appendChild(careerIntroCatcher)

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
}

function createA(arrayParam){
  theNews = document.createElement('div');
  for(i = 0; i < arrayParam.length; i++){
  oneList = document.createElement('a');
  oneList.className = "news-title";
  oneList.href = arrayParam[i].url;
  oneList.textContent = arrayParam[i].title;
  theNews.appendChild(oneList);
  titleList = document.createElement('p');
  titleList.className = "news-title";
  titleList.textContent =arrayParam[i].date;
  theNews.appendChild(titleList);
  }console.log(theNews);
  return theNews;
}

let theNewschunk = createA(linData.newsfeed);
document.querySelector("#news-feed").appendChild(theNewschunk);

function makeh2Heading(object, ClassName) {
  headingh2 = document.createElement('h2');
  headingh2.className = ClassName;
  headingh2.textContent = object;
  return headingh2;
}

const heading = makeh2Heading(linData.executiveSummary.countryOfResidence, "h2heading");
console.log(heading);

//   loop for arrays in executive summary

function listItems(arrayParam,listName) {
  const knownCollabs = document.createElement('ul')
  knownCollabs.textContent = listName
  for (i = 0; i < arrayParam.length; i++) {
    const people = document.createElement('li')
    people.textContent = arrayParam[i];
    knownCollabs.appendChild(people);
  }
  return knownCollabs;
}
const exSummheading = makeh2Heading("Executive Summary","career-heading")
e.appendChild(exSummheading);
e.appendChild(summaryCountryCatcher);

const exPara = listItems(linData.executiveSummary.knownCollaborations,"Known Collaborations")
e.appendChild(exPara);

const exalias = listItems(linData.executiveSummary.listOfAliases,"Known Aliases")
e.appendChild(exalias)





   
// const megan = listItems(linData.executiveSummary.knownCollaborations);
// console.log(megan);

// function for images with alt text and a caption below, hopefully!
function img_create(src, alt, title) {
  var img = document.createElement('img');
  img.src = src;
  if (alt != null) img.alt = "Lin-Manuel Miranda";
  if (alt != null) img.title = title;
  return img;
}
// const imgs = img_create(linData.executiveSummary.image.photURL," " ,linData.executiveSummary.image.caption)

const megan = listItems(linData.executiveSummary.knownCollaborations);
console.log(megan);

const careerheading = makeh2Heading("Career", "career-heading");
const lists = listItems(linData.career.MusicalsWritten, "Musicals Written");
const list2 = listItems(linData.career.awards, "Awards");
const list3 = listItems(linData.career.notableRoles, "Notable Roles");
const list4 = listItems(linData.career.notableSongs, "Notable Songs"); 
console.log(lists);

const j = document.querySelector("#career")

j.appendChild(careerheading)
j.appendChild(careerIntroCatcher)
j.appendChild(lists)
j.appendChild(list2)
j.appendChild(list3)
j.appendChild(list4)
