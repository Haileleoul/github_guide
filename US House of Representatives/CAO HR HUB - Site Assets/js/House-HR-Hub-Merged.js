// jquery ready start
$(document).ready(function () {
  // jQuery code start  

  //Top navigation bar call
  topNavigationBar();

  // Left navigation bar call
  leftNavigationBar();

  //Footer function call
  footer();

  //HR Hub Visitors function call
  var PageTitle = jQuery(this).attr('title');
  HrHubVisitors(PageTitle);

  var path = window.location.pathname;

  if ((path.includes("TestPage_07") || path.includes("TestPage_08") || path.includes("TestPage_09") || path.includes("TestPage_10") || path.includes("Administrative") || path.includes("Communications") || path.includes("District") || path.includes("Legislative") || path.includes("TestPage_03"))) {

    //Load Position modals function call, for pages House Career Compass track pages
    loadPositionModals();

    //Load Connection modals function call, for pages House Career Compass track pages
    loadConnectionModals();

  } else if (path.includes("TestPage_11") || path.includes("ComparePositions")) {

    //Retrive Starting Position function call for Compare Positions page to Starting Position drop downs  
    retrive_Starting_Positions();

  } else if (path.includes("TestPage_12") || path.includes("Analytics")) {

    //HR Hub Analytics Archive and Images loading function call
    hrHubAnalyticsArchive();
    hrHubAnalyticsImages();

  }else if (path.includes("AdditionalServices")) {

    //HR Hub Additional Services function call
    _additionalServices();

  }


}); // jquery end



function footer() {

  document.getElementById('Footer').innerHTML = `
    <footer class="text-center text-lg-start text-muted" style="background: #003349;">  
     
    <section class="">        
      
      <div class="row">         
        <div id="footer-logo-row" class="col-md-12 col-lg-3 col-xl-3 mx-auto mb-4">
  
          <img id="footer-logo"
            src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CAO-Logo_White_USHR.svg"
            alt="US House of Representatives Logo">
  
        </div>           
  
        <div class="col-md-12 col-lg-9 col-xl-9 mx-auto mb-4" style="display:flex; align-items:center;">
          <p style="color:white; font-size: 15px;">
            The House HR Hub will be updated on a regular basis. Please check back often for additional content. | <a style="color:white; font-size: 15px;" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Sitemap.aspx" target="_blank">Sitemap</a> | <a style="color:white;" href= "mailto:HouseHRHub@mail.house.gov"> Contact </a> | <a style="color:white; font-size: 15px;" href="https://www.housestudies.com/SE/1/HRHubFeedback/ " target="_blank">Submit Feedback </a>
          </p>
  
        </div>  
  
      </div>  
  
    </section>
  
  </footer>`;

}



function topNavigationBar() {
  // Top navbar - START
  document.getElementById('topNavigationBar').innerHTML = `
  
        <div class="container-fluid" id="top-nav-bar" style="background: #003349;">
        <div id="House-HR-Hub-Logo-Row" class="row">
      
          <a href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Home.aspx"
            style="padding-right:125px;">
            <img id="House-HR-Hub-Logo"
              src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/HR-Hub_Logo_wordmark-white.svg">
          </a>
      
          <div class="input-group">
            <input type="search" id="SearchKey" class="form-control rounded" placeholder="Search" aria-label="Search"
              aria-describedby="search-addon" />
            <button id="SearchButton" type="button" class="btn btn-outline-primary" onclick="searchResource();"><i
                class="fas fa-search"></i></button>
          </div>
      
        </div>
      
        <div class="row">
          <nav class="navbar navbar-expand-lg navbar-dark" style="background: #003349;">
      
            <div class="container-fluid">
      
              <!-- <a class="navbar-brand" href="#">Brand</a> -->
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
                <span class="navbar-toggler-icon"></span>
              </button>
      
              <!-- To keep the navbar at center of the page -->
              <div class="collapse navbar-collapse"></div>
      
              <div class="collapse navbar-collapse" id="main_nav">
                <ul class="navbar-nav">
      
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle"
                      href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Hiring.aspx"
                      data-bs-toggle="dropdown"> HIRING </a>
                    <ul id="hiring-dropdown" class="dropdown-menu fade-up">
                      <li><a class="dropdown-item"
                          href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Hiring.aspx"> Hiring
                        </a></li>
                      <hr style="width:100%; margin-left:0; margin-top:0; margin-bottom:0;">
                      <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Recruiting&Selecting.aspx"> Recruiting & Selecting </a></li>
                      <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Salary&Benefits.aspx"> Salary & Benefits </a></li>
                      <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Onboarding.aspx"> Onboarding </a></li>
                      <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/SettingUpAnOffice.aspx"> Setting Up An Office  </a></li>
                    </ul>
                  </li>
      
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> DEVELOPING </a>
                    <ul id="developing-dropdown" class="dropdown-menu fade-up">
                      <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Developing.aspx#"> Developing </a></li>
                      <hr style="width:100%; margin-left:0; margin-top:0; margin-bottom:0;">
                      <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/PerformanceManagement.aspx#"> Performance Management </a></li>
                      <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/ProfessionalGrowth.aspx#"> Professional Growth </a></li>
                    </ul>
                  </li>
      
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> RETAINING </a>
                    <ul id="retaining-dropdown" class="dropdown-menu fade-up">
                      <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Retaining.aspx#"> Retaining </a></li>
                      <hr style="width:100%; margin-left:0; margin-top:0; margin-bottom:0;">
                      <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Engaging&SupportingStaff.aspx#"> Engaging & Supporting Staff </a></li>
                      <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/ManagingStaffTransitions.aspx#"> Managing Staff Transitions </a></li>
                    </ul>
                  </li>
          
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> STAFF BENEFITS </a>
                    <ul id="additional-services-dropdown" class="dropdown-menu fade-up">
                      <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/StaffBenefits.aspx#"> Staff Benefits 
                      </a></li>
                    </ul>
                  </li>
      
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle"
                      href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/ResumeBank.aspx"
                      data-bs-toggle="dropdown"> HOUSE RESUME BANK </a>
                    <ul id="hiring-dropdown" class="dropdown-menu fade-up">
                      <li><a class="dropdown-item"
                          href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/ResumeBank.aspx"> House Resume Bank
                        </a></li>
                      <hr style="width:100%; margin-left:0; margin-top:0; margin-bottom:0;">
                      <li><a class="dropdown-item" href="https://urldefense.com/v3/__https:/house.csod.com/ux/ats/careersite/7/home?c=house__;!!Bg5easoyC-OII2vlEqY8mTBrtW-N4OJKAQ!ZnXEaEIZfMEvHjDm90hgLH6a_8FBMPAbcmyASA8B8h5iV3LgRDDk-hfb8DV0yhVuGkqS-Ybu$#" target="_blank" onclick="downloadResource('Submit a Resume - Top Nav Bar')"> Submit a Resume </a></li>
                      <li><a class="dropdown-item" href="https://house.csod.com/samldefault.aspx?returnurl=https%253a%252f%252fhouse.csod.com%252fcatalog%252fCustomPage.aspx%253fid%253d221000398%2526tab_page_id%253d221000398#" target="_blank" onclick="downloadResource('Request Resumes - Top Nav Bar')"> Request Resumes </a></li>
                      <li><a class="dropdown-item" href="https://housenet.house.gov/vacancy-announcements#" target="_blank" onclick="downloadResource('Vacancy Announcements - Top Nav Bar')"> Vacancy Announcements </a></li>
                    </ul>
                  </li>
 
                  
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle"
                      href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Intern%20Resources.aspx"
                      data-bs-toggle="dropdown"> INTERN RESOURCES </a>
                    <ul id="hiring-dropdown" class="dropdown-menu fade-up">
                      <li><a class="dropdown-item"
                          href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Intern%20Resources.aspx"> Intern Resources
                        </a></li>
                      <hr style="width:100%; margin-left:0; margin-top:0; margin-bottom:0;">
                      <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Intern%20Resources%20for%20Intern%20Coordinators.aspx"> For Intern Coordinators </a></li>
                      <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Intern%20Resources%20for%20Interns.aspx"> For Interns </a></li>                      
                    </ul>
                  </li>
                
                <!--
                  <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" style="background-color:#A89968;" 
                  href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/NewMemberResources.aspx" 
                  data-bs-toggle="dropdown">           
                  NEW MEMBER RESOURCES </a>
                  <ul id="new-member-resources-dropdown" class="dropdown-menu fade-up">
                    <li><a class="dropdown-item" 
                    href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/NewMemberResources.aspx#" onclick="downloadResource('New Member Resources - Top Nav Bar')"> New Member Resources  
                    </a></li>
                  </ul>
                </li>
                -->                  
               
                
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" style="background-color:#007A53;" 
                href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/CareerPaths.aspx" 
                data-bs-toggle="dropdown">           
                MEMBER OFFICE CAREER PATHS </a>
                <ul id="house-career-paths-dropdown" class="dropdown-menu fade-up">
                  <li><a class="dropdown-item" 
                  href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/CareerPaths.aspx#"> Member Office Career Paths  
                  </a></li>
                </ul>
              </li>
                         
              
                </li>        
                </ul>
              </div> <!-- navbar-collapse.// -->
            </div> <!-- container-fluid.// -->
          </nav>
        </div>
      
      </div>
          
          `;
  // Top navbar - END
}



function leftNavigationBar() {

  // Left navbar - START

  var currentUrl = window.location.href;

  //console.log("Current URL : ", currentUrl);


  // Logic to check the page and set a variable to expand leftNav dropdown accordingly - START

  var expand_hiring_dropdown = "";
  var expand_developing_dropdown = "";
  var expand_retaining_dropdown = "";


  if (currentUrl.includes('Hiring') || currentUrl.includes('Recruiting') || currentUrl.includes('Salary&Benefits') || currentUrl.includes('Onboarding') || currentUrl.includes('SettingUpAnOffice')) {
    var expand_hiring_dropdown = "show";
  } else if (currentUrl.includes('Developing') || currentUrl.includes('PerformanceManagement') || currentUrl.includes('ProfessionalGrowth')) {
    var expand_developing_dropdown = "show";
  } else if (currentUrl.includes('Retaining') || currentUrl.includes('Engaging&SupportingStaff') || currentUrl.includes('ManagingStaffTransitions')) {
    var expand_retaining_dropdown = "show";
  } else if (currentUrl.includes('Intern') || currentUrl.includes('Intern Coordinators') || currentUrl.includes('For Interns')) {
    var expand_intern_resources_dropdown = "show";
  }



  var htmlLeftNavigation = `
    <nav id="sidebar" style="background:#003349; border-width:1px; border-style:solid;">
  
    <ul class="list-unstyled components" style="padding:0px; margin:0px;">
  
      <li id="home_link"> 
        <a id="home" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Home.aspx#">Home</a>
      </li>
  
      <hr style="width:100%; margin-left:0; margin-top:0; margin-bottom:0; background: white;">
  
      <li id="hiring_link">
        <a id="hiring" href="#hiringSubmenu" data-toggle="collapse" aria-expanded="false"
          class="dropdown-toggle">Hiring</a>
        <ul class="collapse list-unstyled ${expand_hiring_dropdown}" id="hiringSubmenu">
          <li>
            <a id="RecruitingAndSelecting" class="sidebar-link" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Recruiting&Selecting.aspx#"> Recruiting & Selecting </a>
          </li>
          <li>
            <a id="SalaryAndBenefits" class="sidebar-link" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Salary&Benefits.aspx#"> Salary & Benefits <br></a>
          </li>
          <li>
            <a id="Onboarding" class="sidebar-link" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Onboarding.aspx#"> Onboarding </a>
          </li>
          <li>
          <a id="SettingUpAnOffice" class="sidebar-link" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/SettingUpAnOffice.aspx#"> Setting Up An Office  </a>
        </li>
        </ul>
      </li>
  
      <hr style="width:100%; margin-left:0; margin-top:0; margin-bottom:0; background: white;">
  
      <li id="developing_link">
        <a id="developing" href="#developingSubmenu" data-toggle="collapse" aria-expanded="false"
          class="dropdown-toggle">Developing </a>
        <ul class="collapse list-unstyled ${expand_developing_dropdown}" id="developingSubmenu">
          <li>
            <a id="PerformanceManagement" class="sidebar-link" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/PerformanceManagement.aspx#"> Performance Management </a>
          </li>
          <li>
            <a id="ProfessionalGrowth" class="sidebar-link" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/ProfessionalGrowth.aspx#"> Professional Growth </a>
          </li>
        </ul>
      </li>
  
      <hr style="width:100%; margin-left:0; margin-top:0; margin-bottom:0; background: white;">
  
      <li id="retaining_link">
        <a id="retaining" href="#retainingSubmenu" data-toggle="collapse" aria-expanded="false"
          class="dropdown-toggle">Retaining </a>
        <ul class="collapse list-unstyled ${expand_retaining_dropdown}" id="retainingSubmenu">
          <li>
            <a id="EngagingAndSupportingStaff" class="sidebar-link" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Engaging&SupportingStaff.aspx#"> Engaging & Supporting Staff </a>
          </li>
          <li>
            <a id="ManagingStaffTransitions" class="sidebar-link" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/ManagingStaffTransitions.aspx#"> Managing Staff Transitions </a>
          </li>
        </ul>
      </li>
  
      <hr style="width:100%; margin-left:0; margin-top:0; margin-bottom:0; background: white;">
  
      <li id="AdditionalServices_link"> 
          <a id="AdditionalServices" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/StaffBenefits.aspx#">Staff Benefits</a>
      </li>
  
      <hr style="width:100%; margin-left:0; margin-top:0; margin-bottom:0; background: white;">
  
      <li id="ResumeBank_link"> 
          <a id="ResumeBank" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/ResumeBank.aspx">House Resume Bank</a>
      </li>
  
      <hr style="width:100%; margin-left:0; margin-top:0; margin-bottom:0; background: white;">

      <!--  
      <li id="NewMemberResources_link"> 
        <a id="NewMemberResources" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/NewMemberResources.aspx">New Member Resources</a>
      </li>
      -->

      <li id="intern-resources_link">
        <a id="intern-resources" href="#intern-resourcesSubmenu" data-toggle="collapse" aria-expanded="false"
          class="dropdown-toggle">Intern Resources </a>
        <ul class="collapse list-unstyled ${expand_intern_resources_dropdown}" id="intern-resourcesSubmenu">
          <li>
            <a id="Intern-Coordinators" class="sidebar-link" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Intern%20Resources%20for%20Intern%20Coordinators.aspx#"> For Intern Coordinators </a>
          </li>
          <li>
            <a id="For-Interns" class="sidebar-link" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Intern%20Resources%20for%20Interns.aspx#"> For Interns </a>
          </li>
        </ul>
      </li>
  
    </ul>
  
  </nav>
      `;

  var _fullURL = window.location.href;

  if (!_fullURL.includes('Home.aspx')) {

    document.getElementById('leftNavigation').innerHTML = htmlLeftNavigation;
  } else {
  }


  // Logic to check the page and set a variable to expand leftNav dropdown accordingly - START - END

}



