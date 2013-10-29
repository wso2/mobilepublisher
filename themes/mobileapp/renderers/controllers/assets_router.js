/*
 Description: Renders the assets.jag view
 Filename:assets.js
 Created Date: 29/7/2013
 */

var render = function (theme, data, meta, require) {
	
	
	var lifecycleColors = {"Demote": "btn-blue", "Submit": "btn-blue", "Publish": "btn-blue", "Unpublish": "btn-blue", "Deprecate": "btn-danger", "Approve": "btn-blue", "Reject": "btn-danger"};
	
	if(data.artifacts){
		
		for(var i = 0; i < data.artifacts.length; i++){	
		var lifecycleAvailableActionsButtons = new Array();
		for(var j = 0; j < data.artifacts[i].lifecycleAvailableActions.length; j++){	
			var name = data.artifacts[i].lifecycleAvailableActions[j];
			
			for(var k = 0; k < data.roles.length; k++){
			//	print(data.roles[k]);
				if(data.roles[k] == "admin"){
					if(name == "Approve"){
						lifecycleAvailableActionsButtons.push({name: name, style: lifecycleColors[name]});
					}
					if(name == "Reject"){
						lifecycleAvailableActionsButtons.push({name: name, style: lifecycleColors[name]});
					}
					if(name == "Publish"){
						lifecycleAvailableActionsButtons.push({name: name, style: lifecycleColors[name]});
					}
					if(name == "Submit"){
						lifecycleAvailableActionsButtons.push({name: name, style: lifecycleColors[name]});
					}
					if(name == "Unpublish"){
						lifecycleAvailableActionsButtons.push({name: name, style: lifecycleColors[name]});
					}
					
					continue;
				}
				
				if(data.roles[k] == "Internal/reviewer"){
					if(name == "Approve"){
						lifecycleAvailableActionsButtons.push({name: name, style: lifecycleColors[name]});
					}
					if(name == "Reject"){
						lifecycleAvailableActionsButtons.push({name: name, style: lifecycleColors[name]});
					}
				}
				
				if(data.roles[k] == "Internal/publisher"){					
					if(name == "Publish"){
						lifecycleAvailableActionsButtons.push({name: name, style: lifecycleColors[name]});
					}
					if(name == "Submit"){
						lifecycleAvailableActionsButtons.push({name: name, style: lifecycleColors[name]});
					}
					if(name == "Unpublish"){
						lifecycleAvailableActionsButtons.push({name: name, style: lifecycleColors[name]});
					}
				}
				
				
				
			}
					
						
		}
		
		data.artifacts[i].lifecycleAvailableActions = lifecycleAvailableActionsButtons;
		}
		 
		
		
	}
	
	
	//print(data);

    var listPartial = 'list-assets';
//Determine what view to show
    switch (data.op) {
        case 'list':
            listPartial = 'list-assets';
            break;
        case 'statistics':
            listPartial = 'statistics';
            break;
        default:
            break;
    }
    //var addAssetUrl = "/publisher/asset/" + data.meta.shortName +"";
    theme('single-col-fluid', {
        title: data.title,
        header: [
            {
                partial: 'header',
                context: data
            }
        ],
        ribbon: [
            {
                partial: 'ribbon',
                context: require('/helpers/breadcrumb.js').generateBreadcrumbJson(data)
            }
        ],
        leftnav: [
            {
                partial: 'left-nav',
                context: require('/helpers/left-nav.js').generateLeftNavJson(data, listPartial)
            }
        ],
        listassets: [
            {
                partial: listPartial,
                context: data
            }
        ]
    });
};
