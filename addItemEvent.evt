({
	validate : function() {
		var validItem = component.find('campingform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
	},
    
    createItem : function(){
        var newItem = component.get("v.newItem");
        var addEvent = component.getEvent("addItem");
        addEvent.setParams({"item" : newItem});
        addEvent.fire();
        component.set("v.newItem",
                     { 'sobjectType': 'Camping_Item__c',
                    'Name': '',
                    'Packed__c': false,
                    'Price__c': 0,
                    'Quantity__c': 0});
    }
})