//To search from 'Search' page
function searchResource() {

  // Hide SearchDataTable when the page loads
  $('#SearchDataTable').hide();

  // spinner to appear when the page loads
  $('#spinner').show();

  //Search for the document - START
  var _searchKey = document.getElementById("SearchKey").value;

  var _fullURL = window.location.href;

  //Check the page is 'Search' page
  if (_fullURL.includes('Search.aspx')) {


    // setTimeOut function to delay execution to allow for spinner
    setTimeout(function () {

      //spinner to hide after delay set in mili-seconds
      $('#spinner').hide();

      //set SearchCounter to zero
      var SearchReturnCounter = 0;

      getListItems()
        .then(function (response) {

          //to display 'response'
          //console.log('Data coming from sharePoint is ', response);

          var items = response.d.results; //items 

          //console.log('SampleData Items are ', items);

          mySearchHtml = `<table class="table table-hover">
                                <thead>
                                  <tr>
                                    <th scope="col">  </th>
                                  </tr>
                                </thead>
                                <tbody>`;

          for (var index in items) {

            var item = items[index];

            var _title = item.Title;

            //console.log('Resource Ready : ', item.Resource_Ready);

            //change both document title and search key into lower case.
            _title = _title.toLowerCase();
            _searchKeyLowerCase = _searchKey.toLowerCase();

            if (_title.includes(_searchKeyLowerCase) || item.Tag_01.includes(_searchKeyLowerCase) || item.Tag_02.includes(_searchKeyLowerCase) || item.Tag_03.includes(_searchKeyLowerCase)
              || item.Tag_04.includes(_searchKeyLowerCase) || item.Tag_05.includes(_searchKeyLowerCase) || item.Tag_06.includes(_searchKeyLowerCase)
              || item.Tag_07.includes(_searchKeyLowerCase) || item.Tag_08.includes(_searchKeyLowerCase) || item.Tag_09.includes(_searchKeyLowerCase)
              || item.Tag_10.includes(_searchKeyLowerCase) || item.Tag_11.includes(_searchKeyLowerCase) || item.Tag_12.includes(_searchKeyLowerCase)
              || item.Tag_13.includes(_searchKeyLowerCase) || item.Tag_14.includes(_searchKeyLowerCase) || item.Tag_15.includes(_searchKeyLowerCase)) {

              var _ResourceURL = item.ResourceURL


              ResourceTitle = item.Title.replace(/&/g, "and");

              // check the resource is ready, if not avoid inserting resource url, instead insert 'coming soon!' after resource title
              if (item.Resource_Ready === "Yes") {
                //create row for SearchDataTable with clickable link to access the resource
                mySearchHtml += `
                                <tr>                            
                                  <td style="text-align:left;"><a class="document" href="${_ResourceURL}" target="_blank" onclick="downloadResource('${ResourceTitle}')" >${item.Title}</a></td>                      
                                </tr>
                                            `;
              } else {
                //create row for SearchDataTable with non-clickable link, since the resource is not ready yet
                mySearchHtml += `
                                <tr>                            
                                  <td style="text-align:left;"><a class="document" href="javascript: void(0)">${item.Title} - <span style="font-weight:bold; color:black;">coming soon!</span></a></td>                      
                                </tr>
                                            `;
              }



              // increment SearchReturnCounter by one.
              SearchReturnCounter = SearchReturnCounter + 1;

            }

          }// end of loop 

          // console.log("SearchReturnCounter : ", SearchReturnCounter);

          // Check either there is no item retrived, or no search key entered on search window

          if (SearchReturnCounter === 0 || _searchKey == "") {

            console.log("Not even one record gets returned1");

            // message when no record gets returned
            mySearchHtml = `No records found for <b>"`;
            mySearchHtml = mySearchHtml + _searchKey;
            mySearchHtml = mySearchHtml + `"</b>, please try another term to search`;

            //to capure search key used for data analysis 

            if(_searchKey == ""){

              tagSearches("Blank", 0);

            }
            
            tagSearches(_searchKey, 0);

          } else {

            //console.log("At least one record gets returned");

            mySearchHtml += `</tbody>
                              </table>`;

            // mySearchHtml = `  Total of <b>` + SearchReturnCounter + `</b> document/s found for <b>"` + _searchKey + `"</b>.<br>` + mySearchHtml;
            mySearchHtml = SearchReturnCounter + `</b> result(s) found for <b>"` + _searchKey + `"</b>.<br>` + mySearchHtml;

            //function call to collect data for HR HUB Analytics
            tagSearches(_searchKey, SearchReturnCounter);

          }

          $('#SearchDataTable').html(mySearchHtml);
          $('#SearchDataTable').show();


          //end of success area

        },
          function (error) {
            console.error('Ooops error occured during ajax call', error);
            //end of error area
          });

    }, 2000);
    //Search for the document - END


  } else {
    // Open Search page and load the returned documents
    var _urlSearchPage = "https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Search.aspx?SearchCriteria=" + _searchKey;
    window.open(_urlSearchPage);
  }


}



// Left navbar - function - START
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.sidebar .nav-link').forEach(function (element) {

    element.addEventListener('click', function (e) {

      let nextEl = element.nextElementSibling;
      let parentEl = element.parentElement;

      if (nextEl) {
        e.preventDefault();
        let mycollapse = new bootstrap.Collapse(nextEl);

        if (nextEl.classList.contains('show')) {
          mycollapse.hide();
        } else {
          mycollapse.show();
          // find other submenus with class=show
          var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
          // if it exists, then close all of them
          if (opened_submenu) {
            new bootstrap.Collapse(opened_submenu);
          }
        }
      }
    }); // addEventListener
  }) // forEach
});
// Left navbar - function - END



// Get items from 'HR-HUB-Resources' list
function getListItems() {
  var siteUrl = _spPageContextInfo.webAbsoluteUrl;

  var apiUrl = siteUrl + "/_api/web/lists/getbytitle('HR-HUB-Resources')/items?$select=Title,ResourceURL,Tag_01,Tag_02,Tag_03,Tag_04,Tag_05,Tag_06,Tag_07,Tag_08,Tag_09,Tag_10,Tag_11,Tag_12,Tag_13,Tag_14,Tag_15,Resource_Ready&$orderby=Title&$top=1000";


  return $.ajax({
    url: apiUrl,
    method: 'GET',
    headers: { "Accept": "application/json; odata=verbose" }
  });

}



// Search from the rest of the pages other than 'Search' page
function searchResourceWithSearchKey(SearchCriteria) {

  //console.log("Inside searchResourceWithSearchKey function");

  var SearchReturnCounter = 0;

  getListItems()
    .then(function (response) {
      //success area  inputVal

      // console.log('Data coming from sharePoint is ', response);

      var items = response.d.results; //items 

      // console.log('SampleData Items are ', items);

      mySearchHtml = `<table class="table table-hover">
        <thead>
          <tr>
   
              <th scope="col">  </th>
          </tr>
        </thead>
        <tbody>`;



      for (var index in items) {

        var item = items[index];

        var _title = item.Title;

        _title = _title.toLowerCase();
        _SearchCriteriaLowerCase = SearchCriteria.toLowerCase();

        if (_title.includes(_SearchCriteriaLowerCase) || item.Tag_01.includes(_SearchCriteriaLowerCase) || item.Tag_02.includes(_SearchCriteriaLowerCase) || item.Tag_03.includes(_SearchCriteriaLowerCase)
          || item.Tag_04.includes(_SearchCriteriaLowerCase) || item.Tag_05.includes(_SearchCriteriaLowerCase) || item.Tag_06.includes(_SearchCriteriaLowerCase)
          || item.Tag_07.includes(_SearchCriteriaLowerCase) || item.Tag_08.includes(_SearchCriteriaLowerCase) || item.Tag_09.includes(_SearchCriteriaLowerCase)
          || item.Tag_10.includes(_SearchCriteriaLowerCase) || item.Tag_11.includes(_SearchCriteriaLowerCase) || item.Tag_12.includes(_SearchCriteriaLowerCase)
          || item.Tag_13.includes(_SearchCriteriaLowerCase) || item.Tag_14.includes(_SearchCriteriaLowerCase) || item.Tag_15.includes(_SearchCriteriaLowerCase)) {

          var _ResourceURL = item.ResourceURL


          // check the resource is ready, if not avoid inserting resource url, instead insert 'coming soon!' after resource title
          if (item.Resource_Ready === "Yes") {
            //create row for SearchDataTable with clickable link to access the resource
            mySearchHtml += `
                              <tr>                            
                                <td style="text-align:left;"><a class="document" href="${_ResourceURL}" target="_blank">${item.Title}</a></td>                      
                              </tr>
                                          `;
          } else {
            //create row for SearchDataTable with non-clickable link, since the resource is not ready yet
            mySearchHtml += `
                              <tr>                            
                                <td style="text-align:left;"><a class="document" href="javascript: void(0)">${item.Title} - <span style="font-weight:bold; color:black;">coming soon!</span></a></td>                      
                              </tr>
                                          `;
          }


          SearchReturnCounter = SearchReturnCounter + 1;
        }

      }// end of loop 



      // console.log("SearchReturnCounter : ",SearchReturnCounter);


      if (SearchReturnCounter === 0 || _SearchCriteria == "") {

        //console.log("Not even one record gets returned");

        // message when no record gets returned
        mySearchHtml = `No records found for <b>"`;
        mySearchHtml = mySearchHtml + _SearchCriteria;
        mySearchHtml = mySearchHtml + `"</b>, please try another term to search`;

        //function call to collect data for HR HUB Analytics
        if(_SearchCriteria == ""){

          tagSearches("Blank", 0);

        }

        tagSearches(_SearchCriteria, 0);



      } else {

        //console.log("At least one record gets returned");

        mySearchHtml += `</tbody>
          </table>`;

        // mySearchHtml = `  Total of <b>` + SearchReturnCounter + `</b> document/s found for <b>"` + _SearchCriteria + `"</b>.<br>` + mySearchHtml;
        mySearchHtml = SearchReturnCounter + `</b> result(s) found for <b>"` + _SearchCriteria + `"</b>.<br>` + mySearchHtml;


        //function call to collect data for HR HUB Analytics
        tagSearches(_SearchCriteria, SearchReturnCounter);

      }

      $('#SearchDataTable').html(mySearchHtml);




      //end of success area
    },
      function (error) {
        console.error('Ooops error occured during ajax call', error);
        //end of error area
      });


}




// A function that listens for enter key on search box and run the search accordingly
function checkEnter() {
  $("#SearchKey").on('keyup', function (event) {

    var _fullURL = window.location.href;

    if (event.keyCode === 13) {

      //console.log("Enter key pressed!!!!!");

      // Confirm search done from pages other than 'Search.aspx'
      if (!_fullURL.includes('Search.aspx')) {

        var _searchKey = document.getElementById("SearchKey").value;
        var _urlSearchPage = "https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Search.aspx?SearchCriteria=" + _searchKey;
        window.open(_urlSearchPage);

      } else {

        // Function call to do a search from 'Search.aspx'
        searchResource();

      }


    }
  });
}



