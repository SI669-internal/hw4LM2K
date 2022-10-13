# HW4: ListMaker 2000
**SI669 Fall 2022**

## Video Walkthrough 
See the [Demo Video](https://youtu.be/QunoO_iCfQM). 

## Learning Goals
* Use Redux to manage application-level state

## Project Goals
* Modify the ListMaker 2000 app to support CRUD for labels

## What to Do
1. Accept the GitHub Classroom invitation.
2. Clone the repo that is created to your local machine.
3. `cd` into the directory that was created when you cloned the repo (it should be called `hw4-lm2k-<your-github-id>`).
4. execute `npm install`
5. Modify the code to support CRUD for tags. Make sure that tags already assigned to list items are updated correctly as well.
6. Push your final changes to GitHub before the deadline.
7. Create a screencast video and submit the link to Canvas before the deadline.
8. Indicate in your Canvas comments which requirements (including extra credit) you believe you met.

## Notes

## Grading (up to 120 points)
| No. | Requirement  | Points |
| --- | ------------- | ------------- |
| 1 | Existing functionality is not broken--tab and stack navigation works correctly, tags can be assigned and unassigned to list items, nickname is shown on HomeScreen | 20  |
| 2 | New tags can be created | 20 |
| 3 | Tags can be deleted. When deleted they are no longer shown on the SettingsScreen or DetailsScreen | 20 |
| 4 | Tags can be modified. When updated they are correctly displayed (with new text) on SettingsScreen and DetailsScreen| 20 |
| 5 | When an existing tag is deleted from the app, it is also deleted from all list items it was previously assigned to | 20 |
| 6 | When an existing tag is updated, the updated text is displayed on the HomeScreen for any list items that have that tag | 20 |
|   | **Total** | **120**

## Extra Credit

Allow users to CRUD colors for tags. Selected colors are shown wherever the tags are shown. See the 
## Grading (up to 4 points)
| No. | Requirement  | Points |
| --- | ------------- | ------------- |
| 1 | Different colored tags are shown on the HomeScreen and DetailsScreen (hardcoded OK) | 1 |
| 2 | User can select a color for a tag when adding or updating it. Color selector on TagDetailsScreen works as shown in video. | 1 |
| 3 | After adding or updating a tag's colors, the new color is shown correctly on all four screens | 2 |
|   | **Total** | **4**
