# UX-For-Daltonic

This README will be the documentation files for the developed project.
In this project you'll find 7 components with the option to change the colors to adapt it for different kind of daltonism. 

This project was developed by Maria Castro (@iconicmajo on GitHub) as a project to get hers degree as a Computer Science Engineer.

## Buttons
With this component you can use diffenent types of buttons, with the basic props like hovered or clicked. For use this component you must call it like a regular component
Whenever you want to use it, call it like this:
```
<button className="button-primary">
                <a href="https://www.google.com">
                  Google it
                </a>
              </button>
```
             

The buttons has differents colors, to use it call it like this, using button- followed by the type you'll be using. If this is not declared when it's called the component will use their default value. 
```
<button className="button-primary">Primary</button>
<button className="button-secondary">Secondary</button>
```


## Drop-downs
With this component you can use diffenent types of dropdowns. For use this component you must impor it in the file you'll be using it.
```
import DropDown from "../assets/Dropdowns";
```

Whenever you want to use it, call it like this:
```
<DropDown
              color={'success'}
              options={this.state.options}
              tittle={'Dropdown'}
              />
```
             

The dropdowns has the color, options and title props, if these are not declared when it's called the component will use their default values. 
With the options props you must use an array.
```
              color={'success'}
              options={this.state.options}
              tittle={'Dropdown'}
       
```

## Alerts
With this component you can use diffenent types of alerts. For use this component you must impor it in the file you'll be using it.
```
import Alert from "../assets/Alerts";
```

Whenever you want to use it, call it like this:
```
<Alert 
              color={'primary'}
              text={'Youre almost Done'} 
              />
```

The alerts has the color and text props, if these are not declared when it's called the component will use their default values.
```
              color={'primary'}
              text={'Youre almost Done'} 
```


## Badges
With this component you can use diffenent types of badges. For use this component you must import it in the file you'll be using it.
```
import Badge from "../assets/Badges";
```

Whenever you want to use it, call it like this:
```
 <Badge 
              color={'primary'}
              text={'1'} 
              />
```

The badge has the colot and text props, if these are not declared when it's called the component will use their default values.
```
              color={'primary'}
              text={'1'} 
```

## Modals
For use this component you must impor it in the file you'll be using it.
```
import Modals from "../assets/Modals";
```

Whenever you want to use it, call it like this:
```
<Modals
                  display={true}
                  />
```

The modal has the display prop, if this is not declared when it's called, the component will use their default value in false. 
With this componnet is required to enter the file to modify other props like closed, text and buttons.
```
                  display={true}
```


## Progress Bars
With this component you can use diffenent types of progress bars. For use this component you must impor it in the file you'll be using it.
```
import ProgressBar from "../assets/ProgessBar";
```

Whenever you want to use it, call it like this:
```
<ProgressBar 
              color={'warning'}
              text={'Youre almost Done'} 
              percentaje={'50'} />
```

The progress bar has the color, text and percentaje props, if these are not declared when it's called the component will use their default values.
```
              color={'warning'}
              text={'Youre almost Done'} 
              percentaje={'50'} 
```


## Inputs
Whenever you want to use it, call it like this:
```
 <input class="form-control"
               placeholder="Ingrese su nombre"
               type="text"/>

```