function loadPositionModals() {
  var siteurl = _spPageContextInfo.webAbsoluteUrl;
  oDataCareerPathPosition = siteurl + "/_api/web/lists/getbytitle('Career-Path-Position')/items?$select=Job_Title,Similar_Job_Titles,Job_Summary,Top_Skill_1/Skill_Name,Top_Skill_1_Rating,Top_Skill_2/Skill_Name,Top_Skill_2_Rating,Top_Skill_3/Skill_Name,Top_Skill_3_Rating,Top_Skill_4/Skill_Name,Top_Skill_4_Rating,Top_Skill_5/Skill_Name,Top_Skill_5_Rating,URL_PositionDescription,URL_Job_Posting,Top_Skill_2_Definition,Top_Skill_1_Definition,Top_Skill_3_Definition,Top_Skill_4_Definition,Top_Skill_5_Definition,Position_Div_ID,Coach_101_Link,Coach_101_Link_Title,Top_Skill_1_Playlist_Link,Top_Skill_2_Playlist_Link,Top_Skill_3_Playlist_Link,Top_Skill_4_Playlist_Link,Top_Skill_5_Playlist_Link&$expand=Top_Skill_1&$expand=Top_Skill_2&$expand=Top_Skill_3&$expand=Top_Skill_4&$expand=Top_Skill_5";

  //console.log(": ", oDataCareerPathPosition);

  $.ajax({

    url: oDataCareerPathPosition,
    method: "GET",
    headers: { "Accept": "application/json; odata=verbose" },

    success: function (data) {

      var items = data.d.results;

      items.forEach(function (item, index) {

        //Cleaning Position Name - START
        var _position = item.Job_Title;

        // Count number of times space character in '_position';
        var CountCharacter = (_position.split(" ").length - 1);

        // Remove space character/s from '_position' to be used as part of modal ID ;                
        for (i = 0; i < CountCharacter; i++) {
          var _position = _position.replace(" ", "");
        }

        // Count number of times '/' charcter in '_position';
        var CountCharacter = (_position.split("/").length - 1);

        // Remove '/' character/s from '_position' to be used as part of modal ID ;                
        for (i = 0; i < CountCharacter; i++) {
          var _position = _position.replace("/", "");
        }

        //console.log("Position AFTER FOR LOOP", position);
        //Cleaning Position Name - END

        var _Job_Title = item.Job_Title;
        var _Similar_Job_Titles = item.Similar_Job_Titles;
        var _Job_Summary = item.Job_Summary;
        var _URL_PositionDescription = item.URL_PositionDescription;
        var _Position_Div_ID = item.Position_Div_ID;
        var _Coach_101_Link = item.Coach_101_Link;
        var _Coach_101_Link_Title = item.Coach_101_Link_Title;
        var _URL_Job_Posting = item.URL_Job_Posting;


        var _Top_Skill_1 = item.Top_Skill_1.Skill_Name;
        var _Top_Skill_1_Rating = item.Top_Skill_1_Rating;
        var _Top_Skill_1_Definition = item.Top_Skill_1_Definition;

        var _Top_Skill_2 = item.Top_Skill_2.Skill_Name;
        var _Top_Skill_2_Rating = item.Top_Skill_2_Rating;
        var _Top_Skill_2_Definition = item.Top_Skill_2_Definition;

        var _Top_Skill_3 = item.Top_Skill_3.Skill_Name;
        var _Top_Skill_3_Rating = item.Top_Skill_3_Rating;
        var _Top_Skill_3_Definition = item.Top_Skill_3_Definition;

        var _Top_Skill_4 = item.Top_Skill_4.Skill_Name;
        var _Top_Skill_4_Rating = item.Top_Skill_4_Rating;
        var _Top_Skill_4_Definition = item.Top_Skill_4_Definition;

        var _Top_Skill_5 = item.Top_Skill_5.Skill_Name;
        var _Top_Skill_5_Rating = item.Top_Skill_5_Rating;
        var _Top_Skill_5_Definition = item.Top_Skill_5_Definition;


        var _Top_Skill_1_Playlist_Link = item.Top_Skill_1_Playlist_Link;
        var _Top_Skill_2_Playlist_Link = item.Top_Skill_2_Playlist_Link;
        var _Top_Skill_3_Playlist_Link = item.Top_Skill_3_Playlist_Link;
        var _Top_Skill_4_Playlist_Link = item.Top_Skill_4_Playlist_Link;
        var _Top_Skill_5_Playlist_Link = item.Top_Skill_5_Playlist_Link;




        var path = window.location.pathname;

        // To insert 'District' before 'Intern' and 'Staff Assistant' positions only on District page
        if ((path.includes("TestPage_09") || path.includes("District")) && (_Job_Title == "Intern" || _Job_Title == "Staff Assistant")) {
          Init = " (District)";
          //console.log("Init: ", Init);
        } else {
          Init = "";
        }

        if ((path.includes("TestPage_09") || path.includes("District")) && (_Job_Title == "Staff Assistant")) {
          _Similar_Job_Titles = "N/A";
        }

        var htmlPositionmodal = `<div class="modal fade" id="${_position}ModalNew" tabindex="-1" aria-labelledby="${_position}ModalLabel" aria-hidden="true"
              data-bs-backdrop="static">
              <div class="modal-dialog modal-lg">        
                  <div class="modal-content">        
                      <div id="${_position}-header">
                          <div class="modal-header">
                              <h3 class="modal-title" id="${_position}ModalLabel" style="margin-left:2.2rem; color:black;">${_Job_Title}${Init}</h3>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                      </div>        
                      <div id="${_position}-modal-body">
                          <div class="modal-body">
                              <div style="text-align:left; width:90%;  margin-left:auto; margin-right:auto;">    
                                  <p style="color:black; font-size:1.25em;"><b>Similar Job Title(s):</b> ${_Similar_Job_Titles}</p>
                                  <p style="color:black; font-size:1.1em; text-align:justify;"><b>Job Summary:</b> ${_Job_Summary}</p>`;

        if (_Coach_101_Link != "N/A") {

          htmlPositionmodal = htmlPositionmodal + `<p style="color:black; color:black; font-size:1.1em;">For additional information on the position: <a class="links" href="${_Coach_101_Link}?web=1" onclick="downloadResource('${_Coach_101_Link_Title}');" target="_blank">${_Coach_101_Link_Title}</a>.</p>`;

        }

        htmlPositionmodal = htmlPositionmodal +

          `<p style="color:black; font-size:1.25em;"><b>Featured Skills:</b></p>
                                  <p style="color:black; font-size:1.1em;">These are the anticipated featured skills and skill levels for this position.</p>    
                              </div>    
                          </div>
                      </div>        
                      <div id="${_position}-featured-skills">
                          <div class="featured-skills" style="margin-bottom:1rem;">
                              <div class="accordion" id="accordion${_position}FeaturedSkills">
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="panelsStayOpen-${_position}FeaturedSkillsOne">
                                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                              data-bs-target="#panelsStayOpen-collapseOne-${_position}" aria-expanded="false"
                                              aria-controls="panelsStayOpen-collapseOne-${_position}">
                                              <div class="row" style="width:110%;">
                                                  <div class="col"><b>${_Top_Skill_1}:</b>
                                                  </div>
                                                  <div class="col" style="text-align:right;">`;

        for (let i = 0; i < _Top_Skill_1_Rating; i++) {
          htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Capitol-Icon-Black.png"> `;
        }

        var Skill_Rating_Gap = 5 - _Top_Skill_1_Rating;

        for (let i = 0; i < Skill_Rating_Gap; i++) {
          htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Capitol-Icon-Gray.png"> `;
        }

        htmlPositionmodal = htmlPositionmodal + `                                                                
                                                </div>
                                              </div>
                                          </button>
                                      </h2>
                                      <div id="panelsStayOpen-collapseOne-${_position}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-${_position}FeaturedSkillsOne">
                                          <div class="accordion-body">
                                              <p style="color:black;">${_Top_Skill_1_Definition}</P>
                                              <p style="color:black;"><a class="links" href="${_Top_Skill_1_Playlist_Link}" target="_blank">Featured Training for ${_Top_Skill_1}</a>.</p>
                                          </div>
                                      </div>
                                  </div>

                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="panelsStayOpen-${_position}FeaturedSkillsTwo">
                                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                              data-bs-target="#panelsStayOpen-collapseTwo-${_position}" aria-expanded="false"
                                              aria-controls="panelsStayOpen-collapseTwo-${_position}">
                                              <div class="row" style="width:110%;">
                                                  <div class="col">
                                                      <b>${_Top_Skill_2}:</b>
                                                  </div>
                                                  <div class="col" style="text-align:right;">`;

        for (let i = 0; i < _Top_Skill_2_Rating; i++) {

          htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                                                                                  src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Capitol-Icon-Black.png"> `;
        }

        var Skill_Rating_Gap = 5 - _Top_Skill_2_Rating;

        for (let i = 0; i < Skill_Rating_Gap; i++) {

          htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                                                                                  src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Capitol-Icon-Gray.png"> `;
        }

        htmlPositionmodal = htmlPositionmodal + `                                                                
                                                  </div>
                                              </div>
                                          </button>
                                      </h2>
                                      <div id="panelsStayOpen-collapseTwo-${_position}" class="accordion-collapse collapse"
                                          aria-labelledby="panelsStayOpen-${_position}FeaturedSkillsTwo">
                                          <div class="accordion-body">
                                              <p style="color:black;">${_Top_Skill_2_Definition}</p>
                                              <p style="color:black;"><a class="links" href="${_Top_Skill_2_Playlist_Link}" target="_blank">Featured Training for ${_Top_Skill_2}</a>.</p>
                                          </div>
                                      </div>
                                  </div>
          
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="panelsStayOpen-${_position}FeaturedSkillsThree">
                                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                              data-bs-target="#panelsStayOpen-collapseThree-${_position}" aria-expanded="false"
                                              aria-controls="panelsStayOpen-collapseThree-${_position}">
                                              <div class="row" style="width:110%;">
                                                  <div class="col">
                                                      <b>${_Top_Skill_3}:</b>
                                                  </div>
                                                  <div class="col" style="text-align:right;">`;

        for (let i = 0; i < _Top_Skill_3_Rating; i++) {

          htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                                                                                  src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Capitol-Icon-Black.png"> `;
        }

        var Skill_Rating_Gap = 5 - _Top_Skill_3_Rating;

        for (let i = 0; i < Skill_Rating_Gap; i++) {

          htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                                                                                  src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Capitol-Icon-Gray.png"> `;
        }

        htmlPositionmodal = htmlPositionmodal + `                                                                
                                                  </div>
                                              </div>
                                          </button>
                                      </h2>
                                      <div id="panelsStayOpen-collapseThree-${_position}" class="accordion-collapse collapse"
                                          aria-labelledby="panelsStayOpen-${_position}FeaturedSkillsThree">
                                          <div class="accordion-body">
                                              <p style="color:black;">${_Top_Skill_3_Definition}</p>
                                              <p style="color:black;"><a class="links" href="${_Top_Skill_3_Playlist_Link}" target="_blank">Featured Training for ${_Top_Skill_3}</a>.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="panelsStayOpen-${_position}FeaturedSkillsFour">
                                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                              data-bs-target="#panelsStayOpen-collapseFour-${_position}" aria-expanded="false"
                                              aria-controls="panelsStayOpen-collapseFour-${_position}">
                                              <div class="row" style="width:110%;">
                                                  <div class="col">
                                                      <b>${_Top_Skill_4}:</b>
                                                  </div>
                                                  <div class="col" style="text-align:right;">`;

        for (let i = 0; i < _Top_Skill_4_Rating; i++) {

          htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                                                                                  src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Capitol-Icon-Black.png"> `;
        }

        var Skill_Rating_Gap = 5 - _Top_Skill_4_Rating;

        for (let i = 0; i < Skill_Rating_Gap; i++) {

          htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                                                                                  src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Capitol-Icon-Gray.png"> `;
        }

        htmlPositionmodal = htmlPositionmodal + `                                                                
                                                  </div>
                                              </div>
                                          </button>
                                      </h2>
                                      <div id="panelsStayOpen-collapseFour-${_position}" class="accordion-collapse collapse"
                                          aria-labelledby="panelsStayOpen-${_position}FeaturedSkillsFour">
                                          <div class="accordion-body">
                                              <p style="color:black;">${_Top_Skill_4_Definition}</p>
                                              <p style="color:black;"><a class="links" href="${_Top_Skill_4_Playlist_Link}" target="_blank">Featured Training for ${_Top_Skill_4}</a>.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="panelsStayOpen-${_position}FeaturedSkillsFive">
                                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                              data-bs-target="#panelsStayOpen-collapseFive-${_position}" aria-expanded="false"
                                              aria-controls="panelsStayOpen-collapseFive-${_position}">
                                              <div class="row" style="width:110%;">
                                                  <div class="col">
                                                      <b>${_Top_Skill_5}:</b>
                                                  </div>
          
                                                  <div class="col" style="text-align:right;">`;

        for (let i = 0; i < _Top_Skill_5_Rating; i++) {

          htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                                                                                  src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Capitol-Icon-Black.png"> `;
        }

        var Skill_Rating_Gap = 5 - _Top_Skill_5_Rating;

        for (let i = 0; i < Skill_Rating_Gap; i++) {

          htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                                                                                  src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Capitol-Icon-Gray.png"> `;
        }

        htmlPositionmodal = htmlPositionmodal + `                                                                
                                                  </div>
                                              </div>
                                          </button>
                                      </h2>
                                      <div id="panelsStayOpen-collapseFive-${_position}" class="accordion-collapse collapse"
                                          aria-labelledby="panelsStayOpen-${_position}FeaturedSkillsFive">
                                          <div class="accordion-body">
                                              <p style="color:black;">${_Top_Skill_5_Definition}</p>
                                              <p style="color:black;"><a class="links" href="${_Top_Skill_5_Playlist_Link}" target="_blank">Featured Training for ${_Top_Skill_5}</a>.</p>
                                          </div>
                                      </div>
                                  </div>            
                              </div>
                          </div>
                      </div>
                      <div style="margin-bottom:1rem;">
                      <img class="capitol-icon" src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/featured-skills-legend.png" style="width:71%;">
                      </div>        
                      <div id="${_position}-modal-footer">
                      
                          <div class="modal-footer">

                              <div class="col">
                                <a class="links" href="${_URL_PositionDescription}?web=1"
                                    onclick="downloadResource('${_Job_Title} - Position Description');" target="_blank"><button type="button" class="btn"
                                        style="background-color:brown; color:white; width:72%;color:white; text-decoration:none; font-size:.8rem; height:2.5rem; font-weight:bold;">
                                        Sample Position Description </button>
                                </a>
                              </div> 
                              
                              <div class="col">
                                <a class="links" href="${_URL_Job_Posting}"
                                    onclick="downloadResource('House Resume Bank Positions');" target="_blank"><button type="button" class="btn"
                                        style="background-color:brown; color:white; width:72%;color:white; text-decoration:none; font-size:.8rem; height:2.5rem; font-weight:bold;">
                                        Explore House Resume Bank Positions</button>
                                </a> 
                              </div> 
                          </div>

                      </div>        
                  </div>
              </div>
              </div>`;


        // insert 'htmlPositionmodal' to respective element id
        document.getElementById(_Position_Div_ID).innerHTML = htmlPositionmodal;


      });

    },
    error: function (data) {
      alert("Error: " + data);
    }
  });
}



