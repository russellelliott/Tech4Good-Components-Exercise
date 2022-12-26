# Tech4Good Onboarding Exercise
This is my implementation of the Tech4Good Onboarding Exercise for implementing the "Long Term Goals" component. My implementation is able to display the user's goals from the provided data in the example as well as allowing the user top modify the goals by changing the application state.

# How to Run
1.  Clone this repository.
2.  Navigate to the root of the repository and run  `npm install`  which will install all the dependencies.
3.  Running  `npm start`  will begin a development server on  `localhost:4200`  where you can see the web app being served.

[Onboarding Exercise](https://docs.google.com/document/d/1tjwQ775YIVlesqynVPyPxsQcDAg6YwP_GXeJvGFV0JY/edit#)

[Documentation Sheet](https://docs.google.com/spreadsheets/d/15HWO0wexBN8qfycjLrR092MZkKkrJlGmyVg6t6B_Ha4/edit#gid=0)


## How to make and use an Angular component

Make a folder with name of component
Add HTML, CSS, Typescript spec and Typescript
In folder called `component-name`
`component-name.component.html`
`component-name.component.scss`
`component-name.component.spec.ts`
`component-name.component.ts`

In the main module, import the component and put it in the declaration scope (`main.module.ts`)

`import component from ‘some path’`
Put it in the declarations

In the home page, use the component as `app-component-name`

## Resources
[Starter Code](https://stackblitz.com/edit/longtermgoals-setup?file=src/app/main/page/widget/widget.component.html)

### Building a Component
#### Creating Collection Bindings

[Causeway Page](https://causeway.soe.ucsc.edu/#/reference/-comp-data/1?od=6)

[Stackblitz](https://stackblitz.com/edit/causeway-data-sample-11-revision-xwqydw?file=src%2Fapp%2Fthank-you-page%2Fthank-you-page.component.ts,src%2Fapp%2Fthank-you-page%2Fmessage-card%2Fmessage-card.component.html,src%2Fapp%2Fthank-you-page%2Fmessage-card%2Fmessage-card.component.scss)

  

#### Creating Content Bindings
[Causeway Page](https://causeway.soe.ucsc.edu/#/reference/-comp-data/1?od=3)
[Stackblitz](https://stackblitz.com/edit/causeway-data-sample-4-revision?file=src%2Fapp%2Fthank-you-page%2Fmessage-card%2Fmessage-card.component.html)

  
### Changing Component State
#### Emit Output Events and Change Local UI State
[Causeway Page](https://causeway.soe.ucsc.edu/#/reference/-comp-events/1?od=3)
[Stackblitz](https://stackblitz.com/edit/causeway-projectcard-events-4a-1?file=src%2Fapp%2Fproject-card%2Fproject-card.component.ts)

#### Emit Output Events and Change Local UI State
[Causeway Page](https://causeway.soe.ucsc.edu/#/reference/-comp-events/1?od=3)
[Stackblitz](https://stackblitz.com/edit/causeway-projectcard-events-3-1?file=src%2Fapp%2Fapp.component.html)

[Stackblitz 2](https://stackblitz.com/edit/causeway-projectcard-events-3-1-bw5u3b?file=src%2Fapp%2Fapp.component.ts)

#### Introduction to Data Binding and Component Inputs
[Causeway](https://causeway.soe.ucsc.edu/#/reference/-comp-data/1?od=1)
[Stackblitz](https://stackblitz.com/edit/causeway-data-sample-2-1-rev-pxvbcc?file=src%2Fapp%2Fthank-you-page%2Fthank-you-page.component.html,src%2Fapp%2Fthank-you-page%2Fmessage-card%2Fmessage-card.component.scss)

#### Emit Output Events and Change Local UI State
[Causeway](https://causeway.soe.ucsc.edu/#/reference/-comp-events/1?od=3)
[Stackblitz](https://stackblitz.com/edit/causeway-projectcard-events-3-1-b1lyl8?file=src%2Fapp%2Fproject-card%2Fproject-card.component.html)

#### External Resources
[Window prompt user input](https://www.w3schools.com/jsref/met_win_prompt.asp)

## Demo
[Github Repo](https://github.com/russellelliott/Tech4Good-Components-Exercise)
[Live Demo](https://longtermgoals-setup-xwuxqp.stackblitz.io/#/page)
[Edit on StackBlitz](https://stackblitz.com/edit/longtermgoals-setup-xwuxqp)
