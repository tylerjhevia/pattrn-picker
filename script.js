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

const mobileOne = $('.mobile-one');
const mobileTwo = $('.mobile-two');
const mobileThree = $('.mobile-three');
const mobileFour = $('.mobile-four');
const allMobileTabs = $('.mobile');
const mobileTabs = [mobileOne, mobileTwo, mobileThree, mobileFour];

function clickTab(e) {
  let clickedTab = e.currentTarget;
  tabs.map(tab => $(tab).removeClass('clicked'));
  $(clickedTab).addClass('clicked');
  getAssociatedContent(clickedTab.classList[1]);
}

function clickMobileTab(e) {
  let clickedTab = e.currentTarget;
  let status = $(clickedTab).children()[1];

  if ($(status).text() === '+') {
    mobileTabs.map(tab => $(tab).removeClass('clicked'));
    $(clickedTab).addClass('clicked');
    getAssociatedContent(clickedTab.classList[1]);
    return $(status).text('-');
  } else {
    mobileTabs.map(tab => $(tab).removeClass('clicked'));
    allContent.map(slide => $(slide).addClass('hidden'));
    return $(status).text('+');
  }
}

function getAssociatedContent(tabClass) {
  let associatedContentClass = tabClass.split('-')[1];
  let associatedContent = $(`.${associatedContentClass}`);
  allContent.map(slide => $(slide).addClass('hidden'));
  $(associatedContent).removeClass('hidden');
}

function resize() {
  if ($(window).width() < 550) {
    tabs.map(tab => $(tab).removeClass('clicked'));
    $(tab1).addClass('clicked');
    return getAssociatedContent('.tab-one');
  }
}

allTabs.on('click', clickTab);
allMobileTabs.on('click', clickMobileTab);
$(window).on('resize', resize);