function loadConnectionModals() {
  var path = window.location.pathname;
  var siteurl = _spPageContextInfo.webAbsoluteUrl;

  if ( path.includes("TestPage_07") || path.includes("Administrative")) {
    oDataCareerPathConnection = siteurl + "/_api/web/lists/getbytitle('Career-Path-Connection-Data')/items?$select=URL_Featured_Skills,div_Id,URL_Connection_Document,Track,Desired_Position_Skill_1,Desired_Position_Skill_1_Trainin,Desired_Position_Skill_2,Desired_Position_Skill_2_Trainin,Desired_Position_Skill_3,Desired_Position_Skill_3_Trainin,Desired_Position_Skill_4,Desired_Position_Skill_4_Trainin,Desired_Position_Skill_5,Desired_Position_Skill_5_Trainin,Desired_Pos_Job_Description_Link, Desired_Pos_Coach_101_Link,Des_Pos_Coach_101_Link_Title,Starting_Position/Job_Title,Desired_Position/Job_Title&$expand=Starting_Position&$expand=Desired_Position&$filter=Track eq 'Administrative'";
  } else if (path.includes("TestPage_08") || path.includes("TestPage_03") || path.includes("Communications")) {
    oDataCareerPathConnection = siteurl + "/_api/web/lists/getbytitle('Career-Path-Connection-Data')/items?$select=URL_Featured_Skills,div_Id,URL_Connection_Document,Track,Desired_Position_Skill_1,Desired_Position_Skill_1_Trainin,Desired_Position_Skill_2,Desired_Position_Skill_2_Trainin,Desired_Position_Skill_3,Desired_Position_Skill_3_Trainin,Desired_Position_Skill_4,Desired_Position_Skill_4_Trainin,Desired_Position_Skill_5,Desired_Position_Skill_5_Trainin,Desired_Pos_Job_Description_Link, Desired_Pos_Coach_101_Link,Des_Pos_Coach_101_Link_Title,Starting_Position/Job_Title,Desired_Position/Job_Title&$expand=Starting_Position&$expand=Desired_Position&$filter=Track eq 'Communications'";
  } else if (path.includes("TestPage_09") || path.includes("District")) {
    oDataCareerPathConnection = siteurl + "/_api/web/lists/getbytitle('Career-Path-Connection-Data')/items?$select=URL_Featured_Skills,Reverse_URL_Featured_Skills,div_Id,URL_Connection_Document,Reverse_URL_Connection_Document,Track,Desired_Position_Skill_1,Desired_Position_Skill_1_Trainin,Desired_Position_Skill_2,Desired_Position_Skill_2_Trainin,Desired_Position_Skill_3,Desired_Position_Skill_3_Trainin,Desired_Position_Skill_4,Desired_Position_Skill_4_Trainin,Desired_Position_Skill_5,Desired_Position_Skill_5_Trainin,Desired_Pos_Job_Description_Link, Desired_Pos_Coach_101_Link,Des_Pos_Coach_101_Link_Title,Rev_Des_Pos_Skill_1,Rev_Des_Pos_Skill_1_Train_Link,Rev_Des_Pos_Skill_2,Rev_Des_Pos_Skill_2_Train_Link,Rev_Des_Pos_Skill_3,Rev_Des_Pos_Skill_3_Train_Link,Rev_Des_Pos_Skill_4,Rev_Des_Pos_Skill_4_Train_Link,Rev_Des_Pos_Skill_5,Rev_Des_Pos_Skill_4_Train_Link,Rev_Des_Pos_Skill_5_Train_Link,Rev_Des_Pos_Job_Desc_Link, Rev_Des_Pos_Coach_101_Link,Rev_Des_Pos_Coach_101_Link_Title,Starting_Position/Job_Title,Desired_Position/Job_Title&$expand=Starting_Position&$expand=Desired_Position&$filter=Track eq 'District'";
  } else if (path.includes("TestPage_10") || path.includes("Legislative")) {
    oDataCareerPathConnection = siteurl + "/_api/web/lists/getbytitle('Career-Path-Connection-Data')/items?$select=URL_Featured_Skills,div_Id,URL_Connection_Document,Track,Desired_Position_Skill_1,Desired_Position_Skill_1_Trainin,Desired_Position_Skill_2,Desired_Position_Skill_2_Trainin,Desired_Position_Skill_3,Desired_Position_Skill_3_Trainin,Desired_Position_Skill_4,Desired_Position_Skill_4_Trainin,Desired_Position_Skill_5,Desired_Position_Skill_5_Trainin,Desired_Pos_Job_Description_Link, Desired_Pos_Coach_101_Link,Des_Pos_Coach_101_Link_Title,Starting_Position/Job_Title,Desired_Position/Job_Title&$expand=Starting_Position&$expand=Desired_Position&$filter=Track eq 'Legislative'";
  }

  $.ajax({

    url: oDataCareerPathConnection,
    method: "GET",
    headers: { "Accept": "application/json; odata=verbose" },

    success: function (data) {

      //console.log("Sucess : Retured results :",results);

      var items = data.d.results;

      //console.log("items :",items);

      items.forEach(function (item, index) {

        var _Position_1 = item.Starting_Position.Job_Title.replace(" ", "");
        var _Position_1 = _Position_1.replace(" ", "");
        var _Position_1 = _Position_1.replace(" ", "");
        var _Position_1 = _Position_1.replace("/", "");

        var _Position_2 = item.Desired_Position.Job_Title.replace(" ", "");
        var _Position_2 = _Position_2.replace(" ", "");
        var _Position_2 = _Position_2.replace(" ", "");
        var _Position_2 = _Position_2.replace("/", "");

        var _URL_Featured_Skills = item.URL_Featured_Skills;
        var _div_Id = item.div_Id;
        var _URL_Connection_Document = item.URL_Connection_Document;
        var _Desired_Pos_Job_Description_Link = item.Desired_Pos_Job_Description_Link;
        var _Desired_Pos_Coach_101_Link = item.Desired_Pos_Coach_101_Link;
        var _Des_Pos_Coach_101_Link_Title = item.Des_Pos_Coach_101_Link_Title;

        var _Desired_Position_Skill_1 = item.Desired_Position_Skill_1;
        var _Desired_Position_Skill_1_Training_Link = item.Desired_Position_Skill_1_Trainin;
        var _Desired_Position_Skill_2 = item.Desired_Position_Skill_2;
        var _Desired_Position_Skill_2_Training_Link = item.Desired_Position_Skill_2_Trainin;
        var _Desired_Position_Skill_3 = item.Desired_Position_Skill_3;
        var _Desired_Position_Skill_3_Training_Link = item.Desired_Position_Skill_3_Trainin;
        var _Desired_Position_Skill_4 = item.Desired_Position_Skill_4;
        var _Desired_Position_Skill_4_Training_Link = item.Desired_Position_Skill_4_Trainin;
        var _Desired_Position_Skill_5 = item.Desired_Position_Skill_5;
        var _Desired_Position_Skill_5_Training_Link = item.Desired_Position_Skill_5_Trainin;


        var _Rev_Des_Pos_Skill_1 = item.Rev_Des_Pos_Skill_1;
        var _Rev_Des_Pos_Skill_1_Train_Link = item.Rev_Des_Pos_Skill_1_Train_Link;
        var _Rev_Des_Pos_Skill_2 = item.Rev_Des_Pos_Skill_2;
        var _Rev_Des_Pos_Skill_2_Train_Link = item.Rev_Des_Pos_Skill_2_Train_Link;
        var _Rev_Des_Pos_Skill_3 = item.Rev_Des_Pos_Skill_3;
        var _Rev_Des_Pos_Skill_3_Train_Link = item.Rev_Des_Pos_Skill_3_Train_Link;
        var _Rev_Des_Pos_Skill_4 = item.Rev_Des_Pos_Skill_4;
        var _Rev_Des_Pos_Skill_4_Train_Link = item.Rev_Des_Pos_Skill_4_Train_Link;
        var _Rev_Des_Pos_Skill_5 = item.Rev_Des_Pos_Skill_5;
        var _Rev_Des_Pos_Skill_5_Train_Link = item.Rev_Des_Pos_Skill_5_Train_Link;
        var _Rev_Des_Pos_Job_Desc_Link = item.Rev_Des_Pos_Job_Desc_Link;
        var _Rev_Des_Pos_Coach_101_Link = item.Rev_Des_Pos_Coach_101_Link;
        var _Rev_Des_Pos_Coach_101_Link_Title = item.Rev_Des_Pos_Coach_101_Link_Title;

        var htmlCareerPathConnectionModal = ``;

        if ((item.Starting_Position.Job_Title == "Caseworker") && (item.Desired_Position.Job_Title == "Field Representative")) {

          var _Reverse_URL_Featured_Skills = item.Reverse_URL_Featured_Skills;
          var _div_Id = item.div_Id;
          var _Reverse_URL_Connection_Document = item.Reverse_URL_Connection_Document;

          htmlCareerPathConnectionModal = `
                                  <div class="modal fade" id="${_Position_1}-to-${_Position_2}ModalNew" tabindex="-1"
                                      aria-labelledby="${_Position_1}-to-F${_Position_2}ModalNewLabel" aria-hidden="true">
                                      <div class="modal-dialog modal-lg">
                                          <div class="modal-content" style="background:rgb(247, 245, 245);">
                                              <div class="modal-header" style="padding:16px 16px;">
                                                  <h5 class="modal-title" id="${_Position_1}-to-${_Position_2}ModalNewLabel"
                                                      style="margin-left: 3%; color:black; text-align:left;">Select a path below.</h5>
                                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                              </div>
                                              <div class="modal-body" style="padding:16px 0px;">
                                                  <div class="accordion accordion-flush" id="accordionFlush${_Position_1}${_Position_2}">

                                                      <div class="accordion-item">
                                                          <h2 class="accordion-header" id="flush-heading${_Position_1}${_Position_2}">
                                                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                  data-bs-target="#flush-collapse${_Position_1}${_Position_2}" aria-expanded="false"
                                                                  aria-controls="flush-collapse${_Position_1}${_Position_2}" onclick="careerPathUsageTracking('Caseworker to Field Representative','District','Connection')">
                                                                  <h4
                                                                      style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:95%;">
                                                                      ${item.Starting_Position.Job_Title} <img
                                                                      src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Arrow-Right.png"
                                                                      style="width:6%;height:125%;"> ${item.Desired_Position.Job_Title}</h4>
                                                              </button>
                                                          </h2>
                                                          <div id="flush-collapse${_Position_1}${_Position_2}" class="accordion-collapse collapse"
                                                              aria-labelledby="flush-heading${_Position_1}${_Position_2}"
                                                              data-bs-parent="#accordionFlush${_Position_1}${_Position_2}" style="padding-top:1rem;">
                                                              <h5
                                                                  style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%; font-size:1.25em;">
                                                                  Exploring Skill Levels</h5>
                                                              <p style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%;">The
                                                                  following chart compares the anticipated featured skills and skill levels for
                                                                  ${item.Starting_Position.Job_Title} versus ${item.Desired_Position.Job_Title}.</p>
                                                              <div class="center-item" style="padding:1rem 0rem;">
                                                                  <img src="${_URL_Featured_Skills}"
                                                                      style="width:60%;" alt="">
                                                              </div>
                                                              <h5
                                                                  style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%; font-size:1.25em;">
                                                                  Gap Closure Strategies</h5>

                                                              <p style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%;">The
                                                                  following are recommended strategies to help address potential gaps between your current
                                                                  position and the next position in the career path.</p>

                                                              <ul style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%;">

                                                                  <li style="text-align:left; color:black; margin-bottom:1rem;"> <b>Featured Skills Training:</b> Review available trainings on Congressional Staff Academy: <a class="links" href="${_Desired_Position_Skill_1_Training_Link}" target="_blank">${_Desired_Position_Skill_1}</a>, <a class="links" href="${_Desired_Position_Skill_2_Training_Link}" target="_blank">${_Desired_Position_Skill_2}</a>, <a class="links" href="${_Desired_Position_Skill_3_Training_Link}" target="_blank">${_Desired_Position_Skill_3}</a>, <a class="links" href="${_Desired_Position_Skill_4_Training_Link}" target="_blank">${_Desired_Position_Skill_4}</a>, and <a class="links" href="${_Desired_Position_Skill_5_Training_Link}" target="_blank">${_Desired_Position_Skill_5}</a>. </li>
                                                                  
                                                                  <li style="text-align:left; color:black;  margin-bottom:1rem;"><b>Supervisors & Employees:</b> Discuss opportunities for job shadowing, informational interviews, and stretch assignments. </li>

                                                                  <li style="text-align:left; color:black;  margin-bottom:1rem;"><b>Position Description & Coach 101 Series:</b> Become more familiar with the position by reviewing the <a class="links" href="${_Desired_Pos_Job_Description_Link}?web=1" onclick="downloadResource('${item.Desired_Position.Job_Title} - Position Description');" target="_blank">${item.Desired_Position.Job_Title} Position Description</a> and watching the <a class="links" href="${_Desired_Pos_Coach_101_Link}?web=1" onclick="downloadResource('${_Des_Pos_Coach_101_Link_Title}');" target="_blank">${_Des_Pos_Coach_101_Link_Title}</a>. </li>

                                                              </ul>

                                                              <div class="modal-footer">
                                                                  <a href="${_URL_Connection_Document}?web=1"
                                                                      onclick="downloadResource('${item.Starting_Position.Job_Title} TO ${item.Desired_Position.Job_Title} - Connection Document');" target="_blank"><button
                                                                          type="button" class="btn"
                                                                          style="background-color:brown; color:white; width:125%;color:white; text-decoration:none; font-size:1.2rem; font-weight:bold;">
                                                                          Find Out More </button>
                                                                  </a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="accordion-item">
                                                          <h2 class="accordion-header" id="flush-heading${_Position_2}${_Position_1}">
                                                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                  data-bs-target="#flush-collapse${_Position_2}${_Position_1}" aria-expanded="false"
                                                                  aria-controls="flush-collapse${_Position_2}${_Position_1}" onclick="careerPathUsageTracking('Field Representative to Caseworker','District','Connection')">
                                                                  <h4
                                                                      style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:95%;">
                                                                      ${item.Desired_Position.Job_Title} <img
                                                                      src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Arrow-Right.png"
                                                                      style="width:6%;height:125%;"> ${item.Starting_Position.Job_Title}</h4>
                                                              </button>
                                                          </h2>
                                                          <div id="flush-collapse${_Position_2}${_Position_1}" class="accordion-collapse collapse"
                                                              aria-labelledby="flush-heading${_Position_2}${_Position_1}"
                                                              data-bs-parent="#accordionFlush${_Position_1}${_Position_2}" style="padding-top:1rem;">

                                                              <h5
                                                                  style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%; font-size:1.25em;">
                                                                  Exploring Skill Levels</h5>
                                                              <p style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%;">The
                                                                  following chart compares the anticipated featured skills and skill levels for ${item.Desired_Position.Job_Title} versus ${item.Starting_Position.Job_Title}.</p>
                                                              <div class="center-item" style="padding:1rem 0rem;">
                                                                  <img src="${_Reverse_URL_Featured_Skills}"
                                                                      style="width:60%;" alt="">
                                                              </div>
                                                              <h5
                                                                  style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%; font-size:1.25em;">
                                                                  Gap Closure Strategies</h5>
                                                              <p style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%;">The
                                                                  following are recommended strategies to help address potential gaps between your current
                                                                  position and the next position in the career path.</p>

                                                                <ul style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%;">

                                                                  <li style="text-align:left; color:black; margin-bottom:1rem;"> <b>Featured Skills Training:</b> Review available trainings on Congressional Staff Academy: <a class="links" href="${_Rev_Des_Pos_Skill_1_Train_Link}" target="_blank">${_Rev_Des_Pos_Skill_1}</a>, <a class="links" href="${_Rev_Des_Pos_Skill_2_Train_Link}" target="_blank">${_Rev_Des_Pos_Skill_2}</a>, <a class="links" href="${_Rev_Des_Pos_Skill_3_Train_Link}" target="_blank">${_Rev_Des_Pos_Skill_3}</a>, <a class="links" href="${_Rev_Des_Pos_Skill_4_Train_Link}" target="_blank">${_Rev_Des_Pos_Skill_4}</a>, and <a class="links" href="${_Rev_Des_Pos_Skill_5_Train_Link}" target="_blank">${_Rev_Des_Pos_Skill_5}</a>. </li>
                                                                  
                                                                  <li style="text-align:left; color:black;  margin-bottom:1rem;"><b>Supervisors & Employees:</b> Discuss opportunities for job shadowing, informational interviews, and stretch assignments. </li>

                                                                  <li style="text-align:left; color:black;  margin-bottom:1rem;"><b>Position Description & Coach 101 Series:</b> Become more familiar with the position by reviewing the <a class="links" href="${_Rev_Des_Pos_Job_Desc_Link}?web=1" onclick="downloadResource('${item.Starting_Position.Job_Title} - Position Description');" target="_blank">${item.Starting_Position.Job_Title} Position Description</a> and watching the <a class="links" href="${_Rev_Des_Pos_Coach_101_Link}?web=1" onclick="downloadResource('${_Rev_Des_Pos_Coach_101_Link_Title}');" target="_blank">${_Rev_Des_Pos_Coach_101_Link_Title}</a>. </li>

                                                              </ul>
                                                              <div class="modal-footer">
                                                                  <a href="${_Reverse_URL_Connection_Document}?web=1"
                                                                      onclick="downloadResource('${item.Desired_Position.Job_Title} TO ${item.Starting_Position.Job_Title} - Connection Document');" target="_blank"><button
                                                                          type="button" class="btn"
                                                                          style="background-color:brown; color:white; width:125%;color:white; text-decoration:none; font-size:1.2rem; font-weight:bold;">
                                                                          Find Out More </button>
                                                                  </a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>`;

        } else {

          htmlCareerPathConnectionModal = `
                                  <div class="modal fade" id="${_Position_1}-to-${_Position_2}ModalNew" tabindex="-1" aria-labelledby="${_Position_1}-to-${_Position_2}ModalNewLabel" aria-hidden="true">
                                      <div class="modal-dialog modal-lg">
                                          <div class="modal-content" style="background:rgb(247, 245, 245);">
                                              <div class="modal-header">
                                                  <h4 class="modal-title" id="${_Position_1}-to-${_Position_2}ModalNewLabel" style="margin-left: 5%; color:black; text-align:left;">${item.Starting_Position.Job_Title} <img
                                                      src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Arrow-Right.png"
                                                      style="width:6%;height:125%;"> ${item.Desired_Position.Job_Title}</h4>
                                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                              </div>
                                              <div class="modal-body">
                                                  <h4 style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%;">Exploring Skill Levels</h4>
                                                  <p style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%;">The following chart compares the anticipated featured skills and skill levels for ${item.Starting_Position.Job_Title} versus ${item.Desired_Position.Job_Title}.</p>
                                                  <div class="center-item" style="padding:1rem 0rem;">        
                                                          <img src="${_URL_Featured_Skills}"
                                                              style="width:60%;" alt="">
                                                  </div>
                                                  <h4 style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%;">Gap Closure Strategies</h4>
                                                  <p style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%;">The following are recommended strategies to help address potential gaps between your current position and the next position in the career path.</p>
                                                  <ul style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%;">

                                                      <li style="text-align:left; color:black; margin-bottom:1rem;"> <b>Featured Skills Training:</b> Review available trainings on Congressional Staff Academy: <a class="links" href="${_Desired_Position_Skill_1_Training_Link}" target="_blank">${_Desired_Position_Skill_1}</a>, <a class="links" href="${_Desired_Position_Skill_2_Training_Link}" target="_blank">${_Desired_Position_Skill_2}</a>, <a class="links" href="${_Desired_Position_Skill_3_Training_Link}" target="_blank">${_Desired_Position_Skill_3}</a>, <a class="links" href="${_Desired_Position_Skill_4_Training_Link}" target="_blank">${_Desired_Position_Skill_4}</a>, and <a class="links" href="${_Desired_Position_Skill_5_Training_Link}" target="_blank">${_Desired_Position_Skill_5}</a>. </li>
                                                  
                                                      <li style="text-align:left; color:black;  margin-bottom:1rem;"><b>Supervisors & Employees:</b> Discuss opportunities for job shadowing, informational interviews, and stretch assignments. </li>

                                                      <li style="text-align:left; color:black;  margin-bottom:1rem;"><b>Position Description`;

          if (_Desired_Pos_Coach_101_Link != "N/A") {

            htmlCareerPathConnectionModal = htmlCareerPathConnectionModal + ` & Coach 101 Series`;

          }

          htmlCareerPathConnectionModal = htmlCareerPathConnectionModal + `:</b> Become more familiar with the position by reviewing the <a class="links" href="${_Desired_Pos_Job_Description_Link}?web=1" onclick="downloadResource('${item.Desired_Position.Job_Title} - Position Description');" target="_blank">${item.Desired_Position.Job_Title} Position Description</a>`;

          if (_Desired_Pos_Coach_101_Link != "N/A") {

            htmlCareerPathConnectionModal = htmlCareerPathConnectionModal + ` and watching the <a class="links" href="${_Desired_Pos_Coach_101_Link}?web=1" onclick="downloadResource('${_Des_Pos_Coach_101_Link_Title}');" target="_blank">${_Des_Pos_Coach_101_Link_Title}</a>`;

          }

          htmlCareerPathConnectionModal = htmlCareerPathConnectionModal + `. </li>

                                                  </ul>
                                                  <div class="modal-footer">
                                                      <a  href="${_URL_Connection_Document}?web=1" onclick="downloadResource('${item.Starting_Position.Job_Title} TO ${item.Desired_Position.Job_Title} - Connection Document');" target="_blank"><button type="button" class="btn" style="background-color:brown; color:white; width:125%;color:white; text-decoration:none; font-size:1.2rem; font-weight:bold;">
                                                          Find Out More </button>
                                                          </a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>`;

        };

        //console.log("htmlCareerPathConnectionModal: ",htmlCareerPathConnectionModal);

        document.getElementById(_div_Id).innerHTML = htmlCareerPathConnectionModal;

      });


    },
    error: function (data) {

      console.log("Error : Ajax failed ");
      alert("Error: " + data);
    }
  });
}



