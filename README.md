# Word-Count

### Project Details:

Pick any programming language of your choice and test-drive creating a list of the top 100 most frequently occurring words (excluding stop words) paired with the count of occurrences of the word, found in the attached text for Herman Melville's book Moby Dick.  

Please share your code, including a README, by pushing to your GitHub account and sharing the repository link with us. Please do not squash your commit history as we would like to view your commits to understand how you progressed towards your solution.

---

### User Stories:
* As the user, I should be able to input a file and receive an output of a list of words.
* As the user, the list should not have any duplicates.
* As the user, the list should ignore stop-words.
* As the user, the list should be in descending order from most occurrences to least.
* As the user, I only want a list of no more than the top 100 most frequently used words.

### TODO's:
- [x] Test Driven Development.
- [x] Implementation of functionality.
- [x] Refactoring.
- [x] Styling.

---

### How To Use:
* Clone the repository via the `Clone or Download` button and the following terminal command:

```node
git clone https://github.com/Lonewalker72/word-count.git
```
* Once the repository is cloned use the following command to install dependencies and modules:

```node
npm i
```
* Use the following script in your terminal to start up your local server and proceed to http://localhost:8080 or follow the link in your terminal following this command:

```node
npm start
```

### Test
Testing was done with Mocha, Chai, and Sinon. Sinon was used in an attempt to simulate an event. TDD was used to get the core functionality/concepts down although alteration did occur as the project progress. With only having tested with jest this was an adventure for me and look forward to continue to develop my skills in Mocha, Chai, etc. 
