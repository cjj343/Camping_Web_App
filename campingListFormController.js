({
	clickCreateItem : function(component, event, helper) {
        if(helper.validate(component)){
               helper.createItem(component); 
        }   
    }
})