function ComparePositions() {


  document.getElementById("spinner").style.display = "block";
  document.getElementById("FullComparingPositions").style.display = "none";

  setTimeout(() => {

    document.getElementById("alertMessage").style.display = "none";

    var StartingPositionValue = $("#Starting_Position option:selected").text();
    var DesiredPositionValue = $("#Desired_Position option:selected").text();

    if (DesiredPositionValue == "Select desired position") {

      document.getElementById("alertMessage").style.display = "block";
      document.getElementById("spinner").style.display = "none";

    } else {

      var oDataCompareTwoPositions = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Career-Path-Connection-Data')/items?$select=URL_Full_Comparing_Positions,Starting_Position/Job_Title,Desired_Position/Job_Title&$expand=Starting_Position&$expand=Desired_Position&$filter=Starting_Position/Job_Title eq '" + StartingPositionValue + "' and Desired_Position/Job_Title eq '" + DesiredPositionValue + "'&$top=1";

      $.ajax({

        url: oDataCompareTwoPositions,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
          //console.log("Sucess : Retured results :",results);
          var items = data.d.results;
          var URL_Full_Comparing_Positions_Value = data.d.results[0].URL_Full_Comparing_Positions;
          var htmlFullComparingPositions = `
                                                     <div class="center-item">    
                                                          <img src="${URL_Full_Comparing_Positions_Value}" alt="">                                                                
                                                      </div>

                                                      <div style = "margin-top: 3rem; margin-bottom: 0rem; margin-left: 0rem; margin-right: 0rem;">
                                                          <p style="color:black; font-style:italic; font-size:1.25rem;">Note: Specialized skills may not apply to all positions.</p>
                                                      </div>
                                                  `;
          //console.log("htmlFullComparingPositions : ", htmlFullComparingPositions);
          document.getElementById("spinner").style.display = "none";
          document.getElementById("FullComparingPositions").innerHTML = htmlFullComparingPositions;
          document.getElementById("FullComparingPositions").style.display = "block";

        },
        error: function (data) {
          console.log("Error : Ajax failed ");
          alert("Error: " + data);
        }
      });
    }
  }, 2000); //set the delay to 3000 miliseconds

}



function change_Starting_Position() {

  var Starting_Position_Text = $("#Starting_Position option:selected").text();
  var CompareTwoPositions = $.grep(Compare_Two_Positions, function (element) {
    return element.Starting_Position.Job_Title == Starting_Position_Text;
  })

  console.log("CompareTwoPositions: ", CompareTwoPositions);

  $('#Desired_Position').empty().append('<option value="0">Select desired position</option>');

  //Initialize array to capture and sort desired position on dropdown
  let _Job_Title_Array = [];

  for (var i = 0; i < CompareTwoPositions.length; i++) {
    var item = CompareTwoPositions[i];

    //console.log("item @ index: ", i, item.Desired_Position.Job_Title);

    _Job_Title_Array[i] = item.Desired_Position.Job_Title;

  }

  //Sort desired position on dropdown
  _Job_Title_Array = _Job_Title_Array.sort();

  //Remove duplicate element/s from array
  var _unique_Job_Title_Array = _Job_Title_Array.filter(function (element, index) {
    return _Job_Title_Array.indexOf(element) === index;
  });

  //console.log(_unique_Job_Title_Array);

  //Populate desired position dropdown
  for (var i = 0; i < _unique_Job_Title_Array.length; i++) {
    $("#Desired_Position").append("<option value='" + item.ID + "'>" + _unique_Job_Title_Array[i] + "</option>");
  }

}



function retrive_Starting_Positions() {
  // use internal name of each column as required
  $.ajax
    ({
      url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('Career-Path-Connection-Data')/items?$select=Starting_Position/Job_Title,Desired_Position/Job_Title&$expand=Starting_Position&$expand=Desired_Position&$orderby=Starting_Position asc&$top=500",
      type: "GET",
      async: false,
      headers:
      {
        "Accept": "application/json;odata=verbose",
        "Content-Type": "application/json;odata=verbose",
        "X-RequestDigest": $("#__REQUESTDIGEST").val(),
        "IF-MATCH": "*",
        "X-HTTP-Method": null
      },
      cache: false,
      success: function (data) {
        Compare_Two_Positions = data.d.results;
        for (var i = 0; i < data.d.results.length; i++) {
          var item = data.d.results[i];
          //  $("#Desired_Position").append("<option value='"+item.ID+"' health-monitor='"+item.HealthMonitorId+"'>"+item.Title+"</option>");  
        }

        var lookup = {};
        var items = data.d.results;
        var result = [];

        for (var item, i = 0; item = items[i++];) {
          var name = item.Starting_Position.Job_Title;

          if (!(name in lookup)) {
            lookup[name] = 1;
            result.push(name);
            $("#Starting_Position").append("<option value='" + item.ID + "'>" + item.Starting_Position.Job_Title + "</option>");
          }
        }
      },
      error: function (data) {
        alert(data.responseJSON.error);
      }

    });

}



function Reset() {

  window.location.reload();

  setTimeout(function () {

    document.getElementById("CompareTwoPositions").scrollIntoView({ behavior: 'smooth' });
    console.log("After 3 seconds... ");

  }, 3000);

}



function Toggle_Career_Path_Map() {

  if (document.getElementById('career_path_map').style.display === "none") {

    document.getElementById('career_path_map').style.display = "block";
    document.getElementById('Minus').style.display = "block";
    document.getElementById('Plus').style.display = "none";

  } else {
    document.getElementById('career_path_map').style.display = "none";
    document.getElementById('Minus').style.display = "none";
    document.getElementById('Plus').style.display = "block";
  }

}



function hrHubAnalyticsArchive() {
  var oDataHRHubAnalticsArchive = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Analytics-Reports')/items?$select=MM_DD_YYYY,YYYY_MM_DD,URL&$top=500&$orderby=YYYY_MM_DD desc";
  //console.log("oDataHRHubAnalticsArchive: ", oDataHRHubAnalticsArchive);

  $.ajax({

    url: oDataHRHubAnalticsArchive,
    method: "GET",
    headers: { "Accept": "application/json; odata=verbose" },

    success: function (data) {

      var items = data.d.results;

      //item = items[0]

      var htmlAnalytics = ``;

      items.forEach(function (item, index) {

        //console.log(items.length);         
        htmlAnalytics = htmlAnalytics + `<p><a id="pptLink" href="` + item.URL + `?web=1" target="_blank">CAO HR Analytics : ` + item.MM_DD_YYYY + `</a></p>`;
      });

      //console.log("htmlAnalytics: ",htmlAnalytics);

      //console.log("Latest Report:", items[0].MM_DD_YYYY);


      document.getElementById("publishingDate").innerHTML = `
              <p id="page-description" style="text-align:center; padding-bottom:2rem; font-size:1.25rem; margin:0;">
                        Published on ${items[0].MM_DD_YYYY}
                    </p>          
          `;
      document.getElementById("_div_Analytics").innerHTML = htmlAnalytics;

    },
    error: function (data) {
      alert("Error: " + data);
    }
  });
}



