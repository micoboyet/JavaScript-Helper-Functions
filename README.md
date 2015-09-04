# Dynamic Confirm Modal

Easy to use Confirm Modal created using JQuery and Bootstrap. Put events in every custom buttons on your web application.

# Requirements
This snippet uses a number of open source projects to work properly:
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [jQuery] - for javascript events
    
# Methods
```sh
 .init(modalSize) - (Optional) Initialize the modal size. 
 .show(modalTitle, modalContent) - Show modal with customize title and content
 .show(modalTitle, modalContent, customButtons) - Adds custom button events
 .hide() - Hide modal
```

# Usage
Include the dependencies
```sh
<link rel="stylesheet" type="text/css" href="bootstrap.css"/>
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="confirm.js"></script>
```
Show Modal
```sh
Confirm.show('Message', 'Do you want to delete the selected row?');
```
Hide Modal
```sh
Confirm.hide();
```
Custom Button Events 
```sh
Confirm.show('Message', 'Please login to continue browsing.', {
    'Okay' :  {
        'primary' : true, //If you want to put color on your primary button
        'callback' : function() { //If you want to put callback function
            //Put your callback codes here
            Confirm.hide(); //Hides the Modal after executing the callback
        }
    }
});
```

Multiple Button Events
```sh
Confirm.show('Message', 'Do you want to save the changes?', {
    'Save' :  {
        'primary' : true, 
        'callback' : function() { 
            //Put your callback codes here
            Confirm.hide();
        },
    },
    'Cancel' : {
        'primary' : false,
        'callback': function() {
              Confirm.hide();
        }
    }
});
```

### Version
1.0.0

### Todos

 - Thinking on how to make it more reusable
 
License
----

MIT

**Downloads**
- [Twitter Bootstrap](http://twitter.github.com/bootstrap/)
- [jQuery](http://jquery.com)
- [Dilinger](http://dillinger.io)
