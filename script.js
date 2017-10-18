const tab1 = $('.tab-one');
const tab2 = $('.tab-two');
const tab3 = $('.tab-three');
const tab4 = $('.tab-four');

const allTabs = $('.tab');

const tabs = [tab1, tab2, tab3, tab4];

const one = $('.one');
const two = $('.two');
const three = $('.three');
const four = $('.four');

const allContentSlides = $('.accordion-content');

const allContent = [one, two, three, four];

function clickTab(e) {
  let clickedTab = e.currentTarget;
  tabs.map(tab => $(tab).removeClass('clicked'));
  $(clickedTab).addClass('clicked');
  getAssociatedContent(clickedTab.classList[1]);
}

function getAssociatedContent(tabClass, allContentSlides) {
  let associatedContentClass = tabClass.split('-')[1];
  let associatedContent = $(`.${associatedContentClass}`);
  allContent.map(slide => $(slide).addClass('hidden'));
  $(associatedContent).removeClass('hidden');
}

allTabs.on('click', clickTab);