function hrHubAnalyticsImages() {
  var oDataHRHubAnalticsImages = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('HR-HUB-Analytics')/items?$select=Image_Title,Image_URL,Image_Order_Number,Status,Width&$top=500&$orderby=Image_Order_Number asc&$filter=Status eq 'Enabled'";
  //console.log("oDataHRHubAnalticsImages: ", oDataHRHubAnalticsImages);

  $.ajax({

    url: oDataHRHubAnalticsImages,
    method: "GET",
    headers: { "Accept": "application/json; odata=verbose" },

    success: function (data) {

      var items = data.d.results;

      var htmlAnalyticsImages = `<div class="container-fluid" style="padding: 3rem 0rem; min-height:500px; text-align:center;">`;

      items.forEach(function (item, index) {

        //console.log(items.length);

        htmlAnalyticsImages = htmlAnalyticsImages + `<h1 style="color: #003349; font-size:1.75rem;">` + item.Image_Title + `</h1>
                                                          <img class="analyticImage" src="` + item.Image_URL + `"width="` + item.Width + `">
                                                          <div style="height:5rem;"></div>`;
      });

      htmlAnalyticsImages = htmlAnalyticsImages + `</div>`;

      //console.log("htmlAnalytics: ",htmlAnalytics);
      document.getElementById("_div_Analytics_Images").innerHTML = htmlAnalyticsImages;

    },
    error: function (data) {
      alert("Error: " + data);
    }
  });
}



function HrHubVisitors(PageTitle) {

  //console.log("PageTitle: ",PageTitle);

  var DisplayName = _spPageContextInfo.userDisplayName;

  // OData : to confirm the user is not member of hr team
  var siteUrl = _spPageContextInfo.webAbsoluteUrl;
  var oDataUrlHRTeam = siteUrl + "/_api/web/lists/getbytitle('HR-Team')/items?$select=Name&$filter=Name eq '" + DisplayName + "'";

  $.ajax({
    url: oDataUrlHRTeam,
    type: "GET",
    dataType: "json",
    headers: {
      "accept": "application/json;odata=verbose"
    }
  }).done(function (data) {

    var items = data.d.results;
    var hrTeamLength = items.length;

    //console.log("hrTeamLength: ",hrTeamLength);
    //_HRHubVisitorNewItemCreate(PageTitle,DisplayName);

    if (hrTeamLength == 0) {

      //console.log(DisplayName, " is not member of hr team");
      _HRHubVisitorNewItemCreate(PageTitle, DisplayName);

    } else {

      //console.log(DisplayName, " is member of hr team");

    }

  },
    function (error) {

      //console.error('Ooops error occured during ajax call - Outer', error);

    }
  );
}



function _HRHubVisitorNewItemCreate(PageTitle, DisplayName) {

  //Replace '&' character with '%26', if needed, to avoid confilict on OData query 
  //console.log("PageTitle: ",PageTitle); 
  PageTitle = PageTitle.replace("&", " and ");

  var _DispalyName = DisplayName.replace(",", "");

  _splitDispalyName = _DispalyName.split(" ");
  _DispalyName = _splitDispalyName[1] + " " + _splitDispalyName[0];
  //console.log("_DispalyName: ",_DispalyName);

  //get today's date and set it in a 'YYYY-MM-DD' format
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  //get the window width 
  var screenWidth = window.screen.width;
  // console.log("screenWidth : ",screenWidth);

  // get siteUrl to check for duplicate item in the list 
  var siteUrl = _spPageContextInfo.webAbsoluteUrl;

  // oData query to identify a record created today by a user for visiting the same page
  var oDataUrlHRHUBVisitors = siteUrl + "/_api/web/lists/getbytitle('HRHUBVisitors')/items?$select=VisitedPage,UserName,Created&$filter=(Created ge '" + date + "') and (UserName eq '" + _DispalyName + "') and (VisitedPage eq '" + PageTitle + "')";

  $.ajax({
    url: oDataUrlHRHUBVisitors,
    type: "GET",
    dataType: "json",
    headers: {
      "accept": "application/json;odata=verbose"
    }
  }).done(function (data) {

    var items = data.d.results;
    var counter = items.length;

    if (counter == 0) {

      //console.log("NO duplicate items found, READY TO CREATE A NEW ONE !!");
      _createListItemPageVisitor(PageTitle, _DispalyName, screenWidth);

    } else {
      // duplicate item found, creating new item skipped
      //console.log("Duplicate items found");
    }

  },
    function (error) {

      //console.error('Ooops error occured during ajax call - Outer', error);

    }
  );

}



function _createListItemPageVisitor(_PageTitle, _DispalyName, screenWidth) {

  //console.log("_PageTitle: ", _PageTitle, "_DispalyName: ", _DispalyName," screenWidth: ", screenWidth);

  $.ajax({
    async: true, // Async by default is set to “true” load the script asynchronously  
    // URL to post data into sharepoint list  
    url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('HRHUBVisitors')/items",
    method: "POST", //Specifies the operation to create the list item  
    data: JSON.stringify({
      '__metadata': {
        'type': 'SP.Data.HRHUBVisitorsListItem' // it defines the ListEnitityTypeName  
      },
      //Pass the parameters

      'VisitedPage': _PageTitle,
      'UserName': _DispalyName,
      'screenWidth': screenWidth

    }),
    headers: {
      "accept": "application/json;odata=verbose", //It defines the Data format   
      "content-type": "application/json;odata=verbose", //It defines the content type as JSON  
      "X-RequestDigest": $("#__REQUESTDIGEST").val() //It gets the digest value   
    },
    success: function (data) {
      //swal("Item created successfully", "success"); // Used sweet alert for success message  
    },
    error: function (error) {
      console.log(JSON.stringify(error));

    }

  })

}



function downloadResource(documentTitle) {

  var DisplayName = _spPageContextInfo.userDisplayName;

  // Check/Confirm the user is not member of hr team
  var siteUrl = _spPageContextInfo.webAbsoluteUrl;
  var oDataUrlHRTeam = siteUrl + "/_api/web/lists/getbytitle('HR-Team')/items?$select=Name&$filter=Name eq '" + DisplayName + "'";

  $.ajax({
    url: oDataUrlHRTeam,
    type: "GET",
    dataType: "json",
    headers: {
      "accept": "application/json;odata=verbose"
    }
  }).done(function (data) {

    var items = data.d.results;
    var hrTeamLength = items.length;

    //   console.log("hrTeamLength: ",hrTeamLength);
    checkDuplicateInHRHubResourceDownloadTracker(documentTitle);



    //  if(hrTeamLength == 0){  

    //    console.log(DisplayName, " is not member of hr team");
    //    checkDuplicateInHRHubResourceDownloadTracker(documentTitle);

    // }else {

    //    console.log(DisplayName, " is member of hr team");

    // }

  },
    function (error) {
      //console.error('Ooops error occured during ajax call - Outer', error);
    }
  );

}



function checkDuplicateInHRHubResourceDownloadTracker(documentTitle) {

  var DisplayName = _spPageContextInfo.userDisplayName;
  var _DispalyName = DisplayName.replace(",", "");

  _splitDispalyName = _DispalyName.split(" ");
  _FullName = _splitDispalyName[1] + " " + _splitDispalyName[0];
  //console.log("_FullName: ", _FullName);

  var _pageTitle = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
  //console.log("PageTitle : Before : ", _pageTitle);

  // Replace character '&' by '%26', by 'And' incase it exists on the _pageTitle;
  _pageTitle = _pageTitle.replace(/&/g, "And");
  _pageTitle = _pageTitle.replace(/%26/g, "And");
  //console.log("PageTitle : After : ", _pageTitle);

  //get today's date and set it in a 'YYYY-MM-DD' format
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  // get siteUrl to check for duplicate item in the list 
  var siteUrl = _spPageContextInfo.webAbsoluteUrl;

  // oData query to identify a record created today by a user for visiting the same page
  // ORIGINAL: var oDataUrlHRHubResourceDownloadTracker = siteUrl + "/_api/web/lists/getbytitle('ResourcesDownloadTracker')/items?$select=Title,UserName,Created&$filter=(Created ge '" + date + "') and (UserName eq '" + _FullName + "') and (Title eq '" + documentTitle + "')";
  var              oDataUrlHRHubResourceDownloadTracker = siteUrl + "/_api/web/lists/getbytitle('ResourcesDownloadTracker')/items?$select=Title,UserName,Created&$filter=(Created ge '" + date + "') and (UserName eq '" + _FullName + "') and (Title eq '" + documentTitle + "') and (PageTitle eq '" + _pageTitle + "')";
  //console.log("oDataUrlHRHubResourceDownloadTracker: ", oDataUrlHRHubResourceDownloadTracker);

  $.ajax({
    url: oDataUrlHRHubResourceDownloadTracker,
    type: "GET",
    dataType: "json",
    headers: {
      "accept": "application/json;odata=verbose"
    }
  }).done(function (data) {

    var items = data.d.results;
    var counter = items.length;

    if (counter == 0) {

      console.log("NO duplicate items found, READY TO CREATE A NEW ONE !!");
      createItemHRHubResourceDownloadTracker(documentTitle, _FullName, _pageTitle);

    } else {
      // duplicate item found, creating new item skipped
      console.log("Duplicate items found");
    }

  },
    function (error) {

      //console.error('Ooops error occured during ajax call - Outer', error);  
    }
  );
};



function createItemHRHubResourceDownloadTracker(documentTitle, _FullName, _pageTitle) {

  var siteUrl = _spPageContextInfo.webAbsoluteUrl;

  $.ajax({
    async: true, // Async by default is set to “true” load the script asynchronously  
    // URL to post data into sharepoint list  
    url: siteUrl + "/_api/web/lists/GetByTitle('ResourcesDownloadTracker')/items",

    method: "POST", //Specifies the operation to create the list item  
    data: JSON.stringify({
      '__metadata': {
        'type': 'SP.Data.ResourcesDownloadTrackerListItem' // it defines the ListEnitityTypeName  
      },
      //Pass the parameters

      'Title': documentTitle,
      'UserName': _FullName,
      'PageTitle': _pageTitle,

    }),
    headers: {
      "accept": "application/json;odata=verbose", //It defines the Data format   
      "content-type": "application/json;odata=verbose", //It defines the content type as JSON  
      "X-RequestDigest": $("#__REQUESTDIGEST").val() //It gets the digest value   
    },
    success: function (data) {

      //swal("Item created successfully", "success"); // Used sweet alert for success message             

    },
    error: function (error) {

      console.log(JSON.stringify(error));

      // To reload and refresh the page when the system throws error. 
      location.reload();

    }
  })
}



function tagSearches(SearchKey, NumberOfResults) {

  var userName = _spPageContextInfo.userLoginName;

  //indentify the location of '@' and extract the user name
  var _index = userName.indexOf("@");
  var _FullName = userName.substring(0, _index);

  //split full using period character
  var splitFullName = _FullName.split(".");
  var _FirstName = splitFullName[0];
  var _LastName = splitFullName[1];

  //to change the first character of first name and last name to capital letter
  _FirstName = _FirstName.charAt(0).toUpperCase() + _FirstName.slice(1);
  _LastName = _LastName.charAt(0).toUpperCase() + _LastName.slice(1);

  // concatenate the first name and last name to form full name
  _FullName = _FirstName + " " + _LastName;

  //console.log("Full Name : ", _FullName);
  //console.log("SearchKey : ", SearchKey);
  //console.log("NumberOfResults : ", NumberOfResults);

  //get today's date and set it in a 'YYYY-MM-DD' format
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


  // get siteUrl to check for duplicate item in the list 
  var siteUrl = _spPageContextInfo.webAbsoluteUrl;

  // oData query to identify a record created today by a user for visiting the same page
  var oDataUrlTagSearches = siteUrl + "/_api/web/lists/getbytitle('TagSearches')/items?$select=Title,UserName,NumberOfResults&$filter=(Created ge '" + date + "') and (UserName eq '" + _FullName + "') and (Title eq '" + SearchKey + "')";

  $.ajax({
    url: oDataUrlTagSearches,
    type: "GET",
    dataType: "json",
    headers: {
      "accept": "application/json;odata=verbose"
    }
  }).done(function (data) {

    var items = data.d.results;
    var counter = items.length;

    console.log("counter : ", counter);

    if (counter == 0) {

      // duplicate item NOT found, new item TO BE CREATED
      //console.log("NO duplicate items found, READY TO CREATE A NEW ONE !!");
      createItemSearchTags(SearchKey, _FullName, NumberOfResults);

    } else {

      // duplicate item found, creating new item skipped
      //console.log("Duplicate items found");
    }
  },
    function (error) {

      //console.error('Ooops error occured during ajax call - Outer', error);
    }
  );

};



function createItemSearchTags(_SearchKeyParam, _FullNameParam, _NumberOfResults) {

  var siteUrl = _spPageContextInfo.webAbsoluteUrl;

  var oDataUrlTagSearches = siteUrl + "/_api/web/lists/getbytitle('TagSearches')/items?$select=Title,UserName,NumberOfResults";

  $.ajax({
    async: true, // Async by default is set to “true” load the script asynchronously  
    // URL to post data into sharepoint list  
    url: oDataUrlTagSearches,

    method: "POST", //Specifies the operation to create the list item  
    data: JSON.stringify({
      '__metadata': {
        'type': 'SP.Data.TagSearchesListItem' // it defines the ListEnitityTypeName  
      },
      //Pass the parameters

      'Title': _SearchKeyParam,
      'UserName': _FullNameParam,
      'NumberOfResults': _NumberOfResults,

    }),
    headers: {
      "accept": "application/json;odata=verbose", //It defines the Data format   
      "content-type": "application/json;odata=verbose", //It defines the content type as JSON  
      "X-RequestDigest": $("#__REQUESTDIGEST").val() //It gets the digest value   
    },
    success: function (data) {

      //            swal("Item created successfully", "success"); // Used sweet alert for success message  

    },
    error: function (error) {

      console.log(JSON.stringify(error));

    }
  })

}



