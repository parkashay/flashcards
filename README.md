## FlashCards


### Overview
A flashcards based learning platform where users can interact with the cards in the website and can utilize their free time by enlightening themselves with ideas or facts.


### Features:
without logging in, users can : 
 - see what other people have posted

after logging in, users can :
(For now, Login can be done with google only. More login features will be shipped shortly.)
 - see what other people have posted
 - create and upload a card
 - view their cards and update or delete them (only for the cards they have created).


### To run the project locally,
```
recommended node version v20.0.0+
git clone <repo>
npm i
set up .env file based on .env.example
npm run dev
run tests by using `npm run test`
```

### List of tools:
- React
- Firebase with firebase auth and firebase hooks
- Jotai for state management ( used for the toast messages.)
- TailwindCSS
- Framer Motion
- Vitest for testing