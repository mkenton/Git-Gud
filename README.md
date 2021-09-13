# Git Gud

## Project Pitch:

In this project, we will collect data on Flatiron Github labs so that a Flatiron student can view their GitHub lab statistics. 

## User Stories:
As a user, I want to view my Flatiron GitHub lab stats like lab completion time, number of commits, number of forks, etc. 

As a user, I should be able to see all labs for a phase and see which ones are incomplete. I should be able to star a lab that is incomplete which will update on the UI and the database to add the lab to a “todo”

As a user, I should be able to navigate to the todo list and remove labs I’m not interested in completing

### Wireframe:
(WIP)

### React App: 
- Search bar for Flatiron students GitHub username (READ). 
- Lab-container section to display results. Results may show whether the lab is completed. May contain filter parameters to search/sort labs by phase, section, topic, search term, etc.
- Star option to mark labs as labs of interest (e.g. incomplete, intend to review). Starred labs will be added to a "to-do" section (UPDATE)
- Starred-lab container section to display labs marked as labs of interest
- Remove lab option. A user can to remove lab from the data set. (e.g. the user does not intend to complete the lab, or does not find the lab relevant to their analysis) (DESTROY)

### ActiveRecord: 
- One to many relationship.
- Models: Student and Lab
- Student has many labs, Lab belongs to User
- Lab contains data of interest scraped from github repository of student for that particular lab.