// function - Career Path Usage Tracking - Check the user is not hr team member
function careerPathUsageTracking(Title, Track, PositionOrConnection) {

  var DisplayName = _spPageContextInfo.userDisplayName;

  // Check/Confirm the user is not member of hr team
  var siteUrl = _spPageContextInfo.webAbsoluteUrl;
  var oDataUrlHRTeam = siteUrl + "/_api/web/lists/getbytitle('HR-Team')/items?$select=Name&$filter=Name eq '" + DisplayName + "'";

  $.ajax({
    url: oDataUrlHRTeam,
    type: "GET",
    dataType: "json",
    headers: {
      "accept": "application/json;odata=verbose"
    }
  }).done(function (data) {

    var items = data.d.results;
    var hrTeamLength = items.length;

    //   console.log("hrTeamLength: ",hrTeamLength);
    checkDuplicateInCareerPathUsageTracking(Title, Track, PositionOrConnection);


      if(hrTeamLength == 0){  

    //    console.log(DisplayName, " is not member of hr team");
        checkDuplicateInCareerPathUsageTracking(Title, Track, PositionOrConnection);

     }else {

    //    console.log(DisplayName, " is member of hr team");

     }

  },
    function (error) {
      //console.error('Ooops error occured during ajax call - Outer', error);
    }
  );

}



// function - To check for duplicate item in 'Career Path Usage Tracking' list
function checkDuplicateInCareerPathUsageTracking(Title, Track, PositionOrConnection) {

  var DisplayName = _spPageContextInfo.userDisplayName;
  var _DispalyName = DisplayName.replace(",", "");

  _splitDispalyName = _DispalyName.split(" ");
  _FullName = _splitDispalyName[1] + " " + _splitDispalyName[0];
  //console.log("_FullName: ", _FullName);

  var _pageTitle = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
  //console.log("PageTitle : Before : ", _pageTitle);

  // Replace character '&' by '%26', by 'And' incase it exists on the _pageTitle;
  _pageTitle = _pageTitle.replace(/&/g, "And");
  _pageTitle = _pageTitle.replace(/%26/g, "And");

  _pageTitle = _pageTitle.replace(".aspx", "");
  //console.log("PageTitle : After : ", _pageTitle);

  //get today's date and set it in a 'YYYY-MM-DD' format
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  // get siteUrl to check for duplicate item in the list 
  var siteUrl = _spPageContextInfo.webAbsoluteUrl;

  // oData query to identify a record created today by a user for visiting the same page
  var oDataUrlCareerPathUsageTracking = siteUrl + "/_api/web/lists/getbytitle('Career-Path-Usage-Tracking')/items?$select=Title,UserName,PageTitle,Created&$filter=(Created ge '" + date + "') and (UserName eq '" + _FullName + "') and (Title eq '" + Title + "') and (PageTitle eq '" + _pageTitle + "')";
  //console.log("oDataUrlHRHubResourceDownloadTracker: ", oDataUrlHRHubResourceDownloadTracker);

  $.ajax({
    url: oDataUrlCareerPathUsageTracking,
    type: "GET",
    dataType: "json",
    headers: {
      "accept": "application/json;odata=verbose"
    }
  }).done(function (data) {

    var items = data.d.results;
    //console.log("items: ",items);
    var counter = items.length;

    if (counter == 0) {

      //console.log("NO duplicate items found, READY TO CREATE A NEW ONE !!");         
      createItemCareerPathUsageTracking(Title, _FullName, _pageTitle, Track, PositionOrConnection);

    } else {
      // duplicate item found, creating new item skipped
      //console.log("Duplicate items found");
    }

  },
    function (error) {

      //console.error('Ooops error occured during ajax call - Outer', error);  
    }
  );
};



// function - Create item in 'Career Path Usage Tracking' list
function createItemCareerPathUsageTracking(Title, _FullName, _pageTitle, Track, PositionOrConnection) {

  var siteUrl = _spPageContextInfo.webAbsoluteUrl;

  $.ajax({
    async: true, // Async by default is set to “true” load the script asynchronously  
    // URL to post data into sharepoint list  
    url: siteUrl + "/_api/web/lists/GetByTitle('Career-Path-Usage-Tracking')/items",

    method: "POST", //Specifies the operation to create the list item  
    data: JSON.stringify({
      '__metadata': {
        'type': 'SP.Data.CareerPathUsageTrackingListItem' // it defines the ListEnitityTypeName  
      },
      //Pass the parameters

      'Title': Title,
      'UserName': _FullName,
      'PageTitle': _pageTitle,
      'Track': Track,
      'PositionOrConnection': PositionOrConnection,

    }),
    headers: {
      "accept": "application/json;odata=verbose", //It defines the Data format   
      "content-type": "application/json;odata=verbose", //It defines the content type as JSON  
      "X-RequestDigest": $("#__REQUESTDIGEST").val() //It gets the digest value   
    },
    success: function (data) {

      //swal("Item created successfully", "success"); // Used sweet alert for success message             

    },
    error: function (error) {

      console.log(JSON.stringify(error));

      // To reload and refresh the page when the system throws error. 
      location.reload();

    }
  })
}


