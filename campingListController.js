({
    doInit: function(component, event, helper) {
        // Create the action
        var action = component.get("c.getItems");
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.items", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    },
        
	handleAddItem : function(component, event, helper) {

            var action = component.get("c.saveItem");
        	action.setParams({
            	"item": item
        	});
        	action.setCallback(this, function(response){
            	var state = response.getState();
            	if (state === "SUCCESS") {
                	var items = component.get("v.items");
                	items.push(response.getReturnValue());
                	component.set("v.items", items);
            	}
        	});
        	$A.enqueueAction(action);

			var newItemRef = component.get("v.newItem");
            console.log("Create item: " + JSON.stringify(newItemRef));
            var theItems = component.get("v.items");
            
            var newItem = JSON.parse(JSON.stringify(newItemRef));
 
        	theItems.push(newItem);
        	component.set("v.items", theItems);
            component.set("v.newItem", { 'sobjectType': 'Camping_Item__c',
                                                                    'Name': '',
                                                                    'Quantity__c': 0,
                                                                    'Price__c': 0,
                                                                    'Packed__c': false });  
    }
})
