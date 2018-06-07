
### Priority 1 Functional Requirements
- [ ] Fix submitting a report
- [ ] Finish lazy log in
- [ ] Add sign up to lazy Log in
- [ ] Implement search for Reports by zip code.  (GGP - 94122)
- [ ] QA posting images with report.
- [ ] City Users shall be able to view all Reports submitted by users.
- [ ] City Users and Admins shall be able to view user information attached to submitted Reports.
- [X] City Users shall be able to adjust the Status of a submitted Report to received, duplicate or undesired depending on the content of the submitted Reported.
- [ ] Think about the priority for programming select a park by viewing the park’s location through Google Maps
- [ ] M3 04/24/18
- [X] Implement search for Reports by Park name.
- [X] Display the status of submitted Reports.
- [X] Display the park’s location with Google Maps.
- [X] Implement lazy registration.
- [X] Log in for registered users using a username and password.
- [ ] QA Image upload testing
- [ ] QA Login and registration testing

### Per class/email
- [ ] Add *required to forms
- [ ] Program Sort for city user dashboard
- [ ] Give city user option to change category
- [ ] Add Zip Code search field 
- [ ] 	with example text
- [ ]	with expected format error
- [ ] Confirm security validation on search field
- [ ]	max 40 characters
- [ ]	only alphanumeric
- [ ] Mainatin search text across pages
- [ ] Add park found, but no issues search result
- [ ] Display similar items / %like search
- [ ] Add link to Post to view image full size
- [X] Create a one sentence description for site
- [X] produce thumbnail once as image is uploaded and store in database
- [X] add status drop down on UI
- [X] add category drop down on UI
- [X] Put search bar in the middle
- [X] Have explaination text for search bar
- [X] Have each environmental post have a CATEGORY as a pull own menu form fixed list kept in CATGEORY DB table which feeds all related pull downs and is FK in POST DB table
- [X] have STATUS of each post feed from a DB table (and be a FK to POST DB table) so it is fixed and controlled
- [X] Avoid unnessaccary Key Words users need type
- [X] Display all results on empty search



### General QA
- [X] Add a space to or remove the end of the "Submitted by:" string in the search results
- [ ] Find and fix problem causing attempting lazy reg to crash the app with an Application error
- [ ] Display the name of the uploaded file
- [ ] Consider putting the search button back
- [ ] Have the browse button respond to mouse-over
- [ ] Seperate the city user account for testing
- [ ] Seperate Admin account for testing
- [ ] use 'coming soon' or something not 'error'
- [ ] change 'All' to 'select one' in category drop down for reporting
- [ ]	Confirm 'All'/'select one' option is invalid when submitting
- [ ] Set permissions



### Previous QA
- [ ] Fix the typo in the example text for Issue Description on the Report Issue page, removed the 'ed'
- [ ] Consider adding the text 'home' to the home page link
- [ ] display the only a demo text in the top bar 
- [ ] display the only a demo text on all pages
- [ ] Consider adding the add a park button on the same page as the down list for parks
- [ ] Consider moving report button to to left side like Yelp
- [ ] test for mimimizing number of pages 
- [ ] Put search bar on all pages
- [X] Use the required only a demo text
- [X] Search returns no results if no issue type is selected
- [X] Put issue type to the left of the search field


### M3 Review
- [ ] TH 434, 04/24/18, 16:55 
- [ ]	Bring printout of all current implemented cleansweep screens
- [ ]	Bring laptop w/ power cord w/ access to cleensweep, ALL key pages, even if they are not connected to back end.
- [ ]	Bring spare laptop w/ power cord
- [ ]	Setup laptop while waiting before meeting
- [ ]	Working home, search results, search details, login and registration
- [ ]	Bring printout of M3 Apendix I
- [ ]	Prepare to define exactly what product you are delivering.
- [ ]	verify basic best practices for security
- [ ]	Choose someone to take notes
- [ ]	Prepare code and github examples
- [ ]	Prepare display of Data Base tables and data, password encription
- [ ]	Premeeting QA:
- [ ]		Home page
- [ ]		Search (including search field validation)
- [ ]		Search results
- [ ]		Filtering
- [ ]		Search Details and maps
- [ ]		Messaging/contact seller
- [ ]		Upload
- [ ]		dashboard
- [ ]		UI responsiveness (resize the browser)
- [ ]		Performance (e.g. display of results list)
- [ ]	Prep statements for:
- [ ]		Teamwork
- [ ]		Actual Risks 
- [ ]		Coding practices/style
- [ ]		Usage of proper SE code management practices, how you manage code submissions, reviews, build and test etc.
- [ ]		How did you address site security and safe coding practices: PW management, use of secure protocols, checking for valid inputs etc.
- [ ]		Digital content (e.g. images, video) please provide information on status and availability, chosen formats, resolution etc.
- [ ]		Agree on final P1 list and from then on focus only on those
- [ ]	AFTER set final priority one functions
- [ ]	SW Review prep
- [ ]		Git/Github organization (e.g.  organization of branches)
- [ ]		Git/Github usage: Comments on positing; Number of postings approved; even distribution of submissions among team members per github post stats
- [ ]		Code documentation in header and in code
- [ ]		Good coding style
- [ ]		MVC/OO patterns followed up
- [ ]		Frameworks (back end front end) deployed correctly
- [ ]		Database organization (tables, naming…)
- [ ]		Blobs no or working?
- [ ]		Adherence to best practices of security (PW encrypted, search inputs verified etc.)
- [ ]		Efficiency (proper use of image thumbnails, efficient search eytc.)

### Priority 2a Functional Requirements
- [ ] Admins shall be able to delete submitted Reports.
- [ ] Admins shall not be able to edit submitted Reports.
- [ ] Admins shall be able to deactivate Registered Users’ accounts.

### Priority 2b Functional Requirements
- [ ] Registered Users shall be able to reset their password from the sign-in screen.
- [ ] Registered Users shall be able to save up to five Reports to be displayed while logged in.
- [ ] Registered Users shall be able to place a marker on a Google Map to designate the location of an environmental incident

### Priority 3 Functional Requirements
- [ ] All users shall be able to view Reports per a zip code sourced from Google maps.
- [ ] All users shall be able to locate parks through markers placed through Google Maps
- [ ] Registered Users shall be able to see markers corresponding to environmental incidents placed by other users.
- [ ] City Users shall be able to contact Registered Users directly when looking at a submitted environmental incident.
- [ ] Code the selecting of a park by viewing the park’s location through Google Maps.