// function - to laoad the body of 'Additional Services' page, the page is disabled, but made to be accessable if user has the correct url
function _additionalServices(){
  // get url
  var _fullURL = window.location.href;

  //Split the url into array
  splitURL = _fullURL.split("=");

  //Get parameter from array at index 1
  _AdditionalServicesSection = splitURL[1];

  if(_AdditionalServicesSection === 'OfficeofEmployeeAssistance'){

        var OfficeofEmployeeAssistance = "show";
        var OfficeofEmployeeAssistanceStyle = "background:#B0DAF2";

  } else if(_AdditionalServicesSection === 'HouseCenterforWellBeing'){

        var HouseCenterforWellBeing = "show";
        var HouseCenterforWellBeingStyle = "background:#B0DAF2";

  } else if(_AdditionalServicesSection === 'OfficeofDiversityandInclusion'){

        var OfficeofDiversityandInclusion = "show";
        var OfficeofDiversityandInclusionStyle = "background:#B0DAF2";

  }else if(_AdditionalServicesSection === 'OfficeofEmployeeAdvocacy'){

        var OfficeofEmployeeAdvocacy= "show";
        var OfficeofEmployeeAdvocacyStyle = "background:#B0DAF2";

  }else if(_AdditionalServicesSection === 'OfficeofHouseEmploymentCounsel'){

        var OfficeofHouseEmploymentCounsel = "show";
        var OfficeofHouseEmploymentCounselStyle = "background:#B0DAF2";

  } else if(_AdditionalServicesSection === 'OfficeofGeneralCounsel'){

        var OfficeofGeneralCounsel = "show";
        var OfficeofGeneralCounselStyle = "background:#B0DAF2";            

  }else if(_AdditionalServicesSection === 'OfficeofCongressionalWorkplaceRights'){

    var OfficeofCongressionalWorkplaceRights = "show";
    var OfficeofCongressionalWorkplaceRightsStyle = "background:#B0DAF2";            

  }else if(_AdditionalServicesSection === 'OfficeofPayrollandBenefits'){

         var OfficeofPayrollandBenefits = "show";
         var OfficeofPayrollandBenefitsStyle = "background:#B0DAF2"; 

  }else if(_AdditionalServicesSection === 'CongressionalStaffAcademy'){

        var CongressionalStaffAcademy = "show";
        var CongressionalStaffAcademyStyle = "background:#B0DAF2";

  }else if(_AdditionalServicesSection === 'CAOCoachProgram'){

        var CAOCoachProgram = "show";
        var CAOCoachProgramStyle = "background:#B0DAF2";

  }

  


var AdditionalServicesHTML = `<div class="col-12 col-sm-12 col-md-12 col-lg-6 xl-auto">

<div id="CouncelingAndEmployeeWellBeing" class="row" style="padding: 2rem 1rem;">

  <div class="col-4" style="text-align:right;">
    <img src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/HRHub-Icon_Add-Resources_well-being.svg" alt="" style="width:70px;">
  </div>
  <div class="col-8">

    <h5 class="AdditionalServicesTitle">Counseling and Employee Well-Being</h5>
    <!-- <p style="font-size:15px; text-align:left; line-height: 1;">Take advangate of these helpful wellness resources</p> -->

    <!-- Counceling and Employee Well-Being - Accordion - START -->

    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOfficeOfEmployeeAssistance">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOfficeOfEmployeeAssistance" aria-expanded="false" aria-controls="flush-collapseOfficeOfEmployeeAssistance">
              Office of Employee Assistance
          </button>
        </h2>
        <div id="flush-collapseOfficeOfEmployeeAssistance" class="accordion-collapse collapse test ${OfficeofEmployeeAssistance}" aria-labelledby="flush-headingOfficeOfEmployeeAssistance" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body" style="${OfficeofEmployeeAssistanceStyle}"><a class="AdditionalSercices-link-title" href="https://housenet.house.gov/campus/service-providers/office-of-employee-assistance" target="_blank" onclick="downloadResource('Office of Employee Assistance')">Office of Employee Assistance</a> provides confidential counseling, training and guidance to individuals, teams and managers; online mental health screening tools; and wellness information. If you would like more information on helping yourself or your staff, with this level of support, whether they are working onsite or remotely, please contact 24 hours a day/7 days per week at 202-225-2400 or via email <a class="Email-Links" href= "mailto:Employee.Assistance@mail.house.gov"><u>Employee.Assistance@mail.house.gov</u></a>.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingHouseCenterForWell-Being">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseHouseCenterForWell-Being" aria-expanded="false" aria-controls="flush-collapseHouseCenterForWell-Being">
              House Center for Well-Being
          </button>
        </h2>
        <div id="flush-collapseHouseCenterForWell-Being" class="accordion-collapse collapse test ${HouseCenterforWellBeing}" aria-labelledby="flush-headingHouseCenterForWell-Being" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body" style="${HouseCenterforWellBeingStyle}"><a class="AdditionalSercices-link-title" href="https://wellbeing.house.gov/" target="_blank" onclick="downloadResource('House Center for Well-Being')"> House Center for Well-Being</a> provides a holistic well-being program for the House community. Resources and services include wellness challenges and trainings, individual coaching and personalized support. To learn more about the comprehensive offerings, please contact the House Center for Well-Being at 202-225-0800 or via email <a class="Email-Links" href= "mailto:WellBeing@mail.house.gov"><u>WellBeing@mail.house.gov</u></a>.</div>
        </div>
      </div>

      <!-- <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingCounselingAndEmployeeWell-Being-Dummy">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseCounselingAndEmployeeWell-Being-Dummy" aria-expanded="false" aria-controls="flush-collapseCounselingAndEmployeeWell-Being-Dummy">
            Dummy
          </button>
        </h2>
        <div id="flush-collapseCounselingAndEmployeeWell-Being-Dummy" class="accordion-collapse collapse" aria-labelledby="flush-headingCounselingAndEmployeeWell-Being-Dummy" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
        </div>
      </div> -->

    </div>
    
    <!-- Counceling and Employee Well-Being - Accordion - END -->

  </div>            

</div>

<div id="DiversityAndInclusion" class="row" class="row" style="padding: 2rem 1rem;">

  <div class="col-4" style="text-align:right;">
    <img src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/HRHub-Icon_Add-Resources_diversity-inclusion.svg" alt="" style="width:70px;">
  </div>
  <div class="col-8">

    <h5 class="AdditionalServicesTitle">Diversity and Inclusion</h5>
    <!-- <p style="font-size:15px; text-align:left; line-height: 1;">Text description here..</p> -->

    <!-- Diversity and Inclusion - Accordion - START -->

    <div class="accordion accordion-flush" id="DiversityAndInclusion">
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOfficeOfDiversityAndInclusion">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOfficeOfDiversityAndInclusion" aria-expanded="false" aria-controls="flush-collapseOfficeOfDiversityAndInclusion">
              Office of Diversity and Inclusion
          </button>
        </h2>
        <div id="flush-collapseOfficeOfDiversityAndInclusion" class="accordion-collapse collapse test ${OfficeofDiversityandInclusion}" aria-labelledby="flush-headingOfficeOfDiversityAndInclusion" data-bs-parent="#DiversityAndInclusion">
          <div class="accordion-body" style="${OfficeofDiversityandInclusionStyle}"><a class="AdditionalSercices-link-title" href="https://diversity.house.gov/" target="_blank" onclick="downloadResource('Office of Diversity and Inclusion')">Office of Diversity and Inclusion</a> office is charged with submitting to Congress a diversity plan to direct and guide House employing offices to recruit, hire, train, develop, advance, promote, and retain a diverse workforce. Additionally, the office will develop and conduct a survey to evaluate diversity in House employing offices. For more information, please contact the Office of Diversity and Inclusion.</div>
        </div>
      </div>

      <!-- <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingDiversityAndInclusionTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseDiversityAndInclusionTwo" aria-expanded="false" aria-controls="flush-collapseDiversityAndInclusionTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="flush-collapseDiversityAndInclusionTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingDiversityAndInclusionTwo" data-bs-parent="#DiversityAndInclusion">
          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingDiversityAndInclusionThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseDiversityAndInclusionThree" aria-expanded="false" aria-controls="flush-collapseDiversityAndInclusionThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="flush-collapseDiversityAndInclusionThree" class="accordion-collapse collapse" aria-labelledby="flush-headingDiversityAndInclusionThree" data-bs-parent="#DiversityAndInclusion">
          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
        </div>
      </div> -->

    </div>

    <!-- Diversity and Inclusion - Accordion - END -->

  </div>        

</div>

<div id="Legal" class="row" class="row" style="padding: 2rem 1rem;">

  <div class="col-4" style="text-align:right;">
    <img src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/HRHub-Icon_Add-Resources_legal.svg" alt="" style="width:70px;">
  </div>
  <div class="col-8">

    <h5 class="AdditionalServicesTitle">Legal</h5>
    <!-- <p style="font-size:15px; text-align:left; line-height: 1;">Text description here..</p> -->

    <!-- Legal - Accordion - START -->

    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOfficeOfEmployeeAdvocacy">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOfficeOfEmployeeAdvocacy" aria-expanded="false" aria-controls="flush-collapseOfficeOfEmployeeAdvocacy">
            Office of Employee Advocacy
          </button>
        </h2>
        <div id="flush-collapseOfficeOfEmployeeAdvocacy" class="accordion-collapse collapse test ${OfficeofEmployeeAdvocacy}" aria-labelledby="flush-headingOfficeOfEmployeeAdvocacy" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body" style="${OfficeofEmployeeAdvocacyStyle}"><a class="AdditionalSercices-link-title" href="https://employeeadvocacy.house.gov/" target="_blank" onclick="downloadResource('Office of Employee Advocacy')">Office of Employee Advocacy</a> serves as the legal counsel for employees who need advice or legal representation regarding matters that arise under the laws and regulations applicable to the House under the <a class="AdditionalSercices-link-title" href="https://uscode.house.gov/view.xhtml?req=granuleid%3AUSC-prelim-title2-chapter24&saved=%7CKHRpdGxlOjIgc2VjdGlvbjoxMzgxIGVkaXRpb246cHJlbGltKSBPUiAoZ3JhbnVsZWlkOlVTQy1wcmVsaW0tdGl0bGUyLXNlY3Rpb24xMzgxKQ%3D%3D%7CdHJlZXNvcnQ%3D%7C%7C0%7Cfalse%7Cprelim&edition=prelim" target="_blank" onclick="downloadResource('Congressional Accountability Act of 1995 as amended by the 2018 Reform Act')">Congressional Accountability Act of 1995, as amended by the 2018 Reform Act</a>. Employee Advocacy is a non-partisan office, and there is no charge for its services. House employees may contact the Office of Employee Advocacy at 202-225-8800 or via email <a class="Email-Links" href= "mailto:Employee.Advocacy@mail.house.gov"><u>Employee.Advocacy@mail.house.gov</u></a>.  Information is also available externally at <a class="AdditionalSercices-link-title" href="https://EmployeeAdvocacy.house.gov" target="_blank" onclick="downloadResource('Office of Employee Advocacy')">https://EmployeeAdvocacy.house.gov</a>. </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOfficeOfHouseEmploymentCounsel">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOfficeOfHouseEmploymentCounsel" aria-expanded="false" aria-controls="flush-collapseOfficeOfHouseEmploymentCounsel">
            Office of House Employment Counsel
          </button>
        </h2>
        <div id="flush-collapseOfficeOfHouseEmploymentCounsel" class="accordion-collapse collapse test ${OfficeofHouseEmploymentCounsel}" aria-labelledby="flush-headingOfficeOfHouseEmploymentCounsel" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body" style="${OfficeofHouseEmploymentCounselStyle}"><a class="AdditionalSercices-link-title" href="https://housenet.house.gov/campus/service-providers/office-of-the-clerk/office-of-house-employment-counsel" target="_blank" onclick="downloadResource('Office of House Employment Counsel')">Office of House Employment Counsel</a> serves as legal counsel for House employers, providing advice, training, and representation for issues arising under the <a class="AdditionalSercices-link-title" href="https://uscode.house.gov/view.xhtml?req=granuleid%3AUSC-prelim-title2-chapter24&saved=%7CKHRpdGxlOjIgc2VjdGlvbjoxMzgxIGVkaXRpb246cHJlbGltKSBPUiAoZ3JhbnVsZWlkOlVTQy1wcmVsaW0tdGl0bGUyLXNlY3Rpb24xMzgxKQ%3D%3D%7CdHJlZXNvcnQ%3D%7C%7C0%7Cfalse%7Cprelim&edition=prelim" target="_blank" onclick="downloadResource('Congressional Accountability Act of 1995 as amended by the 2018 Reform Act')">Congressional Accountability Act of 1995, as amended by the 2018 Reform Act</a>.  OHEC is a non-partisan office and there is no charge for OHEC's services.  Employing offices may contact the Office of House Employment Counsel at 202-225-7075 (preferred) or via email <a class="Email-Links" href= "mailto:EmploymentCounsel@mail.house.gov"><u>EmploymentCounsel@mail.house.gov</u></a>.</div>
        </div>
      </div>
      
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOfficeOfGeneralCounsel">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOfficeOfGeneralCounsel " aria-expanded="false" aria-controls="flush-collapseOfficeOfGeneralCounsel">
            Office of General Counsel 
          </button>
        </h2>
        <div id="flush-collapseOfficeOfGeneralCounsel" class="accordion-collapse collapse test ${OfficeofGeneralCounsel}" aria-labelledby="flush-headingOfficeOfGeneralCounsel " data-bs-parent="#accordionFlushExample">
          <div class="accordion-body" style="${OfficeofGeneralCounselStyle}"><a class="AdditionalSercices-link-title" href="https://housenet.house.gov/campus/service-providers/office-of-general-counsel" target="_blank" onclick="downloadResource('Office of General Counsel')">Office of General Counsel</a> provides legal advice and representation to Members, committees, officers and employees of the House, without regard to political affiliation, on a variety of matters related to their official duties. The Office will advise whether a specific candidate is eligible for paid employment with the House, and what additional documentation, if any, may be required from the candidate. For additional information, please contact the Office of General Counsel at 202-225-9700.</div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOfficeofCongressionalWorkplaceRights">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOfficeofCongressionalWorkplaceRights " aria-expanded="false" aria-controls="flush-collapseOfficeofCongressionalWorkplaceRights">
            Office of Congressional Workplace Rights 
          </button>
        </h2>
        <div id="flush-collapseOfficeofCongressionalWorkplaceRights" class="accordion-collapse collapse test ${OfficeofCongressionalWorkplaceRights}" aria-labelledby="flush-headingOfficeofCongressionalWorkplaceRights " data-bs-parent="#accordionFlushExample">
          <div class="accordion-body" style="${OfficeofCongressionalWorkplaceRightsStyle}"><a class="AdditionalSercices-link-title" href="https://www.ocwr.gov/" target="_blank" onclick="downloadResource('Office of Congressional Workplace Rights')">Office of Congressional Workplace Rights</a> (OCWR) works to advance workplace rights, safety and health, and accessibility in the legislative branch of the federal government. OCWR, formerly known as the Office of Compliance, was established to ensure the integrity of the Congressional Accountability Act of 1995 (CAA) through programs of dispute resolution, education, and enforcement. These programs assist members of Congress, employing offices, employees, and the visiting public in understanding the 14 workplace and accessibility laws incorporated in the CAA. For additional information, please contact the Office of Congressional Workplace Rights at 202-724-9250 or via email <a class="Email-Links" href= "mailto:ocwrinfo@ocwr.gov"><u>ocwrinfo@ocwr.gov</u></a>.</div>
        </div>
      </div>        

    </div>

    <!-- Legal - Accordion - END -->

  </div>    


</div>

</div>

<div class="col-12 col-sm-12 col-md-12 col-lg-6 xl-auto">

<div id="PayrollAndBenefits" class="row" class="row" style="padding: 2rem 1rem;">

  <div class="col-4" style="text-align:right;">
    <img src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/HRHub-Icon_Add-Resources_payroll-beneifts.svg" alt="" style="width:70px;">
  </div>
  <div class="col-8">

    <h5 class="AdditionalServicesTitle">Payroll and Benefits</h5>
    <!-- <p style="font-size:15px; text-align:left; line-height: 1;">Text description here..</p> -->

    <!-- Payroll and Benefits - Accordion - START -->

    <div class="accordion accordion-flush" id="PayrollAndBenefits">
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOfficeOfPayrollAndBenefits">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOfficeOfPayrollAndBenefits" aria-expanded="false" aria-controls="flush-collapseOfficeOfPayrollAndBenefits">
              Office of Payroll and Benefits
          </button>
        </h2>
        <div id="flush-collapseOfficeOfPayrollAndBenefits" class="accordion-collapse collapse test ${OfficeofPayrollandBenefits}" aria-labelledby="flush-headingOfficeOfPayrollAndBenefits" data-bs-parent="#PayrollAndBenefits">
          <div class="accordion-body" style="${OfficeofPayrollandBenefitsStyle}"><a class="AdditionalSercices-link-title" href="https://housenet.house.gov/campus/service-providers/payroll-and-benefits" target="_blank" onclick="downloadResource('Office of Payroll and Benefits')">Office of Payroll and Benefits</a> is responsible for the administration of staff payroll and benefits for the House Leadership, Members, Committees, and support offices in accordance with laws and House rules and regulations. Payroll and Benefits also provides teleconferences, support, counseling, and training to employing office contacts, payroll points-of-contact, and House staff.  For additional information, please contact the Office of Payroll and Benefits at 202-225-1435</div>
        </div>
      </div>

  <!-- <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed" type="button"
                  data-mdb-toggle="collapse" data-mdb-target="#flush-collapseOne"
                  aria-expanded="false" aria-controls="flush-collapseOne">
                  Accordion Item #1
              </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne" data-mdb-parent="#accordionFlushExample">
              <div class="accordion-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                  dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                  tempor,
                  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                  shoreditch
                  et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                  nesciunt
                  sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                  occaecat
                  craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                  haven't
                  heard of them accusamus labore sustainable VHS.
              </div>
          </div>
      </div>
      <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
              <button class="accordion-button collapsed" type="button"
                  data-mdb-toggle="collapse" data-mdb-target="#flush-collapseTwo"
                  aria-expanded="false" aria-controls="flush-collapseTwo">
                  Accordion Item #2
              </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo" data-mdb-parent="#accordionFlushExample">
              <div class="accordion-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                  dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                  tempor,
                  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                  shoreditch
                  et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                  nesciunt
                  sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                  occaecat
                  craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                  haven't
                  heard of them accusamus labore sustainable VHS.
              </div>
          </div>
      </div>
      <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
              <button class="accordion-button collapsed" type="button"
                  data-mdb-toggle="collapse" data-mdb-target="#flush-collapseThree"
                  aria-expanded="false" aria-controls="flush-collapseThree">
                  Accordion Item #3
              </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree" data-mdb-parent="#accordionFlushExample">
              <div class="accordion-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                  dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                  tempor,
                  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                  shoreditch
                  et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                  nesciunt
                  sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                  occaecat
                  craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                  haven't
                  heard of them accusamus labore sustainable VHS.
              </div>
          </div>
      </div>
  </div> -->

  <!-- Payroll and Benefits - Accordion - END -->

</div>

    <!-- Payroll and Benefits - Accordion - END -->

  </div>    
</div>

<div id="TrainingAndEducation" class="row" class="row" style="padding: 2rem 1rem;">

  <div class="col-4" style="text-align:right;">
    <img src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/HRHub-Icon_Add-Resources_training-educ.svg" alt="" style="width:70px;">
  </div>
  <div class="col-8">

    <h5 class="AdditionalServicesTitle">Training and Education</h5>
    <!-- <p style="font-size:15px; text-align:left; line-height: 1;">Text description here..</p> -->

    <!-- Training and Education - Accordion - START -->

    <div class="accordion accordion-flush" id="TrainingAndEducation">
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingCongressionalStaffcademy">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseCongressionalStaffcademy" aria-expanded="false" aria-controls="flush-collapseCongressionalStaffcademy">
              Congressional Staff Academy
          </button>
        </h2>
        <div id="flush-collapseCongressionalStaffcademy" class="accordion-collapse collapse test ${CongressionalStaffAcademy}" aria-labelledby="flush-headingCongressionalStaffcademy" data-bs-parent="#TrainingAndEducation">
          <div class="accordion-body" style="${CongressionalStaffAcademyStyle}"><a class="AdditionalSercices-link-title" href="https://house.csod.com/samldefault.aspx" target="_blank" onclick="downloadResource('Congressional Staff Academy')">Congressional Staff Academy</a> offers learning opportunities that can help you achieve your career development goals and objectives. You may be familiar with visiting the Congressional Staff Academy for your yearly required Ethics, Cybersecurity, and Workplace Rights & Responsibilities Trainings, but there is much more to learn. For assistance accessing the course offerings, please contact the Congressional Staff Academy at 202-226-3800 or via email <a class="Email-Links" href= "mailto:Staffacademy@mail.house.gov"><u>Staffacademy@mail.house.gov</u></a>.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingCAOCoachProgram">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseCAOCoachProgram" aria-expanded="false" aria-controls="flush-collapseCAOCoachProgram">
              CAO Coach Program
          </button>
        </h2>
        <div id="flush-collapseCAOCoachProgram" class="accordion-collapse collapse test ${CAOCoachProgram}" aria-labelledby="flush-headingCAOCoachProgram" data-bs-parent="#TrainingAndEducation">
          <div class="accordion-body" style="${CAOCoachProgramStyle}"><a class="AdditionalSercices-link-title" href="https://caocoach.house.gov/" target="_blank" onclick="downloadResource('CAO Coach Program')">CAO Coach Program</a> helps House staff navigate their challenging jobs. This new, first of its kind program within the Congressional Staff Academy provides staffers a wide array of resources to help them learn, acquire and strengthen the unique skills needed to be an effective staffer. For more information or to make a one-on-one appointment, please contact the Congressional Staff Academy at 202-226-3800 or via email <a class="Email-Links" href= "mailto:caocoach@mail.house.gov"><u>caocoach@mail.house.gov</u></a>.</div>
        </div>
      </div>

      <!-- <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTrainingAndEducation-Dummy">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTrainingAndEducation-Dummy" aria-expanded="false" aria-controls="flush-collapseTrainingAndEducation-Dummy">
            Accordion Item #3
          </button>
        </h2>
        <div id="flush-collapseTrainingAndEducation-Dummy" class="accordion-collapse collapse" aria-labelledby="flush-headingTrainingAndEducation-Dummy" data-bs-parent="#TrainingAndEducation">
          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
        </div>
      </div>
    </div> -->

  <!-- Training and Education - Accordion - END -->



</div>

    <!-- Training and Education - Accordion - END -->

  </div>   
</div>

</div>`;


document.getElementById('AdditionalServicesPage').innerHTML = AdditionalServicesHTML
}

