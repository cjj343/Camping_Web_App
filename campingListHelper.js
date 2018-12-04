({
	validate : function() {
		var validItem = component.find('campingform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
	},
    
    createItem : function(){
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
